
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 md:pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-20 md:mb-24 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-6xl serif leading-tight mb-8">
            Ready to <span className="italic">scale your</span> infra?
          </h2>
          <p className="text-slate-500 text-base md:text-lg mb-10 max-w-md mx-auto md:mx-0">
            I'm currently available for DevOps consulting and full-time on-site and remote opportunities. Let's talk architecture.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-red-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-medium shadow-2xl hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </div>

        <div className="flex flex-col justify-center space-y-2">
          <p className="text-6xl md:text-8xl font-black text-slate-100 leading-none tracking-tight">BUILD.</p>
          <p className="text-6xl md:text-8xl font-black text-slate-200 leading-none tracking-tight">AUTOMATE.</p>
          <p className="text-6xl md:text-8xl font-black text-slate-300 leading-none tracking-tight">SCALE.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-100">
        <Link to="/" className="text-xl font-bold mb-8 md:mb-0">
          ALI MURTAZA
        </Link>
        
        <div className="flex space-x-6 md:space-x-8 mb-8 md:mb-0">
          <a href="https://linkedin.com/in/alimurtazadevops/" target="_blank" rel="noreferrer" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">LinkedIn</a>
          <a href="https://github.com/alidevopsculture" target="_blank" rel="noreferrer" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">GitHub</a>
          {/* <a href="#" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Twitter</a> */}
          <a href="https://www.instagram.com/exclusive.alimurtaza?igsh=MTU0YjJqNG16MDg1Zg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Instagram</a>
          <a href="https://www.youtube.com/@devopswithali" target="_blank" rel="noreferrer" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">YouTube</a>
        </div>

        <p className="text-slate-400 text-[10px] md:text-sm text-center">
          © 2026 Ali Murtaza. Handcrafted with precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
