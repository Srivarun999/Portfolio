import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, X, ChevronRight } from 'lucide-react';
import { projects } from '../data';

function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick(project)}
      className="glass rounded-2xl overflow-hidden border border-purple-900/25 hover:border-purple-500/35 transition-all duration-300 cursor-pointer group h-full flex flex-col"
    >
      {/* Top banner */}
      <div className={`h-2 bg-gradient-to-r ${project.color}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + Category */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl shadow-lg`}>
            {project.icon}
          </div>
          <span className={`text-xs px-2.5 py-1 rounded-full bg-gradient-to-r ${project.color} text-white font-medium`}>
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-slate-500 mb-3">{project.subtitle}</p>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-slate-800/80 border border-slate-700/50 rounded-md text-xs text-slate-400"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 bg-slate-800/80 border border-slate-700/50 rounded-md text-xs text-slate-500">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 glass-light rounded-lg text-slate-400 hover:text-white border border-slate-700/40 hover:border-purple-500/40 transition-all"
              >
                <Github size={14} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 glass-light rounded-lg text-slate-400 hover:text-cyan-400 border border-slate-700/40 hover:border-cyan-500/40 transition-all"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
          <span className="text-xs text-slate-500 flex items-center gap-1 group-hover:text-purple-400 transition-colors">
            Details <ChevronRight size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full glass rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-900/40"
      >
        <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />
        <div className="p-7">
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl`}>
                {project.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">{project.title}</h3>
                <p className="text-sm text-slate-400">{project.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 glass-light rounded-xl text-slate-400 hover:text-white border border-slate-700/40 transition-all"
            >
              <X size={16} />
            </button>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-5">{project.longDescription}</p>

          <div className="mb-5">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-500/10 border border-purple-500/25 rounded-lg text-xs text-purple-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm text-slate-200 font-medium border border-slate-700/50 transition-all"
              >
                <Github size={15} /> View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.color} rounded-xl text-sm text-white font-medium transition-all hover:opacity-90`}
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute left-0 top-0 w-80 h-80 bg-cyan-900/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/25 rounded-full text-cyan-400 text-sm font-medium mb-4">
              Projects
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white section-title">
              Featured Work
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Real-world machine learning, data science, and full stack projects.
            </p>
          </div>
        </FadeIn>

        {/* Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/20'
                    : 'glass-light text-slate-400 hover:text-white border border-slate-700/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.07}>
              <ProjectCard project={project} onClick={setSelected} />
            </FadeIn>
          ))}
        </div>

        {/* GitHub CTA */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/Srivarun999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass-light border border-slate-700/40 hover:border-purple-500/40 text-slate-300 hover:text-white rounded-xl font-medium transition-all duration-200 hover:scale-105"
            >
              <Github size={18} /> View All on GitHub
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
