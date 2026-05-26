import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../data';

function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/25 rounded-full text-cyan-400 text-sm font-medium mb-4">
              Education
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white section-title">
              Academic Journey
            </h2>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/60 via-cyan-600/40 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className={`relative flex gap-8 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-xl shadow-lg`}>
                      {edu.icon}
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden sm:block flex-1" />

                  {/* Card */}
                  <div className={`flex-1 ml-20 sm:ml-0 ${i % 2 === 0 ? 'sm:pr-16' : 'sm:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="glass rounded-2xl p-6 border border-purple-900/30 hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r ${edu.color} text-white`}>
                        {edu.period}
                      </div>
                      <h3 className="font-display text-lg font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-purple-300 font-medium text-sm mb-1">{edu.institution}</p>
                      <p className="text-slate-500 text-xs mb-3">{edu.location}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">Score:</span>
                        <span className={`text-sm font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                          {edu.score}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Note */}
        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 glass-light px-5 py-3 rounded-xl border border-slate-700/40">
              <span className="text-green-400 text-lg">🎯</span>
              <span className="text-slate-300 text-sm">
                Continuously upskilling through certifications and real-world project experience
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
