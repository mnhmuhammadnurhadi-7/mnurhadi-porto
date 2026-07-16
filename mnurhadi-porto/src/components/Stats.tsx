const stats = [
  { num: '2×', label: 'National Finalist' },
  { num: '1', label: 'Production Web App' },
  { num: '#1', label: 'Google Ranked Article' },
  { num: '4', label: 'Active Org Roles' },
  { num: '🇹🇭', label: 'International Exposure' },
];

export default function Stats() {
  return (
    <div className="bg-white border-b border-[#E2E8F0] px-6 md:px-10">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-around gap-4 py-7">
        {stats.map((s) => (
          <div key={s.label} className="text-center min-w-[110px]">
            <div className="font-['Sora'] text-2xl font-extrabold text-[#1A3557] tracking-tight">{s.num}</div>
            <div className="text-xs text-[#64748B] font-medium mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
