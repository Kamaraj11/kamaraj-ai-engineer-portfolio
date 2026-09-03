import { motion } from 'framer-motion';
import { Github, ExternalLink, AlertCircle } from 'lucide-react';
import { PERSONAL } from '@/data/personal';
import { useInView } from '@/hooks/useInView';

const repos = [
  { name: 'MCP AI Database Agent', url: 'https://github.com/Kamaraj11' },
  { name: 'RAG Document Query Engine', url: 'https://github.com/Kamaraj11' },
  { name: 'Airflow ETL Orchestration Pipeline', url: 'https://github.com/Kamaraj11' },
];

export default function GitHub() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-24">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">// Open Source &amp; Projects</span>
          <h2 className="section-title mt-3">Open Source &amp; Projects</h2>
          <p className="mt-4 max-w-2xl text-gray-400">
            Code and repositories for the systems I build. Visit my GitHub profile for the
            full collection.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass-card flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-surface-border bg-bg-800 text-accent">
              <Github size={28} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">{PERSONAL.name}</h3>
            <p className="mt-1 font-mono text-sm text-gray-500">@Kamaraj11</p>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5"
            >
              <Github size={16} /> View GitHub Profile
            </a>
          </motion.div>

          {/* Repos */}
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="glass-card group flex flex-col justify-between p-6 transition-colors hover:border-accent/30"
            >
              <div>
                <div className="flex items-center justify-between">
                  <Github size={18} className="text-gray-500 transition-colors group-hover:text-accent" />
                  <ExternalLink size={14} className="text-gray-600 transition-colors group-hover:text-accent" />
                </div>
                <h3 className="mt-4 text-base font-bold text-white transition-colors group-hover:text-accent">
                  {repo.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-gray-600">Kamaraj11/{repo.name.replace(/\s+/g, '-')}</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-gray-500">
                <AlertCircle size={12} />
                <span>Visit profile to verify repository</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
