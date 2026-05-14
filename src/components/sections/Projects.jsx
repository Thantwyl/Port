import { Link } from 'react-router-dom';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';
import projectsData from '../../data/projects.js';

const Projects = ({ isHomePage = false, maxProjects = null }) => {
  const displayProjects = maxProjects ? projectsData.slice(0, maxProjects) : projectsData;
  
  return (
    <section className={`relative ${isHomePage ? 'py-16 sm:py-24' : 'py-32 sm:py-48'} px-6 bg-[var(--bg-primary)]`}>
      <div className="max-w-7xl mx-auto">
        <span className="cinematic-text text-xs text-[var(--text-secondary)] mb-4 block">// Operations Log</span>
        <div className={`mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 ${isHomePage ? 'mb-16' : 'mb-24'}`}>
          <div className="max-w-xl">
            <h2 className="section-heading whitespace-nowrap">Featured <span className="text-orange-500">Modules</span></h2>
          </div>
          {!isHomePage && (
            <p className="text-sm text-[var(--text-secondary)] uppercase tracking-widest mb-4">Total Deployments: {projectsData.length}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {displayProjects.map((p) => (
            <Card key={p.id} project={p} />
          ))}
        </div>
        {/* Direction Arrow to Projects Page */}
        {isHomePage && (
          <div className="flex justify-end mt-12">
            <Button to="/projects" variant="outline" className="border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300">
              <span className="text-[10px] cinematic-text">Explore Projects</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
