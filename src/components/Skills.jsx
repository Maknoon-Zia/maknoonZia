import useReveal from '../useReveal';

const GROUPS = [
  {
    title: 'Frontend',
    chips: [
      ['React.js', 'web'],
      ['Tailwind CSS', 'web'],
      ['Bootstrap', 'web'],
      ['JavaScript (ES6+)', 'web'],
      ['HTML5 / CSS3', 'web'],
    ],
  },
  {
    title: 'Backend & deployment',
    chips: [
      ['Firebase Auth', 'web'],
      ['Firestore', 'web'],
      ['Firebase Hosting', 'web'],
      ['Vercel', 'web'],
      ['Docker', 'ai'],
    ],
  },
  {
    title: 'Machine learning',
    chips: [
      ['Scikit-learn', 'ai'],
      ['Linear / Logistic Regression', 'ai'],
      ['Decision Tree', 'ai'],
      ['Random Forest', 'ai'],
      ['TF-IDF', 'ai'],
    ],
  },
  {
    title: 'Data science',
    chips: [
      ['Pandas', 'ai'],
      ['NumPy', 'ai'],
      ['Matplotlib', 'ai'],
      ['Seaborn', 'ai'],
      ['EDA & Feature Engineering', 'ai'],
    ],
  },
  {
    title: 'ML deployment',
    chips: [
      ['Gradio', 'ai'],
      ['Streamlit', 'ai'],
      ['Hugging Face Spaces', 'ai'],
      ['Google Colab', 'ai'],
      ['Joblib / Pickle', 'ai'],
    ],
  },
  {
    title: 'Tools & languages',
    chips: [
      ['Git & GitHub', 'web'],
      ['VS Code', 'web'],
      ['Kaggle', 'ai'],
      ['WordPress', 'web'],
      ['Python', 'ai'],
    ],
  },
];

function SkillGroup({ group }) {
  const ref = useReveal();
  return (
    <div className="skill-group reveal" ref={ref}>
      <h4>{group.title}</h4>
      <div className="chip-row">
        {group.chips.map(([label, tag]) => (
          <span className="chip" data-tag={tag} key={label}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <p className="eyebrow">skills</p>
        <h2 style={{ fontSize: 'clamp(26px,3.4vw,36px)' }}>Toolkit</h2>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 600, marginTop: 12 }}>
          What I default to, not everything I've experimented with.
        </p>
        <div className="skills-groups">
          {GROUPS.map((group) => (
            <SkillGroup group={group} key={group.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
