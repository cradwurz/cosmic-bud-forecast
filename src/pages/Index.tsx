
import { useState } from 'react';
import ZodiacSelector from '@/components/ZodiacSelector';
import HoroscopeDisplay from '@/components/HoroscopeDisplay';
import CosmicElements from '@/components/CosmicElements';
import CannabisRecommendations from '@/components/CannabisRecommendations';
import CosmicAd from '@/components/CosmicAd';
import { zodiacSigns } from '@/utils/zodiacData';
import CosmicBackground from '@/components/CosmicBackground';
import { Star, Stars, Moon } from 'lucide-react';

const Index = () => {
  const [selectedSign, setSelectedSign] = useState(zodiacSigns[0].name);

  return (
    <div className="min-h-screen bg-background constellation">
      <CosmicBackground sign={selectedSign} />
      <div className="container max-w-4xl mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-10">
          <div className="flex justify-center mb-2">
            <Stars className="h-8 w-8 text-secondary animate-twinkle mr-2" />
            <Star className="h-10 w-10 text-primary animate-twinkle" />
            <Moon className="h-7 w-7 text-secondary animate-twinkle ml-2" />
          </div>
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
          <div className="col-span-1 md:col-span-2">
            <HoroscopeDisplay sign={selectedSign} />
          </div>
          <div className="col-span-1 md:col-span-2">
            <CosmicAd position="middle" />
          </div>
          <div className="col-span-1 md:col-span-2">
            <CannabisRecommendations sign={selectedSign} />
          </div>
        </div>
        
        <CosmicAd position="bottom" />
        
        <footer className="mt-16 text-center text-xs text-muted-foreground">
          <div className="flex justify-center mb-2">
            <Star className="h-3 w-3 text-muted-foreground mr-1" />
            <Star className="h-3 w-3 text-muted-foreground mx-1 animate-twinkle" />
            <Star className="h-3 w-3 text-muted-foreground ml-1" />
          </div>
          <p>The stars guide us, but we chart our own destiny.</p>
          <p className="mt-1">© {new Date().getFullYear()} Cosmic Guidance</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
