import { Link } from "react-router-dom";
import { SparklesIcon, GithubIcon } from "./Icons";

const projects = [
  {
    name: "EduHub: University Management System",
    desc: "PERN stack Learning Management System. Features role-based auth, class enrollments, analytics dashboards, and robust WAF security.",
    tags: ["React", "Node.js", "PostgreSQL", "Drizzle ORM"],
    link: "https://github.com/ozaharsh95",
    internalRoute: "/project/university-management-system",
  },
  {
    name: "BentoCraft Builder",
    desc: "Interactive grid editor interface for building and styling glassmorphic bento blocks. Dynamic grid export to raw HTML/CSS styling.",
    tags: ["NextJS", "TypeScript", "CSS Grid"],
    link: "https://github.com/ozaharsh95",
  },
  {
    name: "SecureCore API",
    desc: "Node/Express framework boiler template features integrated JWT authentication protocols, rate-limiting handlers, and unified API testing.",
    tags: ["Node.js", "Express", "JWT", "Jest"],
    link: "https://github.com/ozaharsh95",
  },
  {
    name: "DevDocs Engine",
    desc: "Responsive API catalog explorer supporting markdown parse engines, live testing fields, and interactive query parameter binding.",
    tags: ["React", "Vite", "Markdown", "APIs"],
    link: "https://github.com/ozaharsh95",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="bento-card col-span-2 projects-card" id="projects">
      <h3 className="card-title">
        <SparklesIcon /> Curated Projects
      </h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-item">
            <div className="project-header">
              <h4 className="project-name">
                {project.internalRoute ? (
                  <Link
                    to={project.internalRoute}
                    className="project-internal-link"
                  >
                    {project.name}
                  </Link>
                ) : (
                  project.name
                )}
              </h4>
              <div className="project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  aria-label={`${project.name} Github Repository`}
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
