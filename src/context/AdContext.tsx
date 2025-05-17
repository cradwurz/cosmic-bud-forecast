
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AdContextType {
  adsEnabled: boolean;
  toggleAds: () => void;
  adFrequency: 'low' | 'medium' | 'high';
  setAdFrequency: (frequency: 'low' | 'medium' | 'high') => void;
  isMobileDevice: boolean;
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
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobileDevice(isMobile);
      
      // Adjust ad frequency for mobile devices by default
      if (isMobile && adFrequency === 'high') {
        setAdFrequency('medium');
      }
    };
    
    checkIsMobile();
    
    // Add resize listener to detect orientation changes
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const toggleAds = () => {
    setAdsEnabled(prev => !prev);
  };

  const value = {
    adsEnabled,
    toggleAds,
    adFrequency,
    setAdFrequency,
    isMobileDevice
  };

  return <AdContext.Provider value={value}>{children}</AdContext.Provider>;
}
