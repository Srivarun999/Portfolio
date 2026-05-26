import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Download, ArrowRight, User } from 'lucide-react';
import { personalInfo } from '../data';

const roles = personalInfo.roles;

function useTypewriter(words, delay = 3000) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = words[index];
    let timeout;
    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, 60);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx(c => c - 1);
      }, 35);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), delay);
    } else if (deleting && charIdx < 0) {
      setDeleting(false);
      setIndex(i => (i + 1) % words.length);
      setCharIdx(0);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, index, words, delay]);

  return displayed;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Ambient background orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-700/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 glass-light rounded-full mb-6 border border-purple-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-slate-300 font-medium">Available for Opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Sri Varun
              <br />
              <span className="gradient-text">Singari</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-slate-300 mb-6 h-9"
            >
              <span className="text-cyan-400">{"<"}</span>
              <span className="text-purple-300 min-w-[220px]">{typed}</span>
              <span className="text-cyan-400 type-cursor">|</span>
              <span className="text-cyan-400">{"/>"}</span>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              {personalInfo.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                View Projects <ArrowRight size={16} />
              </button>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 glass-light text-slate-200 font-semibold rounded-xl border border-purple-500/25 hover:border-purple-400/50 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Download size={16} /> Download CV
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-6 py-3 glass-light text-slate-300 font-semibold rounded-xl border border-slate-700/50 hover:border-cyan-500/40 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-4"
            >
              <span className="text-slate-500 text-sm">Find me on:</span>
              {[
                { icon: <Github size={18} />, href: personalInfo.socials.github, label: 'GitHub', color: 'hover:text-white hover:border-white/40' },
                { icon: <Linkedin size={18} />, href: personalInfo.socials.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/40' },
                { icon: <Code2 size={18} />, href: personalInfo.socials.leetcode, label: 'LeetCode', color: 'hover:text-yellow-400 hover:border-yellow-400/40' },
                { icon: <span className="text-sm font-bold">HR</span>, href: personalInfo.socials.hackerrank, label: 'HackerRank', color: 'hover:text-green-400 hover:border-green-400/40' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  className={`w-10 h-10 glass-light rounded-xl flex items-center justify-center text-slate-400 border border-slate-700/50 transition-all duration-200 ${s.color}`}
                  title={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-600/30 blur-2xl scale-110" />

              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/25 scale-[1.15]"
              />

              {/* Static ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 scale-[1.25]" />

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-purple-500/40 shadow-2xl shadow-purple-900/50">
                <img
                  src="/profile.jpeg"
                  alt="Sri Varun Singari"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback avatar */}
                <div
                  className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-900 items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <User size={80} className="text-purple-400" />
                  <p className="text-slate-400 text-sm mt-2 absolute bottom-8">Add profile.jpg</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-4 glass rounded-xl px-3 py-2 border border-purple-500/30 shadow-lg"
              >
                <div className="text-xs text-slate-400">Currently</div>
                <div className="text-sm font-semibold text-purple-300">B.Tech DS • IARE</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-2 -left-4 glass rounded-xl px-3 py-2 border border-cyan-500/30 shadow-lg"
              >
                <div className="text-xs text-slate-400">CGPA</div>
                <div className="text-sm font-semibold text-cyan-300">7.55 / 10</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-8 -right-6 glass rounded-xl px-3 py-2 border border-green-500/30 shadow-lg"
              >
                <div className="text-xs text-slate-400">LeetCode</div>
                <div className="text-sm font-semibold text-green-300">150+ Problems</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center mt-16 gap-2"
        >
          <span className="text-xs text-slate-500">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border border-slate-700 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 bg-purple-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
