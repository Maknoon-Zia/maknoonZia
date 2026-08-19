import useReveal from '../useReveal';

const ITEMS = [
  {
    date: '02/2026 — Present',
    title: 'Artificial Intelligence Trainee',
    org: 'SMIT — Saylani Mass IT Training Program',
    desc:
      'Training in Python, Machine Learning and Data Analysis. Practical experience in data preprocessing, predictive modeling, and AI-driven problem solving through hands-on projects.',
  },
  {
    date: '01/2025 — 12/2025',
    title: 'Web Development Trainee',
    org: 'SMIT — Saylani Mass IT Training Program',
    desc:
      'Intensive hands-on training in HTML, CSS, Bootstrap, JavaScript, React, Git, GitHub, and Firebase. Built responsive websites and practical projects following industry-standard workflows.',
  },
];

function TimelineItem({ item }) {
  const ref = useReveal();
  return (
    <div className="tl-item reveal" ref={ref}>
      <div className="tl-date">{item.date}</div>
      <h3>{item.title}</h3>
      <div className="tl-org">{item.org}</div>
      <p>{item.desc}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="wrap">
        <p className="eyebrow">experience</p>
        <h2 style={{ fontSize: 'clamp(26px,3.4vw,36px)' }}>Training &amp; hands-on work</h2>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 600, marginTop: 12 }}>
          One program at a time — web first, AI now.
        </p>
        <div className="timeline">
          {ITEMS.map((item) => (
            <TimelineItem item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
