import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpRight, 
  Code2, 
  Rocket, 
  Mail, 
  Server, 
  Layout, 
  PenTool, 
  Globe, 
  Briefcase, 
  Camera,
  Terminal
} from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // --- DATA PORTOFOLIO ---
  const services = [
    {
      icon: <Layout className="text-pink-500" size={32} />,
      title: 'Frontend Development',
      desc: 'Membangun antarmuka interaktif menggunakan ReactJS, lengkap dengan animasi memukau dan state management yang solid.'
    },
    {
      icon: <Server className="text-cyan-500" size={32} />,
      title: 'Backend & CMS',
      desc: 'Arsitektur API yang scalable dengan Laravel & Node.js, serta kustomisasi mendalam pada platform CMS seperti WordPress dan Drupal.'
    },
    {
      icon: <Terminal className="text-purple-500" size={32} />,
      title: 'DevOps & CI/CD',
      desc: 'Mengotomatisasi deployment dan manajemen server menggunakan Docker, Nginx, dan GitLab CI/CD untuk menjamin ketersediaan aplikasi.'
    },
    {
      icon: <PenTool className="text-orange-400" size={32} />,
      title: 'Digital Creation',
      desc: 'Memadukan logika teknis dengan kreativitas visual melalui ilustrasi Procreate di iPad dan pembuatan konten teknologi.'
    }
  ];

  const timeline = [
    {
      year: '2025 - Present',
      role: 'Informatics Professional',
      company: 'Bawaslu RI',
      desc: 'Mengembangkan dan memelihara infrastruktur SPBE, termasuk sistem pengawasan digital dan optimalisasi repositori aplikasi internal.'
    },
    {
      year: '2024',
      role: 'Freelance Web Developer',
      company: 'Remote',
      desc: 'Membangun solusi web dari landing page interaktif hingga dashboard analitik menggunakan ekosistem Laravel dan ReactJS.'
    },
    {
      year: 'Education',
      role: 'Informatics Engineering',
      company: 'Universitas Sebelas Maret (UNS)',
      desc: 'Memperdalam fondasi ilmu komputer, algoritma, rekayasa perangkat lunak, dan pengembangan web modern.'
    }
  ];

  const projects = [
    {
      title: 'SAIBERDIT',
      category: 'Web App / Internal Audit',
      desc: 'Aplikasi pengawasan digital terintegrasi untuk mendukung Sistem Pemerintahan Berbasis Elektronik (SPBE).',
      tech: ['Laravel', 'ReactJS', 'MySQL'],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'GitLab Repo Optimization',
      category: 'DevOps / CI-CD',
      desc: 'Optimalisasi pengelolaan repositori aplikasi berbasis Git sebagai upaya peningkatan keberlanjutan dan otomasi pipeline deployment.',
      tech: ['GitLab CI', 'Docker', 'Nginx'],
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Headless CMS Portal',
      category: 'Drupal & React',
      desc: 'Sistem manajemen konten enterprise dengan arsitektur headless, memisahkan backend Drupal dengan frontend ReactJS.',
      tech: ['Drupal', 'ReactJS', 'Node.js'],
      gradient: 'from-cyan-400 to-blue-600',
    },
    {
      title: 'Tech & Lifestyle Creator',
      category: 'WordPress & Content',
      desc: 'Platform personal untuk membagikan tutorial coding, review ekosistem teknologi Apple, dan ilustrasi digital.',
      tech: ['WordPress', 'Framer Motion'],
      gradient: 'from-orange-400 to-amber-500',
    }
  ];

  const skills = [
    'ReactJS', 'Laravel', 'WordPress', 'Drupal', 'Node.js', 
    'Docker', 'GitLab CI/CD', 'Express', 'Tailwind CSS', 
    'Framer Motion', 'MySQL', 'Procreate'
  ];

  // --- VARIANTS ANIMASI ---
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans selection:bg-cyan-300 selection:text-neutral-900 overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 md:px-12 bg-white/70 backdrop-blur-xl border-b border-white/20"
      >
        <div className="font-black text-2xl tracking-tighter cursor-pointer">
          Ndhv<span className="text-cyan-500">.</span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="hidden md:flex gap-6 mr-4 text-sm font-medium text-neutral-500">
            <a href="#services" className="hover:text-cyan-500 transition-colors">Services</a>
            <a href="#experience" className="hover:text-cyan-500 transition-colors">Experience</a>
            <a href="#works" className="hover:text-cyan-500 transition-colors">Works</a>
          </div>
          <button className="px-5 py-2 rounded-full bg-neutral-900 text-white hover:bg-cyan-500 transition-colors text-sm font-semibold shadow-lg shadow-neutral-900/20">
            Let's Talk
          </button>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center pt-20 overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="absolute w-[40rem] h-[40rem] bg-pink-300/30 rounded-full blur-[120px] mix-blend-multiply translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute w-[35rem] h-[35rem] bg-cyan-300/30 rounded-full blur-[100px] mix-blend-multiply -translate-x-1/3 translate-y-1/4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-neutral-200 mb-8"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest">Available for freelance</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[1.05]"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">Nadheva</span>. <br />
          Full-Stack Creator.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 text-lg md:text-xl text-neutral-500 max-w-2xl font-light leading-relaxed"
        >
          Saya menjembatani ide kompleks dengan eksekusi digital yang elegan. Memadukan ketangguhan backend <strong className="font-semibold text-neutral-800">Laravel & CMS</strong>, interaktivitas <strong className="font-semibold text-neutral-800">ReactJS</strong>, dan otomasi <strong className="font-semibold text-neutral-800">DevOps</strong>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-4 mt-10"
        >
          <a href="#github" className="p-3 bg-white rounded-full text-neutral-600 hover:text-cyan-500 hover:shadow-lg transition-all border border-neutral-100">
            <Globe size={24} />
          </a>
          <a href="#linkedin" className="p-3 bg-white rounded-full text-neutral-600 hover:text-cyan-500 hover:shadow-lg transition-all border border-neutral-100">
            <Briefcase size={24} />
          </a>
          <a href="#instagram" className="p-3 bg-white rounded-full text-neutral-600 hover:text-cyan-500 hover:shadow-lg transition-all border border-neutral-100">
            <Camera size={24} />
          </a>
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">What I Do<span className="text-pink-500">.</span></h2>
          <p className="text-neutral-500 mt-4 text-lg max-w-xl">Layanan komprehensif dari arsitektur server hingga interaksi frontend.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((srv, i) => (
            <motion.div key={i} variants={fadeUp} className="group p-8 md:p-10 bg-white rounded-[2rem] border border-neutral-100 hover:border-cyan-200 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="mb-6 bg-neutral-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {srv.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-800">{srv.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- EXPERIENCE TIMELINE --- */}
      <section id="experience" className="py-32 px-6 bg-white border-y border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-4xl md:text-5xl font-black tracking-tighter text-center mb-20"
          >
            Journey & Experience<span className="text-purple-500">.</span>
          </motion.h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-neutral-200 group-hover:bg-cyan-500 group-hover:scale-125 transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-3xl bg-neutral-50 border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-cyan-600 text-sm tracking-widest uppercase">{item.year}</span>
                  </div>
                  <h3 className="font-black text-xl text-neutral-900 mb-1">{item.role}</h3>
                  <div className="text-neutral-400 font-medium text-sm mb-4">{item.company}</div>
                  <p className="text-neutral-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SELECTED WORKS SECTION --- */}
      <section id="works" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Selected Works<span className="text-cyan-500">.</span></h2>
          <p className="text-neutral-500 mt-4 text-lg">Proyek nyata dengan arsitektur kokoh dan desain modern.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer h-96 flex flex-col justify-end"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
              
              <div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-white/80 transition-colors mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-black mb-3 text-neutral-900 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-500 group-hover:text-white/90 transition-colors leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 bg-neutral-100 text-neutral-600 group-hover:bg-white/20 group-hover:text-white rounded-full transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm font-bold text-cyan-600 group-hover:text-white transition-colors">
                  Explore Project <ArrowUpRight size={18} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SKILLS MARQUEE SECTION --- */}
      <section className="py-16 bg-neutral-900 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10"></div>
        
        <div className="flex whitespace-nowrap animate-marquee">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <span key={index} className="mx-6 text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-800 uppercase tracking-tighter hover:text-white transition-colors duration-300 cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* --- FOOTER / CTA --- */}
      <section className="py-32 px-6 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-pink-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring' }}>
            <Rocket size={56} className="text-cyan-400 mb-8" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-8 leading-tight">
            Let's build something <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">extraordinary.</span>
          </h2>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:nadheva@example.com"
            className="flex items-center gap-3 bg-white text-neutral-900 px-10 py-5 rounded-full font-bold text-xl hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all mt-6"
          >
            <Mail size={24} /> Start a Conversation
          </motion.a>

          <div className="mt-32 pt-8 border-t border-white/10 w-full flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm font-medium">
            <p>© 2026 Nadheva. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#github" className="hover:text-white transition-colors">GitHub</a>
              <a href="#linkedin" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}