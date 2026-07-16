import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from '../components/ProjectModal';
import type { Project } from '../types';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { theme } = useTheme();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
            Selected Work
          </p>
          <h2 className={`font-['Sora'] text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${textPrimary} transition-colors duration-300`}>
            Projects & Achievements
          </h2>
          <p className={`text-sm max-w-2xl ${textSecondary} transition-colors duration-300`}>
            Crafting digital products that balance technical execution and strategic coordination.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`${bgSecondary} border ${borderColor} rounded-2xl overflow-hidden cursor-pointer transition-all hover:${borderColor.replace('border-', 'border-opacity-100')} group transition-colors duration-300`}
              onClick={() => setSelectedProject(project)}
            >
              {project.images.length > 0 ? (
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ) : (
                <div
                  className={`h-56 bg-gradient-to-br ${project.coverColor} flex items-center justify-center`}
                >
                  <span className="text-7xl">{project.coverEmoji}</span>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className={`text-[10px] font-bold tracking-[0.15em] uppercase ${textSecondary} transition-colors duration-300`}>
                      {project.org}
                    </span>
                    <h3 className={`font-['Sora'] text-xl font-extrabold mt-1 leading-tight ${textPrimary} transition-colors duration-300`}>
                      {project.title}
                    </h3>
                  </div>
                  <span className={`${textSecondary} group-hover:${textPrimary} transition-colors duration-300`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
                <p className={`text-sm mb-4 line-clamp-2 ${textSecondary} transition-colors duration-300`}>
                  {project.problem}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className={`bg-${theme === 'dark' ? 'zinc-800' : 'zinc-200'} text-${theme === 'dark' ? 'zinc-300' : 'zinc-700'} text-[11px] font-semibold px-2.5 py-1 rounded`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Projects;
