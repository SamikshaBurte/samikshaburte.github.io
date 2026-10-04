import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          fontSize: '1.125rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.8'
        }}>
          <p>
            I am Samiksha Burte, a 2026 B.Sc. Information Technology graduate from Vidyalankar School of Information Technology, University of Mumbai. 
          </p>
          <p style={{ marginTop: '1rem' }}>
            I am interested in AI/ML, software development, and data analytics. I enjoy building practical applications and exploring how technology can solve real problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
