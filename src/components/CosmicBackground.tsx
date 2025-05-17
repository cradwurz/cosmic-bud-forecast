
import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
}

interface Constellation {
  stars: { x: number; y: number }[];
  lines: [number, number][];
}

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const [isAndroid, setIsAndroid] = useState(false);
  
  // Check for Android to optimize rendering
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    setIsAndroid(/android/i.test(userAgent));
  }, []);
  
  // Zodiac constellations - simplified representations
  const constellations: Constellation[] = [
    // Aries
    {
      stars: [
        { x: 0.2, y: 0.3 },
        { x: 0.25, y: 0.32 },
        { x: 0.3, y: 0.28 }
      ],
      lines: [[0, 1], [1, 2]]
    },
    // Taurus
    {
      stars: [
        { x: 0.6, y: 0.2 },
        { x: 0.65, y: 0.25 },
        { x: 0.7, y: 0.2 },
        { x: 0.67, y: 0.15 },
        { x: 0.63, y: 0.15 }
      ],
      lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]]
    },
    // Gemini
    {
      stars: [
        { x: 0.8, y: 0.7 },
        { x: 0.75, y: 0.65 },
        { x: 0.8, y: 0.6 },
        { x: 0.85, y: 0.65 },
        { x: 0.9, y: 0.6 },
        { x: 0.85, y: 0.55 }
      ],
      lines: [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 5]]
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make canvas responsive
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Create random stars - fewer stars for Android to improve performance
    const starCount = isAndroid ? 50 : 100;
    const stars: Star[] = Array.from({ length: starCount }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.01 + 0.005
    }));

    // Animation function - optimize by reducing operations on Android
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(14, 16, 27, 1)');
      gradient.addColorStop(1, 'rgba(30, 21, 55, 0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars with twinkling effect - simpler for Android
      stars.forEach(star => {
        if (isAndroid) {
          // Simpler calculation for Android
          star.opacity = 0.3 + (Math.sin(time * 0.001) * 0.3);
        } else {
          star.opacity = 0.3 + (Math.sin(time * star.twinkleSpeed) + 1) * 0.35;
        }
        
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(
          star.x * canvas.width, 
          star.y * canvas.height, 
          star.size,
          0, 
          Math.PI * 2
        );
        ctx.fill();
      });

      // Draw constellations
      constellations.forEach(constellation => {
        // Draw constellation lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 0.5;
        
        constellation.lines.forEach(([from, to]) => {
          ctx.beginPath();
          ctx.moveTo(
            constellation.stars[from].x * canvas.width,
            constellation.stars[from].y * canvas.height
          );
          ctx.lineTo(
            constellation.stars[to].x * canvas.width,
            constellation.stars[to].y * canvas.height
          );
          ctx.stroke();
        });

        // Draw constellation stars
        constellation.stars.forEach(star => {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.beginPath();
          ctx.arc(
            star.x * canvas.width,
            star.y * canvas.height,
            2,
            0,
            Math.PI * 2
          );
          ctx.fill();
          
          // Glow effect - simpler for Android
          if (!isAndroid) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.beginPath();
            ctx.arc(
              star.x * canvas.width,
              star.y * canvas.height,
              4,
              0,
              Math.PI * 2
            );
            ctx.fill();
          }
        });
      });

      // Use a lower frame rate for Android to improve performance
      if (isAndroid) {
        setTimeout(() => {
          requestRef.current = requestAnimationFrame(animate);
        }, 50); // ~20fps for Android
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
  }, [isAndroid]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default CosmicBackground;
