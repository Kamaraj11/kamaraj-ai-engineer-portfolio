import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Github, ExternalLink, Lightbulb, Wrench, Layers, TrendingUp } from 'lucide-react';
import type { Project } from '@/data/projects';

function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`flex w-full max-w-xs items-center gap-2 rounded-lg border px-4 py-2.5 font-mono text-xs font-semibold ${
                i === 0
                  ? 'border-accent/40 bg-accent/10 text-accent'
                  : isLast
                  ? 'border-accent/50 bg-accent/15 text-white'
                  : 'border-surface-border bg-bg-800 text-gray-300'
              }`}
            >
              <span className="text-[10px] text-gray-600">{String(i + 1).padStart(2, '0')}</span>
              {step}
            </div>
            {!isLast && (
              <div className="h-5 w-px bg-surface-border">
                <ArrowRight size={10} className="-rotate-90 text-gray-700" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function CaseStudySection({ num, title, icon: Icon, children }: { num: string; title: string; icon: typeof Layers; children: React.ReactNode }) {
  return (
    <div className="border-t border-surface-border pt-6">
      <div className="flex items-center gap-2.5">
        <span className="font-mono text-xs font-bold text-accent">{num}</span>
        <Icon size={16} className="text-accent" />
        <h4 className="text-sm font-bold uppercase tracking-wider text-white">{title}</h4>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function ProjectCaseStudy({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-bg/90 p-4 backdrop-blur-md sm:p-6 lg:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto w-full max-w-3xl rounded-2xl border border-surface-border bg-surface shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-2xl border-b border-surface-border bg-surface/95 p-6 backdrop-blur-md">
              <div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 rounded-lg border border-surface-border bg-bg-800 p-2 text-gray-400 transition-colors hover:text-white"
                aria-label="Close case study"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="max-h-[calc(100vh-12rem)] overflow-y-auto p-6 sm:p-8">
              <CaseStudySection num="01" title="Overview" icon={Layers}>
                <p className="text-sm leading-relaxed text-gray-300">{project.caseStudy.overview}</p>
              </CaseStudySection>

              <CaseStudySection num="02" title="Problem" icon={Lightbulb}>
                <p className="text-sm leading-relaxed text-gray-300">{project.caseStudy.problem}</p>
              </CaseStudySection>

              <CaseStudySection num="03" title="Solution" icon={Lightbulb}>
                <p className="text-sm leading-relaxed text-gray-300">{project.caseStudy.solution}</p>
              </CaseStudySection>

              <CaseStudySection num="04" title="Architecture" icon={Layers}>
                <ArchitectureFlow steps={project.caseStudy.architecture} />
              </CaseStudySection>

              <CaseStudySection num="05" title="Technical Implementation" icon={Wrench}>
                <ul className="space-y-2">
                  {project.caseStudy.technicalImplementation.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CaseStudySection>

              <CaseStudySection num="06" title="Technology Stack" icon={Wrench}>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </CaseStudySection>

              {project.caseStudy.results && project.caseStudy.results.length > 0 && (
                <CaseStudySection num="07" title="Results / Metrics" icon={TrendingUp}>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {project.caseStudy.results.map((r) => (
                      <div key={r.label} className="rounded-xl border border-surface-border bg-bg-800/50 p-4">
                        <div className="text-2xl font-bold text-accent">{r.value}</div>
                        <div className="mt-1 text-xs text-gray-400">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </CaseStudySection>
              )}

              <CaseStudySection num="08" title="Engineering Decisions" icon={Lightbulb}>
                <ul className="space-y-2">
                  {project.caseStudy.engineeringDecisions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CaseStudySection>

              {project.caseStudy.links.length > 0 && (
                <CaseStudySection num="09" title="GitHub / Demo" icon={ExternalLink}>
                  <div className="flex flex-wrap gap-3">
                    {project.caseStudy.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                      >
                        <Github size={16} /> {link.label}
                      </a>
                    ))}
                  </div>
                </CaseStudySection>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
