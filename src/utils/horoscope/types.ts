
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

export interface DailyHoroscope {
  general: string;
  love: string;
  career: string;
  wellness: string;
  compatibility: string;
  luckyNumber: number;
}
