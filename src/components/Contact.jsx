import { useState } from 'react';
import useReveal from '../useReveal';

export default function Contact() {
  const r1 = useReveal();
  const r2 = useReveal();
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:maknoonzia13@gmail.com?subject=${subject}&body=${body}`;
    setStatus('Opening your email app...');
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <p className="eyebrow">contact</p>
        <h2>Let's build something together.</h2>
        <div className="contact-grid">
          <div className="contact-info reveal" ref={r1}>
            <p className="lede" style={{ marginTop: 16 }}>
              Open to internships and junior roles in frontend engineering or
              applied AI/ML. I reply fastest by email — feel free to reach out
              directly, or use the form.
            </p>

            <div className="contact-line">
              <span className="ci-label">Email</span>
              <a href="mailto:maknoonzia13@gmail.com">maknoonzia13@gmail.com</a>
            </div>
            <div className="contact-line">
              <span className="ci-label">Phone</span>
              <a href="tel:+923007224114">+92 300 7224114</a>
            </div>
            <div className="contact-line">
              <span className="ci-label">Location</span>
              <span className="val">Faisalabad, Pakistan</span>
            </div>

            <div className="social-row">
              <a href="https://github.com/Maknoon-Zia" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/maknoon-zia" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://huggingface.co/Maknoon-Zia" target="_blank" rel="noopener noreferrer">Hugging Face</a>
            </div>
          </div>

          <form className="contact-form reveal" ref={r2} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="cf-name">Name</label>
                <input type="text" id="cf-name" name="name" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input type="email" id="cf-email" name="email" required placeholder="you@company.com" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" name="message" rows="5" required placeholder="Tell me about the role or project..." />
            </div>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              Send message
            </button>
            <p className="form-status">{status}</p>
            <p className="form-note">
              This opens your email app with the message pre-filled, addressed to
              maknoonzia13@gmail.com. See the README for wiring this up to a
              hosted form service instead.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
