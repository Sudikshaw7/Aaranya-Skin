import { useState } from "react";
import { testimonials } from "../../data/products";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  function prev() {
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setActive((a) => (a + 1) % testimonials.length);
  }

  const t = testimonials[active];

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Stats strip */}
        <div className={styles.stats}>
          {[
            { num: "50K+", label: "Happy customers" },
            { num: "4.9", label: "Average rating" },
            { num: "100%", label: "Plant-derived" },
            { num: "0", label: "Harmful toxins" },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonial carousel */}
        <div className={styles.carousel}>
          <span className="eyebrow">Real Stories</span>
          <h2 className={`section-heading ${styles.heading}`}>
            Skin transformations<br />
            <em>that speak</em>
          </h2>

          <div className={styles.quoteWrap} key={active}>
            <div className={styles.stars}>{"★".repeat(t.rating)}</div>
            <blockquote className={styles.quote}>
              "{t.text}"
            </blockquote>

            <div className={styles.author}>
              <img src={t.avatar} alt={t.name} className={styles.avatar} />
              <div>
                <p className={styles.authorName}>{t.name}</p>
                <p className={styles.authorMeta}>{t.location} · verified buyer</p>
                <p className={styles.authorProduct}>{t.product}</p>
              </div>
            </div>
          </div>

          {/* Dots + arrows */}
          <div className={styles.controls}>
            <button className={styles.arrow} onClick={prev} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className={styles.arrow} onClick={next} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
