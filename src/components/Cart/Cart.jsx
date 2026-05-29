import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

export default function Cart() {
  const {
    items, total, itemCount, isOpen, setIsOpen,
    freeGiftProgress, freeGiftUnlocked, amountToFreeGift,
    removeItem, updateQty, clearCart,
  } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setIsOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.visible : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside className={`${styles.drawer} ${isOpen ? styles.open : ""}`} aria-label="Shopping cart">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Your Cart</h2>
            {itemCount > 0 && (
              <p className={styles.count}>{itemCount} item{itemCount !== 1 ? "s" : ""}</p>
            )}
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Free gift progress */}
        <div className={styles.giftBar}>
          {freeGiftUnlocked ? (
            <p className={styles.giftUnlocked}>
              You've unlocked a <strong>free Lip Balm!</strong>
            </p>
          ) : (
            <p className={styles.giftText}>
              Spend <strong>₹{amountToFreeGift.toLocaleString("en-IN")}</strong> more to get a free gift
            </p>
          )}
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${freeGiftProgress}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className={styles.items}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <p className={styles.emptyTitle}>Your cart is empty</p>
              <p className={styles.emptySub}>Add some botanical goodness</p>
              <button className={`btn-primary ${styles.shopBtn}`} onClick={() => setIsOpen(false)}>
                Shop Now
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.image} alt={item.name} className={styles.itemImg} />
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemVolume}>{item.volume}</p>
                  <div className={styles.itemBottom}>
                    <p className={styles.itemPrice}>₹{(item.price * item.qty).toLocaleString("en-IN")}</p>
                    <div className={styles.qtyControl}>
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  </div>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.perks}>
              <span>🌿 Free shipping over ₹799</span>
              <span>✦ Cruelty-free</span>
            </div>
            <div className={styles.subtotal}>
              <span>Subtotal</span>
              <span className={styles.subtotalAmount}>₹{total.toLocaleString("en-IN")}</span>
            </div>
            <button className={`btn-primary ${styles.checkoutBtn}`}>
              Proceed to Checkout
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className={styles.clearBtn} onClick={clearCart}>Clear cart</button>
          </div>
        )}
      </aside>
    </>
  );
}
