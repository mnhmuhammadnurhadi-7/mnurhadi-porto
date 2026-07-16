import { certifications } from '../data/projects';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ZoomIn } from 'lucide-react';

export default function Certifications() {
  const [selected, setSelected] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-emerald-400" />
            <p className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase">Credentials</p>
          </div>
          <h2 className="font-['Sora'] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Certifications</span>
          </h2>
          <motion.p 
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Continuous learning and professional development in cutting-edge technologies
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                borderColor: 'rgba(16, 185, 129, 0.5)',
              }}
              onClick={() => setSelected(cert.image)}
              className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group relative"
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="relative">
                <div className="h-40 overflow-hidden">
                  <motion.img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <motion.div 
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={false}
                >
                  <ZoomIn className="w-8 h-8 text-white" />
                </motion.div>
              </div>
              
              <div className="p-4 relative z-10">
                <p className="text-sm font-semibold text-white leading-tight group-hover:text-emerald-400 transition-colors">{cert.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected}
                alt="Certificate"
                className="w-full rounded-2xl shadow-2xl"
              />
              <motion.button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 bg-white text-zinc-950 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-zinc-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
