import styles from "./Community.module.css";

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1775642542855-d4f5b4a6bfbd?w=500&q=80", user: "@priya.glow", size: "tall" },
  { src: "https://images.unsplash.com/photo-1761718209694-70031ee64f82?w=500&q=80", user: "@ananya.natural", size: "normal" },
  { src: "https://images.unsplash.com/photo-1760488029475-41ff1eaa904b?w=500&q=80", user: "@riya.skindiary", size: "normal" },
  { src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&q=80", user: "@meera.botanical", size: "tall" },
  { src: "https://images.unsplash.com/photo-1775642548371-861fab6cea75?w=500&q=80", user: "@kavya.rituals", size: "normal" },
  { src: "https://images.unsplash.com/photo-1775620854129-ffebcc424f83?w=500&q=80", user: "@shreya.skincare", size: "normal" },
];

export default function Community() {
  return (
    <section className={styles.section} id="community">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className="eyebrow">Community</span>
            <h2 className={`section-heading ${styles.heading}`}>
              The Aaranya<br />
              <em>glow community</em>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.desc}>
              Tag us <strong>@aaranya.skin</strong> for a chance to be featured
              in our community gallery. Your skin story inspires thousands.
            </p>
            <a href="#" className="btn-outline">Follow on Instagram</a>
          </div>
        </div>

        {/* Gallery */}
        <div className={styles.gallery}>
          {GALLERY.map((item, i) => (
            <div
              key={i}
              className={`${styles.galleryItem} ${item.size === "tall" ? styles.tall : ""}`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <img src={item.src} alt={`Community post by ${item.user}`} loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.user}>{item.user}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
