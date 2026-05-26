import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data';

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

const categories = ['All', 'Languages', 'Libraries', 'Tools', 'Web'];

const categoryColors = {
  Languages: 'from-purple-600 to-purple-400',
  Libraries: 'from-cyan-600 to-cyan-400',
  Tools: 'from-green-600 to-green-400',
  Web: 'from-blue-600 to-blue-400',
};

function SkillBar({ skill, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.04, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: index * 0.04 + 0.3, duration: 1, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${categoryColors[skill.category] || 'from-purple-600 to-cyan-500'} rounded-full`}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? skills.technical
    : skills.technical.filter(s => s.category === activeFilter);

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/25 rounded-full text-purple-400 text-sm font-medium mb-4">
              Skills
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white section-title">
              Technical Expertise
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              A comprehensive toolkit spanning Data Science, Machine Learning, and Full Stack Development.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills — Left 2/3 */}
          <div className="lg:col-span-2">
            {/* Filter */}
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeFilter === cat
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/20'
                        : 'glass-light text-slate-400 hover:text-white border border-slate-700/40'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Skill Bars */}
            <FadeIn delay={0.15}>
              <div className="glass rounded-2xl p-6 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {filtered.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Soft Skills — Right 1/3 */}
          <div>
            <FadeIn delay={0.2}>
              <div className="glass rounded-2xl p-6 h-full">
                <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-xl">🌟</span> Soft Skills
                </h3>
                <div className="space-y-3">
                  {skills.soft.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-3 glass-light rounded-xl border border-slate-700/30 hover:border-purple-500/30 transition-all cursor-default"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-slate-200 text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech logos grid */}
                <div className="mt-6 pt-6 border-t border-slate-700/40">
                  <p className="text-xs text-slate-500 mb-3 uppercase tracking-widest">Also Familiar With</p>
                  <div className="flex flex-wrap gap-2">
                    {['Excel', 'Colab', 'VS Code', 'Jupyter', 'Kaggle'].map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/40 rounded-lg text-xs text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
