import { useState, useRef } from "react";
import { products, categories } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./BestSellers.module.css";

export default function BestSellers() {
  const [activeCategory, setActiveCategory] = useState("all");
  const gridRef = useRef(null);

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  function handleFilter(cat) {
    setActiveCategory(cat);
  }

  return (
    <section className={styles.section} id="bestsellers">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className="eyebrow">Our Products</span>
            <h2 className={`section-heading ${styles.heading}`}>
              Meet your new<br />
              <em>daily rituals</em>
            </h2>
          </div>
          <p className={styles.desc}>
            Every formula is meticulously crafted from Ayurvedic botanicals,
            clinically validated, and thoughtfully packaged without waste.
          </p>
        </div>

        {/* Category filters */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filter} ${activeCategory === cat.id ? styles.active : ""}`}
              onClick={() => handleFilter(cat.id)}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <span className={styles.filterCount}>
                  {cat.id === "all" ? products.length : products.filter(p => p.category === cat.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid} ref={gridRef}>
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Load more CTA */}
        <div className={styles.bottomCta}>
          <p className={styles.bottomText}>Looking for something specific?</p>
          <a href="#" className="btn-outline">View Full Catalogue</a>
        </div>
      </div>
    </section>
  );
}
