import React from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed left-5 bottom-6 z-50 h-12 w-12 rounded-2xl border border-white/20 bg-slate-950 text-white shadow-2xl shadow-slate-900/20 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 md:left-8 md:bottom-8 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity hover:opacity-100" />
      <ArrowUp size={20} className="relative mx-auto" />
    </button>
  );
};

export default ScrollUpButton;
