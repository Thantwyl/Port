import { Link } from 'react-router-dom';
import Button from '../ui/Button.jsx';

const WhyWorkWithMe = () => {
  const reasons = [
    {
      title: "Technical Excellence",
      description: "Delivering high-performance solutions with cutting-edge technologies and best practices."
    },
    {
      title: "Creative Problem Solving",
      description: "Transforming complex challenges into elegant, scalable solutions that drive results."
    },
    {
      title: "Collaborative Approach",
      description: "Working closely with teams to understand needs and deliver tailored solutions."
    },
    {
      title: "Continuous Innovation",
      description: "Staying ahead of technology trends to future-proof your digital infrastructure."
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 px-6 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="cinematic-text text-xs text-[var(--text-secondary)] mb-6 block">// Why Work With Me</span>
          <h2 className="section-heading">Strategic <span className="text-orange-500">Partnership</span></h2>
          <p className="text-xl text-[var(--text-secondary)] font-light max-w-3xl mx-auto mt-8">
            Let's build something extraordinary together. I bring technical expertise, creative vision, and a commitment to excellence that transforms ideas into impactful digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="group border border-[var(--border-primary)] p-8 hover:border-[var(--text-primary)] transition-all duration-500">
              <div className="w-2 h-2 bg-[var(--text-primary)] group-hover:scale-150 transition-transform duration-500 mb-6" />
              <h3 className="text-lg font-bold text-orange-500 mb-4">{reason.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-[var(--text-secondary)] font-light mb-12 mx-auto whitespace-nowrap">
            Ready to start your next project? Let's discuss how we can bring your vision to life.
          </p>
        </div>
        {/* Contact Navigation Button - Right Bottom Corner */}
        <div className="flex justify-end mt-16">
          <Button to="/contact" variant="outline" className="border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300">
            <span className="text-xs cinematic-text">initiate link</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;