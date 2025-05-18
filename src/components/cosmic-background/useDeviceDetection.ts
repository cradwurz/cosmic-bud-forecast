
import { useState, useEffect } from 'react';

export function useDeviceDetection() {
  const [isAndroid, setIsAndroid] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isAndroidDevice = /android/i.test(userAgent);
    setIsAndroid(isAndroidDevice);
    
    // Detect low performance devices
    const isLowEnd = 
      isAndroidDevice || 
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    
    setIsLowPerformance(isLowEnd);
  }, []);

  return { isAndroid, isLowPerformance };
}
