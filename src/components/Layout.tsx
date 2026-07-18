import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import CustomCursor from './CustomCursor';
import DotGrid from './decor/DotGrid';
import FloatingBlobs from './decor/FloatingBlobs';
import DiagonalLines from './decor/DiagonalLines';
import FloatingIcons from './decor/FloatingIcons';
import { useTheme } from '../context/ThemeContext';

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const bgPrimary = theme === 'dark' ? 'bg-zinc-950' : 'bg-white';
  const bgSecondary = theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-100';
  const textPrimary = theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900';
  const textSecondary = theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600';
  const borderColor = theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200';
  const navBg = theme === 'dark' ? 'bg-zinc-950/80' : 'bg-white/80';

  return (
    <div className={`min-h-screen ${bgPrimary} ${textPrimary} relative transition-colors duration-300 overflow-hidden`}>
      <AnimatedBackground />
      <CustomCursor />
      
      {/* Decorative Background Layers - persistent across all pages */}
      <DotGrid />
      <FloatingBlobs />
      <DiagonalLines />
      <FloatingIcons />
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 ${navBg} backdrop-blur-xl border-b ${borderColor} px-6 md:px-10 flex items-center justify-between h-16 transition-colors duration-300`}
      >
        <Link to="/" className={`font-['Sora'] font-extrabold text-lg tracking-tight ${textPrimary} transition-colors duration-300`}>
          MNH
        </Link>
        <ul className="flex gap-6 md:gap-8 list-none items-center">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  location.pathname === link.path ? textPrimary : textSecondary
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${bgSecondary} ${borderColor} border transition-all hover:scale-110`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </li>
        </ul>
      </motion.nav>
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: ("easeInOut" as any) }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className={`relative z-10 ${bgSecondary} border-t ${borderColor} ${textSecondary} text-center py-12 px-6 transition-colors duration-300`}>
        <p className="text-sm">
          © 2026 Muhammad Nur Hadi · Malang, East Java, Indonesia
        </p>
        <p className="text-xs mt-2 text-zinc-500">
          Built with React + TypeScript + Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Layout;
