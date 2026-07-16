import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 md:px-10 py-24 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite',
        }}
      />
      
      {/* Floating Gradient Orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: ("easeInOut" as any)
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: ("easeInOut" as any),
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: ("easeInOut" as any)
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 uppercase tracking-[0.2em] hover:border-zinc-500 hover:text-white transition-all cursor-default">
            <motion.span 
              className="w-2 h-2 bg-emerald-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available for Remote Work
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="font-['Sora'] text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tight mb-8"
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Muhammad
          </motion.span>
          <br />
          <motion.span 
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-300% animate-gradient"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nur Hadi
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: ("linear" as any) }}
          >
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </motion.div>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            Digital Project Coordinator & System Analyst
          </p>
          <motion.div
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 3, repeat: Infinity, ease: ("linear" as any) }}
          >
            <Zap className="w-6 h-6 text-blue-400" />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-2xl mb-12"
        >
          Bridging technical execution and strategic coordination to ship impactful products that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-3 md:gap-4"
        >
          <motion.a 
            href="#projects" 
            className="group inline-flex items-center gap-2 bg-white text-zinc-950 text-sm font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a 
            href="#contact" 
            className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 text-sm font-bold px-8 py-4 rounded-lg hover:bg-zinc-900 hover:border-zinc-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        @keyframes animate-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-300% {
          background-size: 300% 300%;
        }
        .animate-gradient {
          animation: animate-gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
