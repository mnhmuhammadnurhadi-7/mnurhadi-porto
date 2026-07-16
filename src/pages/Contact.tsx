import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const bgPrimary = theme === 'dark' ? 'bg-zinc-950' : 'bg-white';
  const bgSecondary = theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-100';
  const textPrimary = theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900';
  const textSecondary = theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600';
  const borderColor = theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200';

  return (
    <div className={`min-h-screen pt-24 pb-16 px-6 md:px-10 flex items-center transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <p className={`text-xs font-bold tracking-[0.2em] uppercase mb-3 ${textSecondary} transition-colors duration-300`}>
              Let's Connect
            </p>
            <h2 className={`font-['Sora'] text-4xl md:text-5xl font-extrabold tracking-tight mb-6 ${textPrimary} transition-colors duration-300`}>
              Got a Project?
            </h2>
            <p className={`text-lg mb-12 max-w-2xl ${textSecondary} transition-colors duration-300`}>
              Open to part-time remote engagements in project coordination, system analysis, SEO content, or digital operations.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="mailto:mnhmuhammadnurhadi@gmail.com"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-zinc-950 text-sm font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Email
            </a>
            <a
              href="https://wa.me/6285883797751"
              className={`group inline-flex items-center gap-3 ${bgSecondary} border ${borderColor} hover:border-zinc-400 hover:${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'} text-sm font-bold px-8 py-4 rounded-xl transition-all ${textPrimary} transition-colors duration-300`}
            >
              <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/muhamad-nur-hadi-373087265/"
              className={`inline-flex items-center gap-3 ${bgSecondary} border ${borderColor} hover:border-zinc-400 hover:${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'} text-sm font-bold px-8 py-4 rounded-xl transition-all ${textPrimary} transition-colors duration-300`}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mnhmuhammadnurhadi-7"
              className={`inline-flex items-center gap-3 ${bgSecondary} border ${borderColor} hover:border-zinc-400 hover:${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'} text-sm font-bold px-8 py-4 rounded-xl transition-all ${textPrimary} transition-colors duration-300`}
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
