import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { experiences } from '@/data/experience';

export default function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">// Experience</span>
          <h2 className="section-title mt-3">Experience</h2>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-surface-border sm:left-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-2 left-4 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:left-1/2 ${
                    i % 2 === 0 ? 'sm:left-auto sm:right-0 sm:translate-x-1/2' : 'sm:left-0 sm:-translate-x-1/2'
                  }`}
                >
                  <span className={`h-3 w-3 rounded-full border-2 ${exp.current ? 'border-accent bg-accent' : 'border-gray-600 bg-bg-900'}`} />
                  {exp.current && (
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent opacity-40" />
                  )}
                </div>

                <div className="glass-card p-5 transition-colors hover:border-accent/30">
                  <div className={`flex items-center gap-2 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Current
                      </span>
                    )}
                    <span className="font-mono text-xs text-gray-500">{exp.period}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-sm font-medium text-accent">{exp.company}</p>
                  <ul className={`mt-4 space-y-2 ${i % 2 === 0 ? 'sm:text-right' : ''}`}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} className={`flex items-start gap-2 text-sm text-gray-400 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent/60" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
