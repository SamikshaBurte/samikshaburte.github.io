import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

const resumeUrl = 'https://drive.google.com/file/d/1ItNn5jWEe2H5gQnkhR218PSrybnT2UR_/view?usp=sharing';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(
      entries => {
        const visibleSection = entries
          .filter(entry => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) setActiveLink(`#${visibleSection.target.id}`);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5, 1] }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Internship', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: resumeUrl, external: true }
  ];

  const linkProps = (link) => link.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <nav className={`site-nav${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-inner container">
        <div className="desktop-nav" aria-label="Main navigation">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              {...linkProps(link)}
              className={activeLink === link.href ? 'active-link' : ''}
              onClick={() => setActiveLink(link.href)}
            >
              {link.name}
            </a>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </div>

        <div className="mobile-controls">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              {...linkProps(link)} 
              className={activeLink === link.href ? 'active-link' : ''}
              onClick={() => {
                setActiveLink(link.href);
                setIsMobileMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
