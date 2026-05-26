import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./CartDrawer.module.css";

export default function CartDrawer({ isOpen, onClose }) {
  const {
    items,
    totalItems,
    totalPrice,
    freeGiftEarned,
    remainingForGift,
    removeItem,
    updateQuantity,
    FREE_GIFT_THRESHOLD,
  } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const progressPct = Math.min(100, (totalPrice / FREE_GIFT_THRESHOLD) * 100);

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={onClose}
      />
      <aside className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Your Bag <span>({totalItems})</span></h2>
          <button className={styles.close} onClick={onClose} aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Free Gift Progress */}
        <div className={styles.giftBanner}>
          {freeGiftEarned ? (
            <p className={styles.giftEarned}>
              🎁 You've earned a <strong>free gift</strong>! Added at checkout.
            </p>
          ) : (
            <div>
              <p className={styles.giftMsg}>
                Add <strong>₹{remainingForGift.toLocaleString()}</strong> more for a free gift
              </p>
              <div className={styles.progressTrack}>
                <div className={styles.progressBar} style={{ width: `${progressPct}%` }} />
              </div>
            </div>
          )}
        </div>

        {/* Items */}
        <div className={styles.items}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <p>Your bag is empty.</p>
              <button className={styles.shopBtn} onClick={onClose}>
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemImg}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>₹{(item.price * item.quantity).toLocaleString()}</p>
                  <div className={styles.qty}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease"
                    >−</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase"
                    >+</button>
                  </div>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(item.id)}
                  aria-label="Remove item"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.subtotal}>
              <span>Subtotal</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>
            {freeGiftEarned && (
              <div className={styles.giftLine}>
                <span>🎁 Free Gift</span>
                <span className={styles.free}>FREE</span>
              </div>
            )}
            <button className={styles.checkoutBtn}>Proceed to Checkout</button>
            <p className={styles.taxNote}>Taxes & shipping calculated at checkout</p>
          </div>
        )}
      </aside>
    </>
  );
}
