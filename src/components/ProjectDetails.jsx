import { SparklesIcon, GithubIcon, CodeIcon, ExternalIcon } from "./Icons";
import Navbar from "./Navbar";
import { useEffect } from "react";

export default function ProjectDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="portfolio-wrapper">
        <div className="bento-grid">
          
          {/* Hero Section */}
          <section className="bento-card col-span-2 hero-card">
            <div className="hero-status">
              <span className="status-dot"></span>
              <span>EduHub • PERN Stack</span>
            </div>
            <div>
              <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>University Management System</h1>
              <h2 className="hero-subtitle">Comprehensive Learning Management Platform</h2>
            </div>
            <p className="hero-desc">
              A modern PERN stack platform handling user identity, academic hierarchy, course management, enrollments, and real-time dashboard analytics.
              Built around a strictly typed data model and secured using role-based access control (RBAC), API rate-limiting, and Web Application Firewall (WAF) policies.
            </p>
            <div className="project-tags" style={{ marginTop: '1.5rem' }}>
              <span className="project-tag">React</span>
              <span className="project-tag">Node.js</span>
              <span className="project-tag">Express</span>
              <span className="project-tag">PostgreSQL</span>
              <span className="project-tag">Drizzle ORM</span>
              <span className="project-tag">Better-Auth</span>
              <span className="project-tag">Arcjet</span>
            </div>
            
            <div className="hero-links-row">
              <a href="https://university-management-system-fronte-six.vercel.app/" target="_blank" rel="noreferrer" className="contact-link-block" style={{ borderColor: 'var(--accent-primary)' }}>
                <span className="contact-icon"><SparklesIcon /></span>
                <div className="contact-info">
                  <span className="contact-type" style={{ color: 'var(--accent-primary)' }}>Live Demo</span>
                  <span className="contact-val">Production App</span>
                </div>
                <span className="contact-icon" style={{ marginLeft: "auto" }}><ExternalIcon /></span>
              </a>
              <a href="https://github.com/ozaharsh95/university-management-system-frontend" target="_blank" rel="noreferrer" className="contact-link-block">
                <span className="contact-icon"><GithubIcon /></span>
                <div className="contact-info">
                  <span className="contact-type">Repository</span>
                  <span className="contact-val">Frontend Code</span>
                </div>
                <span className="contact-icon" style={{ marginLeft: "auto" }}><ExternalIcon /></span>
              </a>
              <a href="https://github.com/ozaharsh95/university-management-system-backend" target="_blank" rel="noreferrer" className="contact-link-block">
                <span className="contact-icon"><GithubIcon /></span>
                <div className="contact-info">
                  <span className="contact-type">Repository</span>
                  <span className="contact-val">Backend Code</span>
                </div>
                <span className="contact-icon" style={{ marginLeft: "auto" }}><ExternalIcon /></span>
              </a>
            </div>
          </section>

          {/* Key Features */}
          <section className="bento-card col-span-1 timeline-card">
            <h3 className="card-title"><SparklesIcon /> Core Features</h3>
            <div className="timeline-items">
              <div className="timeline-block">
                <div className="timeline-marker"></div>
                <h4 className="timeline-role">Multi-Role Auth</h4>
                <p className="timeline-details expanded" style={{ marginTop: '0.25rem' }}>Secure access via better-auth, supporting Admin, Teacher, and Student roles with differentiated permissions.</p>
              </div>
              <div className="timeline-block">
                <div className="timeline-marker"></div>
                <h4 className="timeline-role">Academic Hierarchy</h4>
                <p className="timeline-details expanded" style={{ marginTop: '0.25rem' }}>Complete CRUD capabilities for dynamically managing Departments, Subjects, and Classes.</p>
              </div>
              <div className="timeline-block">
                <div className="timeline-marker"></div>
                <h4 className="timeline-role">Enrollment System</h4>
                <p className="timeline-details expanded" style={{ marginTop: '0.25rem' }}>Students dynamically join classes utilizing unique 7-character invite codes with capacity checking.</p>
              </div>
              <div className="timeline-block">
                <div className="timeline-marker"></div>
                <h4 className="timeline-role">Analytics Dashboards</h4>
                <p className="timeline-details expanded" style={{ marginTop: '0.25rem' }}>Specialized statistical REST endpoints returning aggregated JSON data tailored to each user role.</p>
              </div>
            </div>
          </section>

          {/* Architecture & Security */}
          <section className="bento-card col-span-1 timeline-card">
            <h3 className="card-title"><CodeIcon /> Security & Architecture</h3>
            <div className="timeline-items">
              <div className="timeline-block">
                <div className="timeline-marker"></div>
                <h4 className="timeline-role">Strict Type Safety</h4>
                <p className="timeline-details expanded" style={{ marginTop: '0.25rem' }}>
                  Complete database integrity and schema validation using Drizzle ORM connecting to Serverless PostgreSQL on Neon DB.
                </p>
              </div>
              <div className="timeline-block">
                <div className="timeline-marker"></div>
                <h4 className="timeline-role">Hardened Endpoints (WAF)</h4>
                <p className="timeline-details expanded" style={{ marginTop: '0.25rem' }}>
                  Protected by Arcjet SDK against automated scraper bots, SQL injections, and DDoS. Implements sliding-window dynamic rate limiting.
                </p>
              </div>
              <div className="timeline-block">
                <div className="timeline-marker"></div>
                <h4 className="timeline-role">Stateless API</h4>
                <p className="timeline-details expanded" style={{ marginTop: '0.25rem' }}>
                  Node.js/Express.js backend acting as a stateless REST API that communicates directly with the React frontend via HTTP-only cookies.
                </p>
              </div>
            </div>
          </section>

          {/* Database Schema Overview */}
          <section className="bento-card col-span-2 projects-card">
             <h3 className="card-title"><SparklesIcon /> Database Entities</h3>
             <div className="projects-grid-3">
               <article className="project-item">
                 <div className="project-header">
                   <h4 className="project-name">Departments & Subjects</h4>
                 </div>
                 <p className="project-desc">Top-level academic units and their courses. Forms the rigid structural hierarchy of the university.</p>
               </article>
               <article className="project-item">
                 <div className="project-header">
                   <h4 className="project-name">Classes & Enrollments</h4>
                 </div>
                 <p className="project-desc">Specific instances of subjects taught by a teacher, dynamically linking students via a secure Many-to-Many join table.</p>
               </article>
               <article className="project-item">
                 <div className="project-header">
                   <h4 className="project-name">Auth Ecosystem</h4>
                 </div>
                 <p className="project-desc">Managed exclusively by Better-Auth's Drizzle adapter: Users, Sessions, and Accounts tables integrated natively.</p>
               </article>
             </div>
          </section>

        </div>

        <footer className="bento-footer">
          <div>Designed &amp; Built in 2026 by Harsh Oza</div>
          <div>Powered by React • Vite • Vanilla CSS. All rights reserved.</div>
        </footer>
      </div>
    </>
  );
}
