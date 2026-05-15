import { useState } from 'react';
import Button from '../components/ui/Button.jsx';
import profile from '../data/profile.js';

const Contactpage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <div className="mb-24">
          <span className="cinematic-text text-xs opacity-50 mb-4 block">// Communications Link</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6 leading-none">Initiate <span className="text-orange-500">Link</span></h1>
          <p className="text-lg opacity-60 font-light max-w-xl">Establishing secure channels for future collaboration and technical exchange.</p>
        </div>

        <div className="mb-16">
          <h2 className="cinematic-text text-sm mb-8">// Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-8">
                <span className="cinematic-text text-xs text-[var(--text-secondary)]">// Email</span>
                <p className="text-base md:text-lg mt-2 text-[var(--text-primary)] font-medium">{profile.social?.email}</p>
              </div>
              <div>
                <span className="cinematic-text text-xs text-[var(--text-secondary)]">// Location</span>
                <p className="text-base md:text-lg mt-2 text-[var(--text-primary)] font-medium">{profile.location}</p>
              </div>
            </div>
            <div>
              <span className="cinematic-text text-xs text-[var(--text-secondary)]">// Phone</span>
              <p className="text-base md:text-lg mt-2 text-[var(--text-primary)] font-medium">{profile.phone}</p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="border border-[var(--border-primary)] p-20 text-center">
            <h3 className="cinematic-text text-xl mb-4 text-[var(--text-primary)]">Transmission Successful</h3>
            <p className="text-xs text-[var(--text-secondary)]">Data packet received. Standing by for response.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-16">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="border-b border-[var(--border-primary)] pb-4">
                <label className="cinematic-text text-[10px] text-[var(--text-secondary)] mb-2 block">// Identity</label>
                <input type="text" placeholder="IDENTIFY YOURSELF" className="w-full bg-[var(--bg-primary)] outline-none py-2 uppercase tracking-widest text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]" required />
              </div>
              <div className="border-b border-[var(--border-primary)] pb-4">
                <label className="cinematic-text text-[10px] text-[var(--text-secondary)] mb-2 block">// Coordinates</label>
                <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-[var(--bg-primary)] outline-none py-2 uppercase tracking-widest text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]" required />
              </div>
            </div>
            
            <div className="border-b border-[var(--border-primary)] pb-4">
              <label className="cinematic-text text-[10px] text-[var(--text-secondary)] mb-2 block">// Objective</label>
              <input type="text" placeholder="SUBJECT OF TRANSMISSION" className="w-full bg-[var(--bg-primary)] outline-none py-2 uppercase tracking-widest text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]" required />
            </div>

            <div className="border-b border-[var(--border-primary)] pb-4">
              <label className="cinematic-text text-[10px] text-[var(--text-secondary)] mb-2 block">// Details</label>
              <textarea rows={4} placeholder="ENTER DATA" className="w-full bg-[var(--bg-primary)] outline-none py-2 uppercase tracking-widest text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] resize-none" required />
            </div>

            <Button type="submit" variant="outline" className="border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]">Execute Transmission</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contactpage;
