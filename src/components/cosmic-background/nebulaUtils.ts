
import { NebulaCloud } from "./types";

export const getRandomNebulaColor = (): string => {
  const colors = [
    '76, 61, 157',   // Purple
    '113, 65, 179',  // Violet
    '61, 108, 157',  // Blue
    '157, 61, 145',  // Pink
    '95, 61, 157'    // Indigo
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const createNebulaClouds = (count: number): NebulaCloud[] => {
  return Array.from({ length: count }).map(() => ({
    x: Math.random(),
    y: Math.random(),
    radius: Math.random() * 0.15 + 0.05,
    color: getRandomNebulaColor(),
    opacity: Math.random() * 0.15 + 0.05
  }));
};

export const drawNebulas = (
  ctx: CanvasRenderingContext2D, 
  nebulaClouds: NebulaCloud[], 
  time: number,
  dimensions: { width: number, height: number }
) => {
  nebulaClouds.forEach(nebula => {
    const x = nebula.x * dimensions.width;
    const y = nebula.y * dimensions.height;
    const radius = nebula.radius * Math.min(dimensions.width, dimensions.height);
    
    // Create a subtle pulsing effect with time
    const pulseRate = 0.0001;
    const pulseAmount = Math.sin(time * pulseRate) * 0.1 + 0.9; // 0.8-1.0 range
    
    const grd = ctx.createRadialGradient(x, y, 0, x, y, radius * pulseAmount);
    grd.addColorStop(0, `rgba(${nebula.color}, ${nebula.opacity * 1.2})`);
    grd.addColorStop(0.5, `rgba(${nebula.color}, ${nebula.opacity * 0.5})`);
    grd.addColorStop(1, `rgba(${nebula.color}, 0)`);
    
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  });
};
