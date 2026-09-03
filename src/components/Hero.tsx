import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { PERSONAL, RESUME_URL } from '@/data/personal';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <div className="section-container grid min-h-[calc(100vh-4rem)] items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12 lg:py-0">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              AI Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Building Intelligent Systems with{' '}
            <span className="bg-gradient-to-r from-accent to-accent-300 bg-clip-text text-transparent">
              AI, LLMs &amp; Agents
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            AI Engineer focused on building real-world AI applications, RAG systems,
            intelligent agents, machine learning solutions, and automation workflows
            with Python.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-3 max-w-xl text-sm leading-relaxed text-gray-500"
          >
            I build practical AI systems that connect models, data, tools, APIs, and
            automation into useful real-world applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={16} /> GitHub
            </a>
            <a href={RESUME_URL} download="Kamaraj_B_AI_Engineer_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex items-center gap-5"
          >
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="text-gray-500 transition-colors hover:text-accent"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-full bg-accent/10 blur-2xl" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/30 via-accent/10 to-transparent" />

            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-accent/30 bg-surface sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <img
                src="/sathish.jpeg"
                alt="Kamaraj B — AI Engineer"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-bg-950/60 via-transparent to-transparent" />
            </div>

            {/* Name badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-2xl border border-surface-border bg-bg-900/95 px-4 py-2.5 shadow-2xl shadow-black/40 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-sm font-bold text-white">Kamaraj B</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                AI Engineer
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gray-600">
            Scroll
          </span>
          <div className="flex h-8 w-5 justify-center rounded-full border border-surface-border">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-1.5 h-1.5 w-1 rounded-full bg-accent"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
