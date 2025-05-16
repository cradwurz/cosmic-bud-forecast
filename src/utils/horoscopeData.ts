export interface HoroscopeReading {
  general: string;
  love: string;
  career: string;
  wellness: string;
  luckyNumber: number;
  compatibility: string;
  cannabisStrains: string[];
}

export interface SignCombination {
  sunSign: string;
  moonSign: string;
  risingSign: string;
}

// Mock data for horoscopes - used as fallback if API fails
const horoscopeReadings: Record<string, HoroscopeReading> = {
  "Aries": {
    general: "Your natural leadership skills shine today, Aries. Take initiative on projects that have been waiting for direction. Your confidence will inspire others to follow your lead.",
    love: "Passion is in the air. Single Aries might encounter someone who matches their energy. Those in relationships will benefit from planning an adventurous activity together.",
    career: "A bold move at work could lead to recognition. Don't be afraid to present your ideas, even if they seem unconventional.",
    wellness: "Physical activity is crucial today. A high-energy workout will help channel your abundant energy in a positive direction.",
    luckyNumber: 9,
    compatibility: "Leo",
    cannabisStrains: ["Jack Herer", "Durban Poison", "Green Crack", "Super Silver Haze"]
  },
  "Taurus": {
    general: "Stability and security are highlighted today. Focus on building a solid foundation for future endeavors. Your practical approach will yield long-term benefits.",
    love: "Sensuality is heightened. Express your affection through physical touch and quality time. Enjoying a delicious meal with your partner could strengthen your bond.",
    career: "Financial matters require attention. A careful review of your resources might reveal an opportunity for growth or investment.",
    wellness: "Grounding exercises like walking barefoot outdoors or gardening will help maintain your emotional equilibrium.",
    luckyNumber: 6,
    compatibility: "Virgo",
    cannabisStrains: ["Granddaddy Purple", "Northern Lights", "Bubba Kush", "Purple Punch"]
  },
  "Gemini": {
    general: "Your communication skills are especially sharp today. Use this gift to resolve any lingering misunderstandings. Networking opportunities abound.",
    love: "Intellectual connection is key to your romantic satisfaction today. Engage in stimulating conversations with your partner or potential love interest.",
    career: "A collaboration opportunity may arise. Your ability to see multiple perspectives makes you a valuable team member.",
    wellness: "Mental exercises like puzzles or learning something new will keep your mind active and satisfied.",
    luckyNumber: 5,
    compatibility: "Libra",
    cannabisStrains: ["Tangie", "Sour Diesel", "Blue Dream", "Clementine"]
  },
  "Cancer": {
    general: "Your intuition is particularly strong today. Trust your gut feelings about people and situations. Home and family matters take precedence.",
    love: "Emotional security is highlighted. Open up about your feelings to deepen connections. Creating a comfortable environment for intimate conversations will benefit your relationships.",
    career: "Nurturing projects and teammates will bring satisfaction. Your empathetic approach helps solve workplace challenges.",
    wellness: "Self-care rituals that soothe your soul are essential today. Consider a relaxing bath or preparing your favorite comfort food.",
    luckyNumber: 2,
    compatibility: "Scorpio",
    cannabisStrains: ["OG Kush", "Wedding Cake", "Blueberry", "Girl Scout Cookies"]
  },
  "Leo": {
    general: "Your charisma is irresistible today. Use it to inspire and uplift those around you. Creative projects will benefit from your unique perspective.",
    love: "Romance flourishes when you allow your authentic self to shine. Playful interactions and heartfelt compliments will strengthen bonds.",
    career: "Leadership opportunities may arise. Your ability to motivate others makes you an ideal candidate for taking charge of important projects.",
    wellness: "Activities that allow self-expression will nurture your soul. Consider dance, theater, or other creative outlets.",
    luckyNumber: 1,
    compatibility: "Sagittarius",
    cannabisStrains: ["Pineapple Express", "Mimosa", "Lemon Haze", "Strawberry Cough"]
  },
  "Virgo": {
    general: "Details matter today. Your analytical skills help solve complex problems. Organization and planning set you up for success.",
    love: "Acts of service demonstrate your affection effectively. Small, thoughtful gestures will be appreciated more than grand displays.",
    career: "Your meticulous approach brings recognition. Don't hesitate to point out improvements that could benefit the team.",
    wellness: "Digestive health needs attention. Mindful eating and proper nutrition will help maintain your energy levels.",
    luckyNumber: 4,
    compatibility: "Taurus",
    cannabisStrains: ["Harlequin", "AC/DC", "Cannatonic", "CBD Critical Mass"]
  },
  "Libra": {
    general: "Harmony and balance are your themes today. Your diplomatic skills help resolve conflicts around you. Aesthetic pursuits bring joy.",
    love: "Partnership is highlighted. Equal give and take strengthens romantic bonds. Consider the needs and desires of your significant other.",
    career: "Collaborative projects thrive under your influence. Your ability to see all sides of a situation makes you an excellent mediator.",
    wellness: "Creating beauty in your environment contributes to your overall wellbeing. Refresh your space with pleasing colors or objects.",
    luckyNumber: 7,
    compatibility: "Gemini",
    cannabisStrains: ["Wedding Cake", "Do-Si-Dos", "Gelato", "Cherry Pie"]
  },
  "Scorpio": {
    general: "Transformation is occurring beneath the surface. Embrace change rather than resisting it. Your perceptiveness reveals hidden truths.",
    love: "Intensity characterizes your romantic interactions. Deep, meaningful connections satisfy your need for authenticity in relationships.",
    career: "Research and investigation yield valuable insights. Your ability to uncover information gives you an advantage in negotiations or problem-solving.",
    wellness: "Emotional processing is essential. Journaling or therapy helps release pent-up feelings and promotes healing.",
    luckyNumber: 8,
    compatibility: "Cancer",
    cannabisStrains: ["GMO Cookies", "Death Star", "Skywalker OG", "Gorilla Glue"]
  },
  "Sagittarius": {
    general: "Expansion and growth define your day. Learning opportunities abound, and your optimistic outlook attracts positive experiences.",
    love: "Freedom within relationships is important. Sharing adventures and philosophical discussions strengthens romantic connections.",
    career: "Higher education or travel may impact your professional path. Keep an open mind about opportunities that broaden your horizons.",
    wellness: "Physical activity that involves exploration, like hiking or trying a new sport, satisfies both body and spirit.",
    luckyNumber: 3,
    compatibility: "Aries",
    cannabisStrains: ["Trainwreck", "Ghost Train Haze", "Alaskan Thunder Fuck", "Amnesia Haze"]
  },
  "Capricorn": {
    general: "Long-term planning pays off today. Your disciplined approach to goals brings tangible results. Authority figures may offer support.",
    love: "Commitment and reliability form the foundation of your relationships. Demonstrating consistency builds trust with romantic partners.",
    career: "Professional advancement is possible. Your hard work and dedication catch the attention of those in positions of influence.",
    wellness: "Skeletal health deserves attention. Weight-bearing exercises and proper posture contribute to your physical wellbeing.",
    luckyNumber: 10,
    compatibility: "Virgo",
    cannabisStrains: ["Critical Mass", "Afghan Kush", "Hindu Kush", "Rock Star"]
  },
  "Aquarius": {
    general: "Innovation and originality mark your day. Your unique perspective offers solutions others might miss. Community involvement brings fulfillment.",
    love: "Intellectual connection precedes emotional bonding. Sharing ideas and ideals creates strong foundations for romantic relationships.",
    career: "Technological advancements or humanitarian projects benefit from your input. Don't hesitate to suggest unconventional approaches.",
    wellness: "Circulation and respiratory health respond well to attention. Breathing exercises and proper hydration support overall vitality.",
    luckyNumber: 11,
    compatibility: "Libra",
    cannabisStrains: ["Space Queen", "AK-47", "Chocolope", "XJ-13"]
  },
  "Pisces": {
    general: "Spiritual insights guide your actions today. Your compassion creates healing opportunities for yourself and others. Creative inspiration flows freely.",
    love: "Romantic idealism colors your interactions. Setting healthy boundaries ensures your giving nature isn't exploited in relationships.",
    career: "Artistic or helping professions highlight your natural talents. Trust your intuition about workplace dynamics and opportunities.",
    wellness: "Foot care and immune system support benefit from attention. Adequate rest prevents emotional and physical depletion.",
    luckyNumber: 12,
    compatibility: "Scorpio",
    cannabisStrains: ["Blue Dream", "Northern Lights", "Purple Kush", "Granddaddy Purple"]
  }
};

// Track when horoscopes were last fetched
let lastFetchDate: string | null = null;
let cachedHoroscopes: Record<string, HoroscopeReading> = { ...horoscopeReadings };

/**
 * Fetches horoscope data from an external API
 * @param sign Zodiac sign to fetch data for
 * @returns Promise with horoscope data
 */
export const fetchDailyHoroscope = async (sign: string): Promise<HoroscopeReading | null> => {
  try {
    // Aztro API is a reputable free horoscope API
    const response = await fetch(`https://aztro.sameerkumar.website/?sign=${sign.toLowerCase()}&day=today`, {
      method: 'POST'
    });
    
    if (!response.ok) {
      console.error('Failed to fetch horoscope data:', response.statusText);
      return null;
    }
    
    const data = await response.json();
    
    // Transform API data to match our interface
    return {
      general: data.description || 'No forecast available for today.',
      love: data.compatibility ? `Today's romantic energy is especially aligned with ${data.compatibility}.` : 'Focus on self-love today.',
      career: data.mood ? `Your professional mood today is "${data.mood}". ${data.color} may bring you luck in meetings.` : 'Focus on your goals today.',
      wellness: data.lucky_time ? `Your energy peaks around ${data.lucky_time}. Plan important activities accordingly.` : 'Listen to your body today.',
      luckyNumber: parseInt(data.lucky_number) || Math.floor(Math.random() * 12) + 1,
      compatibility: data.compatibility || horoscopeReadings[sign].compatibility,
      cannabisStrains: horoscopeReadings[sign].cannabisStrains, // Keep original strains
    };
  } catch (error) {
    console.error('Error fetching horoscope:', error);
    return null;
  }
};

/**
 * Updates all horoscopes from external API
 * Returns true if updated, false if using cached data
 */
export const updateAllHoroscopes = async (): Promise<boolean> => {
  const today = new Date().toISOString().split('T')[0];
  
  // Only fetch once per day
  if (lastFetchDate === today) {
    return false;
  }
  
  let updated = false;
  const signs = Object.keys(horoscopeReadings);
  
  for (const sign of signs) {
    const horoscope = await fetchDailyHoroscope(sign);
    if (horoscope) {
      cachedHoroscopes[sign] = horoscope;
      updated = true;
    }
  }
  
  if (updated) {
    lastFetchDate = today;
  }
  
  return updated;
};

export const getHoroscope = async (sign: string): Promise<HoroscopeReading> => {
  // Try to update horoscopes first
  await updateAllHoroscopes();
  
  // Return cached data (either from API or fallback)
  return cachedHoroscopes[sign] || horoscopeReadings[sign];
};

// Additional cannabis strains based on moon sign
const moonSignStrains: Record<string, string[]> = {
  "Aries": ["Mimosa", "Strawberry Cough", "Bruce Banner"],
  "Taurus": ["Zombie Kush", "Mendo Breath", "Zkittlez"],
  "Gemini": ["Pineapple Express", "Green Crack", "Tangie"],
  "Cancer": ["Blue Dream", "Platinum Cookies", "Skywalker OG"],
  "Leo": ["Sour Diesel", "Lemon Haze", "Jack Herer"],
  "Virgo": ["Harlequin", "Charlotte's Web", "ACDC"],
  "Libra": ["Wedding Cake", "Gelato", "Runtz"],
  "Scorpio": ["Death Star", "GMO", "King Louis XIII"],
  "Sagittarius": ["Ghost Train Haze", "Trainwreck", "Durban Poison"],
  "Capricorn": ["Afghan Kush", "Kosher Kush", "Critical Mass"],
  "Aquarius": ["Space Queen", "AK-47", "White Widow"],
  "Pisces": ["Northern Lights", "Purple Kush", "Tahoe OG"]
};

// Additional cannabis strains based on rising sign
const risingSignStrains: Record<string, string[]> = {
  "Aries": ["Super Lemon Haze", "Chocolope", "XJ-13"],
  "Taurus": ["Pink Kush", "Grape Ape", "Blueberry"],
  "Gemini": ["Cinex", "Jillybean", "Golden Goat"],
  "Cancer": ["OG Kush", "Mochi", "Cookie Monster"],
  "Leo": ["Maui Wowie", "Lemon Skunk", "Island Sweet Skunk"],
  "Virgo": ["Cannatonic", "Remedy", "Sweet and Sour Widow"],
  "Libra": ["Do-Si-Dos", "Cherry Pie", "Sherbet"],
  "Scorpio": ["Gorilla Glue", "Alien OG", "Bubba Kush"],
  "Sagittarius": ["Green Crack", "Jack the Ripper", "Chernobyl"],
  "Capricorn": ["Granddaddy Purple", "Rock Star", "Master Kush"],
  "Aquarius": ["Blue Dream", "Dream Queen", "XJ-13"],
  "Pisces": ["Girl Scout Cookies", "Zkittlez", "Cherry Pie"]
};

export const getCombinedStrainRecommendations = (
  sunSign: string,
  moonSign: string,
  risingSign: string
): string[] => {
  const sunStrains = getHoroscope(sunSign).cannabisStrains || [];
  const moonStrains = moonSignStrains[moonSign] || [];
  const risingStrains = risingSignStrains[risingSign] || [];
  
  // Get unique strains by combining all three sign influences
  const allStrains = [...sunStrains, ...moonStrains, ...risingStrains];
  const uniqueStrains = Array.from(new Set(allStrains));
  
  // Select 4-6 strains (prioritizing ones that appear in multiple signs)
  const strainCount: Record<string, number> = {};
  allStrains.forEach(strain => {
    strainCount[strain] = (strainCount[strain] || 0) + 1;
  });
  
  // Sort strains by frequency (higher first) then select top strains
  return uniqueStrains
    .sort((a, b) => strainCount[b] - strainCount[a])
    .slice(0, 5 + Math.floor(Math.random() * 2)); // 5-6 strains
};
