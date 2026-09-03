import { motion } from 'framer-motion';
import { Sparkles, Database, Bot, Workflow, BrainCircuit } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const areas = [
  {
    num: '01',
    title: 'Generative AI',
    icon: Sparkles,
    skills: ['LLMs', 'Prompt Engineering', 'Transformers', 'NLP'],
  },
  {
    num: '02',
    title: 'Knowledge Systems',
    icon: Database,
    skills: ['RAG', 'Embeddings', 'Vector Search', 'ChromaDB', 'Document Intelligence'],
  },
  {
    num: '03',
    title: 'Agentic AI',
    icon: Bot,
    skills: ['AI Agents', 'MCP', 'Tool Integration', 'Multi-Step Workflows'],
  },
  {
    num: '04',
    title: 'AI + Data Engineering',
    icon: Workflow,
    skills: ['Web Scraping', 'ETL', 'Airflow', 'Data Processing', 'Workflow Automation'],
  },
  {
    num: '05',
    title: 'Machine Learning',
    icon: BrainCircuit,
    skills: ['Classification', 'Regression', 'Decision Trees', 'Random Forest', 'Model Evaluation'],
  },
];

export default function EngineeringFocus() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-24">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">// Engineering Focus</span>
          <h2 className="section-title mt-3">Engineering Focus</h2>
          <p className="mt-4 max-w-2xl text-gray-400">
            Five core areas where I build intelligent systems — from generative AI and
            knowledge retrieval to agentic workflows and machine learning.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`glass-card group relative overflow-hidden p-6 transition-colors hover:border-accent/30 ${
                  i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-surface-border bg-bg-800 text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
                    <Icon size={22} />
                  </div>
                  <span className="font-mono text-2xl font-bold text-surface-border">
                    {area.num}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">{area.title}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="absolute -bottom-px -right-px h-24 w-24 rounded-tl-3xl bg-gradient-to-tl from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
