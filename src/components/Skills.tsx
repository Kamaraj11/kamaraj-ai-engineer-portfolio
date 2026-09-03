import { motion } from 'framer-motion';
import {
  Code2, Sparkles, Bot, BrainCircuit, BarChart3, Globe,
  Database, Server, Workflow, Wrench, type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { useInView } from '@/hooks/useInView';

const iconMap: Record<string, LucideIcon> = {
  Code2, Sparkles, Bot, BrainCircuit, BarChart3, Globe,
  Database, Server, Workflow, Wrench,
};

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">// Technical Skills</span>
          <h2 className="section-title mt-3">Technical Skills</h2>
          <p className="mt-4 max-w-2xl text-gray-400">
            The tools and technologies I use to build AI systems — grouped by domain, not
            by percentage bars.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="glass-card group p-5 transition-colors hover:border-accent/30"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-border bg-bg-800 text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-bold text-white">{cat.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
