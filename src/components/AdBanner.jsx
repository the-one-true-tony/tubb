'use client'

import { useEffect, useRef } from 'react';
import { useAdBannerStyles } from '../styles/adBannerStyles';
import clsx from 'clsx';

const AdBanner = ({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidthResponsive = true,
  className = '',
  style = {},
  publisherId = 'ca-pub-1038698166930039'
}) => {
  const adRef = useRef(null);
  const classes = useAdBannerStyles();

  useEffect(() => {
    if (!adSlot || adSlot.startsWith('YOUR_')) {
      return; // Don't initialize if ad slot not set or is placeholder
    }

    let retryCount = 0;
    const maxRetries = 50; // 5 seconds max wait time (50 * 100ms)
    let timeoutId = null;

    const initAd = () => {
      try {
        // Check if AdSense script is loaded and element exists
        if (window.adsbygoogle && adRef.current) {
          try {
            // Initialize the ad
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (err) {
            console.error('AdSense push error:', err);
          }
        } else if (retryCount < maxRetries) {
          // Retry if not ready, but limit retries
          retryCount++;
          timeoutId = setTimeout(initAd, 100);
        } else {
          console.warn('AdSense script not loaded after maximum retries');
        }
      } catch (err) {
        console.error('AdSense initialization error:', err);
      }
    };

    // Start initialization
    initAd();

    // Cleanup function to clear timeout if component unmounts
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [adSlot, publisherId]);

  if (!adSlot || adSlot.startsWith('YOUR_')) {
    return null; // Don't render placeholder ad slots
  }

  const containerClass = className.includes('bg-gray-50') 
    ? classes.containerGray 
    : className.includes('bg-white') 
    ? classes.containerWhite 
    : classes.container;

  return (
    <div className={clsx(containerClass, className)} style={style}>
      <ins
        ref={adRef}
        className={clsx('adsbygoogle', classes.ad)}
        data-ad-client={publisherId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
};

export default AdBanner;
