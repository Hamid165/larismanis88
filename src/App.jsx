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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#993895]/20 selection:text-[#993895]">
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        /* Animasi khusus untuk FAQ (details/summary) */
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
      `}} />

      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('beranda')}>
            {/* Menggunakan format .svg dan membiarkan lebarnya memanjang (w-auto) */}
            <img src="/logo.svg" alt="Logo Laris Manis 88" className="h-10 w-auto object-contain" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#993895] to-[#F0C030] hidden sm:block">
              Laris Manis 88 TUP
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
          <button className="md:hidden text-slate-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 flex flex-col p-4 space-y-4 font-medium text-slate-700">
            <button onClick={() => scrollToSection('beranda')} className="text-left py-2 border-b border-slate-50">Beranda</button>
            <button onClick={() => scrollToSection('tentang')} className="text-left py-2 border-b border-slate-50">Tentang Kami</button>
            <button onClick={() => scrollToSection('produk')} className="text-left py-2 border-b border-slate-50">Produk</button>
            <button onClick={() => scrollToSection('kontak')} className="text-left py-2 text-[#993895] font-semibold">Hubungi Kami</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#993895]/10 via-slate-50 to-[#F0C030]/10 -z-10"></div>
        {/* Dekorasi Background */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#993895] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#F0C030] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 text-center md:text-left z-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#993895]/10 text-[#993895] font-semibold text-sm tracking-wide shadow-sm border border-[#993895]/20">
              ✨ Sensasi Rasa Baru dari Laris Manis 88 TUP
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
              Double Kenikmatan  <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#993895] to-[#F0C030]">
                Satu Pesanan!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Nikmati kesegaran hakiki dari Es Ubi Ungu kami yang creamy, disandingkan dengan gurih dan renyahnya Gyoza spesial racikan Laris Manis 88 TUP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => scrollToSection('produk')} className="bg-[#993895] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#802d7c] transition-all shadow-lg hover:shadow-[#993895]/30 flex items-center justify-center gap-2">
                Lihat Menu <ChevronRight size={20} />
              </button>
              <button onClick={() => scrollToSection('tentang')} className="bg-white text-slate-700 border border-slate-200 px-8 py-3 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                Cerita Kami
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-16 md:mt-0 relative z-10">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#993895]/40 to-[#F0C030]/40 rounded-[2rem] transform rotate-3 shadow-xl"></div>
              
              {/* Gambar Gabungan (Es Ubi Ungu & Gyoza) dengan efek Zoom In (scale-125) agar full kotak */}
              <div className="absolute inset-0 rounded-[2rem] transform -rotate-3 transition-transform hover:rotate-0 duration-500 shadow-lg border-4 border-white overflow-hidden bg-slate-100">
                <img 
                  src="/hero-gabungan.jpeg" 
                  alt="Paket Es Ubi Ungu dan Gyoza" 
                  className="w-full h-full object-cover scale-125 hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Badge Harga Spesial di Hero Section */}
              <div className="absolute -top-6 -left-4 bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-1 transform hover:-translate-y-2 transition-transform duration-300 z-20">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Promo Bundling</p>
                <div className="flex items-center gap-2">
                   <span className="line-through text-slate-400 text-sm">Rp 26.000</span>
                   <span className="font-black text-2xl text-[#993895]">Rp 23.000</span>
                </div>
              </div>
              {/* Badge Rating */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 transform hover:-translate-y-2 transition-transform duration-300 z-20">
                <div className="bg-[#F0C030]/20 p-2 rounded-full text-[#d4a015]">
                  <Star fill="currentColor" size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Rating Pelanggan</p>
                  <p className="font-bold text-slate-900">4.9/5.0 Terjual Cepat!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Siapa <span className="text-[#993895]">Laris Manis 88 TUP</span>?</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#993895] to-[#F0C030] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Berawal dari kecintaan kami terhadap kuliner inovatif, tim <strong className="text-slate-800">Laris Manis 88 TUP</strong> hadir untuk memberikan pengalaman rasa yang tidak terlupakan. Kami percaya bahwa kombinasi antara minuman manis yang menyegarkan dan camilan gurih adalah kunci dari kebahagiaan sejati.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md hover:border-[#993895]/30 transition-all">
              <div className="bg-[#993895]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#993895]">
                <CupSoda size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bahan Premium</h3>
              <p className="text-slate-600 text-sm">Menggunakan ubi ungu asli berkualitas dan bahan-bahan segar pilihan.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md hover:border-[#F0C030]/30 transition-all">
              <div className="bg-[#F0C030]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#d4a015]">
                <ChefHat size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resep Rahasia</h3>
              <p className="text-slate-600 text-sm">Gyoza kami dibuat dengan isian padat dan bumbu rahasia yang dijamin bikin nagih.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md hover:border-green-300 transition-all">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Higenis & Halal</h3>
              <p className="text-slate-600 text-sm">Diproses dengan standar kebersihan tinggi agar aman dikonsumsi siapa saja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Section */}
      <section id="produk" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Menu Andalan Kami</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Sajian sempurna untuk menemani waktu santai, kerja, atau kumpul bareng teman-teman.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Produk 1: Es Ubi Ungu */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-[#993895]/5 group border border-slate-100 hover:border-[#993895]/30 transition-colors flex flex-col h-full">
              <div className="relative h-72 overflow-hidden bg-slate-200 shrink-0">
                <div className="absolute inset-0 bg-[#993895]/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img 
                  src="/ubi-ungu.jpeg" 
                  alt="Es Ubi Ungu" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full font-bold text-[#993895] text-sm shadow-sm">
                  Promo Spesial
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Es Ubi Ungu Creamy</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  Minuman kekinian perpaduan ekstrak ubi ungu asli yang manis natural, susu segar, dan foam yang super creamy. Rasanya unik, teksturnya lembut, dan warnanya yang cantik bikin mood kamu naik seharian!
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-end justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="line-through text-slate-400 text-sm font-medium">Rp 10.000</span>
                    <span className="text-3xl font-black text-[#993895] leading-none">Rp 8.000</span>
                  </div>
                  <a href="#kontak" className="text-[#993895] font-bold hover:text-[#802d7c] flex items-center gap-1 group/btn bg-[#993895]/10 px-4 py-2 rounded-full transition-all mb-1">
                    Pesan <ChevronRight size={18} className="transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Produk 2: Gyoza */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-[#F0C030]/5 group border border-slate-100 hover:border-[#F0C030]/50 transition-colors flex flex-col h-full">
              <div className="relative h-72 overflow-hidden bg-slate-200 shrink-0">
                <div className="absolute inset-0 bg-[#F0C030]/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img 
                  src="/gyoza.jpeg" 
                  alt="Gyoza Spesial" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full font-bold text-[#d4a015] text-sm shadow-sm">
                  Rekomendasi
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Gyoza Ayam Spesial (Isi 4)</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  Dumpling khas Jepang dengan isian daging ayam cincang yang padat dan sayuran segar. Digoreng dengan teknik khusus (pan-fried) sehingga bagian bawahnya krispi sempurna, namun tetap juicy di dalam.
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-end justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="line-through text-slate-400 text-sm font-medium">Rp 16.000</span>
                    <span className="text-3xl font-black text-[#d4a015] leading-none">Rp 15.000</span>
                  </div>
                  <a href="#kontak" className="text-[#d4a015] font-bold hover:text-[#b3850f] flex items-center gap-1 group/btn bg-[#F0C030]/10 px-4 py-2 rounded-full transition-all mb-1">
                    Pesan <ChevronRight size={18} className="transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Kontak Section */}
      <section id="kontak" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 -z-20"></div>
        {/* Pattern Background Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent -z-10"></div>
        
        <div className="container mx-auto px-6 md:px-12 text-center z-10 relative">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#993895]">Siap untuk Mencicipi?</h2>
          <p className="text-[#993895] font-medium text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
            Jangan sampai kehabisan promo hari ini! Hubungi kami sekarang melalui WhatsApp untuk melakukan pemesanan.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Laris%20Manis%2088%20TUP,%20saya%20mau%20pesan%20paket%20promonya!" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1ebd5a] transition-all shadow-lg hover:shadow-[#25D366]/40 flex items-center gap-3 w-full md:w-auto justify-center transform hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer Profesional */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
            {/* Brand / About */}
            <div className="md:col-span-5 lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                {/* Logo pada bagian footer diperbesar sedikit dan memanjang */}
                <img src="/logo.svg" alt="Logo Laris Manis 88" className="h-12 w-auto object-contain" />
                <span className="text-2xl font-bold text-white tracking-tight">
                  Laris Manis <span className="text-[#F0C030]">88</span> TUP
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Membawa sensasi kelezatan baru di setiap gigitan dan tegukan. Kami berkomitmen menyajikan hidangan berkualitas tinggi, higienis, dan pastinya menggugah selera untuk menemani harimu.
              </p>
            </div>

            {/* Tautan Cepat */}
            <div className="md:col-span-3 lg:col-span-4 lg:justify-self-center">
              <h4 className="text-white font-semibold text-lg mb-6">Tautan Cepat</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => scrollToSection('beranda')} className="hover:text-[#F0C030] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Beranda</button></li>
                <li><button onClick={() => scrollToSection('tentang')} className="hover:text-[#F0C030] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Tentang Kami</button></li>
                <li><button onClick={() => scrollToSection('produk')} className="hover:text-[#F0C030] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Daftar Menu</button></li>
                <li><button onClick={() => scrollToSection('kontak')} className="hover:text-[#F0C030] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Hubungi Kami</button></li>
              </ul>
            </div>

            {/* Kontak */}
            <div className="md:col-span-4 lg:col-span-4">
              <h4 className="text-white font-semibold text-lg mb-6">Informasi Kontak</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#993895] mt-0.5 shrink-0" />
                  <span>Jl. D.I. Panjaitan No. 128, Purwokerto, Banyumas, Jawa Tengah</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-[#25D366] shrink-0" />
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
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
            <p>© {new Date().getFullYear()} Laris Manis 88 TUP. Seluruh hak cipta dilindungi.</p>
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