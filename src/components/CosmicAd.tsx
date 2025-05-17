
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Megaphone } from 'lucide-react';
import { useAds } from '@/context/AdContext';

interface CosmicAdProps {
  position?: 'top' | 'middle' | 'bottom';
}

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

const CosmicAd = ({ position = 'middle' }: CosmicAdProps) => {
  const [currentAd, setCurrentAd] = useState(adContent[0]);
  const [isVisible, setIsVisible] = useState(true);
  const { adsEnabled, adFrequency } = useAds();
  
  // Early return if ads are disabled
  if (!adsEnabled) return null;
  
  // Frequency-based visibility (for low frequency, skip some ad positions)
  if (adFrequency === 'low' && position !== 'middle') return null;

  // Rotate through different ads
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * adContent.length);
      setCurrentAd(adContent[randomIndex]);
    }, adFrequency === 'high' ? 15000 : 30000); // Change ad more frequently on high frequency
    
    return () => clearInterval(interval);
  }, [adFrequency]);

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
            <Megaphone className="h-4 w-4 text-primary" />
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Cosmic Offering</span>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-xs">{currentAd.badge}</Badge>
        </div>
        
        <div className="mt-2">
          <h4 className="text-sm font-semibold">{currentAd.title}</h4>
          <p className="text-xs text-muted-foreground mt-1">{currentAd.description}</p>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <button 
            className="text-xs text-primary hover:underline"
            onClick={() => window.open('#', '_blank')}
          >
            Learn more
          </button>
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
