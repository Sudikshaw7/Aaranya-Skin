import { useCart } from "../../context/CartContext";
import { products } from "../../data/products";
import styles from "./ProductHighlight.module.css";

export default function ProductHighlight() {
  const { addItem } = useCart();
  const product = products[0]; // Bakuchiol serum - hero product

  return (
    <section className={styles.section} id="story">
      {/* Left - image */}
      <div className={styles.imageCol}>
        <div className={styles.imageWrap}>
          <img
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900&q=80"
            alt="Bakuchiol Youth Serum - Aaranya"
            className={styles.image}
          />
          <div className={styles.floatingBadge}>
            <span className={styles.badgeNum}>312</span>
            <span className={styles.badgeLabel}>5-star reviews</span>
          </div>
        </div>
        {/* Ingredient badges */}
        <div className={styles.ingredients}>
          {["Bakuchiol Extract", "Rosehip Seed Oil", "Vitamin C Ester"].map((ing, i) => (
            <div key={ing} className={styles.ingredientBadge} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className={styles.ingDot} />
              {ing}
            </div>
          ))}
        </div>
      </div>

      {/* Right - content */}
      <div className={styles.contentCol}>
        <span className="eyebrow">Spotlight · Hero Formula</span>
        <h2 className={`section-heading ${styles.heading}`}>
          The plant-based<br />
          <em>retinol revolution</em>
        </h2>
        <div className="divider" />
        <p className={styles.desc}>
          Bakuchiol is Ayurveda's best-kept secret - a potent botanical that delivers
          everything retinol promises: firming, brightening, renewal - without redness,
          peeling, or sun sensitivity. Suitable for all skin types, every day.
        </p>

        <ul className={styles.signs}>
          {[
            "Visibly firms & plumps in 4 weeks",
            "Reduces fine lines without irritation",
            "Safe for sensitive and pregnant skin",
            "Boosts collagen naturally overnight",
          ].map((s) => (
            <li key={s} className={styles.signItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {s}
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className={styles.buyBlock}>
          <div className={styles.priceBlock}>
            <span className={styles.price}>₹1,890</span>
            <span className={styles.originalPrice}>₹2,400</span>
            <span className={styles.saving}>Save 21%</span>
          </div>
          <div className={styles.actions}>
            <button className="btn-primary" onClick={() => addItem(product)}>
              Add to Cart
            </button>
            <a href="#" className="btn-outline">Learn More</a>
          </div>
        </div>

        {/* Trust */}
        <div className={styles.trust}>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Dermatologist Tested
          </div>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Results in 28 Days
          </div>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
            </svg>
            Cruelty-Free
          </div>
        </div>
      </div>
    </section>
  );
}
