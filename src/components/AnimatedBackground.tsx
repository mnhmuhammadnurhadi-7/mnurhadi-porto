import { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const LIGHT_COLORS = [
  'from-blue-200/50 to-cyan-200/50',
  'from-sky-200/50 to-blue-200/50',
  'from-cyan-200/50 to-indigo-200/50',
  'from-blue-100/50 to-cyan-100/50',
  'from-purple-200/50 to-pink-200/50',
  'from-emerald-200/50 to-teal-200/50',
];

const DARK_COLORS = [
  'from-blue-500/30 to-purple-500/30',
  'from-pink-500/30 to-yellow-500/30',
  'from-cyan-500/30 to-green-500/30',
  'from-orange-500/30 to-red-500/30',
  'from-purple-500/30 to-indigo-500/30',
  'from-emerald-500/30 to-cyan-500/30',
];

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bubbles, setBubbles] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number; color: string; rotation: number }[]
  >([]);
  const [shapes, setShapes] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number; type: 'circle' | 'square' | 'triangle' }[]
  >([]);
  const { theme } = useTheme();

  const colors = useMemo(() => theme === 'dark' ? DARK_COLORS : LIGHT_COLORS, [theme]);

  useEffect(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const newBubbles = Array.from({ length: 20 }, (_, i) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return {
        id: i,
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
        size: Math.random() * 300 + 150,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        color: randomColor,
        rotation: Math.random() * 360,
      };
    });

    const newShapes = Array.from({ length: 15 }, (_, i) => ({
      id: i + 100,
      x: Math.random() * containerWidth,
      y: Math.random() * containerHeight,
      size: Math.random() * 60 + 20,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 3,
      type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
    }));

    setBubbles(newBubbles);
    setShapes(newShapes);
  }, [colors]);

  const bubbleOpacity = theme === 'light' ? [0.4, 0.6, 0.5, 0.4] : [0.25, 0.45, 0.35, 0.25];
  const shapeOpacity = theme === 'light' ? 0.15 : 0.08;
  
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Animated Gradient Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={`absolute rounded-full bg-gradient-to-r ${bubble.color} blur-3xl`}
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
          }}
          animate={{
            y: [0, -80, 0, -50],
            x: [0, 60, 0, -40],
            scale: [1, 1.3, 0.95, 1],
            opacity: bubbleOpacity,
            rotate: bubble.rotation,
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: ("easeInOut" as any),
            delay: bubble.delay,
          }}
        />
      ))}

      {/* Floating Geometric Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            opacity: shapeOpacity,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: ("easeInOut" as any),
            delay: shape.delay,
          }}
        >
          {shape.type === 'circle' && (
            <div
              className="rounded-full border-2 border-current"
              style={{
                width: shape.size,
                height: shape.size,
                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              }}
            />
          )}
          {shape.type === 'square' && (
            <div
              className="border-2 border-current"
              style={{
                width: shape.size,
                height: shape.size,
                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              }}
            />
          )}
          {shape.type === 'triangle' && (
            <div
              className="border-2 border-current"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid`,
                borderBottomColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
