import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';

const resumeUrl = 'https://drive.google.com/file/d/1Bz2ovQmy-mEIjq-kvJBxT10w9U42RhdY/view?usp=sharing';

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="container contact-card">
      <h2>Let&apos;s Connect!</h2>
      <p className="contact-copy">
        I’m open to new opportunities and exciting collaborations.✨
      </p>
      <div className="contact-actions">
        <a href="mailto:samikshaburte2006@gmail.com" className="btn btn-primary">
          <Mail size={18} /> Email Me
        </a>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <FaFilePdf size={17} /> View Resume <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="contact-social-links" aria-label="Social profiles">
        <a href="https://www.linkedin.com/in/samiksha-burte-030515283/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/SamikshaBurte" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" title="GitHub">
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
