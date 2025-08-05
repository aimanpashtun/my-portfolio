import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY as string);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong");
      }
    } catch (err) {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" style={{ padding: "2rem 1rem" }}>
      <h2>Contact</h2>
      <p>Have a question or want to collaborate? Send me a message.</p>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Your email" required />
        <textarea name="message" rows={6} placeholder="Your message" required />
        {/* simple honeypot */}
        <input name="botcheck" type="checkbox" className="hidden" style={{ display: "none" }} />
        <button type="submit" disabled={status==="sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && <p>Thanks! I’ll get back to you soon.</p>}
      {status === "error" && <p style={{ color: "crimson" }}>{error}</p>}
    </section>
  );
};

export default Contact;
