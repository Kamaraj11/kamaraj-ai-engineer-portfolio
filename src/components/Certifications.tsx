import { motion } from 'framer-motion';
import { Award, ExternalLink, Plug, Link2 } from 'lucide-react';
import { certifications } from '@/data/certifications';
import { useInView } from '@/hooks/useInView';

const highlights = [
  {
    title: 'MCP',
    icon: Plug,
    points: ['Architecture', 'Clients', 'Servers', 'Tools', 'Resources', 'Prompts', 'Standardized tool integration'],
  },
  {
    title: 'LangChain',
    icon: Link2,
    points: ['LLM Integration', 'Prompt Workflows', 'Chains', 'AI Applications', 'Reliable Agents', 'Agentic Workflows'],
  },
];

export default function Certifications() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="certifications" className="py-20 sm:py-28">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">// Certifications</span>
          <h2 className="section-title mt-3">Certifications</h2>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="glass-card group flex flex-col p-5 transition-colors hover:border-accent/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-border bg-bg-800 text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
                <Award size={18} />
              </div>
              <h3 className="mt-4 text-sm font-bold leading-snug text-white">{cert.title}</h3>
              <p className="mt-1.5 text-xs font-medium text-accent">{cert.issuer}</p>
              {cert.date && (
                <p className="mt-0.5 font-mono text-[11px] text-gray-600">{cert.date}</p>
              )}
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gray-400 transition-colors hover:text-accent"
                >
                  Verify Credential <ExternalLink size={12} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certification Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8"
        >
          <h3 className="font-mono text-xs uppercase tracking-wider text-accent">Certification Highlights</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {highlights.map((hl) => {
              const Icon = hl.icon;
              return (
                <div key={hl.title} className="glass-card p-5">
                  <div className="flex items-center gap-2.5">
                    <Icon size={18} className="text-accent" />
                    <h4 className="text-base font-bold text-white">{hl.title}</h4>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {hl.points.map((p) => (
                      <span key={p} className="tech-badge">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
