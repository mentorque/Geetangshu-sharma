import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { site } from "@/config/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-mark">{site.initials}</span>
          <p>
            © {year} {site.name}
          </p>
        </div>

        <div className="footer-links">
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
      </div>
    </footer>
  );
};

export default Footer;
