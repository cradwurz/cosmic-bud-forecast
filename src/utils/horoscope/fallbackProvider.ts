
import { horoscopeData } from './mockData';
import { HoroscopeReading, DailyHoroscope } from './types';

export const getHoroscopeReading = async (sign: string): Promise<HoroscopeReading> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return the horoscope data directly
  return horoscopeData[sign.toLowerCase()] || {
    daily: "The stars are currently aligning. Check back later for your reading.",
    weekly: "This week's cosmic energies are still forming. Your reading will be available soon.",
    monthly: "The monthly forecast is being charted by our cosmic guides.",
    compatibility: [],
    elements: {
      fire: 0,
      earth: 0,
      air: 0,
      water: 0
    },
    luckyNumbers: [],
    luckyColors: [],
    strengths: [],
    weaknesses: [],
    cannabisStrains: []
  };
};

export const getFallbackHoroscope = async (sign: string): Promise<DailyHoroscope> => {
  const horoscopeData = await getHoroscopeReading(sign);
  
  return {
    general: horoscopeData.daily,
    love: "The cosmic alignment suggests new connections may form. Open your heart to unexpected possibilities.",
    career: "Focus on collaborative projects. Your unique perspective will be valued by colleagues.",
    wellness: "Balance physical activity with mental relaxation. The stars favor holistic approaches now.",
    compatibility: horoscopeData.compatibility.join(", "),
    luckyNumber: horoscopeData.luckyNumbers[Math.floor(Math.random() * horoscopeData.luckyNumbers.length)]
  };
};
