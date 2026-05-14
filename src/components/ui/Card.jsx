const Card = ({ project }) => {
  return (
    <div className="group bg-[var(--bg-surface)] border border-[var(--border-primary)] p-4 sm:p-6 lg:p-8 hover:border-[var(--text-primary)] transition-all duration-500 h-full flex flex-col">
        {/* Project Image */}
        <div className="mb-4 sm:mb-6 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <span className="text-[8px] sm:text-[10px] cinematic-text text-[var(--text-secondary)]">00{project.id} // DEPLOYMENT</span>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--text-primary)] group-hover:scale-150 transition-transform duration-500" />
        </div>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 tracking-tighter leading-none text-[var(--text-primary)]">{project.title}</h3>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed font-light flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 mb-4 sm:mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[8px] sm:text-[10px] cinematic-text text-[var(--text-secondary)]">// {t}</span>
          ))}
        </div>

        {/* Status if applicable */}
        {project.status && (
          <div className="mb-3 sm:mb-4">
            <span className="text-xs text-orange-500 font-semibold uppercase tracking-widest">
              Status: {project.status}
            </span>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4 sm:gap-6 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[8px] sm:text-[10px] cinematic-text font-bold border-b border-[var(--text-primary)] pb-1 hover:border-orange-500 hover:text-orange-500 transition-all text-[var(--text-primary)]"
          >
            GitHub Repo
          </a>
          {project.live !== "#" ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[8px] sm:text-[10px] cinematic-text font-bold border-b border-[var(--text-primary)] pb-1 hover:border-orange-500 hover:text-orange-500 transition-all text-[var(--text-primary)]"
            >
              Live Demo
            </a>
          ) : (
            <span className="text-[8px] sm:text-[10px] cinematic-text text-[var(--text-secondary)]">Live Demo N/A</span>
          )}
        </div>
      </div>
    );
  };

export default Card;
