import { useEffect } from 'react';
import type { Project } from '../types';

const proofClass: Record<string, string> = {
  live: 'bg-green-100 text-green-800',
  screenshot: 'bg-blue-100 text-blue-800',
  award: 'bg-amber-100 text-amber-800',
  doc: 'bg-purple-100 text-purple-800',
  article: 'bg-red-100 text-red-800',
};

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-start p-7 pb-0">
          <div>
            <h2 className="font-['Sora'] text-xl font-extrabold text-[#1A3557] tracking-tight">{project.title}</h2>
            <p className="text-sm text-[#64748B] mt-1">{project.org}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-[#CBD5E1] transition-colors ml-4 flex-shrink-0">
            ×
          </button>
        </div>

        <div className="p-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            {[
              { label: 'Problem', text: project.problem, color: 'border-red-500' },
              { label: 'Solution', text: project.solution, color: 'border-green-500' },
              { label: 'Result', text: project.result, color: 'border-blue-500' },
            ].map((item) => (
              <div key={item.label} className={`bg-[#F0F4F8] rounded-xl p-3.5 border-l-4 ${item.color}`}>
                <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mb-1.5">{item.label}</div>
                <p className="text-xs text-[#0F172A] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mb-5">
            <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">Process</div>
            <p className="text-sm text-[#0F172A] leading-relaxed">{project.process}</p>
          </div>

          {project.images.length > 0 && (
            <div className="mb-5">
              <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">Documentation</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="rounded-lg w-full h-24 object-cover border border-[#E2E8F0] cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => window.open(img, '_blank')}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mb-5">
            <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">Tools Used</div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-lg">{tool}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">Proof & Documentation</div>
            <div className="flex flex-wrap gap-2">
              {project.proof.map((p) => (
                p.url ? (
                  <a key={p.label} href={p.url} target="_blank" rel="noopener noreferrer" className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${proofClass[p.type]} hover:opacity-80 transition-opacity`}>
                    {p.label}
                  </a>
                ) : (
                  <span key={p.label} className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${proofClass[p.type]}`}>
                    {p.label}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
