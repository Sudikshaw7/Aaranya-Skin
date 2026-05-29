import styles from "./OfferBanner.module.css";

export default function OfferBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <div className={styles.offer}>
          <span className={styles.icon}>🌿</span>
          <span>Use code <strong>RITUAL20</strong> for 20% off your first order</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.offer}>
          <span className={styles.icon}>✦</span>
          <span>Free shipping on orders above <strong>₹799</strong></span>
        </div>
        <div className={styles.divider} />
        <div className={styles.offer}>
          <span className={styles.icon}>🎁</span>
          <span>Free Lip Balm on orders above <strong>₹1,999</strong></span>
        </div>
      </div>
    </div>
  );
}
