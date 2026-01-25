'use client'

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { createUseStyles } from 'react-jss';
import { theme } from '../../theme';
import { usePageStyles } from '../../styles/pageStyles';

const useFbGroupPageStyles = createUseStyles({
  section: {
    padding: '3rem 1rem',
    backgroundColor: theme.colors.softBg,
    minHeight: 'calc(100vh - 4rem)',
    '@media (min-width: 768px)': {
      padding: '5rem 1.5rem',
    },
  },
  container: {
    maxWidth: '896px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: '0.5rem',
    padding: '2rem',
    boxShadow: theme.shadows.md,
    border: `2px solid ${theme.colors.medicalBlue}`,
    marginBottom: '2rem',
    '@media (min-width: 768px)': {
      padding: '2.5rem',
    },
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.colors.medicalBlue,
    marginBottom: '1rem',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
  subtitle: {
    fontSize: '1.125rem',
    color: theme.colors.gray[600],
    marginBottom: '2rem',
    textAlign: 'center',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: theme.colors.medicalBlue,
    color: theme.colors.white,
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: theme.colors.blue[700],
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    border: `1px solid ${theme.colors.gray[300]}`,
    borderRadius: '0.375rem',
    fontSize: '1rem',
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.medicalBlue,
      boxShadow: `0 0 0 3px ${theme.colors.blue[100]}`,
    },
  },
  submitButton: {
    backgroundColor: theme.colors.medicalBlue,
    color: theme.colors.white,
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    border: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: theme.colors.blue[700],
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
  error: {
    color: '#dc2626',
    fontSize: '0.875rem',
    marginTop: '0.5rem',
  },
  mapContainer: {
    width: '100%',
    height: '500px',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    marginTop: '2rem',
    border: `1px solid ${theme.colors.gray[300]}`,
  },
  mapTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.colors.gray[900],
    marginBottom: '1rem',
    textAlign: 'center',
  },
});

const PASSWORD_STORAGE_KEY = 'fb_group_authenticated';

export default function FbGroupPage() {
  const classes = usePageStyles();
  const fbGroupClasses = useFbGroupPageStyles();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Mark component as mounted to prevent hydration mismatch
    setIsMounted(true);
    
    // Check if user is already authenticated
    if (typeof window !== 'undefined') {
      const authenticated = localStorage.getItem(PASSWORD_STORAGE_KEY) === 'true';
      setIsAuthenticated(authenticated);
      setIsLoading(false);
    }
  }, []);

  // Get user's current location
  useEffect(() => {
    if (!isAuthenticated || typeof window === 'undefined') return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log('Geolocation error:', error.message);
          // Fallback to default location if geolocation fails
          setUserLocation({ lat: 20, lng: 0 });
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      // Browser doesn't support geolocation
      setUserLocation({ lat: 20, lng: 0 });
    }
  }, [isAuthenticated]);

  // Fetch users with coordinates
  useEffect(() => {
    if (!isAuthenticated) return;

    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data.users || []);
        }
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    }

    fetchUsers();
  }, [isAuthenticated]);

  // Initialize Google Map and add markers
  useEffect(() => {
    if (!isAuthenticated || !mapLoaded || !mapRef.current) return;
    if (typeof window === 'undefined' || !window.google || !window.google.maps) return;
    
    // Wait for user location if available, otherwise use default
    const initialCenter = userLocation || { lat: 20, lng: 0 };
    const initialZoom = userLocation ? 8 : 2;

    const map = new window.google.maps.Map(mapRef.current, {
      zoom: initialZoom,
      center: initialCenter,
      mapTypeId: 'roadmap',
      styles: [
        {
          featureType: 'all',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#c9c9c9' }],
        },
      ],
    });

    mapInstanceRef.current = map;

    // Add a marker for user's current location if available
    if (userLocation) {
      new window.google.maps.Marker({
        position: userLocation,
        map: map,
        title: 'Your location',
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: theme.colors.medicalBlue,
          fillOpacity: 1,
          strokeColor: theme.colors.white,
          strokeWeight: 2,
        },
      });
    }

    // Add markers for all users
    const bounds = new window.google.maps.LatLngBounds();
    if (userLocation) {
      bounds.extend(userLocation);
    }

    users.forEach((user) => {
      if (user.latitude && user.longitude) {
        const position = {
          lat: parseFloat(user.latitude),
          lng: parseFloat(user.longitude),
        };
        bounds.extend(position);

        const marker = new window.google.maps.Marker({
          position: position,
          map: map,
          title: user.name || 'Family',
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 0.5rem;">
              <strong>${user.name || 'Family'}</strong><br/>
              ${user.address || ''}
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      }
    });

    // Fit map to show all markers
    if (users.length > 0 || userLocation) {
      map.fitBounds(bounds);
    }
  }, [isAuthenticated, mapLoaded, userLocation, users]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.valid) {
        setIsAuthenticated(true);
        if (typeof window !== 'undefined') {
          localStorage.setItem(PASSWORD_STORAGE_KEY, 'true');
        }
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
    } catch (err) {
      setError('Failed to verify password. Please try again.');
      setPassword('');
    }
  };

  if (!isMounted || isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <div className={classes.container}>
        <main className={classes.main}>
          <section className={fbGroupClasses.section}>
            <div className={fbGroupClasses.container}>
              <div className={fbGroupClasses.card}>
                <h1 className={fbGroupClasses.title}>Member Access</h1>
                <p className={fbGroupClasses.subtitle}>
                  Please enter the password to access the Facebook group page.
                </p>
                <form onSubmit={handleSubmit} className={fbGroupClasses.form}>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className={fbGroupClasses.input}
                    required
                  />
                  {error && <div className={fbGroupClasses.error}>{error}</div>}
                  <button type="submit" className={fbGroupClasses.submitButton}>
                    Access Page
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <section className={fbGroupClasses.section}>
          <div className={fbGroupClasses.container}>
            <div className={fbGroupClasses.card}>
              <h1 className={fbGroupClasses.title}>Welcome to Our Community</h1>
              <p className={fbGroupClasses.subtitle}>
                You are already part of our Facebook support group. Connect with other families and access community resources.
              </p>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <a
                  href="https://www.facebook.com/groups/tubulinopathy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={fbGroupClasses.button}
                >
                  Open Facebook Group →
                </a>
              </div>

              {users.length > 0 && (
                <>
                  <h2 className={fbGroupClasses.mapTitle}>
                    Our Global Community ({users.length} families on the map)
                  </h2>
                  <div ref={mapRef} className={fbGroupClasses.mapContainer} />
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      {/* Google Maps script */}
      {isAuthenticated && (
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || ''}`}
          strategy="afterInteractive"
          onLoad={() => {
            setMapLoaded(true);
          }}
        />
      )}
    </div>
  );
}
