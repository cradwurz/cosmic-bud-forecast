import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Megaphone, Ad } from 'lucide-react';
import { useAds } from '@/context/AdContext';
import { initializeAds, refreshAds } from '@/utils/adService';

interface CosmicAdProps {
  position?: 'top' | 'middle' | 'bottom';
  adSlot?: string;
}

// Keep the original ad content as fallback
const adContent = [
  {
    title: "Crystal Healing Stones",
    description: "Enhance your cosmic energy with our premium healing crystals.",
    badge: "Featured"
  },
  {
    title: "Astrology Reading Session",
    description: "Discover your celestial path with our expert astrologers.",
    badge: "Popular"
  },
  {
    title: "Zodiac Meditation App",
    description: "Align your mind with the stars using our guided meditations.",
    badge: "New"
  }
];

const CosmicAd = ({ position = 'middle', adSlot = '1234567890' }: CosmicAdProps) => {
  const [currentAd, setCurrentAd] = useState(adContent[0]);
  const [isVisible, setIsVisible] = useState(true);
  const [useGoogleAds, setUseGoogleAds] = useState(false);
  const { adsEnabled, adFrequency } = useAds();
  const adRef = useRef<HTMLDivElement>(null);
  
  // Early return if ads are disabled
  if (!adsEnabled) return null;
  
  // Frequency-based visibility (for low frequency, skip some ad positions)
  if (adFrequency === 'low' && position !== 'middle') return null;

  // Initialize ads
  useEffect(() => {
    initializeAds();
    setUseGoogleAds(true);
    
    // Try to load AdSense ads, if fails, fallback to our custom ads
    setTimeout(() => {
      if (adRef.current && !adRef.current.querySelector('iframe')) {
        console.log('Falling back to custom ads');
        setUseGoogleAds(false);
      }
    }, 3000);
  }, []);

  // Refresh ads when component mounts
  useEffect(() => {
    if (useGoogleAds && adRef.current) {
      refreshAds();
    }
  }, [useGoogleAds]);

  // Rotate through different ads for our fallback
  useEffect(() => {
    if (!useGoogleAds) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * adContent.length);
        setCurrentAd(adContent[randomIndex]);
      }, adFrequency === 'high' ? 15000 : 30000); // Change ad more frequently on high frequency
      
      return () => clearInterval(interval);
    }
  }, [adFrequency, useGoogleAds]);

  const handleClose = () => {
    setIsVisible(false);
    // After 2 minutes, show the ad again
    setTimeout(() => setIsVisible(true), adFrequency === 'low' ? 180000 : 120000);
  };

  if (!isVisible) return null;

  return (
    <Card className={`cosmic-ad cosmic-ad-${position} my-4 overflow-hidden border border-primary/20 bg-card/30 backdrop-blur-sm`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            {useGoogleAds ? (
              <Ad className="h-4 w-4 text-primary" />
            ) : (
              <Megaphone className="h-4 w-4 text-primary" />
            )}
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {useGoogleAds ? 'Sponsored' : 'Cosmic Offering'}
            </span>
          </div>
          {!useGoogleAds && (
            <Badge variant="outline" className="bg-primary/10 text-xs">{currentAd.badge}</Badge>
          )}
        </div>
        
        {useGoogleAds ? (
          <div ref={adRef} className="w-full flex justify-center my-2">
            <ins
              className="adsbygoogle"
              style={{ display: 'block', minHeight: '100px', width: '100%' }}
              data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
              data-ad-slot={adSlot}
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        ) : (
          <div className="mt-2">
            <h4 className="text-sm font-semibold">{currentAd.title}</h4>
            <p className="text-xs text-muted-foreground mt-1">{currentAd.description}</p>
          </div>
        )}
        
        <div className="mt-3 flex justify-between items-center">
          {!useGoogleAds ? (
            <button 
              className="text-xs text-primary hover:underline"
              onClick={() => window.open('#', '_blank')}
            >
              Learn more
            </button>
          ) : (
            <div></div>
          )}
          <button 
            className="text-xs text-muted-foreground hover:text-foreground"
            onClick={handleClose}
          >
            Dismiss
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CosmicAd;
