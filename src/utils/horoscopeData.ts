
export interface HoroscopeReading {
  daily: string;
  weekly: string;
  monthly: string;
  compatibility: string[];
  elements: {
    fire: number;
    earth: number;
    air: number;
    water: number;
  };
  luckyNumbers: number[];
  luckyColors: string[];
  strengths: string[];
  weaknesses: string[];
  cannabisStrains: string[];
}

const horoscopeData: { [key: string]: HoroscopeReading } = {
  aries: {
    daily: "Today is a day for bold moves, Aries. Trust your instincts and go for what you want.",
    weekly: "This week, focus on your personal goals. Your energy is high, so make the most of it.",
    monthly: "This month brings opportunities for growth. Stay open to new experiences.",
    compatibility: ["Leo", "Sagittarius"],
    elements: {
      fire: 80,
      earth: 10,
      air: 5,
      water: 5,
    },
    luckyNumbers: [9, 18, 27, 36, 45, 54],
    luckyColors: ["Red", "Orange"],
    strengths: ["Courageous", "Energetic", "Passionate"],
    weaknesses: ["Impulsive", "Impatient", "Aggressive"],
    cannabisStrains: ["Sour Diesel", "Jack Herer", "Fire OG"],
  },
  taurus: {
    daily: "Take time to appreciate the simple pleasures today, Taurus. Comfort and beauty surround you.",
    weekly: "This week, focus on financial matters. A steady approach will yield the best results.",
    monthly: "This month is about relationships. Nurture your connections with loved ones.",
    compatibility: ["Cancer", "Virgo"],
    elements: {
      fire: 5,
      earth: 70,
      air: 10,
      water: 15,
    },
    luckyNumbers: [6, 15, 24, 33, 42, 51],
    luckyColors: ["Green", "Pink"],
    strengths: ["Reliable", "Patient", "Practical"],
    weaknesses: ["Stubborn", "Possessive", "Materialistic"],
    cannabisStrains: ["Bubba Kush", "Girl Scout Cookies", "Blue Dream"],
  },
  gemini: {
    daily: "Engage in stimulating conversations today, Gemini. Your mind is sharp and curious.",
    weekly: "This week, focus on learning and communication. Share your ideas with others.",
    monthly: "This month brings opportunities for travel. Explore new places and ideas.",
    compatibility: ["Libra", "Aquarius"],
    elements: {
      fire: 10,
      earth: 5,
      air: 75,
      water: 10,
    },
    luckyNumbers: [5, 14, 23, 32, 41, 50],
    luckyColors: ["Yellow", "Light Blue"],
    strengths: ["Adaptable", "Communicative", "Intellectual"],
    weaknesses: ["Inconsistent", "Anxious", "Superficial"],
    cannabisStrains: ["Green Crack", "Sour Tsunami", "Harlequin"],
  },
  cancer: {
    daily: "Nurture your emotional well-being today, Cancer. Spend time with loved ones.",
    weekly: "This week, focus on home and family. Create a cozy and supportive environment.",
    monthly: "This month is about self-care. Prioritize your needs and recharge.",
    compatibility: ["Taurus", "Pisces"],
    elements: {
      fire: 5,
      earth: 15,
      air: 10,
      water: 70,
    },
    luckyNumbers: [2, 11, 20, 29, 38, 47],
    luckyColors: ["Silver", "White"],
    strengths: ["Compassionate", "Intuitive", "Loyal"],
    weaknesses: ["Moody", "Sensitive", "Clingy"],
    cannabisStrains: ["Granddaddy Purple", "Cannatonic", "ACDC"],
  },
  leo: {
    daily: "Express your creativity and confidence today, Leo. Shine bright and inspire others.",
    weekly: "This week, focus on romance and fun. Enjoy playful activities and connections.",
    monthly: "This month brings opportunities for recognition. Showcase your talents.",
    compatibility: ["Aries", "Libra"],
    elements: {
      fire: 75,
      earth: 5,
      air: 10,
      water: 10,
    },
    luckyNumbers: [1, 10, 19, 28, 37, 46],
    luckyColors: ["Gold", "Orange"],
    strengths: ["Generous", "Creative", "Enthusiastic"],
    weaknesses: ["Arrogant", "Stubborn", "Self-centered"],
    cannabisStrains: ["OG Kush", "Chemdawg", "Lemon Haze"],
  },
  virgo: {
    daily: "Focus on details and organization today, Virgo. Your analytical skills are in high demand.",
    weekly: "This week, focus on health and wellness. Implement positive habits.",
    monthly: "This month is about personal growth. Reflect on your goals and make progress.",
    compatibility: ["Taurus", "Scorpio"],
    elements: {
      fire: 5,
      earth: 75,
      air: 10,
      water: 10,
    },
    luckyNumbers: [3, 12, 21, 30, 39, 48],
    luckyColors: ["Green", "Brown"],
    strengths: ["Practical", "Loyal", "Analytical"],
    weaknesses: ["Critical", "Perfectionist", "Pessimistic"],
    cannabisStrains: ["Harlequin", "ACDC", "Cannatonic"],
  },
  libra: {
    daily: "Seek balance and harmony in your interactions today, Libra. Your diplomatic skills are needed.",
    weekly: "This week, focus on relationships and partnerships. Strive for fairness and understanding.",
    monthly: "This month brings opportunities for collaboration. Work with others to achieve common goals.",
    compatibility: ["Gemini", "Sagittarius"],
    elements: {
      fire: 10,
      earth: 10,
      air: 70,
      water: 10,
    },
    luckyNumbers: [4, 13, 22, 31, 40, 49],
    luckyColors: ["Pink", "Light Blue"],
    strengths: ["Diplomatic", "Gracious", "Fair-minded"],
    weaknesses: ["Indecisive", "Avoidant", "Self-pitying"],
    cannabisStrains: ["Blue Dream", "Girl Scout Cookies", "Granddaddy Purple"],
  },
  scorpio: {
    daily: "Embrace your intensity and passion today, Scorpio. Dive deep into your emotions.",
    weekly: "This week, focus on transformation and growth. Let go of what no longer serves you.",
    monthly: "This month is about intimacy and connection. Deepen your relationships.",
    compatibility: ["Virgo", "Capricorn"],
    elements: {
      fire: 15,
      earth: 10,
      air: 5,
      water: 70,
    },
    luckyNumbers: [8, 17, 26, 35, 44, 53],
    luckyColors: ["Black", "Maroon"],
    strengths: ["Resourceful", "Brave", "Passionate"],
    weaknesses: ["Jealous", "Secretive", "Resentful"],
    cannabisStrains: ["Death Star", "Purple Kush", "Northern Lights"],
  },
  sagittarius: {
    daily: "Seek adventure and knowledge today, Sagittarius. Expand your horizons.",
    weekly: "This week, focus on travel and learning. Explore new cultures and ideas.",
    monthly: "This month brings opportunities for growth. Embrace change and new experiences.",
    compatibility: ["Aries", "Libra"],
    elements: {
      fire: 70,
      earth: 10,
      air: 15,
      water: 5,
    },
    luckyNumbers: [7, 16, 25, 34, 43, 52],
    luckyColors: ["Purple", "Dark Blue"],
    strengths: ["Optimistic", "Generous", "Independent"],
    weaknesses: ["Impatient", "Careless", "Overconfident"],
    cannabisStrains: ["Sour Diesel", "Green Crack", "Jack Herer"],
  },
  capricorn: {
    daily: "Focus on your goals and responsibilities today, Capricorn. Your hard work will pay off.",
    weekly: "This week, focus on career and achievement. Set ambitious goals and work towards them.",
    monthly: "This month is about recognition and success. Celebrate your accomplishments.",
    compatibility: ["Scorpio", "Pisces"],
    elements: {
      fire: 5,
      earth: 80,
      air: 5,
      water: 10,
    },
    luckyNumbers: [10, 19, 28, 37, 46, 55],
    luckyColors: ["Brown", "Gray"],
    strengths: ["Responsible", "Disciplined", "Ambitious"],
    weaknesses: ["Pessimistic", "Stubborn", "Judgmental"],
    cannabisStrains: ["Northern Lights", "LA Confidential", "Girl Scout Cookies"],
  },
  aquarius: {
    daily: "Connect with your community and friends today, Aquarius. Share your unique perspective.",
    weekly: "This week, focus on innovation and change. Challenge the status quo.",
    monthly: "This month brings opportunities for collaboration. Work with others to make a difference.",
    compatibility: ["Gemini", "Aries"],
    elements: {
      fire: 10,
      earth: 5,
      air: 70,
      water: 15,
    },
    luckyNumbers: [11, 20, 29, 38, 47, 56],
    luckyColors: ["Blue", "Silver"],
    strengths: ["Progressive", "Original", "Independent"],
    weaknesses: ["Unpredictable", "Detached", "Stubborn"],
    cannabisStrains: ["Jack Herer", "Harlequin", "Sour Tsunami"],
  },
  pisces: {
    daily: "Trust your intuition and creativity today, Pisces. Express your emotions through art.",
    weekly: "This week, focus on spirituality and healing. Connect with your inner self.",
    monthly: "This month is about self-discovery. Explore your dreams and desires.",
    compatibility: ["Cancer", "Capricorn"],
    elements: {
      fire: 5,
      earth: 10,
      air: 15,
      water: 70,
    },
    luckyNumbers: [12, 21, 30, 39, 48, 57],
    luckyColors: ["Sea Green", "Lavender"],
    strengths: ["Compassionate", "Intuitive", "Artistic"],
    weaknesses: ["Escapist", "Sensitive", "Idealistic"],
    cannabisStrains: ["Granddaddy Purple", "Blue Dream", "ACDC"],
  },
};

// Fix the error by modifying the function to properly handle the returned value
export const getHoroscopeReading = async (sign: string): Promise<HoroscopeReading> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return the horoscope data directly, not as a Promise
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

// Add the missing getHoroscope function
export const getHoroscope = async (sign: string) => {
  try {
    const horoscopeData = await getHoroscopeReading(sign);
    
    return {
      general: horoscopeData.daily,
      love: "The cosmic alignment suggests new connections may form. Open your heart to unexpected possibilities.",
      career: "Focus on collaborative projects. Your unique perspective will be valued by colleagues.",
      wellness: "Balance physical activity with mental relaxation. The stars favor holistic approaches now.",
      compatibility: horoscopeData.compatibility.join(", "),
      luckyNumber: horoscopeData.luckyNumbers[Math.floor(Math.random() * horoscopeData.luckyNumbers.length)]
    };
  } catch (error) {
    console.error("Error fetching horoscope:", error);
    throw error;
  }
};

// Add the missing getCombinedStrainRecommendations function
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
