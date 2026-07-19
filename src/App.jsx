import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowUpRight, Code2, Rocket, Mail, Server, Layout, PenTool, 
  Globe, Briefcase, Camera, Terminal, MessageCircle
} from 'lucide-react';

// ==========================================
// 1. KOMPONEN PROJECT CARD (Bisa Hover & Tap)
// ==========================================
const ProjectCard = ({ project, index }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)} // Fitur Tap untuk Mobile!
      className={`relative rounded-[2.5rem] bg-neutral-900 border border-neutral-200 shadow-sm transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-end min-h-[420px] md:min-h-[480px] select-none ${index === 0 || index === 3 ? 'lg:col-span-2 lg:min-h-[500px]' : ''} ${isActive ? 'shadow-2xl md:-translate-y-2' : ''}`}
    >
      {/* Image Background */}
      <img 
        src={project.image} 
        alt={project.title} 
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100'}`}
      />
      
      {/* Dark Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-500 z-10 ${isActive ? 'opacity-95' : 'opacity-80'}`}></div>
      
      {/* Vibrant Color Overlay (Neon Effect) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply transition-opacity duration-700 z-10 ${isActive ? 'opacity-70' : 'opacity-0'}`}></div>
      
      {/* Teks & Konten */}
      <div className={`relative z-20 p-8 md:p-10 transition-transform duration-500 ease-out text-white ${isActive ? 'translate-y-0' : 'translate-y-4 md:translate-y-8'}`}>
        <span className={`text-xs font-bold uppercase tracking-wider transition-colors mb-4 block ${isActive ? 'text-white' : 'text-neutral-300'}`}>
          {project.category}
        </span>
        
        <h3 className={`text-3xl md:text-4xl font-black mb-4 transition-colors leading-tight drop-shadow-md ${isActive ? 'text-white' : 'text-neutral-200'}`}>
          {project.title}
        </h3>
        
        {/* Di mobile text selalu sedikit terlihat, tap untuk highlight. Di desktop muncul saat hover */}
        <p className={`transition-opacity duration-500 delay-100 leading-relaxed mb-8 line-clamp-3 md:line-clamp-none ${isActive ? 'opacity-100 text-white' : 'opacity-100 md:opacity-0 text-neutral-300'}`}>
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className={`text-xs font-bold px-4 py-2 backdrop-blur-md rounded-full border transition-colors ${isActive ? 'bg-white/20 text-white border-white/30' : 'bg-white/10 text-neutral-300 border-white/10'}`}>
              {t}
            </span>
          ))}
        </div>

        <div className={`flex items-center text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-cyan-400'}`}>
          Explore Details <ArrowUpRight size={18} className={`ml-1 transition-transform ${isActive ? 'translate-x-1 -translate-y-1' : ''}`} />
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// 2. KOMPONEN UTAMA (APP)
// ==========================================
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"; 

  const services = [
    { icon: <Layout className="text-pink-500" size={32} />, title: 'Frontend Engineering', desc: 'Membangun antarmuka dinamis dan responsif menggunakan ReactJS & Framer Motion.' },
    { icon: <Server className="text-cyan-500" size={32} />, title: 'Backend Architecture', desc: 'Mengembangkan sistem inti yang tangguh dengan Laravel & Node.js untuk skala besar.' },
    { icon: <Terminal className="text-purple-500" size={32} />, title: 'DevOps & CI/CD', desc: 'Mengotomatisasi pipeline dengan GitLab CI, Docker, dan Nginx.' },
    { icon: <PenTool className="text-orange-400" size={32} />, title: 'Digital Creation', desc: 'Merancang UI/UX estetis didukung keahlian ilustrasi Procreate di ekosistem iPad.' }
  ];

  const timeline = [
    { year: '2025 - Present', role: 'Informatics Professional', company: 'Bawaslu RI', desc: 'Memimpin pengembangan infrastruktur SPBE dan digitalisasi sistem pengawasan.' },
    { year: '2024', role: 'Freelance Full-Stack Developer', company: 'Remote / Global', desc: 'Menyelesaikan berbagai proyek web dari portal enterprise hingga dashboard analitik.' },
    { year: 'Education', role: 'Informatics Engineering', company: 'Universitas Sebelas Maret (UNS)', desc: 'Membangun fondasi kuat dalam algoritma dan rekayasa perangkat lunak.' }
  ];

  const projects = [
    {
      title: 'SAIBERDIT Ecosystem', category: 'Web App / Internal Audit', desc: 'Aplikasi pengawasan digital terintegrasi untuk Bawaslu yang menjamin integritas data.',
      tech: ['Laravel', 'ReactJS', 'MySQL', 'Tailwind'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000', gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'GitLab Optimizer', category: 'DevOps / CI-CD', desc: 'Proyek optimalisasi pengelolaan repositori aplikasi berbasis Git untuk otomasi server.',
      tech: ['GitLab CI', 'Docker', 'Nginx'], image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000', gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Headless Enterprise', category: 'Drupal & React', desc: 'Sistem manajemen konten skala besar dengan waktu muat (load time) super cepat.',
      tech: ['Drupal', 'ReactJS', 'GraphQL'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000', gradient: 'from-cyan-400 to-blue-600',
    },
    {
      title: 'Creator Hub', category: 'WordPress & Digital Art', desc: 'Platform personal responsif untuk eksplorasi teknologi Apple dan karya Procreate.',
      tech: ['WordPress', 'Framer', 'Procreate'], image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000', gradient: 'from-orange-400 to-amber-500',
    },
    {
      title: 'Real-Time Analytics', category: 'Web App / Analytics', desc: 'Dashboard interaktif untuk memantau metrik lalu lintas pengguna secara real-time.',
      tech: ['Node.js', 'ReactJS', 'Chart.js'], image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000', gradient: 'from-emerald-400 to-teal-500',
    }
  ];

  const skills = ['ReactJS', 'Laravel', 'WordPress', 'Drupal', 'Node.js', 'Docker', 'GitLab CI', 'Express', 'Tailwind', 'Framer Motion', 'Procreate', 'UI/UX'];

  const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const staggerContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans selection:bg-pink-300 selection:text-neutral-900 overflow-x-hidden">
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 z-[60] origin-left" style={{ scaleX }} />

      {/* --- NAVIGATION --- */}
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center py-3 px-6 md:px-8 w-[95%] md:w-[80%] max-w-6xl bg-white/70 backdrop-blur-xl border border-neutral-200/50 rounded-full shadow-lg shadow-neutral-200/50"
      >
        <div className="font-black text-xl md:text-2xl tracking-tighter cursor-pointer flex items-center gap-1">
          Ndhv<span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse mt-1"></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-neutral-500">
          <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
          <a href="#expertise" className="hover:text-purple-500 transition-colors">Expertise</a>
          <a href="#works" className="hover:text-cyan-500 transition-colors">Works</a>
        </div>
        <a href="#contact" className="px-6 py-2 rounded-full bg-neutral-900 text-white hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all text-sm font-semibold flex items-center gap-2">
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="relative min-h-[120vh] flex flex-col justify-center items-center px-6 text-center pt-32 overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="absolute w-[30rem] h-[30rem] md:w-[50rem] md:h-[50rem] bg-pink-300/30 rounded-full blur-[100px] md:blur-[150px] mix-blend-multiply translate-x-1/3 -translate-y-1/4 animate-pulse duration-1000"></div>
          <div className="absolute w-[25rem] h-[25rem] md:w-[40rem] md:h-[40rem] bg-cyan-300/30 rounded-full blur-[100px] md:blur-[120px] mix-blend-multiply -translate-x-1/3 translate-y-1/4"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-neutral-200 mb-8">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest">Available for new projects</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[1.05] mb-12">
          Code Logic. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 italic pr-2">Creative Soul.</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="max-w-4xl bg-white/60 backdrop-blur-xl border border-white p-6 md:p-10 rounded-[2rem] shadow-xl shadow-neutral-200/50 flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
            <img src={profileImage} alt="Nadheva" className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-inner group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="text-left">
            <p className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
              Hi, saya <strong className="text-neutral-900 font-black text-2xl">Nadheva</strong>. Sebagai seorang profesional informatika di institusi pemerintahan, saya terbiasa merancang sistem yang aman dan presisi. Di web development, saya memadukan arsitektur tangguh <span className="text-purple-600 font-bold">Laravel & Node.js</span> dengan antarmuka interaktif <span className="text-cyan-600 font-bold">ReactJS</span>.
            </p>
            <p className="mt-4 text-neutral-500 font-medium leading-relaxed">
              Di luar layar kode, saya adalah kreator yang gemar bereksplorasi dengan estetika visual melalui <span className="text-pink-500 font-bold">Procreate</span>.
            </p>
          </div>
        </motion.div>

        <motion.div style={{ opacity: opacityFade }} className="absolute bottom-10 md:bottom-20 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Scroll Down</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-10 h-16 border-2 border-neutral-300 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-neutral-400 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- EXPERTISE SECTION --- */}
      <section id="expertise" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">The Arsenal<span className="text-purple-500">.</span></h2>
          <p className="text-neutral-500 mt-4 text-lg font-medium max-w-xl">Keahlian komprehensif dari arsitektur server hingga interaksi UI.</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((srv, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group p-8 md:p-10 bg-white rounded-[2rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="mb-6 bg-neutral-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{srv.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{srv.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- SELECTED WORKS SECTION --- */}
      <section id="works" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="flex flex-col mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Selected Works<span className="text-cyan-500">.</span></h2>
          <p className="text-neutral-500 mt-4 text-lg font-medium">Studi kasus nyata penyelesaian masalah melalui kode.</p>
          <span className="text-xs font-bold text-pink-500 uppercase tracking-widest mt-2 md:hidden animate-pulse">Tap gambar untuk melihat detail</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* --- SKILLS MARQUEE SECTION --- */}
      <section className="py-16 bg-neutral-900 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10"></div>
        
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] w-fit">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <span key={index} className="mx-6 text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-800 uppercase tracking-tighter cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* --- ULTRA CONTACT SECTION --- */}
      <section id="contact" className="py-32 px-6 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute bottom-[-20%] right-[-10%] w-[30rem] h-[30rem] bg-pink-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[20rem] h-[20rem] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring' }} className="bg-white/10 p-6 rounded-full border border-white/20 backdrop-blur-md mb-8">
            <Rocket size={48} className="text-cyan-400" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-6 leading-tight">
            Mari wujudkan ide <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">brilian Anda.</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mb-12">
            Saya terbuka untuk mendiskusikan proyek web development atau kolaborasi kreatif. Hubungi saya melalui:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} href="mailto:nadheva17@gmail.com"
              className="flex items-center justify-center gap-3 bg-white text-neutral-900 px-8 py-5 rounded-[2rem] font-black text-lg hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] transition-all w-full sm:w-auto"
            >
              <Mail size={24} className="text-pink-500" /> nadheva17@gmail.com
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} href="https://wa.me/628558819604" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-neutral-800 border border-neutral-700 text-white px-8 py-5 rounded-[2rem] font-black text-lg hover:bg-neutral-700 hover:border-emerald-500 transition-all w-full sm:w-auto"
            >
              <MessageCircle size={24} className="text-emerald-400" /> Chat WhatsApp
            </motion.a>
          </div>

          <div className="mt-32 pt-8 border-t border-white/10 w-full flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm font-bold">
            <p className="mb-4 md:mb-0">© 2026 Nadheva Derdika Apriawan.</p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Globe size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Briefcase size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Camera size={20} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}