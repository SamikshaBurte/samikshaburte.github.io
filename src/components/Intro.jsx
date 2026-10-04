import React, { useState, useEffect } from 'react';

const greetings = [
  { text: "Hello👋", lang: "en", font: "'Inter', sans-serif" },
  { text: "नमस्कार🙏", lang: "mr", font: "'Noto Sans Devanagari', sans-serif" },
  { text: "नमस्ते🙏", lang: "hi", font: "'Noto Sans Devanagari', sans-serif" },
  { text: "안녕하세요🌺", lang: "ko", font: "'Noto Sans KR', sans-serif" }
];
const greetingDuration = 600;

const Intro = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Prevent scrolling while intro is active
    document.body.style.overflow = 'hidden';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.body.style.overflow = 'unset';
      onComplete();
      return;
    }

    if (index < greetings.length) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, greetingDuration);
      return () => clearTimeout(timer);
    } else {
      setIsFadingOut(true);
      setTimeout(() => {
        document.body.style.overflow = 'unset';
        onComplete();
      }, 800); // fade out duration
    }
  }, [index, onComplete]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'var(--bg-color)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isFadingOut ? 0 : 1,
      transition: 'opacity 0.8s ease',
      pointerEvents: isFadingOut ? 'none' : 'auto'
    }}>
      <div style={{ position: 'relative', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {greetings.map((g, i) => (
          i === index && (
            <h1 key={g.lang} style={{
              fontFamily: g.font,
              fontSize: '3rem',
              margin: 0,
              animation: `slideUpFade ${greetingDuration}ms ease`,
              position: 'absolute',
              whiteSpace: 'nowrap'
            }}>
              {g.text}
            </h1>
          )
        ))}
      </div>

      <button 
        onClick={() => {
          document.body.style.overflow = 'unset';
          onComplete();
        }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          background: 'none',
          border: 'none',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          fontSize: '0.9rem',
          opacity: 0.7,
          transition: 'opacity 0.2s ease'
        }}
        onMouseOver={e => e.target.style.opacity = 1}
        onMouseOut={e => e.target.style.opacity = 0.7}
      >
        Skip Intro
      </button>

      <style>{`
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(16px); }
          12% { opacity: 1; transform: translateY(0); }
          88% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-16px); }
        }
      `}</style>
    </div>
  );
};

export default Intro;
