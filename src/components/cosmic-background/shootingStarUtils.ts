
import { ShootingStar } from "./types";

export const createShootingStar = (): ShootingStar => {
  const angle = Math.random() * Math.PI / 4 + Math.PI / 8; // Direction: mostly diagonal
  return {
    x: Math.random(),
    y: Math.random() * 0.3, // Start from top portion of screen
    length: Math.random() * 0.05 + 0.02,
    speed: Math.random() * 0.002 + 0.001,
    progress: 0,
    angle: angle, 
    active: true,
    duration: Math.random() * 1500 + 1000 // 1-2.5 seconds
  };
};

export const drawShootingStars = (
  ctx: CanvasRenderingContext2D, 
  shootingStars: ShootingStar[], 
  deltaTime: number,
  dimensions: { width: number, height: number }
) => {
  // Update and draw each shooting star
  shootingStars.forEach(star => {
    if (!star.active) return;
    
    // Update progress
    star.progress += star.speed * deltaTime;
    
    // Remove if complete
    if (star.progress >= 1) {
      star.active = false;
      return;
    }
    
    // Calculate current position
    const currentX = star.x + Math.cos(star.angle) * star.progress;
    const currentY = star.y + Math.sin(star.angle) * star.progress;
    
    // Calculate trail points
    const trailX = currentX - Math.cos(star.angle) * star.length;
    const trailY = currentY - Math.sin(star.angle) * star.length;
    
    // Draw shooting star
    const gradient = ctx.createLinearGradient(
      currentX * dimensions.width, currentY * dimensions.height,
      trailX * dimensions.width, trailY * dimensions.height
    );
    
    const opacity = 1 - Math.abs(star.progress * 2 - 1); // Fade in and out
    
    gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(currentX * dimensions.width, currentY * dimensions.height);
    ctx.lineTo(trailX * dimensions.width, trailY * dimensions.height);
    ctx.stroke();
  });
  
  // Clean up inactive shooting stars
  return shootingStars.filter(star => star.active);
};
