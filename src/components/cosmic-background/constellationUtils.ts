
import { Constellation } from "./types";

export const zodiacConstellations: Constellation[] = [
  // Aries (Ram)
  {
    sign: "aries",
    stars: [
      { x: 0.12, y: 0.15, size: 2 },
      { x: 0.15, y: 0.18, size: 2.5 },
      { x: 0.18, y: 0.16, size: 2 },
      { x: 0.20, y: 0.12, size: 1.8 },
    ],
    lines: [[0, 1], [1, 2], [2, 3]]
  },
  // Taurus (Bull)
  {
    sign: "taurus",
    stars: [
      { x: 0.30, y: 0.20, size: 3 }, // Aldebaran (eye)
      { x: 0.32, y: 0.18, size: 2 },
      { x: 0.34, y: 0.16, size: 1.8 },
      { x: 0.37, y: 0.14, size: 1.7 },
      { x: 0.27, y: 0.22, size: 2 },
      { x: 0.25, y: 0.25, size: 1.8 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [0, 4], [4, 5]]
  },
  // Gemini (Twins)
  {
    sign: "gemini",
    stars: [
      { x: 0.45, y: 0.14, size: 2.5 }, // Castor
      { x: 0.47, y: 0.17, size: 2.8 }, // Pollux
      { x: 0.49, y: 0.21, size: 1.8 },
      { x: 0.51, y: 0.25, size: 1.7 },
      { x: 0.53, y: 0.30, size: 1.9 },
      { x: 0.48, y: 0.23, size: 1.7 },
      { x: 0.44, y: 0.25, size: 1.8 },
      { x: 0.42, y: 0.29, size: 1.9 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5], [5, 6], [6, 7]]
  },
  // Cancer (Crab)
  {
    sign: "cancer",
    stars: [
      { x: 0.60, y: 0.18, size: 2 },
      { x: 0.62, y: 0.15, size: 1.8 },
      { x: 0.65, y: 0.17, size: 1.7 },
      { x: 0.58, y: 0.21, size: 1.9 },
      { x: 0.56, y: 0.24, size: 1.8 },
    ],
    lines: [[0, 1], [1, 2], [0, 3], [3, 4]]
  },
  // Leo (Lion)
  {
    sign: "leo",
    stars: [
      { x: 0.75, y: 0.20, size: 2.8 }, // Regulus
      { x: 0.72, y: 0.15, size: 2 },
      { x: 0.78, y: 0.17, size: 1.9 },
      { x: 0.82, y: 0.19, size: 1.8 },
      { x: 0.85, y: 0.23, size: 2.1 },
      { x: 0.80, y: 0.25, size: 1.7 },
      { x: 0.77, y: 0.24, size: 1.8 },
    ],
    lines: [[0, 1], [0, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0]]
  },
  // Virgo (Maiden)
  {
    sign: "virgo",
    stars: [
      { x: 0.10, y: 0.40, size: 2.7 }, // Spica
      { x: 0.13, y: 0.37, size: 1.8 },
      { x: 0.15, y: 0.34, size: 1.7 },
      { x: 0.18, y: 0.31, size: 1.9 },
      { x: 0.20, y: 0.35, size: 1.6 },
      { x: 0.16, y: 0.39, size: 1.8 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [2, 4], [1, 5], [5, 0]]
  },
  // Libra (Scales)
  {
    sign: "libra",
    stars: [
      { x: 0.28, y: 0.41, size: 2.3 },
      { x: 0.32, y: 0.44, size: 2.4 },
      { x: 0.30, y: 0.48, size: 1.9 },
      { x: 0.25, y: 0.45, size: 1.8 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 0]]
  },
  // Scorpio (Scorpion)
  {
    sign: "scorpio",
    stars: [
      { x: 0.42, y: 0.44, size: 2.6 }, // Antares
      { x: 0.45, y: 0.41, size: 1.8 },
      { x: 0.48, y: 0.39, size: 1.7 },
      { x: 0.51, y: 0.42, size: 1.9 },
      { x: 0.54, y: 0.45, size: 2 },
      { x: 0.58, y: 0.47, size: 1.7 },
      { x: 0.61, y: 0.49, size: 1.8 },
      { x: 0.64, y: 0.48, size: 1.9 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]
  },
  // Sagittarius (Archer)
  {
    sign: "sagittarius",
    stars: [
      { x: 0.74, y: 0.40, size: 2.5 },
      { x: 0.78, y: 0.43, size: 2.1 },
      { x: 0.76, y: 0.47, size: 1.9 },
      { x: 0.72, y: 0.45, size: 1.8 },
      { x: 0.70, y: 0.49, size: 2 },
      { x: 0.80, y: 0.50, size: 1.7 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 0], [2, 4], [1, 5]]
  },
  // Capricorn (Sea Goat)
  {
    sign: "capricorn",
    stars: [
      { x: 0.15, y: 0.65, size: 2.2 },
      { x: 0.18, y: 0.62, size: 1.9 },
      { x: 0.21, y: 0.60, size: 1.7 },
      { x: 0.24, y: 0.63, size: 1.8 },
      { x: 0.20, y: 0.67, size: 2 },
      { x: 0.17, y: 0.70, size: 1.8 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [1, 4], [4, 5], [5, 0]]
  },
  // Aquarius (Water Bearer)
  {
    sign: "aquarius",
    stars: [
      { x: 0.35, y: 0.65, size: 2.3 },
      { x: 0.38, y: 0.63, size: 1.8 },
      { x: 0.40, y: 0.67, size: 1.9 },
      { x: 0.43, y: 0.65, size: 1.7 },
      { x: 0.46, y: 0.68, size: 1.8 },
      { x: 0.49, y: 0.66, size: 2 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]
  },
  // Pisces (Fish)
  {
    sign: "pisces",
    stars: [
      { x: 0.62, y: 0.65, size: 2.4 },
      { x: 0.65, y: 0.62, size: 1.9 },
      { x: 0.68, y: 0.60, size: 1.7 },
      { x: 0.72, y: 0.63, size: 1.8 },
      { x: 0.75, y: 0.65, size: 2.1 },
      { x: 0.70, y: 0.67, size: 1.9 },
      { x: 0.65, y: 0.70, size: 1.8 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0]]
  }
];

export const drawConstellations = (
  ctx: CanvasRenderingContext2D,
  dimensions: { width: number, height: number },
  isLowPerformance: boolean
) => {
  zodiacConstellations.forEach(constellation => {
    // Draw constellation lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 0.5;
    
    constellation.lines.forEach(([from, to]) => {
      const fromStar = constellation.stars[from];
      const toStar = constellation.stars[to];
      
      ctx.beginPath();
      ctx.moveTo(fromStar.x * dimensions.width, fromStar.y * dimensions.height);
      ctx.lineTo(toStar.x * dimensions.width, toStar.y * dimensions.height);
      ctx.stroke();
    });

    // Draw constellation stars
    constellation.stars.forEach(star => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.arc(
        star.x * dimensions.width,
        star.y * dimensions.height,
        star.size,
        0,
        Math.PI * 2
      );
      ctx.fill();
      
      // Add glow effect unless on low performance device
      if (!isLowPerformance) {
        const grd = ctx.createRadialGradient(
          star.x * dimensions.width, star.y * dimensions.height, 0,
          star.x * dimensions.width, star.y * dimensions.height, star.size * 3
        );
        grd.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
        grd.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(
          star.x * dimensions.width,
          star.y * dimensions.height,
          star.size * 3,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    });
  });
};
