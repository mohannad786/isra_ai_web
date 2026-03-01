import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { createNoise3D } from 'simplex-noise';

interface Orb {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  speed: number;
  angle: number;
}

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const noise3D = createNoise3D();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create orbs
    const orbs: Orb[] = [];
    const orbCount = 8;
    const colors = theme === 'light' 
      ? ['#F87171', '#FB7185', '#FCA5A5', '#FDA4AF']  // Red and rose shades
      : ['#EF4444', '#F43F5E', '#DC2626', '#E11D48']; // Darker red and rose

    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 100,
        radius: Math.random() * 100 + 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.2 + 0.1,
        angle: Math.random() * Math.PI * 2
      });
    }

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw orbs
      orbs.forEach((orb, i) => {
        // Update position using noise for organic movement
        const time = Date.now() * 0.001;
        const noiseX = noise3D(orb.x * 0.001, orb.y * 0.001, time) * 2;
        const noiseY = noise3D(orb.x * 0.001, orb.y * 0.001, time + 100) * 2;

        orb.x += Math.cos(orb.angle + noiseX) * orb.speed;
        orb.y += Math.sin(orb.angle + noiseY) * orb.speed;
        orb.angle += orb.speed * 0.1;

        // Wrap around edges
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;

        // Create gradient
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        );
        gradient.addColorStop(0, `${orb.color}33`); // 20% opacity
        gradient.addColorStop(0.5, `${orb.color}11`); // 7% opacity
        gradient.addColorStop(1, `${orb.color}00`); // 0% opacity

        // Draw orb
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(frame);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-40"
      aria-hidden="true"
    />
  );
};

export default BackgroundAnimation;