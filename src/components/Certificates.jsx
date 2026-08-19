import { useState } from 'react';
import useReveal from '../useReveal';
import certificates from '../data/certificates';

function CertCard({ cert }) {
  const ref = useReveal();
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <a
      className="cert-card reveal"
      ref={ref}
      href={cert.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${cert.title} certificate (PDF)`}
    >
      <div className={`cert-thumb ${imgFailed ? 'empty' : ''}`}>
        {imgFailed ? (
          <>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="14" rx="2" />
              <circle cx="9" cy="10" r="2" />
              <path d="M21 15l-4.5-4.5-3 3L9 10l-6 6" />
            </svg>
            <span>
              Add certificate image at
              <br />
              {cert.image}
            </span>
          </>
        ) : (
          <>
            <img src={cert.image} alt={`${cert.title} certificate`} onError={() => setImgFailed(true)} />
            <span className="cert-view-badge">View PDF ↗</span>
          </>
        )}
      </div>
      <div className="cert-body">
        <h3>{cert.title}</h3>
        <p className="cert-issuer">{cert.issuer}</p>
        {cert.meta && <p className="cert-meta">{cert.meta}</p>}
        <div className="cert-footer">
          <span className="cert-date">{cert.date}</span>
          <span className="cert-link">View certificate →</span>
        </div>
      </div>
    </a>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <p className="eyebrow">certificates</p>
        <h2 style={{ fontSize: 'clamp(26px,3.4vw,36px)' }}>Certifications</h2>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 600, marginTop: 12 }}>
          Completed training programs, verified by their issuing organization. Tap a card to open the original certificate PDF.
        </p>
        <div className="cert-grid">
          {certificates.map((cert) => (
            <CertCard cert={cert} key={cert.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
