import { useCart } from "../../context/CartContext";
import styles from "./FreeGiftBar.module.css";

export default function FreeGiftBar() {
  const { freeGiftEarned, remainingForGift, totalPrice, FREE_GIFT_THRESHOLD } = useCart();
  const progressPct = Math.min(100, (totalPrice / FREE_GIFT_THRESHOLD) * 100);

  if (totalPrice === 0) return null;

  return (
    <div className={`${styles.bar} ${freeGiftEarned ? styles.earned : ""}`}>
      <div className={styles.inner}>
        <span className={styles.icon}>{freeGiftEarned ? "🎁" : "✨"}</span>
        <div className={styles.content}>
          {freeGiftEarned ? (
            <p className={styles.msg}>
              <strong>You've earned a free gift!</strong> It'll be added automatically at checkout.
            </p>
          ) : (
            <p className={styles.msg}>
              You're <strong>₹{remainingForGift.toLocaleString()}</strong> away from a free gift on orders above ₹{FREE_GIFT_THRESHOLD.toLocaleString()}
            </p>
          )}
          <div className={styles.track}>
            <div className={styles.fill} style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
