import { useRef } from "react";
import { useCart } from "../../context/CartContext";
import { useHeroEntrance, useParallax } from "../../hooks/useAnimations";
import styles from "./Hero.module.css";

export default function Hero() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const { addItem } = useCart();

  useHeroEntrance(containerRef);
  useParallax(imgRef, 60);

  const featuredProduct = {
    id: 99,
    name: "Aura Collection",
    price: 661,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
  };

  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={styles.imgWrap}>
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1400&q=85"
          alt="Glowing Skin Essentials"
          className={styles.bgImg}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <span className={`hero__eyebrow ${styles.eyebrow}`}>New Collection</span>
        <h1 className={`hero__heading ${styles.heading}`}>
          Glowing Skin<br />Essentials
        </h1>
        <p className={`hero__sub ${styles.sub}`}>Smooth, tone, and sculpt the body</p>
        <div className={`hero__cta ${styles.ctaRow}`}>
          <a href="#bestsellers" className={styles.btnPrimary}>Shop Gifts</a>
          <a href="#highlight" className={styles.btnGhost}>Learn More</a>
        </div>
      </div>

      {/* Floating Product Card */}
      <div className={`hero__card ${styles.card}`}>
        <div className={styles.cardSaveBadge}>SAVE 20%</div>
        <div className={styles.cardInner}>
          <img src={featuredProduct.image} alt={featuredProduct.name} className={styles.cardImg} />
          <div className={styles.cardInfo}>
            <p className={styles.cardName}>{featuredProduct.name}</p>
            <p className={styles.cardPrice}>₹{featuredProduct.price}</p>
            <button
              className={styles.cardBtn}
              onClick={() => addItem(featuredProduct)}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <a href="#highlight" className={styles.cardLink}>Ultimate body gua sha starter set →</a>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
