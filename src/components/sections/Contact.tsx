import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionReveal from "@/components/ui/SectionReveal";
import { site } from "@/config/site";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: site.linkedinHandle,
    href: site.linkedin,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    external: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.location,
    href: null,
    external: false,
  },
];

const Contact = () => (
  <section id="contact" className="section section--contact">
    <div className="container">
      <SectionHeading
        index="05"
        title="Contact"
        description="Open to new opportunities, collaborations, and conversations."
      />

      <SectionReveal>
        <div className="panel contact-panel">
          <div className="contact-grid">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className="contact-icon" aria-hidden="true">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="contact-label">{item.label}</p>
                    <p className="contact-value">
                      {item.value}
                      {item.external && <ArrowUpRight size={14} />}
                    </p>
                  </div>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="contact-item"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className="contact-item contact-item--static">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="contact-actions">
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              <Mail size={16} />
              Send email
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default Contact;
