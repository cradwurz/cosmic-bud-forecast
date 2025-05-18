
import { Star } from "./types";

export const getRandomStarColor = (): string => {
  // Star colors from cool to warm
  const colors = [
    '200, 220, 255', // Blue-white
    '220, 220, 255', // White with blue tint
    '255, 255, 255', // Pure white
    '255, 240, 220', // White with yellow tint
    '255, 220, 180'  // Yellow-orange
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const createStars = (count: number): Star[] => {
  return Array.from({ length: count }).map(() => ({
    x: Math.random(),
    y: Math.random(),
    size: Math.random() * 2 + 0.5,
    color: getRandomStarColor(),
    opacity: Math.random() * 0.7 + 0.3,
    twinkleSpeed: Math.random() * 0.003 + 0.0015,
    twinklePhase: Math.random() * Math.PI * 2
  }));
};

export const drawStars = (
  ctx: CanvasRenderingContext2D, 
  stars: Star[], 
  time: number, 
  dimensions: { width: number, height: number },
  isLowPerformance: boolean,
  parallaxFactor: number = 1
) => {
  stars.forEach(star => {
    // Calculate position with optional parallax effect
    const x = ((star.x * dimensions.width) + (time * 0.005 * parallaxFactor)) % dimensions.width;
    const y = star.y * dimensions.height;
    
    // Twinkle effect
    const twinkle = isLowPerformance 
      ? 0.5 + Math.sin(time * 0.001) * 0.3
      : 0.5 + Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.5;
    
    const opacity = star.opacity * twinkle;
    ctx.fillStyle = `rgba(${star.color}, ${opacity})`;
    
    // Draw stars with slight glow based on size
    if (star.size > 1.5 && !isLowPerformance) {
      // Larger stars get a glow effect
      const grd = ctx.createRadialGradient(x, y, 0, x, y, star.size * 2);
      grd.addColorStop(0, `rgba(${star.color}, ${opacity})`);
      grd.addColorStop(0.5, `rgba(${star.color}, ${opacity * 0.3})`);
      grd.addColorStop(1, `rgba(${star.color}, 0)`);
      
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(x, y, star.size * 2, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Draw star
    ctx.beginPath();
    ctx.arc(x, y, star.size * (isLowPerformance ? 0.8 : 1), 0, Math.PI * 2);
    ctx.fill();
  });
};
