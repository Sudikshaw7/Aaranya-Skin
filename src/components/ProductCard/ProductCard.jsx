import { useState } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.css";

const TAG_COLORS = {
  clay: styles.tagClay,
  moss: styles.tagMoss,
  stone: styles.tagStone,
  saffron: styles.tagSaffron,
};

export default function ProductCard({ product, index = 0 }) {
  const { addItem, items } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [adding, setAdding] = useState(false);

  const inCart = items.some((i) => i.id === product.id);

  function handleAdd(e) {
    e.preventDefault();
    if (adding) return;
    setAdding(true);
    addItem(product);
    setTimeout(() => setAdding(false), 1500);
  }

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Image block */}
      <div className={styles.imageWrap}>
        {/* Skeleton */}
        {!imgLoaded && <div className={styles.skeleton} />}

        <img
          src={product.image}
          alt={product.name}
          className={`${styles.img} ${imgLoaded ? styles.imgLoaded : ""}`}
          onLoad={() => setImgLoaded(true)}
          loading="lazy"
        />
        <img
          src={product.hoverImage}
          alt=""
          className={styles.imgHover}
          loading="lazy"
          aria-hidden="true"
        />

        {/* Badges */}
        <div className={styles.badges}>
          {product.tag && (
            <span className={`${styles.tag} ${TAG_COLORS[product.tagColor] || styles.tagStone}`}>
              {product.tag}
            </span>
          )}
          {discount && (
            <span className={styles.discount}>−{discount}%</span>
          )}
        </div>

        {/* Wishlist */}
        <button
          className={`${styles.wishlist} ${wishlisted ? styles.wishlisted : ""}`}
          onClick={() => setWishlisted(!wishlisted)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>

        {/* Quick add overlay */}
        <div className={styles.overlay}>
          <button
            className={`${styles.addBtn} ${adding ? styles.adding : ""} ${inCart ? styles.inCart : ""}`}
            onClick={handleAdd}
          >
            {adding ? "Added ✓" : inCart ? "Add Again" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <div className={styles.infoTop}>
          <p className={styles.volume}>{product.volume}</p>
          <div className={styles.rating}>
            <span className={styles.stars}>{"★".repeat(Math.round(product.rating))}</span>
            <span className={styles.ratingNum}>({product.reviews})</span>
          </div>
        </div>

        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.subtitle}>{product.subtitle}</p>

        {/* Ingredients */}
        <ul className={styles.ingredients}>
          {product.keyIngredients.map((ing) => (
            <li key={ing} className={styles.ingredient}>{ing}</li>
          ))}
        </ul>

        <div className={styles.priceRow}>
          <span className={styles.price}>₹{product.price.toLocaleString("en-IN")}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>₹{product.originalPrice.toLocaleString("en-IN")}</span>
          )}
        </div>
      </div>
    </article>
  );
}
