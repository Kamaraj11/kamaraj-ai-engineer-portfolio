import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const education = [
  {
    degree: 'B.Tech – Artificial Intelligence and Data Science',
    institution: 'Muthayammal College of Engineering',
    period: '2023 – 2027',
    detail: 'CGPA: 8.03/10',
    icon: GraduationCap,
    primary: true,
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Sri Lakshmi Vidhyalaya Matric Higher Secondary School',
    period: '',
    detail: 'Percentage: 76%',
    icon: BookOpen,
    primary: false,
  },
];

export default function Education() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="education" className="py-20 sm:py-24">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">// Education</span>
          <h2 className="section-title mt-3">Education</h2>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`glass-card p-6 transition-colors hover:border-accent/30 ${
                  edu.primary ? 'border-accent/20' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-surface-border bg-bg-800 text-accent">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-white">{edu.degree}</h3>
                    <p className="mt-1 text-sm text-gray-400">{edu.institution}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      {edu.period && (
                        <span className="font-mono text-xs text-gray-600">{edu.period}</span>
                      )}
                      <span className="rounded-md border border-accent/20 bg-accent/5 px-2 py-0.5 font-mono text-xs font-semibold text-accent">
                        {edu.detail}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
