import { motion } from 'framer-motion';
import { PiStarFill, PiHeart, PiArrowUpRightBold } from 'react-icons/pi';
import { bestSellers } from '../../data/siteData';
import styles from './BestSellers.module.css';

const Stars = ({ rating }) => (
  <span className={styles.stars} aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <PiStarFill key={i} style={{ opacity: i < Math.round(rating) ? 1 : 0.25 }} />
    ))}
  </span>
);

const BestSellers = () => {
  return (
    <section className={`section ${styles.section}`} id="best-sellers">
      <div className="container">
        <div className={styles.headerRow}>
          <div>
            <span className="eyebrow">Loved by Thousands</span>
            <h2>Our Best Sellers</h2>
            <p>The formulas our community reaches for again and again.</p>
          </div>
        </div>

        <div className={styles.grid}>
          {bestSellers.map((product, i) => (
            <motion.article
              key={product.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.imageWrap}>
                {product.badge && (
                  <span className={`${styles.badge} ${product.badge === 'New' ? styles.badgeNew : ''}`}>
                    {product.badge}
                  </span>
                )}
                <button className={styles.wishBtn} aria-label="Add to wishlist">
                  <PiHeart />
                </button>
                <img src={product.image} alt={product.name} className={styles.image} loading="lazy" />
              </div>
              <div className={styles.info}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.name}>{product.name}</h3>
                <div className={styles.ratingRow}>
                  <Stars rating={product.rating} />
                  <span>{product.rating} ({product.reviews})</span>
                </div>
                <div className={styles.footerRow}>
                  <span className={styles.price}>${product.price}</span>
                  <button className={styles.viewBtn} aria-label={`View ${product.name}`}>
                    <PiArrowUpRightBold />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className={styles.moreWrap}>
          <a href="#top" className="btn btn-outline">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
