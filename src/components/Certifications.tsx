import { certifications } from '../data/projects';
import { useState } from 'react';

export default function Certifications() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">Credentials</p>
      <h2 className="font-['Sora'] text-3xl font-extrabold text-[#1A3557] tracking-tight mb-12">Certifications</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            onClick={() => setSelected(cert.image)}
            className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <img src={cert.image} alt={cert.title} className="w-full h-32 object-cover" />
            <div className="p-3">
              <p className="text-xs font-semibold text-[#0F172A] leading-tight">{cert.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 cursor-pointer" onClick={() => setSelected(null)}>
          <img src={selected} alt="Certificate" className="max-w-2xl w-full rounded-xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}
