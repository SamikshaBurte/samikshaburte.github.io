import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Experience = () => {
  const [logoFailed, setLogoFailed] = useState(false);
  return (
    <section id="experience" className="experience-section">
      <div className="container">
          <h2>Internship Experience</h2>
        <article className="experience-card">
          <div className="experience-header">
            <div className="company-heading">
              <span className="company-logo" aria-label="FlyRank AI logo">
                {!logoFailed && <img src="https://media.licdn.com/dms/image/v2/D4D0BAQFImJOWJQrw7Q/company-logo_200_200/B4DZ47fBzzJ8AE-/0/1779114450389/flyrank_logo?e=2147483647&v=beta&t=rRSdi4dnwG7R42gjPK-H3cWP1pgWYaqEwWZWW131qgw" alt="FlyRank AI" onError={() => setLogoFailed(true)} />}
                {logoFailed && <span>F</span>}
              </span>
              <div>
                <h3>Machine Learning Engineering Intern</h3>
                <p>FlyRank AI</p>
              </div>
            </div>
            <div className="experience-meta">
              <span className="experience-date">Remote | July 2026 - September 2026</span>
              <a href="https://github.com/SamikshaBurte/flyrank-ml-internship" target="_blank" rel="noopener noreferrer" className="experience-github" aria-label="Internship project on GitHub" title="GitHub">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          <ul className="experience-points">
            <li>
              Developed a Python pipeline processing 30,000+ anonymized search-performance records to flag organic traffic decay and potential content-refresh opportunities.
            </li>
            <li>
              Used Random Forest with domain-grouped holdout cross-validation to avoid cross-domain data leakage.
            </li>
            <li>
              Achieved 60% Precision@50 compared with a reported 48% static SEO heuristic baseline.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
