import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Bot, Workflow } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

type Diagram = {
  id: string;
  label: string;
  icon: typeof Database;
  nodes: string[];
  color: string;
};

const diagrams: Diagram[] = [
  {
    id: 'rag',
    label: 'RAG System',
    icon: Database,
    color: 'text-accent',
    nodes: ['Documents', 'Chunking', 'Embeddings', 'Vector Database', 'Retriever', 'Context', 'LLM', 'Answer'],
  },
  {
    id: 'mcp',
    label: 'MCP Agent',
    icon: Bot,
    color: 'text-accent',
    nodes: ['User', 'LLM', 'MCP Client', 'MCP Server', 'Tools', 'Database / API', 'Response'],
  },
  {
    id: 'etl',
    label: 'ETL Pipeline',
    icon: Workflow,
    color: 'text-accent',
    nodes: ['Source', 'Extract', 'Transform', 'Validate', 'Load', 'Airflow DAG'],
  },
];

function AnimatedDiagram({ diagram, inView }: { diagram: Diagram; inView: boolean }) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="relative flex flex-col items-center gap-1 py-6">
      {diagram.nodes.map((node, i) => {
        const isLast = i === diagram.nodes.length - 1;
        return (
          <div key={node} className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              className={`relative flex items-center gap-2 rounded-xl border px-5 py-3 font-mono text-sm font-semibold transition-colors ${
                i === 0
                  ? 'border-accent/40 bg-accent/10 text-accent'
                  : isLast
                  ? 'border-accent/50 bg-accent/15 text-white'
                  : 'border-surface-border bg-bg-800 text-gray-300'
              }`}
            >
              <span className="font-mono text-[10px] text-gray-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              {node}
            </motion.div>

            {!isLast && (
              <div className="relative flex h-8 w-px flex-col items-center justify-center overflow-hidden bg-surface-border">
                {!prefersReducedMotion && inView && (
                  <motion.div
                    initial={{ y: '-100%' }}
                    animate={{ y: '100%' }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.12,
                      ease: 'easeInOut',
                    }}
                    className="absolute h-4 w-px bg-gradient-to-b from-accent to-transparent"
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ArchitectureLab() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 sm:py-24">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">// Architecture Lab</span>
          <h2 className="section-title mt-3">Architecture Lab</h2>
          <p className="mt-4 max-w-2xl text-gray-400">
            Interactive system diagrams showing how data flows through the AI
            architectures I build. Select a system to explore.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2">
          {diagrams.map((d, i) => {
            const Icon = d.icon;
            return (
              <button
                key={d.id}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
                  active === i
                    ? 'border-accent/40 bg-accent/10 text-white'
                    : 'border-surface-border bg-surface/50 text-gray-400 hover:text-white'
                }`}
              >
                <Icon size={16} className={active === i ? 'text-accent' : ''} />
                {d.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 glass-card overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={diagrams[active].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid items-center gap-6 p-6 lg:grid-cols-5 lg:p-10"
            >
              <div className="lg:col-span-3">
                <AnimatedDiagram diagram={diagrams[active]} inView={inView} />
              </div>
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    System Flow
                  </span>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {diagrams[active].label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {active === 0 &&
                    'Documents are chunked into passages, embedded into vectors, and stored in a vector database. At query time, the retriever finds the most relevant chunks, passes them as context to the LLM, and generates a grounded answer.'}
                  {active === 1 &&
                    'The user asks a question. The LLM reasons about intent, the MCP client calls the appropriate MCP server, which invokes tools against a database or API, and the result is translated back into a natural-language response.'}
                  {active === 2 &&
                    'Data is extracted from a source, transformed into the target schema, validated for quality, loaded into the destination, and orchestrated as an Airflow DAG with scheduling and retry logic.'}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {diagrams[active].nodes.map((n) => (
                    <span key={n} className="tech-badge">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
