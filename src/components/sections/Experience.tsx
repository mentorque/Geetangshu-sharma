import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionReveal from "@/components/ui/SectionReveal";
import { experiences } from "@/config/site";

const Experience = () => (
  <section id="experience" className="section section--experience">
    <div className="container">
      <SectionHeading
        index="01"
        title="Experience"
        description="From data pipelines and production machine learning to practical AI engineering."
      />

      <div className="timeline">
        {experiences.map((exp, index) => (
          <SectionReveal key={`${exp.company}-${index}`} delay={index * 0.08} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true">
              <Briefcase size={16} />
            </div>
            <article className="panel timeline-card">
              <header className="timeline-header">
                <div>
                  <h3>{exp.title}</h3>
                  <p className="timeline-company">{exp.company}</p>
                </div>
                <time className="timeline-period">{exp.period}</time>
              </header>
              <ul className="timeline-list">
                {exp.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
