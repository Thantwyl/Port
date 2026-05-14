import { Link } from 'react-router-dom';
import profile from '../../data/profile.js';

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-primary)] py-16 px-6 bg-[var(--bg-primary)] relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <Link to="/" className="text-2xl font-bold cinematic-text mb-6 block text-[var(--text-primary)]">Thantwyl <span className="text-orange-500">.DeV</span></Link>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed uppercase tracking-wide">
            {profile.title} // {profile.tagline}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h4 className="cinematic-text text-xs mb-6 text-[var(--text-primary)]">// Social</h4>
            <div className="flex flex-col gap-3">
              <a href={profile.social.github} className="text-xs uppercase tracking-widest hover:text-orange-800 transition-colors text-orange-400">GitHub</a>
              <a href={profile.social.linkedin} className="text-xs uppercase tracking-widest hover:text-orange-800 transition-colors text-orange-400">LinkedIn</a>
              <a href={profile.social.mail} className="text-xs uppercase tracking-widest hover:text-orange-800 transition-colors text-orange-400">Mail</a>
            </div>
          </div>
          <div>
            <h4 className="cinematic-text text-xs mb-6 text-[var(--text-primary)]">// Pages</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-xs uppercase tracking-widest hover:text-orange-800 transition-colors text-orange-400">Home</Link>
              <Link to="/projects" className="text-xs uppercase tracking-widest hover:text-orange-800 transition-colors text-orange-400">Projects</Link>
              <Link to="/about" className="text-xs uppercase tracking-widest hover:text-orange-800 transition-colors text-orange-400">About</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--border-primary)] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] cinematic-text text-[var(--text-secondary)]">
        <span>© {new Date().getFullYear()} THANTWYL // ALL RIGHTS RESERVED</span>
        <span>DESIGNED FOR PERFORMANCE</span>
      </div>
    </footer>
  );
};

export default Footer;
