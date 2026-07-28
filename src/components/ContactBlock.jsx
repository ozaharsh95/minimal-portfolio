import { useState } from "react";
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  ExternalIcon,
  CopyIcon,
  CheckIcon,
} from "./Icons";

export default function ContactBlock() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("harsh.oza.work@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section className="bento-card col-span-1 contact-card" id="contact-links">
      <h3 className="card-title" style={{ marginBottom: "1.25rem" }}>
        <MailIcon /> Direct Channels
      </h3>
      <div className="contact-options">
        <div
          className="contact-link-block"
          onClick={handleCopyEmail}
          title="Click to copy email"
        >
          <span className="contact-icon">
            <MailIcon />
          </span>
          <div className="contact-info">
            <span className="contact-type">Email</span>
            <span className="contact-val">harsh.oza.work@gmail.com</span>
          </div>
          <span className="copy-badge">
            {emailCopied ? <CheckIcon /> : <CopyIcon />}
          </span>
        </div>

        <a
          href="https://github.com/ozaharsh95"
          target="_blank"
          rel="noreferrer"
          className="contact-link-block"
        >
          <span className="contact-icon">
            <GithubIcon />
          </span>
          <div className="contact-info">
            <span className="contact-type">GitHub</span>
            <span className="contact-val">github.com/ozaharsh95</span>
          </div>
          <span className="contact-icon" style={{ marginLeft: "auto" }}>
            <ExternalIcon />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/harshoza955/"
          target="_blank"
          rel="noreferrer"
          className="contact-link-block"
        >
          <span className="contact-icon">
            <LinkedinIcon />
          </span>
          <div className="contact-info">
            <span className="contact-type">LinkedIn</span>
            <span className="contact-val">linkedin.com/in/harshoza955</span>
          </div>
          <span className="contact-icon" style={{ marginLeft: "auto" }}>
            <ExternalIcon />
          </span>
        </a>

        <a
          href="https://x.com/ozaharsh95"
          target="_blank"
          rel="noreferrer"
          className="contact-link-block"
        >
          <span className="contact-icon">
            <TwitterIcon />
          </span>
          <div className="contact-info">
            <span className="contact-type">Twitter</span>
            <span className="contact-val">x.com/ozaharsh95</span>
          </div>
          <span className="contact-icon" style={{ marginLeft: "auto" }}>
            <ExternalIcon />
          </span>
        </a>
      </div>
    </section>
  );
}
