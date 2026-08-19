import { useMode } from '../ModeContext';

const CODE = {
  web: (
    <>
      <span className="c3">const</span> <span className="c1">maknoon</span> = {'{'}
      {'\n'}  role: <span className="c2">'Frontend Engineer'</span>,
      {'\n'}  stack: [<span className="c2">'React'</span>, <span className="c2">'Tailwind'</span>, <span className="c2">'Firebase'</span>],
      {'\n'}  shipped: <span className="c1">3</span>,
      {'\n'}  status: <span className="c2">'open to internships'</span>,
      {'\n'}  <span className="c4">// SMIT-trained, now in AI training</span>
      {'\n'}
      {'}'}
    </>
  ),
  ai: (
    <>
      <span className="c3">model</span> = LogisticRegression()
      {'\n'}
      <span className="c3">model</span>.fit(X_train, y_train)
      {'\n\n'}
      <span className="c4"># deployed to Hugging Face Spaces</span>
      {'\n'}
      <span className="c1">accuracy</span> = <span className="c2">0.94</span>
      {'\n'}
      <span className="c1">status</span>  = <span className="c2">'open to internships'</span>
    </>
  ),
};

export default function Hero() {
  const { mode, content } = useMode();

  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>
            Maknoon Zia — <em>{content.role}</em>, BSCS
          </h1>
          <p className="lede">{content.lede}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn btn-ghost-dark" href={content.resume} download>
              Download résumé
            </a>
            <a className="btn btn-ghost-dark" href="mailto:maknoonzia13@gmail.com">
              Email me
            </a>
          </div>
          <div className="hero-meta">
            <a href="https://github.com/Maknoon-Zia" target="_blank" rel="noopener noreferrer">
              github.com/Maknoon-Zia
            </a>
            <a href="https://linkedin.com/in/maknoon-zia" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/maknoon-zia
            </a>
            <a href="https://huggingface.co/Maknoon-Zia" target="_blank" rel="noopener noreferrer">
              huggingface.co/Maknoon-Zia
            </a>
            <span>Faisalabad, PK</span>
          </div>
        </div>

        <div className="code-panel">
          <div className="code-panel-head">
            <span className="dot r"></span>
            <span className="dot y"></span>
            <span className="dot g"></span>
            <span className="fname">{content.fname}</span>
          </div>
          <pre>{CODE[mode]}</pre>
        </div>
      </div>
    </section>
  );
}
