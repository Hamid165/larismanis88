import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, MapPin, ChefHat, CupSoda, Star, ChevronRight } from 'lucide-react';

// Komponen SVG manual untuk menggantikan impor Instagram yang error
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // === PENGATURAN WHATSAPP ===
  // GANTI DENGAN NOMOR WA ASLI ANDA (Gunakan 62, jangan 0 di depan)
  const noWA = "6281234567890"; 
  
  // Link WhatsApp yang sudah dikonversi (spasi jadi %20, koma jadi %2C, plus jadi %2B, seru jadi %21)
  const linkWABundling = `https://wa.me/${noWA}?text=Halo%20Laris%20Manis%2088%20TUP%2C%20saya%20mau%20pesan%20paket%20promo%20bundling%20es%20ubi%20ungu%20%2B%20gyoza%21`;
  const linkWAUbiUngu = `https://wa.me/${noWA}?text=Halo%20Laris%20Manis%2088%20TUP%2C%20saya%20mau%20pesan%20es%20ubi%20ungu%20nya%21`;
  const linkWAGyoza = `https://wa.me/${noWA}?text=Halo%20Laris%20Manis%2088%20TUP%2C%20saya%20mau%20pesan%20gyoza%20nya%21`;

  // Efek untuk mendeteksi scroll agar navbar menjadi transparan/solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#993895]/20 selection:text-[#993895] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
      `}} />

      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2 sm:py-3' : 'bg-transparent py-4 sm:py-5'}`}>
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => scrollToSection('beranda')}>
            <img src="/logo.svg" alt="Logo Laris Manis 88" className="h-8 sm:h-10 w-auto object-contain" />
            <span className="text-lg sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#993895] to-[#F0C030]">
              Laris Manis 88
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-medium text-slate-600">
            <button onClick={() => scrollToSection('beranda')} className="hover:text-[#993895] transition-colors">Beranda</button>
            <button onClick={() => scrollToSection('tentang')} className="hover:text-[#993895] transition-colors">Tentang Kami</button>
            <button onClick={() => scrollToSection('produk')} className="hover:text-[#993895] transition-colors">Produk</button>
            <button onClick={() => scrollToSection('kontak')} className="bg-[#993895] text-white px-5 py-2 rounded-full hover:bg-[#802d7c] transition-colors shadow-md hover:shadow-lg">
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-700 p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 flex flex-col p-4 space-y-2 font-medium text-slate-700">
            <button onClick={() => scrollToSection('beranda')} className="text-left py-3 px-2 border-b border-slate-50">Beranda</button>
            <button onClick={() => scrollToSection('tentang')} className="text-left py-3 px-2 border-b border-slate-50">Tentang Kami</button>
            <button onClick={() => scrollToSection('produk')} className="text-left py-3 px-2 border-b border-slate-50">Produk</button>
            <button onClick={() => scrollToSection('kontak')} className="text-left py-3 px-2 text-[#993895] font-semibold">Hubungi Kami</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#993895]/10 via-slate-50 to-[#F0C030]/10 -z-10"></div>
        {/* Dekorasi Background */}
        <div className="absolute top-20 right-[-10%] w-60 h-60 sm:w-72 sm:h-72 bg-[#993895] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-[-10%] w-60 h-60 sm:w-72 sm:h-72 bg-[#F0C030] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left z-10">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 rounded-full bg-[#993895]/10 text-[#993895] font-semibold text-xs sm:text-sm tracking-wide shadow-sm border border-[#993895]/20">
              ✨ Sensasi Rasa Baru dari Laris Manis 88
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 text-slate-900">
              Double Kenikmatan <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#993895] to-[#F0C030]">
                Satu Pesanan!
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Nikmati kesegaran hakiki dari Es Ubi Ungu kami yang creamy, disandingkan dengan gurih dan renyahnya Gyoza spesial racikan Laris Manis 88 TUP.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button onClick={() => scrollToSection('produk')} className="w-full sm:w-auto bg-[#993895] text-white px-8 py-3.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-[#802d7c] transition-all shadow-lg hover:shadow-[#993895]/30 flex items-center justify-center gap-2">
                Lihat Menu <ChevronRight size={20} />
              </button>
              <button onClick={() => scrollToSection('tentang')} className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-3.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                Cerita Kami
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-16 md:mt-0 relative z-10 px-4 sm:px-0">
            <div className="relative w-full max-w-[16rem] sm:max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#993895]/40 to-[#F0C030]/40 rounded-[2rem] transform rotate-3 shadow-xl"></div>
              
              {/* Gambar Gabungan (Es Ubi Ungu & Gyoza) */}
              <div className="absolute inset-0 rounded-[2rem] transform -rotate-3 transition-transform hover:rotate-0 duration-500 shadow-lg border-4 border-white overflow-hidden bg-slate-100">
                <img 
                  src="/hero-gabungan.jpeg" 
                  alt="Paket Es Ubi Ungu dan Gyoza" 
                  className="w-full h-full object-cover scale-125 hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Badge Harga Spesial */}
              <div className="absolute -top-4 -left-2 sm:-top-6 sm:-left-4 bg-white px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-0.5 sm:gap-1 transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300 z-20">
                <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">Promo Bundling</p>
                <div className="flex items-center gap-1 sm:gap-2">
                   <span className="line-through text-slate-400 text-xs sm:text-sm">Rp 26.000</span>
                   <span className="font-black text-lg sm:text-2xl text-[#993895]">Rp 23.000</span>
                </div>
              </div>

              {/* Badge Rating */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-3 transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300 z-20">
                <div className="bg-[#F0C030]/20 p-1.5 sm:p-2 rounded-full text-[#d4a015]">
                  <Star fill="currentColor" className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Rating</p>
                  <p className="font-bold text-sm sm:text-base text-slate-900">4.9/5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section id="tentang" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">Siapa <span className="text-[#993895]">Laris Manis 88</span>?</h2>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-[#993895] to-[#F0C030] mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 sm:mb-12">
            Berawal dari kecintaan kami terhadap kuliner inovatif, tim <strong className="text-slate-800">Laris Manis 88 TUP</strong> hadir untuk memberikan pengalaman rasa yang tidak terlupakan. Kami percaya bahwa kombinasi antara minuman manis yang menyegarkan dan camilan gurih adalah kunci dari kebahagiaan sejati.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md hover:border-[#993895]/30 transition-all">
              <div className="bg-[#993895]/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#993895]">
                <CupSoda size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Bahan Premium</h3>
              <p className="text-slate-600 text-sm">Menggunakan ubi ungu asli berkualitas dan bahan-bahan segar pilihan.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md hover:border-[#F0C030]/30 transition-all">
              <div className="bg-[#F0C030]/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#d4a015]">
                <ChefHat size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Resep Rahasia</h3>
              <p className="text-slate-600 text-sm">Gyoza kami dibuat dengan isian padat dan bumbu rahasia yang dijamin bikin nagih.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md hover:border-green-300 transition-all sm:col-span-2 md:col-span-1">
              <div className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <Star size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Higenis & Halal</h3>
              <p className="text-slate-600 text-sm">Diproses dengan standar kebersihan tinggi agar aman dikonsumsi siapa saja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Section (Ditambah jadi 3 Kartu) */}
      <section id="produk" className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-900">Menu Andalan Kami</h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">Sajian sempurna untuk menemani waktu santai, kerja, atau kumpul bareng teman-teman.</p>
          </div>

          {/* Grid diperlebar menjadi 3 kolom agar muat semua */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
            
            {/* NEW: Produk 1 - Paket Bundling */}
            {/* Menghapus transform lg:-translate-y-4 agar sejajar dengan yang lain */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5 group border border-slate-100 hover:border-[#993895]/50 transition-colors flex flex-col h-full">
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-200 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img 
                  src="/bundling.jpeg" 
                  alt="Paket Bundling" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 scale-125"
                />
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#993895] to-[#F0C030] px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full font-bold text-white text-xs sm:text-sm shadow-md">
                  Best Deal (Hemat 3k)
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-slate-900">Paket Bundling Promo</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-6 flex-grow">
                  Kombinasi juara! Es Ubi Ungu yang manis dan super creamy bersanding dengan 4 pcs Gyoza Ayam yang gurih dan renyah. Beli paketan dijamin lebih hemat dan kenyang pol!
                </p>
                <div className="mt-auto pt-5 sm:pt-6 border-t border-slate-100 flex items-end justify-between">
                  <div className="flex flex-col gap-0.5 sm:gap-1">
                    <span className="line-through text-slate-400 text-xs sm:text-sm font-medium">Rp 26.000</span>
                    <span className="text-2xl sm:text-3xl font-black text-[#993895] leading-none">Rp 23.000</span>
                  </div>
                  {/* LINK WA BUNDLING */}
                  <a href={linkWABundling} target="_blank" rel="noreferrer" className="text-white font-bold text-sm sm:text-base hover:bg-[#802d7c] flex items-center gap-1 group/btn bg-[#993895] px-4 sm:px-5 py-2.5 rounded-full transition-all mb-1 shadow-md">
                    Pesan <ChevronRight size={16} className="transform group-hover/btn:translate-x-1 sm:w-[18px]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Produk 2: Es Ubi Ungu */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-[#993895]/5 group border border-slate-100 hover:border-[#993895]/30 transition-colors flex flex-col h-full">
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-200 shrink-0">
                <div className="absolute inset-0 bg-[#993895]/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img 
                  src="/ubi-ungu.jpeg" 
                  alt="Es Ubi Ungu" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-slate-900">Es Ubi Ungu Creamy</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-6 flex-grow">
                  Minuman kekinian perpaduan ekstrak ubi ungu asli yang manis natural, susu segar, dan foam yang super creamy. Rasanya unik, warnanya cantik!
                </p>
                <div className="mt-auto pt-5 sm:pt-6 border-t border-slate-100 flex items-end justify-between">
                  <div className="flex flex-col gap-0.5 sm:gap-1">
                    <span className="line-through text-slate-400 text-xs sm:text-sm font-medium">Rp 10.000</span>
                    <span className="text-2xl sm:text-3xl font-black text-[#993895] leading-none">Rp 8.000</span>
                  </div>
                  {/* LINK WA UBI UNGU */}
                  <a href={linkWAUbiUngu} target="_blank" rel="noreferrer" className="text-[#993895] font-bold text-sm sm:text-base hover:bg-[#993895]/20 flex items-center gap-1 group/btn bg-[#993895]/10 px-3 sm:px-4 py-2 rounded-full transition-all mb-1">
                    Pesan <ChevronRight size={16} className="transform group-hover/btn:translate-x-1 sm:w-[18px]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Produk 3: Gyoza */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-[#F0C030]/5 group border border-slate-100 hover:border-[#F0C030]/50 transition-colors flex flex-col h-full">
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-200 shrink-0">
                <div className="absolute inset-0 bg-[#F0C030]/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img 
                  src="/gyoza.jpeg" 
                  alt="Gyoza Spesial" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-slate-900">Gyoza Ayam (Isi 4)</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-6 flex-grow">
                  Dumpling khas Jepang isian daging ayam cincang padat dan sayuran segar. Digoreng pan-fried, krispi di luar namun tetap juicy di dalam.
                </p>
                <div className="mt-auto pt-5 sm:pt-6 border-t border-slate-100 flex items-end justify-between">
                  <div className="flex flex-col gap-0.5 sm:gap-1">
                    <span className="line-through text-slate-400 text-xs sm:text-sm font-medium">Rp 16.000</span>
                    <span className="text-2xl sm:text-3xl font-black text-[#d4a015] leading-none">Rp 15.000</span>
                  </div>
                  {/* LINK WA GYOZA */}
                  <a href={linkWAGyoza} target="_blank" rel="noreferrer" className="text-[#d4a015] font-bold text-sm sm:text-base hover:bg-[#F0C030]/20 flex items-center gap-1 group/btn bg-[#F0C030]/10 px-3 sm:px-4 py-2 rounded-full transition-all mb-1">
                    Pesan <ChevronRight size={16} className="transform group-hover/btn:translate-x-1 sm:w-[18px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Kontak Section */}
      <section id="kontak" className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 -z-20"></div>
        {/* Pattern Background Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center z-10 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-[#993895]">Siap untuk Mencicipi?</h2>
          <p className="text-[#993895] font-medium text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto drop-shadow-md">
            Jangan sampai kehabisan promo hari ini! Hubungi kami sekarang melalui WhatsApp untuk melakukan pemesanan.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href={linkWABundling} 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#25D366] text-white w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#1ebd5a] transition-all shadow-lg hover:shadow-[#25D366]/40 flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer Profesional */}
      <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-10 sm:mb-12">
            {/* Brand / About */}
            <div className="md:col-span-5 lg:col-span-4 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-6">
                <img src="/logo.svg" alt="Logo Laris Manis 88" className="h-10 sm:h-12 w-auto object-contain" />
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Laris Manis <span className="text-[#F0C030]">88</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6 px-4 sm:px-0">
                Membawa sensasi kelezatan baru di setiap gigitan dan tegukan. Kami berkomitmen menyajikan hidangan berkualitas tinggi, higienis, dan pastinya menggugah selera untuk menemani harimu.
              </p>
            </div>

            {/* Tautan Cepat */}
            <div className="md:col-span-3 lg:col-span-4 lg:justify-self-center text-center sm:text-left">
              <h4 className="text-white font-semibold text-lg mb-4 sm:mb-6">Tautan Cepat</h4>
              <ul className="space-y-3 text-sm flex flex-col items-center sm:items-start">
                <li><button onClick={() => scrollToSection('beranda')} className="hover:text-[#F0C030] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Beranda</button></li>
                <li><button onClick={() => scrollToSection('tentang')} className="hover:text-[#F0C030] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Tentang Kami</button></li>
                <li><button onClick={() => scrollToSection('produk')} className="hover:text-[#F0C030] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Daftar Menu</button></li>
                <li><button onClick={() => scrollToSection('kontak')} className="hover:text-[#F0C030] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Hubungi Kami</button></li>
              </ul>
            </div>

            {/* Kontak */}
            <div className="md:col-span-4 lg:col-span-4 text-center sm:text-left">
              <h4 className="text-white font-semibold text-lg mb-4 sm:mb-6">Informasi Kontak</h4>
              <ul className="space-y-4 text-sm flex flex-col items-center sm:items-start">
                <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                  <MapPin size={18} className="text-[#993895] shrink-0" />
                  <span className="px-4 sm:px-0">Jl. D.I. Panjaitan No. 128, Purwokerto, Banyumas, Jawa Tengah</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-[#25D366] shrink-0" />
                  {/* JANGAN LUPA UBAH NOMOR DI SINI JUGA JIKA DIBUTUHKAN */}
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">+62 812-3456-7890</a>
                </li>
                <li className="flex items-center gap-3">
                  <InstagramIcon size={18} className="text-[#F0C030] shrink-0" />
                  <a href="#" className="hover:text-white transition-colors">@larismanis88.tup</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
            <p className="text-center sm:text-left">© {new Date().getFullYear()} Laris Manis 88 TUP. Seluruh hak cipta dilindungi.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
              <span className="text-slate-700">|</span>
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}