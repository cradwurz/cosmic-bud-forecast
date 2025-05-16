export interface HoroscopeData {
  date: string;
  sign: string;
  general: string;
  love: string;
  career: string;
  wellness: string;
  compatibility: string;
  luckyNumber: number;
}

const backupHoroscopeData: { [key: string]: HoroscopeData } = {
  "Aries": {
    "date": "2024-08-03",
    "sign": "Aries",
    "general": "Today is a good day to focus on your goals, Aries. Your energy is high, and you can accomplish a lot. Just be sure to stay focused and avoid distractions.",
    "love": "If you're in a relationship, today is a good day to connect with your partner. If you're single, you may meet someone new.",
    "career": "Your career is on the rise, Aries. Keep working hard and you'll see results.",
    "wellness": "Take some time for yourself today, Aries. You deserve it.",
    "compatibility": "Leo",
    "luckyNumber": 9
  },
  "Taurus": {
    "date": "2024-08-03",
    "sign": "Taurus",
    "general": "Today is a good day to relax and enjoy yourself, Taurus. You've been working hard, and you deserve a break.",
    "love": "If you're in a relationship, today is a good day to spend time with your partner. If you're single, you may want to stay in tonight.",
    "career": "Your career is stable, Taurus. Keep doing what you're doing and you'll be fine.",
    "wellness": "Eat healthy and get some exercise today, Taurus.",
    "compatibility": "Virgo",
    "luckyNumber": 6
  },
  "Gemini": {
    "date": "2024-08-03",
    "sign": "Gemini",
    "general": "Today is a good day to socialize, Gemini. Get out and meet new people.",
    "love": "If you're in a relationship, today is a good day to communicate with your partner. If you're single, you may meet someone new at a party.",
    "career": "Your career is going well, Gemini. Keep networking and you'll make new connections.",
    "wellness": "Get some fresh air today, Gemini.",
    "compatibility": "Libra",
    "luckyNumber": 5
  },
  "Cancer": {
    "date": "2024-08-03",
    "sign": "Cancer",
    "general": "Today is a good day to stay home and relax, Cancer. You need some time to recharge.",
    "love": "If you're in a relationship, today is a good day to cuddle with your partner. If you're single, you may want to stay in and watch a movie.",
    "career": "Your career is stressful, Cancer. Take some time off if you can.",
    "wellness": "Meditate today, Cancer.",
    "compatibility": "Scorpio",
    "luckyNumber": 2
  },
  "Leo": {
    "date": "2024-08-03",
    "sign": "Leo",
    "general": "Today is a good day to be creative, Leo. Express yourself through art, music, or writing.",
    "love": "If you're in a relationship, today is a good day to be romantic with your partner. If you're single, you may attract someone new with your charm.",
    "career": "Your career is exciting, Leo. Take on new challenges and show off your skills.",
    "wellness": "Do something fun today, Leo.",
    "compatibility": "Sagittarius",
    "luckyNumber": 1
  },
  "Virgo": {
    "date": "2024-08-03",
    "sign": "Virgo",
    "general": "Today is a good day to be productive, Virgo. Get organized and tackle your to-do list.",
    "love": "If you're in a relationship, today is a good day to be helpful to your partner. If you're single, you may find love while running errands.",
    "career": "Your career is demanding, Virgo. Pay attention to detail and stay focused.",
    "wellness": "Eat healthy today, Virgo.",
    "compatibility": "Capricorn",
    "luckyNumber": 3
  },
  "Libra": {
    "date": "2024-08-03",
    "sign": "Libra",
    "general": "Today is a good day to be social, Libra. Attend a party or go out with friends.",
    "love": "If you're in a relationship, today is a good day to be affectionate with your partner. If you're single, you may meet someone new at a social event.",
    "career": "Your career is improving, Libra. Network and make new connections.",
    "wellness": "Get some exercise today, Libra.",
    "compatibility": "Aquarius",
    "luckyNumber": 7
  },
  "Scorpio": {
    "date": "2024-08-03",
    "sign": "Scorpio",
    "general": "Today is a good day to be introspective, Scorpio. Reflect on your goals and values.",
    "love": "If you're in a relationship, today is a good day to be intimate with your partner. If you're single, you may want to stay in and read a book.",
    "career": "Your career is challenging, Scorpio. Stay focused and don't give up.",
    "wellness": "Meditate today, Scorpio.",
    "compatibility": "Pisces",
    "luckyNumber": 4
  },
  "Sagittarius": {
    "date": "2024-08-03",
    "sign": "Sagittarius",
    "general": "Today is a good day to be adventurous, Sagittarius. Try something new and exciting.",
    "love": "If you're in a relationship, today is a good day to go on an adventure with your partner. If you're single, you may meet someone new while traveling.",
    "career": "Your career is promising, Sagittarius. Take risks and pursue your dreams.",
    "wellness": "Get some fresh air today, Sagittarius.",
    "compatibility": "Aries",
    "luckyNumber": 8
  },
  "Capricorn": {
    "date": "2024-08-03",
    "sign": "Capricorn",
    "general": "Today is a good day to be responsible, Capricorn. Take care of your obligations and responsibilities.",
    "love": "If you're in a relationship, today is a good day to be supportive of your partner. If you're single, you may find love at work.",
    "career": "Your career is demanding, Capricorn. Work hard and you'll achieve your goals.",
    "wellness": "Eat healthy today, Capricorn.",
    "compatibility": "Taurus",
    "luckyNumber": 10
  },
  "Aquarius": {
    "date": "2024-08-03",
    "sign": "Aquarius",
    "general": "Today is a good day to be innovative, Aquarius. Think outside the box and come up with new ideas.",
    "love": "If you're in a relationship, today is a good day to be open-minded with your partner. If you're single, you may meet someone new online.",
    "career": "Your career is evolving, Aquarius. Embrace change and adapt to new situations.",
    "wellness": "Get some exercise today, Aquarius.",
    "compatibility": "Gemini",
    "luckyNumber": 11
  },
  "Pisces": {
    "date": "2024-08-03",
    "sign": "Pisces",
    "general": "Today is a good day to be compassionate, Pisces. Help others and make a difference.",
    "love": "If you're in a relationship, today is a good day to be empathetic with your partner. If you're single, you may find love while volunteering.",
    "career": "Your career is fulfilling, Pisces. Use your talents to help others.",
    "wellness": "Meditate today, Pisces.",
    "compatibility": "Cancer",
    "luckyNumber": 12
  }
};

const strainRecommendations: { [key: string]: string[] } = {
  "Aries": ["Sour Diesel", "OG Kush", "Jack Herer", "Blue Dream", "Green Crack"],
  "Taurus": ["Bubba Kush", "Girl Scout Cookies", "Granddaddy Purple", "Northern Lights", "LSD"],
  "Gemini": ["Trainwreck", "Chemdawg", "Durban Poison", "Strawberry Cough", "Chocolope"],
  "Cancer": ["Blueberry", "Lavender", "Cannatonic", "ACDC", "Harlequin"],
  "Leo": ["Super Lemon Haze", "Acapulco Gold", "Maui Wowie", "Pineapple Express", "Mimosa"],
  "Virgo": ["Harlequin", "Canna-Tsu", "CBDiesel", "Sour Tsunami", "Charlotte's Web"],
  "Libra": ["Wedding Cake", "Gelato", "Limonene strains", "Myrcene strains", "Linalool strains"],
  "Scorpio": ["White Widow", "AK-47", "Death Star", "Blackberry Kush", "Space Queen"],
  "Sagittarius": ["Acapulco Gold", "Amnesia Haze", "Durban Poison", "Jack Herer", "Sour Diesel"],
  "Capricorn": ["Northern Lights", "LA Confidential", "Blue Cheese", "Master Kush", "Critical Kush"],
  "Aquarius": ["Amnesia Haze", "Jack Herer", "Strawberry Cough", "Super Silver Haze", "Electric Lemon G"],
  "Pisces": ["Grandaddy Purple", "Blue Dream", "Jillybean", "Romulan", "Purple Kush"]
};

export const getHoroscope = async (sign: string): Promise<HoroscopeData> => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real application, you would fetch data from an API here
    // const response = await fetch(`https://api.example.com/horoscope/${sign}`);
    // const data = await response.json();
    
    // For now, we'll return a canned response
    return backupHoroscopeData[sign];
  } catch (error) {
    console.error("Failed to fetch horoscope:", error);
    return backupHoroscopeData[sign];
  }
};

export const getStrainRecommendations = (sign: string): string[] => {
  return strainRecommendations[sign] || [];
};

export const getCombinedStrainRecommendations = (sunSign: string, moonSign: string, risingSign: string): string[] => {
  // Get strain recommendations for each sign
  const sunStrains = getStrainRecommendations(sunSign);
  const moonStrains = getStrainRecommendations(moonSign);
  const risingStrains = getStrainRecommendations(risingSign);

  // Combine all strains
  const allStrains = [...sunStrains, ...moonStrains, ...risingStrains];
  
  // Count occurrences of each strain
  const strainCounts = allStrains.reduce((acc: Record<string, number>, strain) => {
    acc[strain] = (acc[strain] || 0) + 1;
    return acc;
  }, {});
  
  // Sort strains by how many times they appear (prioritizing strains that appear in multiple signs)
  return Object.keys(strainCounts)
    .sort((a, b) => strainCounts[b] - strainCounts[a])
    .slice(0, 5); // Return top 5 strains
};
