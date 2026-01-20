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
    try {
      if (!adSlot) {
        return; // Don't initialize if ad slot not set
      }

      // Wait for adsbygoogle to be available
      const initAd = () => {
        if (window.adsbygoogle && adRef.current) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (err) {
            console.error('AdSense push error:', err);
          }
        } else {
          // Retry if not ready
          setTimeout(initAd, 100);
        }
      };

      initAd();
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [adSlot, publisherId]);

  if (!adSlot) {
    return null;
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
