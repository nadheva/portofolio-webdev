import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpRight, 
  Rocket, 
  Mail, 
  Server, 
  Layout, 
  PenTool, 
  Globe, 
  Briefcase, 
  Camera,
  Terminal,
  Sparkles,
  Code2
} from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // --- DATA ---
  const projects = [
    {
      title: 'SAIBERDIT Ecosystem',
      category: 'Web App / Internal Audit',
      desc: 'Sistem pengawasan digital terintegrasi untuk mendukung SPBE dengan keamanan tingkat tinggi.',
      tech: ['Laravel', 'ReactJS', 'MySQL'],
      color: 'hover:border-pink-500/50',
      glow: 'bg-pink-500/20'
    },
    {
      title: 'GitLab Pipeline Optimizer',
      category: 'DevOps / CI-CD',
      desc: 'Otomatisasi repositori aplikasi berbasis Git untuk peningkatan keberlanjutan deployment internal.',
      tech: ['GitLab CI', 'Docker', 'Nginx'],
      color: 'hover:border-purple-500/50',
      glow: 'bg-purple-500/20'
    },
    {
      title: 'Headless Enterprise CMS',
      category: 'Drupal & React',
      desc: 'Arsitektur modern memisahkan backend Drupal dengan frontend ReactJS untuk performa kilat.',
      tech: ['Drupal', 'ReactJS', 'Node.js'],
      color: 'hover:border-cyan-500/50',
      glow: 'bg-cyan-500/20'
    },
    {
      title: 'Digital Creator Hub',
      category: 'WordPress & Content',
      desc: 'Platform interaktif untuk membagikan wawasan teknologi, review ekosistem Apple, dan ilustrasi Procreate.',
      tech: ['WordPress', 'Framer Motion'],
      color: 'hover:border-orange-500/50',
      glow: 'bg-orange-500/20'
    }
  ];

  const skills = [
    'ReactJS', 'Laravel', 'WordPress', 'Drupal', 'Node.js', 
    'Docker', 'GitLab CI/CD', 'Express', 'Tailwind', 
    'Framer Motion', 'Procreate', 'UI/UX'
  ];

  // --- ANIMATIONS ---
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden relative">
      
      {/* Background Orbs (Glowing Effect) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-pink-600/10 rounded-full blur-[120px] mix-blend-screen"></motion.div>
        <motion.div style={{ y: backgroundY, x: '50%' }} className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen"></motion.div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      {/* --- NAVIGATION (Glassmorphism) --- */}
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center py-3 px-6 w-[90%] md:w-[70%] max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
      >
        <div className="font-black text-xl tracking-tighter cursor-pointer flex items-center gap-1">
          Ndhv<span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse mt-1"></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
          <a href="#works" className="hover:text-white transition-colors">Works</a>
        </div>
        <button className="px-5 py-2 rounded-full bg-white text-black hover:bg-cyan-400 hover:text-black transition-colors text-sm font-bold flex items-center gap-2">
          Let's Talk <ArrowUpRight size={16} />
        </button>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
        >
          <Sparkles size={14} className="text-pink-400" />
          <span className="text-xs font-bold text-neutral-300 uppercase tracking-widest">Full-Stack Web Developer</span>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col items-center">
          <motion.h1 variants={textReveal} className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[1.05] text-white">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 italic pr-4">
              Digital Futures.
            </span>
          </motion.h1>
          
          <motion.p variants={textReveal} className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
            Hi, saya <strong className="text-white font-semibold">Nadheva</strong>. Memadukan kekuatan <span className="text-cyan-400">Laravel & CMS</span> di backend dengan kehalusan interaksi <span className="text-pink-400">ReactJS</span> di frontend. 
          </motion.p>
        </motion.div>

        <motion.div variants={textReveal} initial="hidden" animate="show" style={{ opacity: opacityFade }} className="absolute bottom-12 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* --- BENTO GRID EXPERTISE (Trend 2026) --- */}
      <section id="expertise" className="py-32 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={textReveal} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">The Arsenal<span className="text-cyan-500">.</span></h2>
          <p className="text-neutral-400 mt-4 text-lg">Infrastruktur kuat, desain memikat, performa kilat.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {/* Card 1: Frontend (Span 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-pink-500/20 transition-colors"></div>
            <Layout size={40} className="text-pink-400" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Frontend Engineering</h3>
              <p className="text-neutral-400">Menciptakan antarmuka interaktif dan sangat cepat dengan ReactJS dan animasi canggih Framer Motion.</p>
            </div>
          </motion.div>

          {/* Card 2: CMS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-[60px] -z-10 group-hover:bg-orange-500/20 transition-colors"></div>
            <Code2 size={40} className="text-orange-400" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">CMS Mastery</h3>
              <p className="text-neutral-400 text-sm">Kustomisasi mendalam ekosistem WordPress & Drupal.</p>
            </div>
          </motion.div>

          {/* Card 3: Backend & DevOps (Span 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-cyan-500/20 transition-colors"></div>
            <Server size={40} className="text-cyan-400" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Backend & DevOps</h3>
              <p className="text-neutral-400">Arsitektur API scalable dengan Laravel & Node.js, diotomatisasi melalui GitLab CI/CD dan Docker.</p>
            </div>
          </motion.div>

          {/* Card 4: Digital Art */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px] -z-10 group-hover:bg-purple-500/20 transition-colors"></div>
            <PenTool size={40} className="text-purple-400" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Digital Creator</h3>
              <p className="text-neutral-400 text-sm">Ilustrasi Procreate & pembuatan konten tech visual.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SELECTED WORKS (Premium Glass Cards) --- */}
      <section id="works" className="py-32 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={textReveal} className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Selected Works<span className="text-pink-500">.</span></h2>
          <p className="text-neutral-400 mt-4 text-lg">Solusi nyata untuk masalah dunia nyata.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden cursor-pointer h-[400px] flex flex-col justify-end transition-all duration-500 ${project.color}`}
            >
              {/* Background Glow inside card */}
              <div className={`absolute top-0 right-0 w-full h-full ${project.glow} opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-700 -z-10`}></div>
              
              <div className="relative z-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-black mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-neutral-400 group-hover:text-white/90 transition-colors leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-bold px-4 py-2 bg-white/10 backdrop-blur-sm text-neutral-300 rounded-full border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- INFINITE MARQUEE (Outline Style) --- */}
      <section className="py-20 overflow-hidden relative z-10">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
        
        <div className="flex whitespace-nowrap animate-marquee w-[200%]">
          {/* Loop text multiple times for smooth infinite scroll */}
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <span key={index} className="mx-8 text-5xl md:text-7xl font-black text-transparent uppercase tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* --- FOOTER / CTA (Massive Typography) --- */}
      <section className="py-32 px-6 relative overflow-hidden z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring' }} className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md mb-8 border border-white/20">
            <Rocket size={36} className="text-white" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter mb-8 leading-[0.9] text-white">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Create</span><br/>
            Together.
          </h2>
          
          <motion.a 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            href="mailto:nadheva@example.com"
            className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black text-xl hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all mt-8"
          >
            <Mail size={24} /> Start a Project
          </motion.a>

          <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm font-medium border-t border-white/10 pt-8">
            <p>© 2026 Nadheva. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                <Briefcase size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                <Camera size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}