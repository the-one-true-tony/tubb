import { useEffect, useRef } from 'react';

const AdBanner = ({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidthResponsive = true,
  className = '',
  style = {},
  publisherId = 'ca-pub-1038698166930039'
}) => {
  const adRef = useRef(null);

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

  return (
    <div className={`ad-container flex justify-center my-4 ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', minHeight: '100px' }}
        data-ad-client={publisherId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
};

export default AdBanner;
