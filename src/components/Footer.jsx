import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-purple-900/25 pt-12 pb-6">
      {/* Glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                SV
              </div>
              <span className="font-display font-semibold text-white text-lg">Sri Varun Singari</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Data Science undergraduate passionate about ML, AI, and full stack development.
            </p>
            <div className="flex gap-2">
              {[
                { icon: <Github size={16} />, href: personalInfo.socials.github },
                { icon: <Linkedin size={16} />, href: personalInfo.socials.linkedin },
                { icon: <Mail size={16} />, href: `mailto:${personalInfo.email}` },
                { icon: <Code2 size={16} />, href: personalInfo.socials.leetcode },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="w-8 h-8 glass-light rounded-lg flex items-center justify-center text-slate-400 hover:text-white border border-slate-700/40 hover:border-purple-500/40 transition-all"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-widest text-slate-400">Navigation</h4>
            <div className="grid grid-cols-2 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-slate-400 hover:text-purple-300 text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact quick */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-widest text-slate-400">Reach Out</h4>
            <div className="space-y-2">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-slate-400 hover:text-purple-300 text-sm transition-colors">
                <Mail size={14} /> {personalInfo.email}
              </a>
              <p className="text-slate-500 text-xs mt-3">📍 {personalInfo.location}</p>
              <p className="text-slate-500 text-xs">🌐 {personalInfo.domain}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sri Varun Singari. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Designed & Developed by{' '}
            <span className="gradient-text font-semibold">Sri Varun Singari</span>
            <span className="text-red-400">
              <Heart size={12} fill="currentColor" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
