'use client'

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import { usePageStyles } from '../../styles/pageStyles';
import { createUseStyles } from 'react-jss';
import { theme } from '../../theme';

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
    padding: '1.5rem',
    borderRadius: '0.75rem',
    border: `2px solid ${theme.colors.medicalBlue}`,
    boxShadow: theme.shadows.md,
    '@media (min-width: 768px)': {
      padding: '2.5rem',
    },
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: theme.colors.medicalBlue,
    marginBottom: '1rem',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
    },
  },
  welcomeText: {
    fontSize: '1rem',
    color: theme.colors.gray[700],
    lineHeight: '1.75',
    marginBottom: '1.5rem',
    textAlign: 'center',
    fontWeight: 500,
    '@media (min-width: 768px)': {
      fontSize: '1.25rem',
      marginBottom: '2rem',
    },
  },
  text: {
    fontSize: '0.875rem',
    color: theme.colors.gray[700],
    lineHeight: '1.75',
    marginBottom: '1rem',
    '@media (min-width: 768px)': {
      fontSize: '1.125rem',
      marginBottom: '1.25rem',
    },
  },
  link: {
    color: theme.colors.white,
    textDecoration: 'none',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 2rem',
    backgroundColor: theme.colors.medicalBlue,
    borderRadius: '0.5rem',
    transition: 'all 0.2s',
    boxShadow: theme.shadows.md,
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.colors.blue[700],
      boxShadow: theme.shadows.lg,
      textDecoration: 'none',
      transform: 'translateY(-2px)',
    },
    '@media (min-width: 768px)': {
      padding: '1.125rem 2.5rem',
      fontSize: '1.125rem',
    },
  },
  backLink: {
    color: theme.colors.medicalBlue,
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.875rem',
    display: 'inline-block',
    marginTop: '1rem',
    '&:hover': {
      textDecoration: 'underline',
    },
    '@media (min-width: 768px)': {
      fontSize: '1rem',
    },
  },
  buttonContainer: {
    marginTop: '2rem',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      marginTop: '2.5rem',
    },
  },
  passwordForm: {
    maxWidth: '400px',
    margin: '2rem auto 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    '@media (min-width: 768px)': {
      maxWidth: '450px',
      margin: '2.5rem auto 0',
      gap: '2rem',
    },
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    display: 'block',
    color: theme.colors.gray[700],
    fontWeight: 600,
    fontSize: '0.875rem',
    '@media (min-width: 768px)': {
      fontSize: '1rem',
    },
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: `1px solid ${theme.colors.gray[300]}`,
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontFamily: theme.fonts.sans.join(', '),
    backgroundColor: theme.colors.white,
    transition: 'all 0.2s',
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.medicalBlue,
      boxShadow: `0 0 0 3px ${theme.colors.blue[100]}`,
    },
    '&::placeholder': {
      color: theme.colors.gray[400],
    },
    '@media (min-width: 768px)': {
      padding: '0.875rem 1.25rem',
      fontSize: '1rem',
    },
  },
  submitButton: {
    width: '100%',
    padding: '0.75rem 1.5rem',
    backgroundColor: theme.colors.medicalBlue,
    color: theme.colors.white,
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: theme.shadows.md,
    fontFamily: theme.fonts.sans.join(', '),
    '&:hover': {
      backgroundColor: theme.colors.blue[700],
      boxShadow: theme.shadows.lg,
    },
    '&:active': {
      transform: 'translateY(1px)',
    },
    '&:disabled': {
      backgroundColor: theme.colors.gray[400],
      cursor: 'not-allowed',
      boxShadow: 'none',
      transform: 'none',
    },
    '@media (min-width: 768px)': {
      padding: '1rem 2rem',
      fontSize: '1.125rem',
    },
  },
  errorMessage: {
    color: '#dc2626',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
    fontWeight: 500,
    display: 'block',
  },
  loadingText: {
    fontSize: '1rem',
    color: theme.colors.gray[600],
    textAlign: 'center',
    padding: '2rem',
  },
  strong: {
    fontWeight: 'bold',
    color: theme.colors.gray[900],
  },
  mapContainer: {
    width: '100%',
    height: '400px',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    marginTop: '2rem',
    boxShadow: theme.shadows.md,
    border: `1px solid ${theme.colors.gray[200]}`,
    '@media (min-width: 768px)': {
      height: '500px',
      marginTop: '2.5rem',
    },
  },
  mapTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: theme.colors.medicalBlue,
    marginTop: '3rem',
    marginBottom: '1rem',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      fontSize: '1.5rem',
      marginTop: '4rem',
      marginBottom: '1.5rem',
    },
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
    const initialZoom = userLocation ? 8 : 2; // Zoom in more if we have user location

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
        title: 'Your Location',
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: theme.colors.medicalBlue,
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
        },
      });
    }

    // Add markers when users data is available
    if (users.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      const markers = [];

      // Include user location in bounds if available
      if (userLocation) {
        bounds.extend(userLocation);
      }

      users.forEach((user) => {
        const position = {
          lat: user.latitude,
          lng: user.longitude,
        };

        const marker = new window.google.maps.Marker({
          position: position,
          map: map,
          title: `${user.name}${user.address ? ` - ${user.address}` : ''}`,
        });

        // Add info window with user details
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 0.5rem;">
              <strong>${user.name}</strong>
              ${user.address ? `<br>${user.address}` : ''}
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        markers.push(marker);
        bounds.extend(position);
      });

      // Fit map to show all markers and user location
      if (markers.length > 0 || userLocation) {
        if (markers.length === 0 && userLocation) {
          // Only user location, center on it
          map.setCenter(userLocation);
          map.setZoom(10);
        } else if (markers.length === 1 && !userLocation) {
          // Only one marker, center on it
          map.setCenter(bounds.getCenter());
          map.setZoom(10);
        } else {
          // Multiple markers or markers + user location, fit bounds
          map.fitBounds(bounds);
          // Add some padding
          const padding = 50;
          map.fitBounds(bounds, padding);
        }
      }
    } else if (userLocation) {
      // No markers but we have user location, center on it
      map.setCenter(userLocation);
      map.setZoom(10);
    }
  }, [isAuthenticated, mapLoaded, users, userLocation]);

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

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted || isLoading) {
    return (
      <div className={`page-container ${classes.container}`}>
        <main className={`page-main ${classes.main}`}>
          <section className={fbGroupClasses.section}>
            <div className={fbGroupClasses.container}>
              <div className={fbGroupClasses.card}>
                <p className={fbGroupClasses.loadingText}>Loading...</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className={`page-container ${classes.container}`}>
        <main className={`page-main ${classes.main}`}>
          <section className={fbGroupClasses.section}>
            <div className={fbGroupClasses.container}>
              <div className={fbGroupClasses.card}>
                <h1 className={fbGroupClasses.title}>Member Access</h1>
                <p className={fbGroupClasses.text} style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                  This page is for members of the Tubulinopathy Facebook Support Group. Please enter the password to access the community resources.
                </p>
                <form onSubmit={handleSubmit} className={fbGroupClasses.passwordForm}>
                  <div className={fbGroupClasses.formGroup}>
                    <label htmlFor="password" className={fbGroupClasses.label}>
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={fbGroupClasses.input}
                      placeholder="Enter password"
                      required
                      autoFocus
                    />
                    {error && <span className={fbGroupClasses.errorMessage}>{error}</span>}
                  </div>
                  <button
                    type="submit"
                    className={fbGroupClasses.submitButton}
                  >
                    Access Page
                  </button>
                </form>
                <p style={{ marginTop: '2rem', textAlign: 'center' }}>
                  <a href="/" className={fbGroupClasses.backLink}>
                    ← Back to home
                  </a>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className={`page-container ${classes.container}`}>
      <main className={`page-main ${classes.main}`}>
        <section className={fbGroupClasses.section}>
          <div className={fbGroupClasses.container}>
            <div className={fbGroupClasses.card}>
              <h1 className={fbGroupClasses.title}>Welcome to Our Community</h1>
              <p className={fbGroupClasses.welcomeText}>
                As a member of the Tubulinopathy Facebook Support Group, you're part of a global community of families, caregivers, and individuals affected by tubulinopathies.
              </p>
              <div className={fbGroupClasses.buttonContainer}>
                <a 
                  href="https://www.facebook.com/groups/1471560199598163" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={fbGroupClasses.link}
                >
                  Open Facebook Group →
                </a>
              </div>
              
              <h2 className={fbGroupClasses.mapTitle}>
                Our Global Community
                {users.length > 0 && (
                  <span style={{ fontSize: '0.875rem', fontWeight: 400, color: theme.colors.gray[600], display: 'block', marginTop: '0.25rem' }}>
                    {users.length} {users.length === 1 ? 'family' : 'families'} on the map
                  </span>
                )}
              </h2>
              <div ref={mapRef} className={fbGroupClasses.mapContainer} />
              
              <p style={{ marginTop: '2rem', textAlign: 'center' }}>
                <a href="/" className={fbGroupClasses.backLink}>
                  ← Back to home
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* Google Maps script */}
      {isAuthenticated && (
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}`}
          strategy="afterInteractive"
          onLoad={() => {
            setMapLoaded(true);
          }}
        />
      )}
    </div>
  );
}
