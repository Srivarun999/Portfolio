import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certifications } from '../data';
import { Award, Calendar } from 'lucide-react';

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

function CertCard({ cert, index }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="glass rounded-2xl overflow-hidden border border-purple-900/25 hover:border-purple-500/35 transition-all duration-300 flex flex-col"
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />

      {/* Certificate preview placeholder */}
      <div className={`relative h-40 bg-gradient-to-br ${cert.color} opacity-20 flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-30">{cert.icon}</span>
        </div>
        {/* Try to load actual cert image */}
        <img
          src={cert.image}
          alt={cert.title}
          className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
          onLoad={(e) => { e.target.style.opacity = '1'; e.target.parentElement.children[0].style.display = 'none'; }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10`} />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-4xl">{cert.icon}</span>
          <span className="text-xs text-white/60 font-medium px-3 py-1 bg-black/20 rounded-full backdrop-blur-sm">
            {cert.badge}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-sm font-bold text-white leading-snug flex-1">
            {cert.title}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 mb-3">
          <Award size={12} className="text-purple-400" />
          <span className={`text-xs font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
            {cert.issuer}
          </span>
        </div>

        <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">
          {cert.description}
        </p>

        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
          <Calendar size={11} />
          <span>{cert.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/25 rounded-full text-green-400 text-sm font-medium mb-4">
              Certifications
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white section-title">
              Achievements & Credentials
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Continuous learning through industry-recognized certifications and real-world training programs.
            </p>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.id} delay={i * 0.1}>
              <CertCard cert={cert} index={i} />
            </FadeIn>
          ))}
        </div>

        {/* Note about images */}
        <FadeIn delay={0.5}>
          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              💡 Add your certificate images to <code className="text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded text-xs">public/certs/</code> folder to display them
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
