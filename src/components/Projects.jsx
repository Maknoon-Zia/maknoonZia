import { useState } from 'react';
import useReveal from '../useReveal';
import projects from '../data/projects';

const FILTERS = [
  { key: 'all', label: 'All work' },
  { key: 'web', label: 'Web development' },
  { key: 'ai', label: 'AI & ML' },
];

function ProjectCard({ project }) {
  const ref = useReveal();
  return (
    <div className="proj-card reveal" ref={ref}>
      <div className="proj-top">
        <h3>{project.title}</h3>
        <span className={`proj-cat ${project.category}`}>{project.categoryLabel}</span>
      </div>
      <p className="desc">{project.description}</p>
      <div className="proj-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="proj-links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live demo →
          </a>
        )}
        {project.codeUrl && (
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            {project.codeLabel || 'Code'} →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects">
      <div className="wrap">
        <p className="eyebrow">projects</p>
        <h2 style={{ fontSize: 'clamp(26px,3.4vw,36px)' }}>Shipped, not just committed.</h2>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 600, marginTop: 12 }}>
          Every project below is deployed and reachable at a public URL.
        </p>

        <div className="proj-filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`pf-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {visible.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>

        <div className="proj-more">
          <a className="btn btn-ghost" href="https://github.com/Maknoon-Zia" target="_blank" rel="noopener noreferrer">
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
