import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { codingProfiles } from '../data';
import { ExternalLink, Code } from 'lucide-react';

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

const stats = [
  { value: '150+', label: 'LeetCode Problems', color: 'text-yellow-400' },
  { value: '262', label: 'HackerRank Hackos', color: 'text-green-400' },
  { value: '2', label: 'HackerRank Badges', color: 'text-blue-400' },
  { value: '4', label: 'Platforms Active', color: 'text-purple-400' },
];

export default function CodingProfiles() {
  return (
    <section id="coding" className="py-24 relative">
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/25 rounded-full text-cyan-400 text-sm font-medium mb-4">
              Coding Profiles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white section-title">
              Competitive Programming
            </h2>
            <p className="text-slate-400 mt-4 max-w-lg mx-auto">
              Consistent practice across multiple platforms — sharpening problem-solving and algorithmic thinking.
            </p>
          </div>
        </FadeIn>

        {/* Stats Row */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-5 text-center border border-slate-700/30 hover:border-purple-500/30 transition-colors"
              >
                <div className={`font-display text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Profile Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {codingProfiles.map((profile, i) => (
            <FadeIn key={profile.platform} delay={i * 0.1}>
              <motion.a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="glass rounded-2xl p-6 flex flex-col items-center text-center border border-purple-900/25 hover:border-purple-500/35 transition-all duration-300 group block"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {profile.icon}
                </div>

                <h3 className="font-display text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {profile.platform}
                </h3>

                <p className="text-slate-500 text-xs mb-3">@{profile.username}</p>

                <div className={`text-sm font-semibold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent mb-2`}>
                  {profile.stats}
                </div>

                <p className="text-slate-400 text-xs leading-relaxed mb-4">{profile.detail}</p>

                <div className="flex items-center gap-1.5 text-slate-500 text-xs group-hover:text-white transition-colors">
                  <ExternalLink size={11} /> Visit Profile
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        {/* Motivational quote */}
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <div className="inline-block glass-light px-8 py-4 rounded-2xl border border-slate-700/30">
              <p className="text-slate-300 text-sm italic">
                "Every problem solved is a step toward mastery."
              </p>
              <p className="text-slate-500 text-xs mt-1">— Consistent daily practice</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
