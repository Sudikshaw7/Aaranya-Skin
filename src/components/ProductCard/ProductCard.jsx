import { useRef, useState } from "react";
import gsap from "gsap";
import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const [added, setAdded] = useState(false);

  const handleMouseEnter = () => {
    gsap.to(imgRef.current, {
      scale: 1.07,
      duration: 0.55,
      ease: "power2.out",
    });
    gsap.to(cardRef.current, {
      y: -6,
      boxShadow: "0 20px 48px rgba(42,33,24,0.14)",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.55,
      ease: "power2.out",
    });
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: "0 2px 8px rgba(42,33,24,0.08)",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div
      className={`stagger-item ${styles.card}`}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imgWrap}>
        <img ref={imgRef} src={product.image} alt={product.name} className={styles.img} />
        {product.tag && (
          <span className={styles.tag} style={{ background: product.tagColor }}>
            {product.tag}
          </span>
        )}
        {discount && (
          <span className={styles.discountBadge}>−{discount}%</span>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.sub}>{product.subtitle}</p>
        <div className={styles.priceRow}>
          <span className={styles.price}>₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className={`${styles.addBtn} ${added ? styles.added : ""}`}
          onClick={handleAddToCart}
        >
          {added ? "✓ Added" : "Add to Cart"}
        </button>
        <button className={styles.learnBtn}>Learn More</button>
      </div>
    </div>
  );
}
