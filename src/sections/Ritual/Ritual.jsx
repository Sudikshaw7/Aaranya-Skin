import { useState } from "react";
import { ritualSteps } from "../../data/products";
import styles from "./Ritual.module.css";

const COLOR_MAP = {
  moss: "#4b6b4e",
  clay: "#c4856a",
  saffron: "#c8913a",
  stone: "#9b8f83",
};

export default function Ritual() {
  const [active, setActive] = useState(0);
  const step = ritualSteps[active];

  return (
    <section className={styles.section} id="ritual">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="eyebrow">The Method</span>
          <h2 className={`section-heading ${styles.heading}`}>
            Your complete<br />
            <em>skin ritual</em>
          </h2>
        </div>

        <div className={styles.layout}>
          {/* Steps nav */}
          <nav className={styles.steps}>
            {ritualSteps.map((s, i) => (
              <button
                key={s.step}
                className={`${styles.stepBtn} ${active === i ? styles.activeStep : ""}`}
                onClick={() => setActive(i)}
                style={{ "--accent": COLOR_MAP[s.color] }}
              >
                <span className={styles.stepNum}>{s.step}</span>
                <div className={styles.stepText}>
                  <span className={styles.stepTitle}>{s.title}</span>
                  {active === i && (
                    <p className={styles.stepDesc}>{s.description}</p>
                  )}
                </div>
                <span className={styles.stepArrow}>→</span>
              </button>
            ))}
          </nav>

          {/* Image panel */}
          <div className={styles.imagePanel}>
            {ritualSteps.map((s, i) => (
              <div
                key={s.step}
                className={`${styles.imagePanelImg} ${active === i ? styles.imgActive : ""}`}
              >
                <img src={s.image} alt={s.title} />
                <div
                  className={styles.imageCaption}
                  style={{ background: `${COLOR_MAP[s.color]}ee` }}
                >
                  <span className={styles.captionStep}>{s.step}</span>
                  <span className={styles.captionTitle}>{s.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={styles.cta}>
          <p>Build your personalised routine in 2 minutes</p>
          <a href="#" className="btn-primary">Take the Skin Quiz</a>
        </div>
      </div>
    </section>
  );
}
