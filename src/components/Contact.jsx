import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code2 } from 'lucide-react';
import { personalInfo } from '../data';

function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
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

const socials = [
  { icon: <Github size={20} />, href: personalInfo.socials.github, label: 'GitHub', color: 'hover:border-white/40 hover:text-white' },
  { icon: <Linkedin size={20} />, href: personalInfo.socials.linkedin, label: 'LinkedIn', color: 'hover:border-blue-400/40 hover:text-blue-400' },
  { icon: <Code2 size={20} />, href: personalInfo.socials.leetcode, label: 'LeetCode', color: 'hover:border-yellow-400/40 hover:text-yellow-400' },
  { icon: <span className="text-sm font-bold">HR</span>, href: personalInfo.socials.hackerrank, label: 'HackerRank', color: 'hover:border-green-400/40 hover:text-green-400' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Using mailto as fallback (EmailJS can be wired here)
    try {
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.open(mailtoLink, '_blank');
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/25 rounded-full text-purple-400 text-sm font-medium mb-4">
              Contact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white section-title">
              Get In Touch
            </h2>
            <p className="text-slate-400 mt-4 max-w-lg mx-auto">
              Open to internships, collaborations, and exciting opportunities. Let's connect!
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-5">
            <FadeIn delay={0.1}>
              <div className="glass rounded-2xl p-6 border border-purple-900/30">
                <h3 className="font-display text-lg font-bold text-white mb-5">Contact Info</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Mail size={18} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'text-purple-400' },
                    { icon: <Phone size={18} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'text-cyan-400' },
                    { icon: <MapPin size={18} />, label: 'Location', value: personalInfo.location, color: 'text-green-400' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className={`mt-0.5 ${item.color}`}>{item.icon}</div>
                      <div>
                        <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-slate-300 hover:text-white text-sm transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-300 text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Socials */}
            <FadeIn delay={0.2}>
              <div className="glass rounded-2xl p-6 border border-purple-900/30">
                <h3 className="font-semibold text-white text-sm mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socials.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, y: -2 }}
                      className={`flex items-center gap-2.5 p-3 glass-light rounded-xl border border-slate-700/40 text-slate-400 transition-all duration-200 ${s.color}`}
                    >
                      {s.icon}
                      <span className="text-sm font-medium">{s.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — Form */}
          <FadeIn delay={0.15}>
            <div className="lg:col-span-3">
              <div className="glass rounded-2xl p-8 border border-purple-900/30">
                <h3 className="font-display text-lg font-bold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-900/60 border border-slate-700/50 focus:border-purple-500/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-slate-900/60 border border-slate-700/50 focus:border-purple-500/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Internship Opportunity / Collaboration"
                      className="w-full bg-slate-900/60 border border-slate-700/50 focus:border-purple-500/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Hey Varun, I came across your portfolio and wanted to connect..."
                      className="w-full bg-slate-900/60 border border-slate-700/50 focus:border-purple-500/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 transition-all duration-200 resize-none"
                    />
                  </div>

                  {status === 'success' && (
                    <div className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 border border-green-500/25 rounded-xl px-4 py-3">
                      <span>✅</span> Message ready! Your email client will open.
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-70"
                  >
                    <Send size={16} />
                    {status === 'sending' ? 'Opening...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
