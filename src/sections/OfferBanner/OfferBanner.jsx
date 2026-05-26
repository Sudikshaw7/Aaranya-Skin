import { useRef } from "react";
import { useFadeInUp } from "../../hooks/useAnimations";
import styles from "./OfferBanner.module.css";

export default function OfferBanner() {
  const ref = useRef(null);
  useFadeInUp(ref, { y: 30, duration: 0.7 });

  return (
    <div className={styles.banner} ref={ref}>
      <div className={styles.inner}>
        <span className={styles.tag}>Limited Time</span>
        <p className={styles.text}>
          Save <strong>20%</strong> on your first order — use code{" "}
          <span className={styles.code}>WILDGLOW</span>
        </p>
        <a href="#bestsellers" className={styles.cta}>Shop Now →</a>
      </div>
    </div>
  );
}
