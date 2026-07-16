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
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl hover:border-blue-500 group"
    >
      <div className={`h-44 bg-gradient-to-br ${project.coverColor} flex items-center justify-center relative`}>
        <span className="text-5xl">{project.coverEmoji}</span>
        <span className="absolute top-3 right-3 bg-black/40 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
          {project.label}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-['Sora'] text-base font-bold text-[#0F172A] mb-1 leading-tight">{project.title}</h3>
        <p className="text-xs text-[#64748B] mb-4">{project.org}</p>

        <div className="flex border border-[#E2E8F0] rounded-lg overflow-hidden mb-4">
          {[
            { label: 'Problem', text: project.problem.slice(0, 50) + '...' },
            { label: 'Solution', text: project.solution.slice(0, 50) + '...' },
            { label: 'Result', text: project.result.slice(0, 50) + '...' },
          ].map((item, i) => (
            <div key={i} className={`flex-1 p-2 text-center ${i < 2 ? 'border-r border-[#E2E8F0]' : ''}`}>
              <div className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">{item.label}</div>
              <div className="text-[10px] text-[#0F172A] font-medium leading-tight">{item.text}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tools.slice(0, 4).map((tool) => (
            <span key={tool} className="bg-blue-50 text-blue-700 text-[11px] font-semibold px-2 py-0.5 rounded">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 pb-4 border-t border-[#E2E8F0] pt-3 flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {project.proof.map((p) => (
            <span key={p.label} className={`text-[10px] font-semibold px-2 py-1 rounded ${proofClass[p.type]}`}>
              {p.label}
            </span>
          ))}
        </div>
        <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">View →</span>
      </div>
    </div>
  );
}
