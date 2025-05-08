
import { useState } from 'react';
import ZodiacSelector from '@/components/ZodiacSelector';
import HoroscopeDisplay from '@/components/HoroscopeDisplay';
import CosmicElements from '@/components/CosmicElements';
import { zodiacSigns } from '@/utils/zodiacData';

const Index = () => {
  const [selectedSign, setSelectedSign] = useState(zodiacSigns[0].name);

  return (
    <div className="min-h-screen bg-background constellation">
      <div className="container max-w-4xl mx-auto px-4 py-8 relative z-10">
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

        <div className="mb-8">
          <CosmicElements sign={selectedSign} />
        </div>

        <div>
          <HoroscopeDisplay sign={selectedSign} />
        </div>
        
        <footer className="mt-16 text-center text-xs text-muted-foreground">
          <p>The stars guide us, but we chart our own destiny.</p>
          <p className="mt-1">© {new Date().getFullYear()} Cosmic Guidance</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
