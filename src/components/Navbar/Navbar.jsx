import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Shop All", href: "#bestsellers" },
  { label: "Rituals", href: "#ritual" },
  { label: "Our Story", href: "#story" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const { itemCount, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          {/* Mobile menu toggle */}
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
          </button>

          {/* Desktop nav links left */}
          <ul className={styles.linksLeft}>
            {NAV_LINKS.slice(0, 2).map((l) => (
              <li key={l.label}>
                <a href={l.href} className={styles.link}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* Logo center */}
          <a href="#" className={styles.logo}>
            <span className={styles.logoMain}>Aaranya</span>
            <span className={styles.logoSub}>skin rituals</span>
          </a>

          {/* Desktop nav links right */}
          <ul className={styles.linksRight}>
            {NAV_LINKS.slice(2).map((l) => (
              <li key={l.label}>
                <a href={l.href} className={styles.link}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* Cart */}
          <button
            className={styles.cartBtn}
            onClick={() => setIsOpen(true)}
            aria-label="Open cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {itemCount > 0 && (
              <span className={styles.badge}>{itemCount}</span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}>
        <ul>
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)} className={styles.mobileLink}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileMeta}>
          <a href="#" className={styles.mobileSmall}>Track Order</a>
          <a href="#" className={styles.mobileSmall}>Contact</a>
        </div>
      </div>
    </>
  );
}
