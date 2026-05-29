import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef(null);

  // Parallax on scroll
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const img = el.querySelector(`.${styles.bgImg}`);

    const onScroll = () => {
      const scrolled = window.scrollY;
      if (img) img.style.transform = `translateY(${scrolled * 0.35}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef} id="hero">
      {/* Background image */}
      <div className={styles.bgWrap}>
        <img
          src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1400&q=80"
          alt=""
          className={styles.bgImg}
          aria-hidden="true"
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Left block */}
        <div className={styles.left}>
          <span className={`eyebrow animate-fade-up delay-1 ${styles.eyebrow}`}>
            Since 2021 · Crafted in India
          </span>
          <h1 className={`animate-fade-up delay-2 ${styles.heading}`}>
            Skin that<br />
            <em>remembers</em><br />
            the forest
          </h1>
          <p className={`animate-fade-up delay-3 ${styles.sub}`}>
            100% plant-derived skincare rooted in Ayurvedic tradition.<br />
            No toxins. No fillers. Just your skin, at its finest.
          </p>
          <div className={`animate-fade-up delay-4 ${styles.ctas}`}>
            <a href="#bestsellers" className="btn-primary">
              Shop the Collection
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#ritual" className="btn-outline">
              Our Rituals
            </a>
          </div>

          {/* Trust row */}
          <div className={`animate-fade-up delay-5 ${styles.trust}`}>
            {["Cruelty-Free", "Dermatologist Tested", "Vegan Certified"].map((t) => (
              <span key={t} className={styles.trustItem}>
                <span className={styles.dot} />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right floating cards */}
        <div className={`animate-fade-up delay-3 ${styles.right}`}>
          <div className={styles.floatCard}>
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80"
              alt="Bakuchiol Youth Serum"
              className={styles.floatImg}
            />
            <div className={styles.floatInfo}>
              <p className={styles.floatName}>Bakuchiol Youth Serum</p>
              <p className={styles.floatPrice}>₹1,890</p>
            </div>
            <span className={styles.floatBadge}>Best Seller</span>
          </div>

          {/* Stat blob */}
          <div className={styles.statBlob}>
            <span className={styles.statNum}>50K+</span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>

          {/* Rating card */}
          <div className={styles.ratingCard}>
            <div className={styles.ratingStars}>★★★★★</div>
            <p className={styles.ratingText}>"Changed my skin in 3 weeks"</p>
            <p className={styles.ratingAuthor}>— Priya, Mumbai</p>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          {Array(8).fill("Pure Botanicals · Ayurvedic Roots · Zero Toxins · Made in India · Cruelty Free").map((t, i) => (
            <span key={i} className={styles.marqueeItem}>{t} &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;</span>
          ))}
        </div>
      </div>
    </section>
  );
}
