import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';

type Metric = {
  value: number;
  suffix: string;
  label: string;
  context: string;
};

const metrics: Metric[] = [
  { value: 500, suffix: '+', label: 'Funding opportunities processed', context: 'Grant Intelligence Platform' },
  { value: 10, suffix: '+', label: 'Funding sources', context: 'Grant Intelligence Platform' },
  { value: 60, suffix: '%', label: 'Manual research time reduced', context: 'Grant Intelligence Platform' },
  { value: 50, suffix: '%', label: 'Manual document-processing effort reduced', context: 'Gen AI Internship' },
  { value: 40, suffix: '%', label: 'Manual SQL query-writing time reduced', context: 'MCP AI Database Agent' },
  { value: 50, suffix: '+', label: 'Websites scraped', context: 'Web Scraping Internship' },
  { value: 7000, suffix: '+', label: 'Customer records analyzed', context: 'Churn Prediction System' },
  { value: 70, suffix: '%', label: 'Churn recall achieved', context: 'Churn Prediction System' },
  { value: 75, suffix: '%', label: 'Classification accuracy', context: 'Churn Prediction System' },
];

function MetricCard({ metric, index, inView }: { metric: Metric; index: number; inView: boolean }) {
  const count = useCountUp(metric.value, 2000, inView);
  const display = metric.value >= 1000 ? `${(count / 1000).toFixed(count >= metric.value ? 0 : 1).replace(/\.0$/, '')}K` : count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="glass-card group relative overflow-hidden p-6 transition-colors hover:border-accent/30"
    >
      <div className="flex items-baseline gap-0.5">
        <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {display}
        </span>
        <span className="text-3xl font-bold text-accent sm:text-4xl">{metric.suffix}</span>
      </div>
      <p className="mt-3 text-sm font-medium text-gray-300">{metric.label}</p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-gray-600">
        {metric.context}
      </p>
      <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-300 transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}

export default function Metrics() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-24">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">// Engineering Impact</span>
          <h2 className="section-title mt-3">Engineering Impact</h2>
          <p className="mt-4 max-w-2xl text-gray-400">
            Measurable results across the systems I've built — each metric tied to its
            project context.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
