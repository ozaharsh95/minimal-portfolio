import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SparklesIcon,
  CodeIcon,
  ClockIcon,
  MailIcon,
  GithubIcon,
} from "./Icons";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "timeline", "contact"];
      const scrollPosition = window.scrollY + 120; // offset for sticky nav

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const scrollToSection = (id) => {
    if (!isHome) {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 90;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // offset height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className="bento-navbar">
      <div
        className="nav-logo"
        onClick={() => (isHome ? scrollToSection("about") : navigate("/"))}
      >
        <span className="logo-accent">H</span>O
      </div>
      <div className="nav-links">
        {isHome ? (
          <>
            <button
              className={`nav-item ${activeSection === "about" ? "active" : ""}`}
              onClick={() => scrollToSection("about")}
            >
              <span className="nav-icon-wrapper">
                <SparklesIcon />
              </span>
              <span className="nav-text">About</span>
            </button>
            <button
              className={`nav-item ${activeSection === "skills" ? "active" : ""}`}
              onClick={() => scrollToSection("skills")}
            >
              <span className="nav-icon-wrapper">
                <CodeIcon />
              </span>
              <span className="nav-text">Skills</span>
            </button>
            <button
              className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
              onClick={() => scrollToSection("projects")}
            >
              <span className="nav-icon-wrapper">🚀</span>
              <span className="nav-text">Projects</span>
            </button>
            <button
              className={`nav-item ${activeSection === "timeline" ? "active" : ""}`}
              onClick={() => scrollToSection("timeline")}
            >
              <span className="nav-icon-wrapper">
                <ClockIcon />
              </span>
              <span className="nav-text">Experience</span>
            </button>
            <button
              className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
              onClick={() => scrollToSection("contact")}
            >
              <span className="nav-icon-wrapper">
                <MailIcon />
              </span>
              <span className="nav-text">Contact</span>
            </button>
          </>
        ) : (
          <button className="nav-item active" onClick={() => navigate("/")}>
            <span className="nav-icon-wrapper">
              <SparklesIcon />
            </span>
            <span className="nav-text">Back to Home</span>
          </button>
        )}
      </div>
    </nav>
  );
}
