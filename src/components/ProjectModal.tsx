import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import type { Project } from '../types';
import { useTheme } from '../context/ThemeContext';

const proofClass: Record<string, string> = {
  live: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  screenshot: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  award: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  doc: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  article: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
};

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const { theme } = useTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const bgPrimary = theme === 'dark' ? 'bg-zinc-950' : 'bg-white';
  const bgSecondary = theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-100';
  const textPrimary = theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900';
  const textSecondary = theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600';
  const borderColor = theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200';

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`${bgSecondary} border ${borderColor} rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl transition-colors duration-300`}
        >
          <div className="flex justify-between items-start p-8 pb-0">
            <div>
              <p className={`text-[10px] font-bold tracking-[0.15em] uppercase mb-2 ${textSecondary} transition-colors duration-300`}>{project.org}</p>
              <h2 className={`font-['Sora'] text-2xl font-extrabold tracking-tight ${textPrimary} transition-colors duration-300`}>{project.title}</h2>
            </div>
            <button onClick={onClose} className={`w-10 h-10 rounded-full ${bgPrimary} flex items-center justify-center ${textSecondary} hover:${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'} hover:${textPrimary} transition-colors duration-300 ml-4 flex-shrink-0`}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Problem', text: project.problem, border: 'border-rose-500' },
                { label: 'Solution', text: project.solution, border: 'border-emerald-500' },
                { label: 'Result', text: project.result, border: 'border-blue-500' },
              ].map((item) => (
                <div key={item.label} className={`${bgPrimary} rounded-xl p-5 border-l-4 ${item.border} transition-colors duration-300`}>
                  <div className={`text-[10px] font-bold text-zinc-500 uppercase tracking-wide mb-2`}>{item.label}</div>
                  <p className={`text-sm leading-relaxed ${textSecondary} transition-colors duration-300`}>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <div className={`text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3`}>Process</div>
              <p className={`text-sm leading-relaxed ${textSecondary} transition-colors duration-300`}>{project.process}</p>
            </div>

            {project.images.length > 0 && (
              <div className="mb-8">
                <div className={`text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3`}>Documentation</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative group cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="rounded-lg w-full h-40 object-cover border border-zinc-700 hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <div className={`text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3`}>Tools Used</div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className={`${bgPrimary} ${textSecondary} text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors duration-300`}>{tool}</span>
                ))}
              </div>
            </div>

            <div>
              <div className={`text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3`}>Proof & Links</div>
              <div className="flex flex-wrap gap-2">
                {project.proof.map((p) => (
                  p.url ? (
                    <a key={p.label} href={p.url} target="_blank" rel="noopener noreferrer" className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${proofClass[p.type]} hover:opacity-80 transition-opacity`}>
                      {p.label}
                    </a>
                  ) : (
                    <span key={p.label} className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${proofClass[p.type]}`}>
                      {p.label}
                    </span>
                  )
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full size view"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
