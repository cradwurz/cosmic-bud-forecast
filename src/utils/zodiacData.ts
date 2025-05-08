
export interface ZodiacSign {
  name: string;
  dates: string;
  symbol: string;
  element: string;
  planet: string;
  traits: string[];
}

export const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries",
    dates: "March 21 - April 19",
    symbol: "♈",
    element: "Fire",
    planet: "Mars",
    traits: ["Courageous", "Determined", "Passionate", "Leader"]
  },
  {
    name: "Taurus",
    dates: "April 20 - May 20",
    symbol: "♉",
    element: "Earth",
    planet: "Venus",
    traits: ["Reliable", "Patient", "Practical", "Devoted"]
  },
  {
    name: "Gemini",
    dates: "May 21 - June 20",
    symbol: "♊",
    element: "Air",
    planet: "Mercury",
    traits: ["Adaptable", "Curious", "Affectionate", "Quick-witted"]
  },
  {
    name: "Cancer",
    dates: "June 21 - July 22",
    symbol: "♋",
    element: "Water",
    planet: "Moon",
    traits: ["Tenacious", "Highly imaginative", "Loyal", "Sympathetic"]
  },
  {
    name: "Leo",
    dates: "July 23 - August 22",
    symbol: "♌",
    element: "Fire",
    planet: "Sun",
    traits: ["Creative", "Passionate", "Generous", "Warm-hearted"]
  },
  {
    name: "Virgo",
    dates: "August 23 - September 22",
    symbol: "♍",
    element: "Earth",
    planet: "Mercury",
    traits: ["Analytical", "Practical", "Hardworking", "Kind"]
  },
  {
    name: "Libra",
    dates: "September 23 - October 22",
    symbol: "♎",
    element: "Air",
    planet: "Venus",
    traits: ["Diplomatic", "Fair-minded", "Social", "Cooperative"]
  },
  {
    name: "Scorpio",
    dates: "October 23 - November 21",
    symbol: "♏",
    element: "Water",
    planet: "Pluto",
    traits: ["Passionate", "Stubborn", "Resourceful", "Brave"]
  },
  {
    name: "Sagittarius",
    dates: "November 22 - December 21",
    symbol: "♐",
    element: "Fire",
    planet: "Jupiter",
    traits: ["Generous", "Idealistic", "Great sense of humor", "Adventurous"]
  },
  {
    name: "Capricorn",
    dates: "December 22 - January 19",
    symbol: "♑",
    element: "Earth",
    planet: "Saturn",
    traits: ["Responsible", "Disciplined", "Self-control", "Good managers"]
  },
  {
    name: "Aquarius",
    dates: "January 20 - February 18",
    symbol: "♒",
    element: "Air",
    planet: "Uranus",
    traits: ["Progressive", "Original", "Independent", "Humanitarian"]
  },
  {
    name: "Pisces",
    dates: "February 19 - March 20",
    symbol: "♓",
    element: "Water",
    planet: "Neptune",
    traits: ["Compassionate", "Artistic", "Intuitive", "Gentle"]
  }
];

export const getElementColor = (element: string): string => {
  switch (element) {
    case "Fire":
      return "bg-red-500/20 text-red-400 border-red-500/30";
    case "Earth":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Air":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "Water":
      return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
    default:
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
  }
};
