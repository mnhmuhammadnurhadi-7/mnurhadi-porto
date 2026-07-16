export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] px-6 md:px-10 flex items-center justify-between h-14">
      <span className="font-['Sora'] font-bold text-[#1A3557] text-base tracking-tight">
        MNH · Portfolio
      </span>
      <ul className="flex gap-5 md:gap-7 list-none">
        {['Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-[#64748B] text-sm font-medium hover:text-[#1A3557] transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
