
import { DailyHoroscope } from './types';

export const fetchHoroscopeFromWeb = async (sign: string): Promise<DailyHoroscope> => {
  try {
    // This is a simulation of fetching from horoscope.com
    // In a production environment, you would use fetch or axios to get the actual data
    console.log(`Fetching horoscope for ${sign} from horoscope.com`);
    
    // Simulate network delay - reduced from 1500ms to 500ms for better performance
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Generate sign-specific horoscope content
    // Each sign gets different content based on its characteristics
    const signLowerCase = sign.toLowerCase();
    
    // Use the current date to create "daily" changing content
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    
    // Use the sign name and day of year to create pseudo-random but consistent daily content
    const randomSeed = (signLowerCase.charCodeAt(0) + dayOfYear) % 10;
    
    // Create sign-specific content templates
    const generalTemplates = [
      `The celestial energy favors your ${signTraits(signLowerCase).trait1} nature today. Embrace opportunities that align with your ${signTraits(signLowerCase).element} element.`,
      `Your ruling planet ${signTraits(signLowerCase).planet} brings focus to your ${signTraits(signLowerCase).trait2} qualities. Use them wisely in your interactions.`,
      `Today's cosmic alignment enhances your natural ${signTraits(signLowerCase).trait3}. Those around you will be drawn to your ${signTraits(signLowerCase).element} energy.`,
      `A powerful day to showcase your ${signTraits(signLowerCase).trait1}. Your ${signTraits(signLowerCase).planet} influence shines through your actions.`,
      `The stars highlight your innate ${signTraits(signLowerCase).trait2}. Your ${signTraits(signLowerCase).element} nature helps you navigate today's challenges.`,
      `Your ${signTraits(signLowerCase).trait3} is amplified today. Let your ${signTraits(signLowerCase).planet}-ruled energy guide your decisions.`,
      `A day when your ${signTraits(signLowerCase).element} element is in harmony with cosmic forces. Your ${signTraits(signLowerCase).trait1} serves you well.`,
      `The universe acknowledges your ${signTraits(signLowerCase).trait2} today. Your connection to ${signTraits(signLowerCase).planet} brings insight.`,
      `Your ${signTraits(signLowerCase).trait3} is your strength today. The ${signTraits(signLowerCase).element} energy around you supports your endeavors.`,
      `Today highlights the best of your ${signTraits(signLowerCase).trait1} qualities. Your ${signTraits(signLowerCase).planet} influence is especially potent.`
    ];

    const loveTemplates = [
      `In matters of the heart, your ${signTraits(signLowerCase).element} nature creates meaningful connections. Open yourself to vulnerability.`,
      `Romance benefits from your ${signTraits(signLowerCase).trait1} approach today. Express your feelings with confidence.`,
      `Your love life is influenced by ${signTraits(signLowerCase).planet} energy today. Communicate your needs with clarity and compassion.`,
      `Relationships thrive when you embrace your authentic ${signTraits(signLowerCase).trait2} self. Be present with loved ones.`,
      `Your ${signTraits(signLowerCase).element} qualities attract admirers today. Stay true to your emotional needs.`,
      `Love connections deepen through your ${signTraits(signLowerCase).trait3} nature. Trust your intuition in romantic matters.`,
      `Your heart is guided by ${signTraits(signLowerCase).planet} wisdom today. Listen to what it tells you about your relationships.`,
      `Romance flourishes when you channel your ${signTraits(signLowerCase).trait1} energy. Be open to unexpected connections.`,
      `Your ${signTraits(signLowerCase).element} sensitivity enhances your relationships today. Share your feelings honestly.`,
      `Love prospects improve as you embrace your ${signTraits(signLowerCase).trait2} qualities. Your authenticity is attractive.`
    ];

    const careerTemplates = [
      `Professional opportunities align with your ${signTraits(signLowerCase).trait3} strengths. Take initiative in workplace projects.`,
      `Your career benefits from your ${signTraits(signLowerCase).element} approach today. Colleagues value your unique perspective.`,
      `${signTraits(signLowerCase).planet} influences your work life positively. Your ${signTraits(signLowerCase).trait1} qualities shine in professional settings.`,
      `Workplace success comes through your natural ${signTraits(signLowerCase).trait2}. Trust your abilities when facing challenges.`,
      `Your ${signTraits(signLowerCase).element} energy helps you navigate career decisions. Focus on long-term goals.`,
      `Professional growth is linked to your ${signTraits(signLowerCase).trait3} today. Share your ideas with confidence.`,
      `Your work is enhanced by ${signTraits(signLowerCase).planet} influences. Your methodical approach yields results.`,
      `Career advancement comes through your ${signTraits(signLowerCase).trait1} abilities. Step into leadership opportunities.`,
      `Your ${signTraits(signLowerCase).element} perspective brings value to your team. Don't hesitate to voice your insights.`,
      `Work projects benefit from your ${signTraits(signLowerCase).trait2} today. Your contributions are noticed by those who matter.`
    ];

    const wellnessTemplates = [
      `Focus on ${wellnessActivity(signLowerCase)} to maintain balance. Your ${signTraits(signLowerCase).element} energy needs healthy expression.`,
      `Your wellbeing is connected to your ${signTraits(signLowerCase).planet} energy. Find time for ${wellnessActivity(signLowerCase)} today.`,
      `Nurture your ${signTraits(signLowerCase).trait1} side through ${wellnessActivity(signLowerCase)}. Your body and mind will thank you.`,
      `Health improves when you honor your ${signTraits(signLowerCase).element} nature. ${wellnessActivity(signLowerCase)} brings balance.`,
      `Your wellness journey benefits from ${wellnessActivity(signLowerCase)} today. Honor your body's natural rhythms.`,
      `Self-care that engages your ${signTraits(signLowerCase).trait2} nature is especially effective. Try ${wellnessActivity(signLowerCase)}.`,
      `${signTraits(signLowerCase).planet} energy supports healing through ${wellnessActivity(signLowerCase)}. Make time for yourself.`,
      `Your ${signTraits(signLowerCase).element} constitution needs ${wellnessActivity(signLowerCase)} today. Listen to your body's wisdom.`,
      `Balance comes through activities that honor your ${signTraits(signLowerCase).trait3}. ${wellnessActivity(signLowerCase)} is particularly beneficial.`,
      `Wellness practices aligned with your ${signTraits(signLowerCase).element} nature bring harmony. Focus on ${wellnessActivity(signLowerCase)}.`
    ];
    
    // Get compatible signs based on elements
    const compatibleSigns = getCompatibleSigns(signLowerCase);
    
    return {
      general: generalTemplates[randomSeed],
      love: loveTemplates[randomSeed],
      career: careerTemplates[randomSeed],
      wellness: wellnessTemplates[randomSeed],
      compatibility: compatibleSigns,
      luckyNumber: ((signLowerCase.charCodeAt(0) + dayOfYear) % 100) + 1 // 1-100
    };
  } catch (error) {
    console.error("Error fetching from horoscope.com:", error);
    throw error;
  }
};

// Helper function to get sign traits
function signTraits(sign: string): { trait1: string; trait2: string; trait3: string; element: string; planet: string } {
  const traits = {
    aries: {
      trait1: "courageous", trait2: "energetic", trait3: "determined", element: "Fire", planet: "Mars"
    },
    taurus: {
      trait1: "reliable", trait2: "patient", trait3: "practical", element: "Earth", planet: "Venus"
    },
    gemini: {
      trait1: "adaptable", trait2: "curious", trait3: "affectionate", element: "Air", planet: "Mercury"
    },
    cancer: {
      trait1: "intuitive", trait2: "emotional", trait3: "protective", element: "Water", planet: "Moon"
    },
    leo: {
      trait1: "creative", trait2: "passionate", trait3: "generous", element: "Fire", planet: "Sun"
    },
    virgo: {
      trait1: "analytical", trait2: "practical", trait3: "meticulous", element: "Earth", planet: "Mercury"
    },
    libra: {
      trait1: "diplomatic", trait2: "fair-minded", trait3: "social", element: "Air", planet: "Venus"
    },
    scorpio: {
      trait1: "resourceful", trait2: "passionate", trait3: "determined", element: "Water", planet: "Pluto"
    },
    sagittarius: {
      trait1: "optimistic", trait2: "freedom-loving", trait3: "philosophical", element: "Fire", planet: "Jupiter"
    },
    capricorn: {
      trait1: "responsible", trait2: "disciplined", trait3: "self-controlled", element: "Earth", planet: "Saturn"
    },
    aquarius: {
      trait1: "progressive", trait2: "original", trait3: "independent", element: "Air", planet: "Uranus"
    },
    pisces: {
      trait1: "compassionate", trait2: "intuitive", trait3: "artistic", element: "Water", planet: "Neptune"
    }
  };
  
  return traits[sign] || traits.aries; // Default to Aries if sign not found
}

// Helper function for wellness activities based on signs
function wellnessActivity(sign: string): string {
  const elementActivities = {
    fire: ["high-intensity workouts", "outdoor adventures", "competitive sports", "dance classes", "martial arts"],
    earth: ["gardening", "hiking", "yoga", "cooking nutritious meals", "forest bathing"],
    air: ["breathwork", "intellectual pursuits", "social activities", "mindfulness meditation", "journaling"],
    water: ["swimming", "emotional release practices", "sound baths", "gentle flowing movement", "aromatherapy"]
  };
  
  const element = signTraits(sign).element.toLowerCase();
  const activities = elementActivities[element] || elementActivities.fire;
  
  // Use sign and day to select a consistent but changing activity
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const activityIndex = (sign.charCodeAt(0) + dayOfYear) % activities.length;
  
  return activities[activityIndex];
}

// Helper function to get compatible signs
function getCompatibleSigns(sign: string): string {
  const compatibilities = {
    aries: "Leo, Sagittarius, Gemini",
    taurus: "Virgo, Capricorn, Cancer",
    gemini: "Libra, Aquarius, Aries",
    cancer: "Scorpio, Pisces, Taurus",
    leo: "Aries, Sagittarius, Gemini",
    virgo: "Taurus, Capricorn, Cancer",
    libra: "Gemini, Aquarius, Leo",
    scorpio: "Cancer, Pisces, Virgo",
    sagittarius: "Aries, Leo, Libra",
    capricorn: "Taurus, Virgo, Scorpio",
    aquarius: "Gemini, Libra, Sagittarius",
    pisces: "Cancer, Scorpio, Capricorn"
  };
  
  return compatibilities[sign] || "Leo, Sagittarius, Gemini";
}

