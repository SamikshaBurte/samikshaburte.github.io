import React from 'react';

const skillCategories = [
  {
    title: "🤖 AI/ML & Data",
    skills: ["Python", "Machine Learning", "Random Forest", "Pandas/Data Processing", "SQL", "Power BI"]
  },
  {
    title: "💻 Software Development",
    skills: ["Python", "Java", "JavaScript", "C", "C++", "React", "Flask", "FastAPI", "REST APIs"]
  },
  {
    title: "🗃️ Databases & Testing",
    skills: ["SQL", "MySQL", "SQLite", "SQLAlchemy", "pytest", "Postman", "SQL Server Management Studio (SSMS)"]
  },
  {
    title: "☁️ Cloud, DevOps & Tools",
    skills: ["AWS", "Docker", "Terraform", "Git", "GitHub", "GitHub Actions", "VS Code"]
  }
];

const Skills = () => {
  return (
    <section id="skills" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '1.25rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {skillCategories.map(category => (
            <div key={category.title} style={{
              backgroundColor: 'var(--card-bg)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h3 style={{
                fontSize: '1.1rem',
                marginBottom: '1rem',
                color: 'var(--text-color)',
                borderBottom: '2px solid var(--border-color)',
                paddingBottom: '0.5rem'
              }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {category.skills.map(skill => (
                  <span key={skill} style={{
                    fontSize: '0.875rem',
                    padding: '0.35rem 0.75rem',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-secondary)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.borderColor = 'var(--accent-1)';
                    e.currentTarget.style.color = 'var(--text-color)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
