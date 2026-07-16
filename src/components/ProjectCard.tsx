import type { Project } from '../types';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface Props {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -12, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer transition-all hover:border-zinc-600 hover:shadow-2xl hover:shadow-blue-500/10 group relative"
    >
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
      />
      
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        {project.images.length > 0 ? (
          <motion.img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: ("easeOut" as any) }}
          />
        ) : (
          <div className={`h-full bg-gradient-to-br ${project.coverColor} flex items-center justify-center`}>
            <motion.span 
              className="text-7xl"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              {project.coverEmoji}
            </motion.span>
          </div>
        )}
        
        {/* Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        
        {/* View Project Button on Hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        >
          <motion.div
            className="bg-white text-zinc-950 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </motion.div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <motion.span 
              className="text-zinc-500 text-[10px] font-bold tracking-[0.15em] uppercase block mb-1"
              whileHover={{ color: '#3b82f6' }}
              transition={{ duration: 0.2 }}
            >
              {project.org}
            </motion.span>
            <h3 className="font-['Sora'] text-xl font-extrabold text-white mt-1 leading-tight group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <motion.span 
            className="text-zinc-600 group-hover:text-blue-400 transition-colors"
            whileHover={{ rotate: 45, scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.span>
        </div>
        
        <motion.p 
          className="text-zinc-400 text-sm mb-4 line-clamp-2 group-hover:text-zinc-300 transition-colors duration-300"
        >
          {project.problem}
        </motion.p>
        
        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 3).map((tool, index) => (
            <motion.span 
              key={tool} 
              className="bg-zinc-800 text-zinc-300 text-[11px] font-semibold px-2.5 py-1 rounded border border-zinc-700 group-hover:border-zinc-600 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                backgroundColor: 'rgba(59, 130, 246, 0.2)', 
                borderColor: '#3b82f6',
                color: '#60a5fa'
              }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
