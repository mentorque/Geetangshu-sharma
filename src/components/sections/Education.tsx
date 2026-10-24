import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionReveal from "@/components/ui/SectionReveal";
import { education } from "@/config/site";

const Education = () => (
  <section id="education" className="section section--education">
    <div className="container">
      <SectionHeading
        index="04"
        title="Education"
        description="An academic foundation in information systems and engineering."
      />

      <div className="education-grid">
        {education.map((item, index) => (
          <SectionReveal key={`${item.school}-${item.degree}`} delay={index * 0.08}>
            <article className="panel education-card">
              <div className="education-icon" aria-hidden="true">
                <GraduationCap size={20} />
              </div>
              <h3>{item.degree}</h3>
              <p className="education-school">{item.school}</p>
              <p className="education-details">{item.details}</p>
              <span className="education-period">{item.period}</span>
            </article>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
