
import React, { useEffect, useRef, useState } from 'react';
import { useDeviceDetection } from './useDeviceDetection';
import { createStars, drawStars } from './starUtils';
import { createNebulaClouds, drawNebulas } from './nebulaUtils';
import { createShootingStar, drawShootingStars } from './shootingStarUtils';
import { drawConstellations } from './constellationUtils';
import { drawBackground } from './backgroundUtils';
import { ShootingStar } from './types';

const CosmicBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const { isAndroid, isLowPerformance } = useDeviceDetection();
  
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const lastShootingStarTime = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make canvas responsive
    const resize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(pixelRatio, pixelRatio);
      setDimensions({ width, height });
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Create stars with different performance tiers
    const starCount = isLowPerformance ? 100 : (isAndroid ? 200 : 500);
    const backgroundStars = createStars(starCount);
    const foregroundStars = createStars(isLowPerformance ? 20 : 50);
    
    // Create nebula effects - fewer for low performance devices
    const nebulaClouds = createNebulaClouds(isLowPerformance ? 3 : 8);
    
    // Occasional shooting star trigger
    const triggerShootingStar = (time: number) => {
      // Less frequent on low performance devices
      const minInterval = isLowPerformance ? 8000 : 4000;
      
      if (time - lastShootingStarTime.current > minInterval && Math.random() < 0.03) {
        shootingStarsRef.current.push(createShootingStar());
        lastShootingStarTime.current = time;
      }
    };

    // Animation function
    let lastTime = 0;
    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw scene components in order
      drawBackground(ctx, dimensions);
      if (!isLowPerformance) {
        drawNebulas(ctx, nebulaClouds, time, dimensions);
      }
      drawStars(ctx, backgroundStars, time, dimensions, isLowPerformance, 0.2);  // Background stars with slow parallax
      drawConstellations(ctx, dimensions, isLowPerformance);
      drawStars(ctx, foregroundStars, time, dimensions, isLowPerformance, 0.5);  // Foreground stars with medium parallax
      
      // Trigger and draw shooting stars
      if (!isLowPerformance) {
        triggerShootingStar(time);
        shootingStarsRef.current = drawShootingStars(ctx, shootingStarsRef.current, deltaTime, dimensions);
      }

      // Optimize frame rate for different devices
      if (isAndroid || isLowPerformance) {
        setTimeout(() => {
          requestRef.current = requestAnimationFrame(animate);
        }, isLowPerformance ? 60 : 30); // ~16fps for low-end, ~30fps for Android
      } else {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isAndroid, isLowPerformance, dimensions]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default CosmicBackgroundCanvas;
