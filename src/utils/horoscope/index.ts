
import { DailyHoroscope } from './types';
import { fetchHoroscopeFromWeb } from './webProvider';
import { getFallbackHoroscope } from './fallbackProvider';

export * from './types';
export * from './strainRecommendations';

// Main function to get horoscope data, with web as primary and local data as fallback
export const getHoroscope = async (sign: string): Promise<DailyHoroscope> => {
  try {
    // Try to fetch from web first
    return await fetchHoroscopeFromWeb(sign);
  } catch (error) {
    console.error("Error fetching horoscope from web, using fallback data:", error);
    
    // Fallback to local data
    return await getFallbackHoroscope(sign);
  }
};
