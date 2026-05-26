import { useRef } from "react";
import { useImageReveal, useFadeInUp } from "../../hooks/useAnimations";
import styles from "./Declaration.module.css";

export default function Declaration() {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useImageReveal(imgRef, { start: "top 75%" });
  useFadeInUp(textRef, { y: 36, duration: 0.8, start: "top 78%" });

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span> Declaration</span>
        </div>

        <div className={styles.imgWrap} ref={imgRef}>
          <img
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80"
            alt="Face Tonic product"
            className={styles.productImg}
          />
        </div>

        <div className={styles.text} ref={textRef}>
          <h2 className={styles.heading}>
            Aaranya Is Daily Investment
            <br />
            <em>One Drop Can Ripple Into Waves</em>
          </h2>
          <a href="#bestsellers" className={styles.cta}>
            Here's what, next →
          </a>
        </div>

        <div className={styles.brandmark}>WILDING</div>
      </div>
    </section>
  );
}
