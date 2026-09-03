import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import { useInView } from '@/hooks/useInView';
import ProjectCaseStudy from './ProjectCaseStudy';

const filters = ['ALL', 'GenAI', 'RAG', 'AI Agents', 'MCP', 'Machine Learning', 'Data Engineering', 'Automation'];

function ProjectCard({ project, onOpen, index, inView }: { project: Project; onOpen: () => void; index: number; inView: boolean }) {
  const featured = project.featured;

  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onOpen}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-surface/50 p-6 text-left transition-all hover:border-accent/30 hover:bg-surface/70 ${
        featured ? 'lg:col-span-2 border-surface-border' : 'border-surface-border'
      }`}
    >
      {featured && (
        <span className="absolute right-4 top-4 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
          Flagship
        </span>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, featured ? 4 : 3).map((tag) => (
          <span key={tag} className="tech-badge">
            {tag}
          </span>
        ))}
      </div>

      <h3 className={`mt-4 font-bold text-white transition-colors group-hover:text-accent ${featured ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-400">{project.description}</p>

      {project.caseStudy.results && project.caseStudy.results.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {project.caseStudy.results.slice(0, featured ? 3 : 2).map((r) => (
            <div key={r.label} className="flex items-center gap-1.5 rounded-lg border border-surface-border bg-bg-800/50 px-3 py-1.5">
              <span className="font-mono text-sm font-bold text-accent">{r.value}</span>
              <span className="text-[11px] text-gray-500">{r.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-gray-400 transition-colors group-hover:text-accent">
        View Case Study
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.button>
  );
}

export default function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === 'ALL') return projects;
    return projects.filter((p) => p.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">// Featured Projects</span>
          <h2 className="section-title mt-3">Featured Projects</h2>
          <p className="mt-4 max-w-2xl text-gray-400">
            Engineering case studies — from problem to architecture to impact. Click any
            project for the full technical breakdown.
          </p>
        </motion.div>

        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
          <Filter size={16} className="flex-shrink-0 text-gray-600" />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex-shrink-0 rounded-lg border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeFilter === f
                  ? 'border-accent/40 bg-accent/10 text-white'
                  : 'border-surface-border bg-surface/50 text-gray-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={inView}
                onOpen={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectCaseStudy project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
