import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800 px-6 md:px-10 flex items-center justify-between h-16"
    >
      <span className="font-['Sora'] font-extrabold text-white text-lg tracking-tight">
        MNH
      </span>
      <ul className="flex gap-6 md:gap-8 list-none">
        {['Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-zinc-400 text-sm font-medium hover:text-white transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
