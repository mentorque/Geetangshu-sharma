import SectionHeading from "@/components/ui/SectionHeading";
import SectionReveal from "@/components/ui/SectionReveal";
import { projects } from "@/config/site";

const Projects = () => (
  <section id="projects" className="section section--projects">
    <div className="container">
      <SectionHeading
        index="02"
        title="Projects"
        description="Selected work in AI security, interactive education, and natural language processing."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <SectionReveal key={project.title} delay={index * 0.1}>
            <article className="panel project-card">
              <div className="project-top">
                <span className="project-period">{project.period}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">Explore the platform ↗</a>}
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
