import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const focusAreas = [
  'Grant intelligence',
  'Natural Language-to-SQL',
  'RAG document querying',
  'AI-powered web scraping',
  'ETL orchestration',
  'Customer churn prediction',
];

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="py-20 sm:py-28">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">// About</span>
          <h2 className="section-title mt-3">About Me</h2>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-gray-300">
              Kamaraj B is an{' '}
              <span className="font-semibold text-white">AI Engineer</span> focused on
              building practical AI-powered systems using Python, LLMs, RAG, AI Agents,
              MCP, Machine Learning, and automation.
            </p>
            <p className="mt-4 leading-relaxed text-gray-400">
              Currently working as a Gen AI and Agentic AI Intern at Cubeaisolutions Tech
              Pvt Ltd, building RAG pipelines, agentic workflows, and document-processing
              automation with LangChain, ChromaDB, and MCP.
            </p>
            <p className="mt-4 leading-relaxed text-gray-400">
              He has hands-on experience building systems involving grant intelligence,
              natural language-to-SQL, RAG document querying, AI-powered web scraping, ETL
              orchestration, and customer churn prediction — connecting models, data,
              tools, and APIs into useful real-world applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                Systems Built
              </h3>
              <ul className="mt-4 space-y-3">
                {focusAreas.map((area, i) => (
                  <motion.li
                    key={area}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-gray-300">{area}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
