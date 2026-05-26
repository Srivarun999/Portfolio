import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code2, Database, BarChart2, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data';

const highlights = [
  { icon: <Brain size={20} />, label: 'Machine Learning', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/25' },
  { icon: <Database size={20} />, label: 'Data Analytics', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/25' },
  { icon: <Code2 size={20} />, label: 'Full Stack Dev', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/25' },
  { icon: <BarChart2 size={20} />, label: 'AI Engineering', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/25' },
];

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/25 rounded-full text-purple-400 text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white section-title">
              Who Am I?
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Story */}
          <div>
            <FadeIn delay={0.1} direction="right">
              <div className="glass rounded-2xl p-8 mb-6">
                <h3 className="font-display text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">👋</span> My Story
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  I'm <span className="text-purple-300 font-semibold">Sri Varun Singari</span>, a Data Science undergraduate at the{' '}
                  <span className="text-cyan-300">Institute of Aeronautical Engineering, Hyderabad</span>, passionate about Machine Learning, Artificial Intelligence, Data Analytics, and Full Stack Development.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  I enjoy solving real-world problems using intelligent systems and data-driven solutions. My expertise includes Python development, machine learning model building, exploratory data analysis, predictive analytics, and modern web technologies.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  I continuously upskill through advanced certifications, real-world projects, competitive coding practice, and AI-focused development — always pushing toward building impactful, scalable solutions.
                </p>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2}>
              <div className="glass-light rounded-2xl p-6 border border-slate-700/40">
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest text-slate-400">
                  Contact Info
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: <Mail size={16} />, text: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'text-purple-400' },
                    { icon: <Phone size={16} />, text: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'text-cyan-400' },
                    { icon: <MapPin size={16} />, text: personalInfo.location, color: 'text-green-400' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className={item.color}>{item.icon}</span>
                      {item.href ? (
                        <a href={item.href} className="text-slate-300 hover:text-white text-sm transition-colors">
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-slate-300 text-sm">{item.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — Highlights + Stats */}
          <div>
            {/* Focus Areas */}
            <FadeIn delay={0.15} direction="left">
              <div className="mb-6">
                <h3 className="font-display text-lg font-semibold text-white mb-4">Focus Areas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((h, i) => (
                    <motion.div
                      key={h.label}
                      whileHover={{ scale: 1.03 }}
                      className={`flex items-center gap-3 p-4 rounded-xl border ${h.bg} transition-all duration-200`}
                    >
                      <span className={h.color}>{h.icon}</span>
                      <span className="text-slate-200 text-sm font-medium">{h.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Stats Grid */}
            <FadeIn delay={0.25} direction="left">
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { value: '7.55', label: 'CGPA', suffix: '' },
                  { value: '150', label: 'LeetCode', suffix: '+' },
                  { value: '7', label: 'Projects', suffix: '+' },
                  { value: '5', label: 'Certs', suffix: '' },
                  { value: '262', label: 'HackOS', suffix: '' },
                  { value: '2026', label: 'Batch', suffix: '' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-light rounded-xl p-4 text-center border border-slate-700/30 hover:border-purple-500/30 transition-colors"
                  >
                    <div className="font-display text-2xl font-bold gradient-text">
                      {stat.value}<span className="text-lg">{stat.suffix}</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Current Status */}
            <FadeIn delay={0.3}>
              <div className="glass rounded-xl p-5 border border-green-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-semibold">Currently</span>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">▸</span>
                    Pursuing B.Tech in Data Science @ IARE Hyderabad
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">▸</span>
                    upGrad Advanced Certificate in Data Science with Gen AI
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">▸</span>
                    Building ML & Full Stack projects for portfolio
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
