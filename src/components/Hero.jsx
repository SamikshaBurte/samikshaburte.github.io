import React, { useState } from 'react';

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipImage = () => setIsFlipped(current => !current);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-content fade-up">
        <div className="profile-frame">
          <button
            className={`profile-flip${isFlipped ? ' is-flipped' : ''}`}
            onClick={flipImage}
            aria-label={isFlipped ? 'Flip back to profile photo' : 'Flip profile photo'}
            aria-pressed={isFlipped}
            type="button"
          >
            <span className="profile-flip-inner">
              <span className="profile-face profile-front">
                <img src="/assets/headshot.png" alt="Samiksha Burte" />
              </span>
              <span className="profile-face profile-back">
                <img src="/assets/avatar_portrait.png" alt="Illustrated portrait of Samiksha" />
              </span>
            </span>
          </button>
        </div>

        <h1 className="hero-name">SAMIKSHA  BURTE</h1>
        <p className="hero-tagline">AI/ML <span>✦</span> Software Development <span>✦</span> Data Analytics</p>
        <p className="hero-motto">💡Curious mind. 💻Practical code. 🚀Meaningful impact.</p>
        <div className="availability-status">
          <span className="status-dot" aria-hidden="true" />
          Currently open for entry-level job opportunities.
        </div>
        <div className="hero-about">
          <p>I enjoy turning ideas into practical solutions through code, data, and a little curiosity.</p>
          <p>I&apos;m a recent 2026 B.Sc. IT graduate, always learning, always building, and looking forward to kick-start my career in tech.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
