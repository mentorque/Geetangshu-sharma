import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-eyebrow">
            <MapPin size={14} />
            {site.location}
            <span className="hero-status">{site.status}</span>
          </p>

          <h1 className="hero-name">{site.name}</h1>
          <p className="hero-role">{site.title}</p>

          <p className="hero-summary">{site.summary}</p>

          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={() => scrollTo("contact")}>
              Get in touch
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => scrollTo("experience")}>
              View experience
            </button>
            <a href={site.resume} download className="btn btn-secondary"><Download size={16} /> Download CV</a>
          </div>

          <div className="hero-stats">
            {site.highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="hero-stat"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + index * 0.08, duration: 0.5 }}
              >
                <span className="hero-stat-value">{item.value}</span>
                <span className="hero-stat-label">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="hero-social">
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} aria-label="Phone">
              <Phone size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-frame">
            <div className="portrait-ring portrait-ring--one" aria-hidden="true" />
            <div className="portrait-ring portrait-ring--two" aria-hidden="true" />
            <div className="portrait-accent" aria-hidden="true" />
            <img src={site.portrait} alt={site.name} className="portrait-image" />
            <div className="portrait-caption">
              <p>{site.name}</p>
              <span>{site.title}</span>
            </div>
            <div className="portrait-note" aria-hidden="true">
              <span>profile</span>
              <strong>01</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="hero-scroll"
        aria-label="Scroll to experience"
        onClick={() => scrollTo("experience")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={18} />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
