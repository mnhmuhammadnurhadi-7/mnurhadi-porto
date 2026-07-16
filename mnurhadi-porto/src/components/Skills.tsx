const skillGroups = [
  {
    icon: '🎯',
    title: 'PROJECT & COORDINATION',
    tags: ['Project Management', 'System Flow Design', 'Cross-team Leadership', 'Stakeholder Reporting', 'Task Delegation'],
  },
  {
    icon: '🔍',
    title: 'SYSTEM ANALYSIS',
    tags: ['Workflow Design', 'Process Documentation', 'Architecture Planning', 'Requirements Analysis'],
  },
  {
    icon: '📝',
    title: 'SEO & CONTENT',
    tags: ['SEO Writing', 'Keyword Research', 'Google Page 1 Ranking', 'Article Publishing', 'Content Strategy'],
  },
  {
    icon: '💻',
    title: 'TECHNICAL',
    tags: ['React JSX', 'Laravel', 'MySQL', 'Figma', 'REST API', 'CMS', 'n8n', 'Ollama'],
  },
  {
    icon: '☁️',
    title: 'DEPLOYMENT & TOOLS',
    tags: ['Vercel', 'Northflank', 'Aiven', 'Git', 'Google Workspace', 'Microsoft Office'],
  },
  {
    icon: '🌐',
    title: 'LANGUAGES',
    tags: ['Indonesian (Native)', 'English (Intermediate)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white border-t border-b border-[#E2E8F0] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">Capabilities</p>
        <h2 className="font-['Sora'] text-3xl font-extrabold text-[#1A3557] tracking-tight mb-12">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-[#F0F4F8] border border-[#E2E8F0] rounded-2xl p-5">
              <div className="text-2xl mb-3">{group.icon}</div>
              <div className="text-xs font-bold text-[#1A3557] mb-3 tracking-wide">{group.title}</div>
              <div className="flex flex-wrap gap-1.5">
                {group.tags.map((tag) => (
                  <span key={tag} className="bg-white text-[#64748B] text-[11px] font-medium px-2.5 py-1 rounded border border-[#E2E8F0]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
