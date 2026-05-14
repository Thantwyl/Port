import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const calcHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };
    calcHeight();
    window.addEventListener('resize', calcHeight);
    return () => window.removeEventListener('resize', calcHeight);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-0 w-full z-[99999] transition-all duration-700"
      >
        {/* Animated Background Overlay */}
        <motion.div 
          initial={false}
          animate={{ 
            opacity: scrolled || isOpen ? 1 : 0,
          }}
          className="absolute inset-0 bg-[var(--bg-primary)]/70 backdrop-blur-xl border-b border-[var(--border-primary)] -z-10"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        <div className={`max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center transition-all duration-500 ${scrolled || isOpen ? 'py-4' : 'py-5 lg:py-10'}`}>
          <Link
            to="/"
            onClick={handleLogoClick}
            className="text-lg sm:text-2xl font-bold cinematic-text tracking-tighter text-[var(--text-primary)] transition-colors shrink-0"
          >
            Thantwyl <span className="text-orange-500">.Dev</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-[12px] uppercase tracking-[0.2em] cinematic-text hover:text-orange-500 transition-all duration-300 ${location.pathname === link.path ? 'text-orange-500 font-bold' : 'text-[var(--text-secondary)]'}`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={toggleDarkMode} 
              className="p-2 hover:bg-orange-500/10 transition-colors text-orange-500 border border-transparent hover:border-orange-500/20 rounded-full"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="lg:hidden flex items-center gap-3 shrink-0">
            <button 
              onClick={toggleDarkMode} 
              className="p-2.5 text-orange-500 hover:bg-orange-500/10 rounded-full transition-all border border-orange-500/10"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            
            <button 
              className={`p-2.5 rounded-full transition-all duration-300 border ${isOpen ? 'bg-orange-500 text-white border-orange-500' : 'text-orange-500 border-orange-500/20 hover:bg-orange-500/10'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed left-0 right-0 z-[99998] overflow-hidden bg-[var(--bg-primary)]/98 backdrop-blur-xl border-b border-[var(--border-primary)]"
              style={{
                top: navHeight ? `${navHeight}px` : undefined,
              }}
            >
              <div className="px-6 py-8 sm:px-12 flex flex-col gap-6">
                <span className="text-[10px] cinematic-text text-orange-500 tracking-[0.4em] uppercase opacity-60 mb-2">
                  // System Directory
                </span>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`text-2xl sm:text-3xl font-bold tracking-tighter flex items-center gap-4 transition-all ${location.pathname === link.path ? 'text-orange-500' : 'text-[var(--text-primary)]'}`}
                      >
                        <span className="text-[10px] font-mono opacity-20 mt-1">0{i + 1}</span>
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--border-primary)] flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-[9px] cinematic-text text-orange-500 uppercase tracking-[0.2em] opacity-80">Connection Status</p>
                    <p className="text-[10px] font-medium tracking-tighter opacity-50 uppercase">Port_8080 // Established</p>
                  </div>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
