import { useRef } from "react";
import { useStaggerFadeIn, useFadeInUp } from "../../hooks/useAnimations";
import { galleryImages } from "../../data/products";
import styles from "./Community.module.css";

export default function Community() {
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useFadeInUp(headingRef, { y: 30 });
  useStaggerFadeIn(gridRef, ".stagger-item", { stagger: 0.08, y: 30 });

  return (
    <section className={styles.section} id="community">
      <div className="container">
        <div className={styles.header} ref={headingRef}>
          <div>
            <span className="section-eyebrow">Our Community</span>
            <p className={styles.sub}>Real people, real results</p>
          </div>
          <a href="#" className={styles.followBtn}>Follow Us</a>
        </div>

        <div className={styles.gallery} ref={gridRef}>
          {galleryImages.map((img, idx) => (
            <div
              key={img.id}
              className={`stagger-item ${styles.imgWrap} ${idx === 0 ? styles.tall : ""}`}
            >
              <img src={img.src} alt={img.alt} className={styles.img} />
              <div className={styles.imgOverlay}>
                <span className={styles.igIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
