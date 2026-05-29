import { useState } from "react";
import styles from "./Footer.module.css";

const VIBES = ["Hydration Goals", "Anti-Ageing", "Clear Skin", "Natural Glow", "Sensitive Care"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [vibe, setVibe] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");
    setVibe("");
  }

  return (
    <footer className={styles.footer}>
      {/* Newsletter section */}
      <div className={styles.newsletter}>
        <div className="container">
          <div className={styles.nlInner}>
            <div className={styles.nlLeft}>
              <span className="eyebrow" style={{ color: "var(--clay-light)" }}>Stay Connected</span>
              <h2 className={styles.nlHeading}>
                Join the ritual.<br />
                <em>10% off your first order.</em>
              </h2>
              <p className={styles.nlSub}>
                Weekly tips, new launches, and exclusive member offers - curated for your skin type.
              </p>
            </div>

            <div className={styles.nlRight}>
              {submitted ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>🌿</div>
                  <h3>You're in!</h3>
                  <p>Your 10% discount code is on its way to your inbox.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <p className={styles.vibeLabel}>What's your skin goal?</p>
                  <div className={styles.vibes}>
                    {VIBES.map((v) => (
                      <button
                        key={v}
                        type="button"
                        className={`${styles.vibeBtn} ${vibe === v ? styles.vibeActive : ""}`}
                        onClick={() => setVibe(vibe === v ? "" : v)}
                      >
                        {v}
                      </button>
                    ))}
                  </div>

                  <div className={styles.inputRow}>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className={styles.input}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className={styles.submitBtn}>
                      Subscribe
                    </button>
                  </div>
                  {error && <p className={styles.error}>{error}</p>}
                  <p className={styles.disclaimer}>No spam, ever. Unsubscribe anytime.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <span className={styles.logo}>Aaranya</span>
              <p className={styles.brandTagline}>
                Rooted in nature. Crafted with care. Made in India.
              </p>
              <div className={styles.socials}>
                {["instagram", "youtube", "twitter"].map((s) => (
                  <a key={s} href="#" className={styles.social} aria-label={s}>
                    <div className={styles.socialIcon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Shop */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Shop</h4>
              <ul className={styles.colLinks}>
                {["All Products", "Serums", "Moisturisers", "Facial Oils", "Masks & Toners", "Bundles", "Gift Sets"].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Help</h4>
              <ul className={styles.colLinks}>
                {["Track Order", "Returns & Exchanges", "FAQ", "Skin Quiz", "Contact Us", "Wholesale"].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Company</h4>
              <ul className={styles.colLinks}>
                {["Our Story", "Ingredients", "Sustainability", "Blog", "Press", "Careers"].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={styles.bottom}>
            <p className={styles.copy}>
              © 2025 Aaranya Skin Rituals Pvt Ltd. Proudly made in India.
            </p>
            <div className={styles.legal}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Cookie Preferences</a>
            </div>
            <div className={styles.certifications}>
              <span>🌿 Vegan</span>
              <span>🐰 Cruelty-Free</span>
              <span>♻️ Recyclable</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
