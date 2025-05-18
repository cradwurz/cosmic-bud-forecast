
import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  progress: number;
  angle: number;
  active: boolean;
  duration: number;
}

interface Constellation {
  stars: { x: number; y: number; size: number }[];
  lines: [number, number][];
  sign: string;
}

interface NebulaCloud {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
}

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isAndroid, setIsAndroid] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const lastShootingStarTime = useRef<number>(0);
  
  // Check for Android to optimize rendering
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isAndroidDevice = /android/i.test(userAgent);
    setIsAndroid(isAndroidDevice);
    
    // Detect low performance devices
    const isLowEnd = 
      isAndroidDevice || 
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    
    setIsLowPerformance(isLowEnd);
  }, []);
  
  // All 12 zodiac constellations with simplified representations
  const zodiacConstellations: Constellation[] = [
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

  // Nebula clouds for visual effect
  const createNebulaClouds = (count: number): NebulaCloud[] => {
    return Array.from({ length: count }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 0.15 + 0.05,
      color: getRandomNebulaColor(),
      opacity: Math.random() * 0.15 + 0.05
    }));
  };

  const getRandomNebulaColor = (): string => {
    const colors = [
      '76, 61, 157',   // Purple
      '113, 65, 179',  // Violet
      '61, 108, 157',  // Blue
      '157, 61, 145',  // Pink
      '95, 61, 157'    // Indigo
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Create star field - different star colors and sizes
  const createStars = (count: number): Star[] => {
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

  const getRandomStarColor = (): string => {
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

  // Initialize a shooting star
  const createShootingStar = (): ShootingStar => {
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

    // Drawing functions
    const drawBackground = (ctx: CanvasRenderingContext2D) => {
      // Create deep space gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, dimensions.height);
      gradient.addColorStop(0, 'rgba(10, 10, 30, 1)');      // Deep blue at top
      gradient.addColorStop(0.4, 'rgba(25, 15, 50, 0.95)'); // Deep purple in middle
      gradient.addColorStop(1, 'rgba(15, 10, 30, 0.9)');    // Dark blue-black at bottom
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
    };
    
    const drawNebulas = (ctx: CanvasRenderingContext2D, time: number) => {
      if (isLowPerformance) return; // Skip on low-end devices
      
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
    
    const drawStars = (ctx: CanvasRenderingContext2D, stars: Star[], time: number, parallaxFactor: number = 1) => {
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
    
    const drawConstellations = (ctx: CanvasRenderingContext2D) => {
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
    
    const drawShootingStars = (ctx: CanvasRenderingContext2D, time: number, deltaTime: number) => {
      if (isLowPerformance) return; // Skip on low-end devices
      
      // Update and draw each shooting star
      shootingStarsRef.current.forEach((star, index) => {
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
      shootingStarsRef.current = shootingStarsRef.current.filter(star => star.active);
    };

    // Animation function
    let lastTime = 0;
    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw scene components in order
      drawBackground(ctx);
      drawNebulas(ctx, time);
      drawStars(ctx, backgroundStars, time, 0.2);  // Background stars with slow parallax
      drawConstellations(ctx);
      drawStars(ctx, foregroundStars, time, 0.5);  // Foreground stars with medium parallax
      
      // Trigger and draw shooting stars
      triggerShootingStar(time);
      drawShootingStars(ctx, time, deltaTime);

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

export default CosmicBackground;
