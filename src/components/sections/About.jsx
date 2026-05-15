import { Github, Linkedin, Mail } from 'lucide-react';
import profile from '../../data/profile.js';
import Button from '../ui/Button.jsx';

const About = ({ isHomePage = false }) => {
  return (
    <section className={`relative ${isHomePage ? 'py-16 sm:py-24 px-4 sm:px-6 md:px-12' : 'py-32 sm:py-48 px-4 sm:px-6 md:px-12'} bg-[var(--bg-surface)]`}>
      <div className="max-w-7xl mx-auto">
        {/* Profile Image and Bio Side by Side */}
        <div className={`grid lg:grid-cols-2 ${isHomePage ? 'gap-16 items-center mb-16' : 'gap-24 items-center mb-24'}`}>
          <div className="aspect-square bg-[var(--bg-primary)] border border-[var(--border-primary)] relative overflow-hidden group">
            <img 
              src={profile.avatar} 
              alt="Profile" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute top-8 left-8">
              <span className="text-[10px] cinematic-text bg-[var(--bg-primary)]/80 backdrop-blur-sm px-3 py-1 border border-[var(--border-primary)] text-[var(--text-primary)]">System Admin</span>
            </div>
          </div>
          
          <div>
            <span className="cinematic-text text-xs text-[var(--text-secondary)] mb-6 block">// Profile Overview</span>
            <h2 className="section-heading">Architecting <span className="text-orange-500">Digital</span> Experiences</h2>
            
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed mb-8">
              {profile.bio}
            </p>
            
            {/* CV Download Button & Social Links - Only show on full about page */}
            {!isHomePage && (
              <div className="mb-12 flex items-center gap-6">
                <Button href="/Resume.pdf" download="Thantwyl_resume.pdf" variant="outline">
                  Download Resume
                </Button>
                <div className="flex items-center gap-5 border-l border-[var(--border-primary)] pl-6">
                  {profile.social?.github && (
                    <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-orange-500 transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {profile.social?.linkedin && (
                    <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-orange-500 transition-colors">
                      <Linkedin size={20} />
                    </a>
                  )}
                  <a href="mailto:hello@example.com" className="text-[var(--text-secondary)] hover:text-orange-500 transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Show full content only on About page */}
        {!isHomePage && (
          <>
            {/* Technical Skills - 4 per row */}
            <div className="mb-24">
              <h3 className="cinematic-text text-xs text-[var(--text-secondary)] mb-8 block">// Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {profile.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm font-medium uppercase tracking-widest hover:border-[var(--text-primary)] transition-all text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Professional Experience */}
            <div className="mb-24">
              <h3 className="cinematic-text text-xs text-[var(--text-secondary)] mb-8 block">// Professional Experience</h3>
              <div className="space-y-8">
                {profile.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-[var(--border-primary)] pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-[var(--text-primary)]">{exp.title}</h4>
                      <span className="text-xs text-[var(--text-secondary)] cinematic-text">{exp.period}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] font-medium mb-2">{exp.role}</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <h3 className="cinematic-text text-xs text-[var(--text-secondary)] mb-8 block">// Education</h3>
              <div className="space-y-8">
                {profile.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-[var(--border-primary)] pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-[var(--text-primary)]">{edu.degree}</h4>
                      <span className="text-xs text-[var(--text-secondary)] cinematic-text">{edu.period}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {/* Direction Arrow to About Page */}
        {isHomePage && (
          <div className="flex justify-end mt-12">
            <Button to="/about" variant="outline" className="border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300">
              <span className="text-xs cinematic-text">More information</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
