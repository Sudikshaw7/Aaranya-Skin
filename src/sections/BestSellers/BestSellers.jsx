import { useRef, useState } from "react";
import { useStaggerFadeIn, useFadeInUp } from "../../hooks/useAnimations";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../data/products";
import styles from "./BestSellers.module.css";

const categories = ["All", "Skincare", "Tools", "Sets"];

export default function BestSellers() {
  const [activeCategory, setActiveCategory] = useState("All");
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useFadeInUp(headingRef, { y: 32 });
  useStaggerFadeIn(gridRef);

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className={styles.section} id="bestsellers">
      <div className="container">
        <div className={styles.header} ref={headingRef}>
          <h2 className={styles.heading}>Best Sellers</h2>
          <div className={styles.tabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
