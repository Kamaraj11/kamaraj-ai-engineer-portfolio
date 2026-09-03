import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Copy,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { PERSONAL } from '@/data/personal';
import { useInView } from '@/hooks/useInView';

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const emptyForm: ContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [form, setForm] = useState<ContactForm>(emptyForm);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = form.subject || `Portfolio enquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-surface-border py-20 sm:py-24 lg:py-28">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">// Contact</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Build Intelligent Systems.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base">
            Open to opportunities involving AI Engineering, Generative AI, LLM applications,
            RAG systems, AI Agents, Python, Machine Learning and intelligent automation.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-7 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="rounded-2xl border border-surface-border bg-surface/55 p-5 sm:p-6"
          >
            <div className="space-y-3">
              <div className="rounded-xl border border-surface-border bg-bg-800/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-gray-500">
                    Direct email
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="rounded-lg border border-surface-border p-2 text-gray-400 transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    aria-label={copied ? 'Email copied' : 'Copy email address'}
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="mt-3 block break-all font-mono text-xs font-semibold text-accent transition-colors hover:text-accent-300"
                >
                  {PERSONAL.email}
                </a>
                {copied && <p className="mt-2 text-[11px] text-accent">Copied to clipboard</p>}
              </div>

              <div className="rounded-xl border border-surface-border bg-bg-800/70 p-4">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-gray-500">
                  <Phone size={13} className="text-accent" /> Phone
                </div>
                <a
                  href={`tel:${PERSONAL.phone.replace(/\s/g, '')}`}
                  className="mt-3 block font-mono text-sm font-semibold text-gray-200 transition-colors hover:text-accent"
                >
                  {PERSONAL.phone}
                </a>
              </div>

              <div className="rounded-xl border border-surface-border bg-bg-800/70 p-4">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-gray-500">
                  <MapPin size={13} className="text-accent" /> Location
                </div>
                <p className="mt-3 text-sm font-medium text-gray-200">{PERSONAL.location}</p>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <a href={`mailto:${PERSONAL.email}`} className="btn-primary w-full !py-3 text-xs">
                <Mail size={15} /> Send Direct Email
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full !py-3 text-xs"
              >
                <Linkedin size={15} /> Connect on LinkedIn
              </a>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full !py-3 text-xs"
              >
                <Github size={15} /> Follow on GitHub
              </a>
            </div>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            onSubmit={submitForm}
            className="rounded-2xl border border-surface-border bg-surface/55 p-5 sm:p-6 lg:p-7"
          >
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <Send size={17} className="text-accent" />
              Send a Direct Inquiry
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="field-label">Your name</span>
                <input
                  required
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="contact-input"
                />
              </label>
              <label className="block">
                <span className="field-label">Email address <b>*</b></span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  placeholder="name@company.com"
                  className="contact-input"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="field-label">Subject / opportunity type</span>
              <input
                value={form.subject}
                onChange={(event) => updateField('subject', event.target.value)}
                placeholder="e.g. AI Engineer Role / RAG System Consulting"
                className="contact-input"
              />
            </label>

            <label className="mt-4 block">
              <span className="field-label">Message details <b>*</b></span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                placeholder="Tell me about your team, system goals, or project scope..."
                className="contact-input resize-y"
              />
            </label>

            <button type="submit" className="btn-primary mt-5 w-full !py-3">
              <Send size={15} /> Submit Message
            </button>
            {submitted && (
              <p role="status" className="mt-3 text-center text-xs text-accent">
                Your email app is opening with the message ready to send.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
