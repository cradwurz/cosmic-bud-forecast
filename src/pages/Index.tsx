
import { useState } from 'react';
import ZodiacSelector from '@/components/ZodiacSelector';
import HoroscopeDisplay from '@/components/HoroscopeDisplay';
import CosmicElements from '@/components/CosmicElements';
import CannabisRecommendations from '@/components/CannabisRecommendations';
import CosmicAd from '@/components/CosmicAd';
import { zodiacSigns } from '@/utils/zodiacData';
import CosmicBackground from '@/components/CosmicBackground';
import { Star, Stars, Moon, Settings } from 'lucide-react';
import { useAds } from '@/context/AdContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedSign, setSelectedSign] = useState(zodiacSigns[0].name);
  const { 
    adsEnabled, 
    toggleAds, 
    adFrequency, 
    setAdFrequency,
    adProvider,
    setAdProvider,
    adSettings,
    updateAdSettings
  } = useAds();
  const [publisherId, setPublisherId] = useState(adSettings.publisherId || '');

  const handleAdSettingsSave = () => {
    updateAdSettings({ publisherId });
  };

  return (
    <div className="min-h-screen bg-background constellation">
      <CosmicBackground sign={selectedSign} />
      <div className="container max-w-4xl mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-10">
          <div className="flex justify-center items-center mb-2">
            <Stars className="h-8 w-8 text-secondary animate-twinkle mr-2" />
            <Star className="h-10 w-10 text-primary animate-twinkle" />
            <Moon className="h-7 w-7 text-secondary animate-twinkle ml-2" />
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-4">
                  <Settings className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Ad Settings</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="ads-enabled">Enable Ads</Label>
                    <Switch 
                      id="ads-enabled" 
                      checked={adsEnabled} 
                      onCheckedChange={toggleAds} 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Ad Frequency</Label>
                    <RadioGroup 
                      value={adFrequency} 
                      onValueChange={(val) => setAdFrequency(val as 'low' | 'medium' | 'high')}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="low" />
                        <Label htmlFor="low">Low</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium">Medium</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="high" />
                        <Label htmlFor="high">High</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Ad Provider</Label>
                    <RadioGroup 
                      value={adProvider} 
                      onValueChange={(val) => setAdProvider(val as 'google' | 'custom')}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="google" id="google" />
                        <Label htmlFor="google">Google AdSense</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="custom" id="custom" />
                        <Label htmlFor="custom">Custom Cosmic Ads</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  {adProvider === 'google' && (
                    <div className="space-y-2">
                      <Label htmlFor="publisher-id">Publisher ID</Label>
                      <Input 
                        id="publisher-id" 
                        value={publisherId} 
                        onChange={(e) => setPublisherId(e.target.value)}
                        placeholder="ca-pub-XXXXXXXXXXXXXXXX"
                      />
                      <Button onClick={handleAdSettingsSave} className="w-full mt-2">
                        Save Settings
                      </Button>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
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

        <CosmicAd position="top" adSlot="1234567890" />

        <div className="mb-8">
          <CosmicElements sign={selectedSign} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="col-span-1 md:col-span-2">
            <HoroscopeDisplay sign={selectedSign} />
          </div>
          <div className="col-span-1 md:col-span-2">
            <CosmicAd position="middle" adSlot="9876543210" />
          </div>
          <div className="col-span-1 md:col-span-2">
            <CannabisRecommendations sign={selectedSign} />
          </div>
        </div>
        
        <CosmicAd position="bottom" adSlot="5678901234" />
        
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
