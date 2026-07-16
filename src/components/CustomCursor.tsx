import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const CustomCursor: React.FC = () => {
  const { theme } = useTheme();
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorSize, setCursorSize] = useState(24);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      // Direct positioning without transform for no delay
      cursorRef.current.style.left = `${e.clientX - cursorSize / 2}px`;
      cursorRef.current.style.top = `${e.clientY - cursorSize / 2}px`;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        setCursorSize(80);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorSize(24);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [cursorSize]);

  const bgColor = theme === 'dark' ? 'bg-white' : 'bg-blue-600';
  const borderColor = theme === 'dark' ? 'border-white' : 'border-blue-600';

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9999] rounded-full border-2 ${borderColor} flex items-center justify-center transition-all duration-150`}
      style={{
        width: cursorSize,
        height: cursorSize,
        transition: 'width 0.15s ease-out, height 0.15s ease-out, left 0s, top 0s',
      }}
    >
      {isHovering && (
        <span className={`text-xs font-bold ${theme === 'dark' ? 'text-zinc-900' : 'text-white'} ${bgColor} rounded-full px-3 py-1`}>
          VIEW
        </span>
      )}
      {!isHovering && (
        <div className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-blue-600'}`} />
      )}
    </div>
  );
};

export default CustomCursor;
