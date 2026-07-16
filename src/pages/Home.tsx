import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RotatingText from '../components/RotatingText';

const Home = () => {
  const { theme } = useTheme();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ("easeOut" as any) } },
  };
  const textPrimary = theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900';
  const textSecondary = theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600';
  const borderColor = theme === 'dark' ? 'border-zinc-700' : 'border-zinc-300';

  return (
    <div className={`min-h-screen pt-24 pb-16 px-6 md:px-10 flex flex-col items-center justify-center transition-colors duration-300`}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl w-full"
      >
        <motion.div variants={item}>
          <div className={`inline-flex items-center gap-2 border ${borderColor} ${textSecondary} text-xs font-semibold px-4 py-1.5 rounded-full mb-8 uppercase tracking-[0.2em] transition-colors duration-300`}>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Available for Remote Work
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className={`font-['Sora'] text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tight mb-8 ${textPrimary} transition-colors duration-300`}
        >
          Hi, I'm Muhammad Nur Hadi
          <br />
          and I'm a <RotatingText />
        </motion.h1>

        <motion.p
          variants={item}
          className={`${textSecondary} text-lg md:text-xl leading-relaxed max-w-2xl mb-12 transition-colors duration-300`}
        >
          Digital Project Coordinator & System Analyst, bridging technical execution and strategic coordination to ship impactful products.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-zinc-950 text-sm font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className={`inline-flex items-center gap-2 border ${borderColor} ${textSecondary} text-sm font-bold px-8 py-4 rounded-xl hover:${theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-100'} transition-all`}
          >
            About Me
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
