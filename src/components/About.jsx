import useReveal from '../useReveal';

export default function About() {
  const r1 = useReveal();
  const r2 = useReveal();

  return (
    <section id="about">
      <div className="wrap">
        <p className="eyebrow">about</p>
        <h2 style={{ fontSize: 'clamp(26px,3.4vw,36px)', maxWidth: 760 }}>
          One engineer, two disciplines — building on the web and in the notebook.
        </h2>
        <p className="about-lede" style={{ marginTop: 18 }}>
          Currently in my <strong>7th semester of a BSCS</strong> at Govt. Graduate
          College Faisalabad (CGPA 3.83/4.00), I've completed SMIT's Web
          Development program and I'm now training in AI — one program at a
          time, both taken all the way to a deployed, working product.
        </p>

        <div className="about-grid">
          <div className="about-card reveal" ref={r1}>
            <h3>
              <span className="tagdot" style={{ background: 'var(--accent-web)' }}></span>
              As a frontend engineer
            </h3>
            <p>
              I build responsive interfaces with React, Tailwind CSS and
              Bootstrap, wire up real backends with Firebase Auth and Firestore,
              and ship to Vercel and Firebase Hosting. My focus is clean UI,
              correct state, and production-grade security rules — not just a
              working demo.
            </p>
          </div>
          <div className="about-card reveal" ref={r2}>
            <h3>
              <span className="tagdot" style={{ background: 'var(--accent-ai)' }}></span>
              As a machine learning developer
            </h3>
            <p>
              I train and evaluate models with Scikit-learn — regression,
              classification, and NLP with TF-IDF — then package and deploy
              them as real, usable apps with Gradio, Streamlit, Docker, and
              Hugging Face Spaces, rather than leaving them as one-off scripts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
