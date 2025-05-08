
export interface HoroscopeReading {
  general: string;
  love: string;
  career: string;
  wellness: string;
  luckyNumber: number;
  compatibility: string;
}

// Mock data for horoscopes
const horoscopeReadings: Record<string, HoroscopeReading> = {
  "Aries": {
    general: "Your natural leadership skills shine today, Aries. Take initiative on projects that have been waiting for direction. Your confidence will inspire others to follow your lead.",
    love: "Passion is in the air. Single Aries might encounter someone who matches their energy. Those in relationships will benefit from planning an adventurous activity together.",
    career: "A bold move at work could lead to recognition. Don't be afraid to present your ideas, even if they seem unconventional.",
    wellness: "Physical activity is crucial today. A high-energy workout will help channel your abundant energy in a positive direction.",
    luckyNumber: 9,
    compatibility: "Leo"
  },
  "Taurus": {
    general: "Stability and security are highlighted today. Focus on building a solid foundation for future endeavors. Your practical approach will yield long-term benefits.",
    love: "Sensuality is heightened. Express your affection through physical touch and quality time. Enjoying a delicious meal with your partner could strengthen your bond.",
    career: "Financial matters require attention. A careful review of your resources might reveal an opportunity for growth or investment.",
    wellness: "Grounding exercises like walking barefoot outdoors or gardening will help maintain your emotional equilibrium.",
    luckyNumber: 6,
    compatibility: "Virgo"
  },
  "Gemini": {
    general: "Your communication skills are especially sharp today. Use this gift to resolve any lingering misunderstandings. Networking opportunities abound.",
    love: "Intellectual connection is key to your romantic satisfaction today. Engage in stimulating conversations with your partner or potential love interest.",
    career: "A collaboration opportunity may arise. Your ability to see multiple perspectives makes you a valuable team member.",
    wellness: "Mental exercises like puzzles or learning something new will keep your mind active and satisfied.",
    luckyNumber: 5,
    compatibility: "Libra"
  },
  "Cancer": {
    general: "Your intuition is particularly strong today. Trust your gut feelings about people and situations. Home and family matters take precedence.",
    love: "Emotional security is highlighted. Open up about your feelings to deepen connections. Creating a comfortable environment for intimate conversations will benefit your relationships.",
    career: "Nurturing projects and teammates will bring satisfaction. Your empathetic approach helps solve workplace challenges.",
    wellness: "Self-care rituals that soothe your soul are essential today. Consider a relaxing bath or preparing your favorite comfort food.",
    luckyNumber: 2,
    compatibility: "Scorpio"
  },
  "Leo": {
    general: "Your charisma is irresistible today. Use it to inspire and uplift those around you. Creative projects will benefit from your unique perspective.",
    love: "Romance flourishes when you allow your authentic self to shine. Playful interactions and heartfelt compliments will strengthen bonds.",
    career: "Leadership opportunities may arise. Your ability to motivate others makes you an ideal candidate for taking charge of important projects.",
    wellness: "Activities that allow self-expression will nurture your soul. Consider dance, theater, or other creative outlets.",
    luckyNumber: 1,
    compatibility: "Sagittarius"
  },
  "Virgo": {
    general: "Details matter today. Your analytical skills help solve complex problems. Organization and planning set you up for success.",
    love: "Acts of service demonstrate your affection effectively. Small, thoughtful gestures will be appreciated more than grand displays.",
    career: "Your meticulous approach brings recognition. Don't hesitate to point out improvements that could benefit the team.",
    wellness: "Digestive health needs attention. Mindful eating and proper nutrition will help maintain your energy levels.",
    luckyNumber: 4,
    compatibility: "Taurus"
  },
  "Libra": {
    general: "Harmony and balance are your themes today. Your diplomatic skills help resolve conflicts around you. Aesthetic pursuits bring joy.",
    love: "Partnership is highlighted. Equal give and take strengthens romantic bonds. Consider the needs and desires of your significant other.",
    career: "Collaborative projects thrive under your influence. Your ability to see all sides of a situation makes you an excellent mediator.",
    wellness: "Creating beauty in your environment contributes to your overall wellbeing. Refresh your space with pleasing colors or objects.",
    luckyNumber: 7,
    compatibility: "Gemini"
  },
  "Scorpio": {
    general: "Transformation is occurring beneath the surface. Embrace change rather than resisting it. Your perceptiveness reveals hidden truths.",
    love: "Intensity characterizes your romantic interactions. Deep, meaningful connections satisfy your need for authenticity in relationships.",
    career: "Research and investigation yield valuable insights. Your ability to uncover information gives you an advantage in negotiations or problem-solving.",
    wellness: "Emotional processing is essential. Journaling or therapy helps release pent-up feelings and promotes healing.",
    luckyNumber: 8,
    compatibility: "Cancer"
  },
  "Sagittarius": {
    general: "Expansion and growth define your day. Learning opportunities abound, and your optimistic outlook attracts positive experiences.",
    love: "Freedom within relationships is important. Sharing adventures and philosophical discussions strengthens romantic connections.",
    career: "Higher education or travel may impact your professional path. Keep an open mind about opportunities that broaden your horizons.",
    wellness: "Physical activity that involves exploration, like hiking or trying a new sport, satisfies both body and spirit.",
    luckyNumber: 3,
    compatibility: "Aries"
  },
  "Capricorn": {
    general: "Long-term planning pays off today. Your disciplined approach to goals brings tangible results. Authority figures may offer support.",
    love: "Commitment and reliability form the foundation of your relationships. Demonstrating consistency builds trust with romantic partners.",
    career: "Professional advancement is possible. Your hard work and dedication catch the attention of those in positions of influence.",
    wellness: "Skeletal health deserves attention. Weight-bearing exercises and proper posture contribute to your physical wellbeing.",
    luckyNumber: 10,
    compatibility: "Virgo"
  },
  "Aquarius": {
    general: "Innovation and originality mark your day. Your unique perspective offers solutions others might miss. Community involvement brings fulfillment.",
    love: "Intellectual connection precedes emotional bonding. Sharing ideas and ideals creates strong foundations for romantic relationships.",
    career: "Technological advancements or humanitarian projects benefit from your input. Don't hesitate to suggest unconventional approaches.",
    wellness: "Circulation and respiratory health respond well to attention. Breathing exercises and proper hydration support overall vitality.",
    luckyNumber: 11,
    compatibility: "Libra"
  },
  "Pisces": {
    general: "Spiritual insights guide your actions today. Your compassion creates healing opportunities for yourself and others. Creative inspiration flows freely.",
    love: "Romantic idealism colors your interactions. Setting healthy boundaries ensures your giving nature isn't exploited in relationships.",
    career: "Artistic or helping professions highlight your natural talents. Trust your intuition about workplace dynamics and opportunities.",
    wellness: "Foot care and immune system support benefit from attention. Adequate rest prevents emotional and physical depletion.",
    luckyNumber: 12,
    compatibility: "Scorpio"
  }
};

export const getHoroscope = (sign: string): HoroscopeReading => {
  return horoscopeReadings[sign] || {
    general: "No reading available for today. Check back tomorrow for your cosmic guidance.",
    love: "The stars are aligning. Be patient and trust the universe's timing.",
    career: "Focus on your goals and let your natural talents guide you forward.",
    wellness: "Take time for self-care and listen to what your body needs today.",
    luckyNumber: 0,
    compatibility: "Unknown"
  };
};
