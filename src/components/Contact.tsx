import { motion } from 'framer-motion'
import { Mail, MessageSquare, ExternalLink, Send } from 'lucide-react'

export default function Contact() {
  const contactLinks = [
    {
      href: "mailto:mnhmuhammadnurhadi@gmail.com",
      icon: Mail,
      label: "Email",
      color: "from-blue-500 to-cyan-500"
    },
    {
      href: "https://wa.me/6285883797751",
      icon: MessageSquare,
      label: "WhatsApp",
      color: "from-green-500 to-emerald-500"
    },
    {
      href: "https://www.linkedin.com/in/muhamad-nur-hadi-373087265/",
      icon: ExternalLink,
      label: "LinkedIn",
      color: "from-blue-600 to-blue-400"
    },
    {
      href: "https://github.com/mnhmuhammadnurhadi-7",
      icon: ExternalLink,
      label: "GitHub",
      color: "from-zinc-600 to-zinc-400"
    },
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Send className="w-5 h-5 text-blue-400" />
            <p className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase">Let's Connect</p>
          </motion.div>
          
          <h2 className="font-['Sora'] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Got a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Project</span>?
          </h2>
          
          <motion.p 
            className="text-zinc-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Open to part-time remote engagements in project coordination, system analysis, SEO content, or digital operations.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  boxShadow: `0 20px 40px -15px rgba(59, 130, 246, 0.3)`,
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 text-white text-sm font-bold px-8 py-5 rounded-xl transition-all hover:border-zinc-600 overflow-hidden"
              >
                {/* Hover gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <motion.div
                  className="relative z-10"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                </motion.div>
                <span className="relative z-10">{link.label}</span>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-zinc-500 text-sm mt-12"
        >
          Response time: Usually within 24 hours
        </motion.p>
      </div>
    </section>
  );
}
