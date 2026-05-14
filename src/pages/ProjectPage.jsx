import Projects from '../components/sections/Projects.jsx';

const ProjectPage = () => {
  return (
    <div className="pt-24">
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-24 px-6 text-center border-b border-[var(--border-primary)]">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6">Archive // <span className="text-orange-500">Projects</span></h1>
        <p className="opacity-50 cinematic-text text-xs">Technical Index of Systems & Deployments</p>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectPage;
