import { useRef } from "react";
import { useImageReveal, useFadeInUp, useStaggerFadeIn } from "../../hooks/useAnimations";
import { signs } from "../../data/products";
import styles from "./ProductHighlight.module.css";

export default function ProductHighlight() {
  const imgWrapRef = useRef(null);
  const textRef = useRef(null);
  const signsRef = useRef(null);

  useImageReveal(imgWrapRef);
  useFadeInUp(textRef, { y: 40, duration: 0.9, start: "top 80%" });
  useStaggerFadeIn(signsRef, ".stagger-item", { stagger: 0.1, start: "top 80%" });

  return (
    <section className={styles.section} id="highlight">
      <div className={styles.layout}>
        {/* Left: Text + Stats */}
        <div className={styles.left} ref={textRef} id="signs">
          <span className="section-eyebrow">Ingredient Science</span>
          <h2 className="section-heading" style={{ marginBottom: "var(--space-lg)" }}>
            NARIN<br />GENIN
          </h2>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>20×</span>
              <span className={styles.statText}>more powerful than the leading comparable active</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>99×</span>
              <span className={styles.statText}>less water · less land need to grow</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>102×</span>
              <span className={styles.statText}>of users saw improvement in elasticity in weeks</span>
            </div>
          </div>

          <p className={styles.copy}>
            Explore our extensive product listings across prime locations, meet professional agents,
            and stay informed with the latest real estate trends through our blog.
          </p>
          <a href="#bestsellers" className={styles.cta}>Get to Know Naringenin →</a>
        </div>

        {/* Center: Image */}
        <div className={styles.imgWrap} ref={imgWrapRef}>
          <img
            src="https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?w=700&q=80"
            alt="Naringenin Product"
          />
        </div>

        {/* Right: Signs */}
        <div className={styles.right}>
          <div className={styles.circleViz}>
            <div className={styles.circle}>
              <span className={styles.circleLabel}>5 Signs Of<br />Inflammaging</span>
            </div>
            <div className={styles.circleDots}>
              {signs.map((_, i) => (
                <span
                  key={i}
                  className={styles.dot}
                  style={{ "--i": i }}
                />
              ))}
            </div>
          </div>

          <ul className={styles.signs} ref={signsRef}>
            {signs.map((sign) => (
              <li key={sign.number} className={`stagger-item ${styles.signItem}`}>
                <span className={styles.signNum}>{sign.number}</span>
                <span className={styles.signLabel}>{sign.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
