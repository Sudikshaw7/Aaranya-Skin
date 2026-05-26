import { useState, useRef } from "react";
import { useFadeInUp } from "../../hooks/useAnimations";
import styles from "./Footer.module.css";

const footerLinks = {
  "Find Your Routine": [
    "Why Plastic Free?",
    "The Green Room",
    "FAQ",
    "Shipping & Returns",
    "Wholesale",
    "Store Locator",
    "Contact",
  ],
};

const vibes = [
  "Gentle and floral",
  "Wild and woodsy",
  "Balanced and earthy",
  "Fun and fruity",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [vibe, setVibe] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  useFadeInUp(formRef, { y: 28, start: "top 90%" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.container}>
          {/* Brand */}
          <div className={styles.brand}>
            <span className={styles.logo}>Aaranya</span>
            <p className={styles.tagline}>More Pure Glow</p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>{group}</h4>
              <ul className={styles.linkList}>
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className={styles.footLink}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Email capture */}
          <div className={styles.emailCol} ref={formRef}>
            <p className={styles.emailIntro}>
              Sign up to receive 15% off your order, plus be the first to hear
              about product releases, flash sales, and exclusive offers.
            </p>

            <p className={styles.vibeLabel}>What's your vibe?</p>
            <div className={styles.vibes}>
              {vibes.map((v) => (
                <label
                  key={v}
                  className={`${styles.vibeOption} ${vibe === v ? styles.vibeSelected : ""}`}
                >
                  <input
                    type="radio"
                    name="vibe"
                    value={v}
                    checked={vibe === v}
                    onChange={() => setVibe(v)}
                    className={styles.vibeRadio}
                  />
                  {v}
                </label>
              ))}
            </div>

            {submitted ? (
              <p className={styles.thankYou}>🌿 You're in! Check your inbox.</p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.emailForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.emailInput}
                  required
                />
                <button type="submit" className={styles.subscribeBtn}>
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Free Gift blob */}
      <div className={styles.giftBlob}>
        <div className={styles.blobInner}>
          <p className={styles.blobText}>Have a Question?</p>
          <p className={styles.blobSub}>About Us Text & We'll Respond ASAP</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© Copyright 2025 Aaranya</span>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
