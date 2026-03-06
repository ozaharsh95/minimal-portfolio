export default function PortfolioMain() {
  return (
    <div className="newspaper-page">
      <header className="masthead">
        <div className="masthead-title">
          <h1>Harsh Oza</h1>
          <h2>Full Stack Developer</h2>
        </div>
      </header>

      <main className="content-grid">
        <section className="lead-story">
          <h3 className="section-heading">PROFILE</h3>
          <h4 className="story-title">
            Full Stack Developer crafting clean, reliable products
          </h4>
          <p className="story-body">
            I am a full stack engineer focused on building fast, reliable web
            applications with modern JavaScript tooling. My recent work spans
            data-heavy dashboards, API-driven backends, and component libraries
            that emphasize performance, accessibility, and developer experience.
          </p>
          <p className="story-body">
            I enjoy taking ideas from zero to production: shaping the data
            model, designing intuitive UIs, and wiring everything together with
            robust, well-tested code.
          </p>
        </section>

        <section className="side-column">
          <article className="sidebar-block">
            <h3 className="section-heading">TECH STACK & TOOLS</h3>
            <ul className="stack-list">
              <li>
                <span className="stack-value">ReactJS, NextJS, TypeScript</span>
              </li>
              <li>
                <span className="stack-value">Node.js, ExpressJS</span>
              </li>
              <li>
                <span className="stack-value">Git, GitHub, VS code</span>
              </li>
            </ul>
          </article>

          <article className="sidebar-block">
            <h3 className="section-heading">CONTACT</h3>
            <p className="contact-line">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">
                <a
                  href="https://github.com/ozaharsh95"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  github.com/ozaharsh95
                </a>
              </span>
            </p>
            <p className="contact-line">
              <span className="contact-label">Email</span>
              <span className="contact-value">
                <a
                  href="mailto:harsh.oza.work@gmail.com"
                  className="link-underline"
                >
                  harsh.oza.work@gmail.com
                </a>
              </span>
            </p>
            <p className="contact-line">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">
                <a
                  href="https://www.linkedin.com/in/harshoza955/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  linkedin.com/in/harshoza955
                </a>
              </span>
            </p>
          </article>
        </section>

        <section className="timeline">
          <h3 className="section-heading">EXPERIENCE</h3>
          <article className="timeline-item">
            <div className="timeline-date">Aug 2024 – Aug 2025</div>
            <div className="timeline-content">
              <h4>SDE &mdash; AlphaBI</h4>

              <ul className="timeline-points">
                <li>
                  Built and maintained production-grade React/NextJS interfaces
                  for data analytics workflows.
                </li>
                <li>
                  Designed and implemented ExpressJS APIs to power
                  dashboard-style visualizations and reporting.
                </li>
                <li>
                  Collaborated across product and data teams to ship features
                  with measurable impact.
                </li>
              </ul>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-date">Jan 2024 – Jun 2024</div>
            <div className="timeline-content">
              <h4>Software Engineering Intern &mdash; AlphaBI</h4>

              <ul className="timeline-points">
                <li>
                  Contributed to React-based modules, refactoring components to
                  TypeScript for better safety.
                </li>
                <li>
                  Helped extend Node/Express services, focusing on clean,
                  maintainable route and controller design.
                </li>
                <li>
                  Learned agile practices and code review workflows in a
                  production team.
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className="timeline">
          <h3 className="section-heading">Education</h3>
          <article className="timeline-item">
            <div className="timeline-date">2020 – 2024</div>
            <div className="timeline-content">
              <h4>B.Tech in Computer Science &amp; Engineering</h4>
              <p className="timeline-subtitle">Nirma University</p>
            </div>
          </article>
        </section>
      </main>

      <footer className="footer-strip">
        <span>Harsh Oza &mdash; Full Stack Developer</span>
        <span>ReactJS • NextJS • TypeScript • ExpressJS</span>
      </footer>
    </div>
  );
}
