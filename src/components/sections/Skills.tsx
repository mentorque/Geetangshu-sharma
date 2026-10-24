import SectionHeading from "@/components/ui/SectionHeading";
import SectionReveal from "@/components/ui/SectionReveal";
import { skillCategories } from "@/config/site";

const Skills = () => (
  <section id="skills" className="section section--skills">
    <div className="container">
      <SectionHeading
        index="03"
        title="Skills"
        description="A balanced mix of analytical, technical, and interpersonal capabilities."
      />

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <SectionReveal key={category.title} delay={index * 0.08}>
            <article className="panel skill-card">
              <h3>{category.title}</h3>
              <div className="tag-row">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag tag--soft">
                    {skill}
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

export default Skills;
