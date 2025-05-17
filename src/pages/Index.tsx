
import { useState, useEffect } from 'react';
import ZodiacSelector from '@/components/ZodiacSelector';
import HoroscopeDisplay from '@/components/HoroscopeDisplay';
import CosmicElements from '@/components/CosmicElements';
import CannabisRecommendations from '@/components/CannabisRecommendations';
import CosmicAd from '@/components/CosmicAd';
import { zodiacSigns } from '@/utils/zodiacData';
import { useAds } from '@/context/AdContext';

const Index = () => {
  const [selectedSign, setSelectedSign] = useState(zodiacSigns[0].name);
  const { isMobileDevice } = useAds();
  const [isIOS, setIsIOS] = useState(false);
  
  useEffect(() => {
    // Check if running on iOS
    const checkIsIOS = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      return /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    };
    setIsIOS(checkIsIOS());
  }, []);

  return (
    <div className={`min-h-screen bg-background constellation ${isIOS ? 'ios-status-bar' : ''}`}>
      <div className={`container max-w-4xl mx-auto px-4 py-8 relative z-10 ${isIOS ? 'ios-bottom-padding' : ''}`}>
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-4 animate-float">
            Cosmic Guidance
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Discover what the stars have aligned for you today. Select your zodiac sign to reveal your personal cosmic forecast.
          </p>
        </header>

        <div className="flex flex-col items-center mb-8">
          <ZodiacSelector 
            selectedSign={selectedSign}
            onSelectSign={setSelectedSign}
          />
        </div>

        <CosmicAd position="top" />

        <div className="mb-8">
          <CosmicElements sign={selectedSign} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="col-span-1 md:col-span-2 ios-scroll">
            <HoroscopeDisplay sign={selectedSign} />
          </div>
          <div className="col-span-1 md:col-span-2">
            <CosmicAd position="middle" />
          </div>
          <div className="col-span-1 md:col-span-2 ios-scroll">
            <CannabisRecommendations sign={selectedSign} />
          </div>
        </div>
        
        {(!isMobileDevice || isIOS) && <CosmicAd position="bottom" />}
        
        <footer className={`mt-16 text-center text-xs text-muted-foreground ${isIOS ? 'mb-6' : ''}`}>
          <p>The stars guide us, but we chart our own destiny.</p>
          <p className="mt-1">© {new Date().getFullYear()} Cosmic Guidance</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
