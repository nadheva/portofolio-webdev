import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
  Terminal,
  MessageCircle,
  Smartphone,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  
  // Efek Spring untuk Scroll Progress Bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // --- DATA FOTO (Ganti link dengan path lokal nanti, misal: './assets/gambar.jpg') ---
  const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"; // Contoh foto profil

  // --- DATA LAYANAN ---
  const services = [
    {
      icon: <Layout className="text-pink-500" size={32} />,
      title: 'Frontend Engineering',
      desc: 'Membangun antarmuka dinamis dan responsif di semua perangkat menggunakan ReactJS, dipadukan dengan animasi canggih Framer Motion.'
    },
    {
      icon: <Server className="text-cyan-500" size={32} />,
      title: 'Backend Architecture',
      desc: 'Mengembangkan sistem inti yang tangguh dan aman dengan Laravel & Node.js, siap menangani lalu lintas data skala besar.'
    },
    {
      icon: <Terminal className="text-purple-500" size={32} />,
      title: 'DevOps & CI/CD',
      desc: 'Mengotomatisasi pipeline deployment dengan GitLab CI/CD, Docker, dan Nginx untuk memastikan ketersediaan aplikasi 99.9%.'
    },
    {
      icon: <PenTool className="text-orange-400" size={32} />,
      title: 'Digital Creation & UI/UX',
      desc: 'Merancang pengalaman pengguna yang estetis, didukung oleh keahlian ilustrasi digital menggunakan Procreate di ekosistem iPad.'
    }
  ];

  const timeline = [
    {
      year: '2025 - Present',
      role: 'Informatics Professional',
      company: 'Bawaslu RI',
      desc: 'Memimpin pengembangan infrastruktur Sistem Pemerintahan Berbasis Elektronik (SPBE), termasuk digitalisasi sistem pengawasan.'
    },
    {
      year: '2024',
      role: 'Freelance Full-Stack Developer',
      company: 'Remote / Global',
      desc: 'Menyelesaikan berbagai proyek web kompleks, dari portal enterprise hingga dashboard analitik real-time menggunakan Laravel dan ReactJS.'
    },
    {
      year: 'Education',
      role: 'Informatics Engineering',
      company: 'Universitas Sebelas Maret (UNS)',
      desc: 'Membangun fondasi kuat dalam algoritma, struktur data, dan rekayasa perangkat lunak modern.'
    }
  ];

  // --- DATA PROYEK (Dilengkapi Gambar) ---
  const projects = [
    {
      title: 'SAIBERDIT Ecosystem',
      category: 'Web App / Internal Audit',
      desc: 'Aplikasi pengawasan digital terintegrasi untuk Bawaslu. Dibangun dengan arsitektur yang menjamin integritas data audit tingkat tinggi.',
      tech: ['Laravel', 'ReactJS', 'MySQL', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000', // Contoh gambar SAIBERDIT
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'GitLab Pipeline Optimizer',
      category: 'DevOps / CI-CD',
      desc: 'Proyek internalisasi dan optimalisasi pengelolaan repositori aplikasi berbasis Git. Berhasil meningkatkan otomasi deployment server.',
      tech: ['GitLab CI', 'Docker', 'Nginx', 'Linux'],
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000', // Contoh gambar DevOps
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Headless CMS Enterprise',
      category: 'Drupal & React',
      desc: 'Sistem manajemen konten skala besar yang memisahkan backend dengan frontend, menghasilkan waktu muat (load time) super cepat.',
      tech: ['Drupal', 'ReactJS', 'GraphQL'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000', // Contoh gambar CMS
      gradient: 'from-cyan-400 to-blue-600',
    },
    {
      title: 'Tech & Lifestyle Creator Hub',
      category: 'WordPress & Digital Art',
      desc: 'Platform personal responsif untuk eksplorasi ekosistem Apple, tutorial coding, dan karya seni digital Procreate.',
      tech: ['WordPress', 'Framer Motion', 'Procreate'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000', // Contoh gambar Apple/Creator
      gradient: 'from-orange-400 to-amber-500',
    },
    {
      title: 'Real-Time Dashboard',
      category: 'Web App / Analytics',
      desc: 'Dashboard interaktif untuk memantau metrik lalu lintas pengguna dan inventaris barang secara real-time dengan grafik yang mulus.',
      tech: ['Node.js', 'ReactJS', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000', // Contoh gambar Analytics
      gradient: 'from-emerald-400 to-teal-500',
    }
  ];

  const skills = [
    'ReactJS', 'Laravel', 'WordPress', 'Drupal', 'Node.js', 
    'Docker', 'GitLab CI', 'Express', 'Tailwind', 
    'Framer Motion', 'Procreate', 'UI/UX'
  ];

  // --- VARIANTS ANIMASI ---
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans selection:bg-pink-300 selection:text-neutral-900 overflow-x-hidden">
      
      {/* Progress Bar Top */}
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
        {/* Floating Background Elements */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="absolute w-[30rem] h-[30rem] md:w-[50rem] md:h-[50rem] bg-pink-300/30 rounded-full blur-[100px] md:blur-[150px] mix-blend-multiply translate-x-1/3 -translate-y-1/4 animate-pulse duration-1000"></div>
          <div className="absolute w-[25rem] h-[25rem] md:w-[40rem] md:h-[40rem] bg-cyan-300/30 rounded-full blur-[100px] md:blur-[120px] mix-blend-multiply -translate-x-1/3 translate-y-1/4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-neutral-200 mb-8"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest">Available for new projects</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[1.05] mb-12"
        >
          Code Logic. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 italic pr-2">
            Creative Soul.
          </span>
        </motion.h1>

        {/* Dynamic Personal Description Card WITH PHOTO */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl bg-white/60 backdrop-blur-xl border border-white p-6 md:p-10 rounded-[2rem] shadow-xl shadow-neutral-200/50 flex flex-col md:flex-row items-center gap-8"
        >
          {/* Bagian Foto Profil */}
          <div className="shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
            <img 
              src={profileImage} 
              alt="Nadheva Derdika Apriawan" 
              className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-inner group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bagian Teks Deskripsi */}
          <div className="text-left">
            <p className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
              Hi, saya <strong className="text-neutral-900 font-black text-2xl">Nadheva</strong>. 
              Sebagai seorang profesional informatika di institusi pemerintahan, saya terbiasa merancang sistem yang aman dan presisi. 
              Di dunia web development, saya memadukan arsitektur tangguh <span className="text-purple-600 font-bold">Laravel & Node.js</span> dengan antarmuka interaktif <span className="text-cyan-600 font-bold">ReactJS</span>.
            </p>
            <p className="mt-4 text-neutral-500 font-medium leading-relaxed">
              Di luar layar kode, saya adalah seorang kreator tech-enthusiast yang gemar bereksplorasi dengan estetika visual melalui <span className="text-pink-500 font-bold">Procreate</span>.
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
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
          <p className="text-neutral-500 mt-4 text-lg md:text-xl max-w-xl font-medium">Keahlian komprehensif dari arsitektur server hingga piksel terakhir di layar perangkat Anda.</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((srv, i) => (
            <motion.div 
              key={i} variants={fadeUp} 
              whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="group p-8 md:p-10 bg-white rounded-[2rem] border border-neutral-100 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-6 bg-neutral-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {srv.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">{srv.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- SELECTED WORKS SECTION (WITH IMAGES) --- */}
      <section id="works" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Selected Works<span className="text-cyan-500">.</span></h2>
          <p className="text-neutral-500 mt-4 text-lg md:text-xl font-medium">Studi kasus nyata tentang bagaimana saya menyelesaikan masalah kompleks melalui kode.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-[2.5rem] bg-neutral-900 border border-neutral-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-end min-h-[420px] md:min-h-[480px] ${index === 0 || index === 3 ? 'lg:col-span-2 lg:min-h-[500px]' : ''}`}
            >
              {/* Image Background */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay (Agar teks selalu terbaca meski gambar terang) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-10"></div>
              
              {/* Vibrant Color Overlay (Efek warna-warni saat dihover) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply opacity-0 group-hover:opacity-70 transition-opacity duration-700 z-10`}></div>
              
              {/* Teks & Konten */}
              <div className="relative z-20 p-8 md:p-10 translate-y-6 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 group-hover:text-white transition-colors mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-black mb-4 group-hover:text-white transition-colors leading-tight drop-shadow-md">
                  {project.title}
                </h3>
                
                <p className="text-neutral-300 group-hover:text-white/95 transition-colors leading-relaxed mb-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3 md:line-clamp-none">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-bold px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm font-bold text-cyan-300 group-hover:text-white transition-colors">
                  Explore Details <ArrowUpRight size={18} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SKILLS MARQUEE SECTION --- */}
      <section className="py-16 bg-neutral-900 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10"></div>
        
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] w-fit">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <span key={index} className="mx-6 text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-800 uppercase tracking-tighter hover:text-white transition-colors duration-300 cursor-crosshair">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* --- ULTRA CONTACT SECTION --- */}
      <section id="contact" className="py-32 px-6 bg-neutral-900 text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] bg-pink-500/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] bg-cyan-500/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring' }} className="bg-white/10 p-6 rounded-full border border-white/20 backdrop-blur-md mb-8">
            <Rocket size={48} className="text-cyan-400" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-6 leading-tight">
            Mari wujudkan ide <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">brilian Anda.</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mb-12">
            Saya selalu terbuka untuk mendiskusikan proyek web development, kolaborasi kreatif, atau sekadar berbincang tentang teknologi terkini. Jangan ragu untuk menghubungi saya melalui salah satu platform di bawah ini.
          </p>
          
          {/* Action Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}
              href="mailto:nadheva17@gmail.com"
              className="flex items-center justify-center gap-3 bg-white text-neutral-900 px-8 py-5 rounded-[2rem] font-black text-lg hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] transition-all w-full sm:w-auto"
            >
              <Mail size={24} className="text-pink-500" />
              nadheva17@gmail.com
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}
              href="https://wa.me/628558819604"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-neutral-800 border border-neutral-700 text-white px-8 py-5 rounded-[2rem] font-black text-lg hover:bg-neutral-700 hover:border-emerald-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)] transition-all w-full sm:w-auto"
            >
              <MessageCircle size={24} className="text-emerald-400" />
              Chat via WhatsApp
            </motion.a>
          </div>

          <div className="mt-32 pt-8 border-t border-white/10 w-full flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm font-bold">
            <p className="mb-4 md:mb-0">© 2026 Nadheva Derdika Apriawan. Crafted with Code & Passion.</p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Briefcase size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Camera size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}