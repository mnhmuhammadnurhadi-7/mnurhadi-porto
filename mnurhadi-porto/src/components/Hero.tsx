export default function Hero() {
  return (
    <section className="min-h-[88vh] flex items-center justify-center px-6 md:px-10 py-20 bg-gradient-to-br from-[#0F2137] via-[#1A3557] to-[#1E4A7A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-7 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
          Open to Remote Work
        </div>

        <h1 className="font-['Sora'] text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
          Muhammad<br />
          <span className="text-blue-400">Nur Hadi</span>
        </h1>

        <p className="text-[#94A3B8] text-base leading-relaxed max-w-lg mx-auto mb-9">
          Digital Project Coordinator with hands-on experience in system design, full-stack development, and SEO content — bridging coordination and technical execution.
        </p>

        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {['Project Management', 'System Analysis', 'SEO & Content', 'Full-Stack Dev', 'UI/UX Design'].map((tag) => (
            <span key={tag} className="bg-white/10 border border-white/15 text-[#CBD5E1] text-xs font-medium px-4 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-7 py-3 rounded-lg transition-all hover:-translate-y-0.5">
            View My Work
          </a>
          <a href="#contact" className="bg-white/10 border border-white/20 text-[#E2E8F0] text-sm font-semibold px-7 py-3 rounded-lg hover:bg-white/15 transition-all">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
