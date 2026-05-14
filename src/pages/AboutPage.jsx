import About from '../components/sections/About.jsx';

const AboutPage = () => {
  return (
    <div className="pt-24">
       <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-24 px-6 text-center border-b border-[var(--border-primary)]">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6">System // <span className="text-orange-500">Overview</span></h1>
        <p className="opacity-50 cinematic-text text-xs">Technical Profile & Design Philosophy</p>
      </div>
      <About />
    </div>
  );
};

export default AboutPage;
