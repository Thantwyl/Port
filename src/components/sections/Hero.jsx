import { motion } from 'framer-motion';
import profile from '../../data/profile.js';
import Button from '../ui/Button.jsx';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="cinematic-text text-xs opacity-50 mb-8 block">{profile.title}</span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold text-[var(--text-primary)] tracking-tighter leading-[0.9] mb-12 uppercase">
            Design <span className="text-orange-500">Future</span><br />
            Systems Now
          </h1>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-16">
            <Button to="/projects" variant="primary">Explore projects</Button>
            <Button to="/contact" variant="outline">Initiate Link</Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] cinematic-text text-orange-500 opacity-65">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[color:var(--text-secondary)]/70 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
