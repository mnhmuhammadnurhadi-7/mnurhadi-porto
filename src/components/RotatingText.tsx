import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const RotatingText: FC = () => {
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();

  const texts = ['Tutor', 'SEO Expert', 'Project Manager', 'System Analyst', 'Vibecoder'];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [texts.length]);

  const textColor = theme === 'dark' ? 'text-blue-400' : 'text-blue-600';

  return (
    <span className={`inline-block ${textColor}`}>
      <AnimatePresence mode='wait'>
        <motion.span
          key={texts[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='inline-block'
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
