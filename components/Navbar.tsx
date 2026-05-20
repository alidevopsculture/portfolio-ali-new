
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Download, MapPin } from 'lucide-react';

interface NavbarProps {
  onDownloadClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDownloadClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/profession' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Insights', path: '/blog' },
    { name: 'Contact', path: '/contact' },

  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const Logo = ({ className = "" }: { className?: string }) => (
    <Link to="/" className={`flex items-center space-x-3 tracking-tight group ${className}`}>
      <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-200 group-hover:border-slate-900 transition-all duration-300">
        <img 
          src="/img/home/IMG_3597.jpg" 
          alt="Ali Murtaza" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="text-xl">
        <span className="font-bold">ALI</span> <span className="font-light">MURTAZA</span>
      </div>
    </Link>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 bg-white/85 backdrop-blur-xl z-50 border-b border-slate-200 px-6 md:px-12 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                location.pathname === link.path ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 animate-in fade-in slide-in-from-bottom-1 duration-300" />
              )}
            </Link>
          ))}
          <button
            onClick={onDownloadClick}
            className="bg-slate-950 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all flex items-center space-x-2 shadow-lg shadow-slate-900/10"
          >
            <span>Download CV</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden p-2 text-slate-900" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950 z-[60] transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.22),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-6 py-7">
          <div className="flex justify-between items-center mb-10">
            <Logo className="scale-95 origin-left" />
            <button
              onClick={() => setIsOpen(false)}
              className="w-12 h-12 rounded-xl border border-slate-200 bg-white text-slate-950 flex items-center justify-center shadow-sm"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          <div className="mb-8 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-5 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400 mb-3">Available For</p>
            <p className="text-2xl serif leading-tight text-slate-950 mb-4">DevOps Engineer / Cloud Engineer roles</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <MapPin size={16} />
              <span>Bangalore, India / Remote</span>
            </div>
          </div>

          <div className="space-y-3">
            {navLinks.map((link, index) => {
              const active = location.pathname === link.path;
              return (
              <Link
                key={link.path}
                to={link.path}
                className={`group flex items-center justify-between rounded-2xl border px-5 py-4 transition-all ${
                  active
                    ? 'border-slate-950 bg-slate-950 text-white shadow-xl shadow-slate-900/10'
                    : 'border-slate-200 bg-white text-slate-950 hover:border-slate-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-4">
                  <span className={`text-[10px] font-bold tracking-widest ${active ? 'text-slate-400' : 'text-slate-400'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-2xl serif">{link.name}</span>
                </span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-8 pb-4">
             <button
              onClick={() => { onDownloadClick(); setIsOpen(false); }}
              className="w-full bg-slate-950 text-white py-4 rounded-2xl text-base font-bold mb-6 flex items-center justify-center gap-3 shadow-2xl shadow-slate-900/15"
            >
              <Download size={18} />
              <span>Download CV</span>
            </button>
            <div className="grid grid-cols-3 gap-2 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
              <a href="https://linkedin.com/in/alimurtazadevops/" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-center">LinkedIn</a>
              <a href="https://github.com/alidevopsculture" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-center">GitHub</a>
              <a href="https://www.youtube.com/@devopswithali" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-center">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
