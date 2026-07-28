import { useState } from "react";
import { MailIcon } from "./Icons";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setStatus("sending");

    try {
      const apiKey = import.meta.env.VITE_WEB3FORMS_KEY;
      if (!apiKey) {
        throw new Error("Access key is missing in environmental variables.");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: formData.name,
          email: formData.email || "no-email@provided.com",
          message: formData.message,
          subject: `Portfolio Feedback from ${formData.name}`,
          from_name: "Harsh Oza Portfolio Feedback",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      console.error("Feedback Form Error:", err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="bento-card col-span-2 feedback-card" id="contact">
      <div className="feedback-section-content">
        <h3 className="card-title" style={{ marginBottom: "1rem" }}>
          💌 Send Feedback & Suggestions
        </h3>

        <form onSubmit={handleSubmit} className="guestbook-form">
          <div className="form-group">
            <label htmlFor="user-name">Name</label>
            <input
              type="text"
              id="user-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              disabled={status === "sending"}
            />
          </div>
          <div className="form-group">
            <label htmlFor="user-email">Email</label>
            <input
              type="email"
              id="user-email"
              name="email"
              value={formData.email}
              required
              onChange={handleInputChange}
              placeholder="hello@example.com"
              disabled={status === "sending"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="user-msg">Message / Suggestion</label>
            <textarea
              id="user-msg"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me what you think, or write a suggestion for improvement..."
              rows="4"
              required
              disabled={status === "sending"}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`guestbook-submit-btn ${status}`}
            disabled={
              status === "sending" ||
              !formData.name.trim() ||
              !formData.message.trim()
            }
          >
            {status === "idle" && "Send Message 🚀"}
            {status === "sending" && (
              <span className="btn-spinner-wrapper">
                <span className="btn-spinner"></span> Sending...
              </span>
            )}
            {status === "success" && "Feedback Sent! ✓"}
            {status === "error" && "Failed to send. Try again ✗"}
          </button>
        </form>
      </div>
    </section>
  );
}
