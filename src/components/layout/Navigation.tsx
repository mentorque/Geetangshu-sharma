import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/config/site";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(progress);

      if (progress > 0.98) {
        setActive(navItems[navItems.length - 1].href.slice(1));
        return;
      }

      const viewportAnchor = window.innerHeight * 0.42;
      const sectionCandidates = navItems
        .map((item) => {
          const id = item.href.slice(1);
          const element = document.getElementById(id);

          if (!element) {
            return null;
          }

          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

          return {
            id,
            isVisible,
            distance: Math.abs(rect.top - viewportAnchor),
          };
        })
        .filter((section): section is { id: string; isVisible: boolean; distance: number } =>
          Boolean(section)
        );

      const closestSection = sectionCandidates
        .filter((section) => section.isVisible)
        .sort((a, b) => a.distance - b.distance)[0];

      if (closestSection) {
        setActive(closestSection.id);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`site-nav ${isScrolled ? "site-nav--scrolled" : ""}`}
      >
        <div
          className="nav-progress"
          style={{ transform: `scaleX(${scrollProgress})` }}
          aria-hidden="true"
        />
        <div className="container nav-inner">
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
          >
            <span className="nav-brand-mark">{site.initials}</span>
            <span className="nav-brand-text">{site.name}</span>
          </a>

          <nav className="nav-desktop" aria-label="Primary">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${active === id ? "nav-link--active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <nav className="section-rail" aria-label="Section progress">
        {navItems.map((item, index) => {
          const id = item.href.slice(1);
          return (
            <button
              key={item.href}
              type="button"
              className={`section-rail-item ${
                active === id ? "section-rail-item--active" : ""
              }`}
              onClick={() => scrollTo(item.href)}
            >
              <span className="section-rail-dot" />
              <span className="section-rail-label">
                {String(index + 1).padStart(2, "0")} {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="nav-mobile"
          >
            <div className="container">
              {navItems.map((item, index) => {
                const id = item.href.slice(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className={`nav-mobile-link ${active === id ? "nav-mobile-link--active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
