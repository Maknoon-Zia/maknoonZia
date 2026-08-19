import useReveal from '../useReveal';

export default function Education() {
  const ref = useReveal();
  return (
    <section id="education">
      <div className="wrap">
        <p className="eyebrow">education</p>
        <h2 style={{ fontSize: 'clamp(26px,3.4vw,36px)' }}>Education</h2>
        <div className="edu-card reveal" ref={ref}>
          <div>
            <h3>Bachelor of Science in Computer Science (BSCS)</h3>
            <div className="tl-org">Govt. Graduate College, Faisalabad, Pakistan · 11/2023 — Present</div>
          </div>
          <div className="edu-stats">
            <div className="edu-stat">
              <b>3.83 / 4.00</b>
              <span>CGPA</span>
            </div>
            <div className="edu-stat">
              <b>7th</b>
              <span>current semester</span>
            </div>
            <div className="edu-stat">
              <b>EN / UR</b>
              <span>languages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
