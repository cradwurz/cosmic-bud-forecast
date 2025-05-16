
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { toast } from "@/components/ui/sonner";

type AdProvider = 'google' | 'custom';

interface AdContextType {
  adsEnabled: boolean;
  toggleAds: () => void;
  adFrequency: 'low' | 'medium' | 'high';
  setAdFrequency: (frequency: 'low' | 'medium' | 'high') => void;
  adProvider: AdProvider;
  setAdProvider: (provider: AdProvider) => void;
  adSettings: {
    publisherId?: string;
  };
  updateAdSettings: (settings: Partial<AdContextType['adSettings']>) => void;
}

const AdContext = createContext<AdContextType | undefined>(undefined);

export function useAds() {
  const context = useContext(AdContext);
  if (context === undefined) {
    throw new Error('useAds must be used within an AdProvider');
  }
  return context;
}

interface AdProviderProps {
  children: ReactNode;
}

export function AdProvider({ children }: AdProviderProps) {
  const [adsEnabled, setAdsEnabled] = useState(true);
  const [adFrequency, setAdFrequency] = useState<'low' | 'medium' | 'high'>('medium');
  const [adProvider, setAdProvider] = useState<AdProvider>('custom');
  const [adSettings, setAdSettings] = useState({
    publisherId: 'ca-pub-XXXXXXXXXXXXXXXX'
  });

  const toggleAds = () => {
    const newState = !adsEnabled;
    setAdsEnabled(newState);
    toast(newState ? "Ads enabled" : "Ads disabled");
  };

  const updateAdSettings = (settings: Partial<AdContextType['adSettings']>) => {
    setAdSettings(prev => ({
      ...prev,
      ...settings
    }));
  };

  useEffect(() => {
    // Load ad settings from localStorage if available
    const savedSettings = localStorage.getItem('cosmic-ad-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        if (parsed.adsEnabled !== undefined) setAdsEnabled(parsed.adsEnabled);
        if (parsed.adFrequency) setAdFrequency(parsed.adFrequency);
        if (parsed.adProvider) setAdProvider(parsed.adProvider);
        if (parsed.adSettings) setAdSettings(parsed.adSettings);
      } catch (e) {
        console.error('Error parsing saved ad settings:', e);
      }
    }
  }, []);

  // Save settings to localStorage when they change
  useEffect(() => {
    const settings = {
      adsEnabled,
      adFrequency,
      adProvider,
      adSettings
    };
    localStorage.setItem('cosmic-ad-settings', JSON.stringify(settings));
  }, [adsEnabled, adFrequency, adProvider, adSettings]);

  const value = {
    adsEnabled,
    toggleAds,
    adFrequency,
    setAdFrequency,
    adProvider,
    setAdProvider,
    adSettings,
    updateAdSettings
  };

  return <AdContext.Provider value={value}>{children}</AdContext.Provider>;
}
