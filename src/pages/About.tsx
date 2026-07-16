import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  const skillGroups = [
    {
      title: 'Project & Coordination',
      tags: ['Project Management', 'System Flow Design', 'Cross-team Leadership', 'Stakeholder Reporting', 'Task Delegation'],
    },
    {
      title: 'System Analysis',
      tags: ['Workflow Design', 'Process Documentation', 'Architecture Planning', 'Requirements Analysis'],
    },
    {
      title: 'SEO & Content',
      tags: ['SEO Writing', 'Keyword Research', 'Google Page 1 Ranking', 'Article Publishing', 'Content Strategy'],
    },
    {
      title: 'Technical',
      tags: ['React', 'Laravel', 'MySQL', 'Figma', 'REST API', 'CMS', 'n8n', 'Ollama'],
    },
    {
      title: 'Deployment & Tools',
      tags: ['Vercel', 'Northflank', 'Aiven', 'Git', 'Google Workspace', 'Microsoft Office'],
    },
    {
      title: 'Languages',
      tags: ['Indonesian (Native)', 'English (Intermediate)'],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const bgPrimary = theme === 'dark' ? 'bg-zinc-950' : 'bg-white';
  const bgSecondary = theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-100';
  const textPrimary = theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900';
  const textSecondary = theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600';
  const borderColor = theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200';

  return (
    <div className={`min-h-screen pt-24 pb-16 px-6 md:px-10 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className={`text-xs font-bold tracking-[0.2em] uppercase mb-3 ${textSecondary} transition-colors duration-300`}>
            About Me
          </p>
          <h2 className={`font-['Sora'] text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${textPrimary} transition-colors duration-300`}>
            Skills & Capabilities
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              variants={item}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`${bgSecondary} border ${borderColor} rounded-2xl p-7 hover:${borderColor} transition-all transition-colors duration-300`}
            >
              <div className={`text-sm font-black mb-5 tracking-wide ${textPrimary} transition-colors duration-300`}>
                {group.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`bg-gradient-to-r from-blue-500/20 to-emerald-500/20 ${textSecondary} text-xs font-medium px-3 py-1.5 rounded border ${borderColor} hover:border-blue-400/50 transition-all transition-colors duration-300`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
