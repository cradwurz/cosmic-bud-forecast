
import { horoscopeData } from './mockData';

export const getCombinedStrainRecommendations = (sunSign: string, moonSign: string, risingSign: string): string[] => {
  try {
    // Get strain recommendations for each sign
    const sunSignData = horoscopeData[sunSign.toLowerCase()];
    const moonSignData = horoscopeData[moonSign.toLowerCase()];
    const risingSignData = horoscopeData[risingSign.toLowerCase()];
    
    // Combine recommendations, with sun sign having most weight
    const allStrains = [
      ...(sunSignData?.cannabisStrains || []),
      ...(moonSignData?.cannabisStrains || []).slice(0, 2),
      ...(risingSignData?.cannabisStrains || []).slice(0, 1)
    ];
    
    // Remove duplicates and limit to 6 strains
    return [...new Set(allStrains)].slice(0, 6);
  } catch (error) {
    console.error("Error getting strain recommendations:", error);
    return ["Blue Dream", "OG Kush", "Girl Scout Cookies"];
  }
};
