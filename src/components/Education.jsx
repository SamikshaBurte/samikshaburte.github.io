import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <h2>Education</h2>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: 'var(--card-bg)',
          borderRadius: '12px',
          padding: '2rem',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'flex-start'
        }}>
          <div style={{
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            padding: '1rem',
            borderRadius: '50%',
            color: 'var(--accent-1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <span role="img" aria-label="Graduation cap" style={{ fontSize: '2rem', lineHeight: 1 }}>
              🎓
            </span>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Bachelor of Science in Information Technology</h3>
            <p style={{ color: 'var(--text-color)', fontWeight: 500, marginBottom: '0.25rem' }}>
              Vidyalankar School of Information Technology, University of Mumbai
            </p>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <span>2023–2026</span>
            </div>
            <p style={{ color: 'var(--accent-1)', fontWeight: 600, fontSize: '0.95rem' }}>
              CGPA: 9.48/10.0
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
