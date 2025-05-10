
import { createContext, useState, useContext, ReactNode } from 'react';

interface AdContextType {
  adsEnabled: boolean;
  toggleAds: () => void;
  adFrequency: 'low' | 'medium' | 'high';
  setAdFrequency: (frequency: 'low' | 'medium' | 'high') => void;
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

  const toggleAds = () => {
    setAdsEnabled(prev => !prev);
  };

  const value = {
    adsEnabled,
    toggleAds,
    adFrequency,
    setAdFrequency
  };

  return <AdContext.Provider value={value}>{children}</AdContext.Provider>;
}
