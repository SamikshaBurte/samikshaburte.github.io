import { Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "🛡️ PhishSafe",
    description: "A phishing email detection project focused on identifying potentially malicious email content. Designed as a security-focused application.",
    tech: ["Python", "Machine Learning", "Security"],
    github: "https://github.com/SamikshaBurte/PhishSafe",
    demo: ""
  },
  {
    title: "⚡ AppMonitor",
    description: "A Flask and React application/API monitoring project that checks endpoint health and latency using 10-second polling. Displays UP, SLOW, and DOWN states with deduplicated alerts and multiple severity levels.",
    tech: ["Flask", "React", "pytest", "Monitoring"],
    github: "https://github.com/SamikshaBurte/AppMonitor",
    demo: "https://app-monitor-three.vercel.app/"
  },
  {
    title: "🔎 LaunchLens",
    description: "A cloud-readiness and DevSecOps analyzer that performs eight cloud-readiness checks to calculate a 100-point score across four readiness levels.",
    tech: ["FastAPI", "AWS", "Terraform", "Docker", "GitHub Actions"],
    github: "https://github.com/SamikshaBurte/LaunchLens",
    demo: "https://launch-lens-kappa.vercel.app/"
  },
  {
    title: "📊 Pulse",
    description: "A business intelligence and data analytics project based on NYC 311 public-service request data, emphasizing data exploration and dashboard analytics.",
    tech: ["Data Analytics", "Power BI", "Business Intelligence"],
    github: "https://github.com/SamikshaBurte/Pulse-NYC-311-Service-Request-Performance",
    demo: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <article key={idx} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">
                {project.description}
              </p>
              <div className="project-tech-list" aria-label={`${project.title} technologies`}>
                {project.tech.map(t => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} title="GitHub">
                    <FaGithub size={20} />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live website`} title="Live website">
                    <Globe size={20} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
