import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Eye, FileText } from 'lucide-react';

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

const highlights = [
  { label: 'B.Tech Data Science', sub: 'IARE Hyderabad • CGPA 7.55', icon: '🎓' },
  { label: '5+ Certifications', sub: 'DeepLearning.AI, upGrad, Udemy', icon: '🏅' },
  { label: '7+ Projects', sub: 'ML, Data Analytics, Full Stack', icon: '🚀' },
  { label: '150+ LeetCode', sub: 'DSA & Problem Solving', icon: '⚡' },
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/25 rounded-full text-purple-400 text-sm font-medium mb-4">
              Resume
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white section-title">
              My Resume
            </h2>
          </div>
        </FadeIn>

        {/* Resume Card */}
        <FadeIn delay={0.15}>
          <div className="glass rounded-2xl overflow-hidden border border-purple-500/20">
            {/* Top bar */}
            <div className="h-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-green-400" />

            <div className="p-8">
              {/* Preview mockup */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-700/40 p-6 mb-8 min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">
                {/* PDF preview or placeholder */}
                <object
                  data="/resume.pdf"
                  type="application/pdf"
                  width="100%"
                  height="400"
                  className="rounded-lg"
                >
                  {/* Fallback when PDF not loaded */}
                  <div className="flex flex-col items-center gap-4 py-8">
                    <div className="w-20 h-24 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 rounded-lg border border-purple-500/30 flex items-center justify-center">
                      <FileText size={32} className="text-purple-400" />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-semibold mb-1">Sri Varun Singari</p>
                      <p className="text-slate-400 text-sm">Data Science & AI Engineer</p>
                      <p className="text-slate-500 text-xs mt-2">
                        Add your <code className="text-purple-400 bg-purple-500/10 px-1 py-0.5 rounded">resume.pdf</code> to the <code className="text-cyan-400 bg-cyan-500/10 px-1 py-0.5 rounded">public/</code> folder
                      </p>
                    </div>
                  </div>
                </object>

                {/* Shimmer overlay */}
                <div className="absolute inset-0 pointer-events-none shimmer rounded-xl" />
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="glass-light rounded-xl p-3 text-center border border-slate-700/30 hover:border-purple-500/30 transition-colors"
                  >
                    <div className="text-2xl mb-1">{h.icon}</div>
                    <div className="text-white text-xs font-semibold mb-0.5">{h.label}</div>
                    <div className="text-slate-500 text-xs">{h.sub}</div>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="/resume.pdf"
                  download="SriVarun_Singari_Resume.pdf"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                >
                  <Download size={18} /> Download Resume
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-3 glass-light text-slate-200 font-semibold rounded-xl border border-slate-700/50 hover:border-purple-400/40 transition-all duration-300"
                >
                  <Eye size={18} /> View Full Resume
                </motion.a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
