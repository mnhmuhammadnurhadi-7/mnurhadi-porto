import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Project & Coordination',
    tags: ['Project Management', 'System Flow Design', 'Cross-team Leadership', 'Stakeholder Reporting', 'Task Delegation'],
    icon: '🎯',
  },
  {
    title: 'System Analysis',
    tags: ['Workflow Design', 'Process Documentation', 'Architecture Planning', 'Requirements Analysis'],
    icon: '🔍',
  },
  {
    title: 'SEO & Content',
    tags: ['SEO Writing', 'Keyword Research', 'Google Page 1 Ranking', 'Article Publishing', 'Content Strategy'],
    icon: '📝',
  },
  {
    title: 'Technical',
    tags: ['React', 'Laravel', 'MySQL', 'Figma', 'REST API', 'CMS', 'n8n', 'Ollama'],
    icon: '⚡',
  },
  {
    title: 'Deployment & Tools',
    tags: ['Vercel', 'Northflank', 'Aiven', 'Git', 'Google Workspace', 'Microsoft Office'],
    icon: '🚀',
  },
  {
    title: 'Languages',
    tags: ['Indonesian (Native)', 'English (Intermediate)'],
    icon: '🌍',
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="bg-zinc-900/50 backdrop-blur-sm border-t border-b border-zinc-800 py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">What I Do</p>
          </motion.div>
          <h2 className="font-['Sora'] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Capabilities</span>
          </h2>
          <motion.p 
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Combining technical expertise with strategic thinking to deliver impactful results
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                borderColor: 'rgba(59, 130, 246, 0.5)',
              }}
              className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-7 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <motion.span 
                    className="text-3xl"
                    whileHover={{ rotate: 10, scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {group.icon}
                  </motion.span>
                  <div className="text-sm font-black text-white tracking-wide">{group.title}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tag} 
                      className="bg-zinc-800/80 text-zinc-300 text-xs font-medium px-3 py-1.5 rounded border border-zinc-700 group-hover:border-zinc-600 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                      whileHover={{ 
                        backgroundColor: 'rgba(59, 130, 246, 0.2)', 
                        borderColor: '#3b82f6',
                        color: '#60a5fa',
                        scale: 1.05,
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
