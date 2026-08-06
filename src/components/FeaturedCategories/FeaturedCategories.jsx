import { motion } from 'framer-motion';
import { categories } from '../../data/siteData';
import styles from './FeaturedCategories.module.css';

const FeaturedCategories = () => {
  return (
    <section className={`section ${styles.section}`} id="categories">
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Shop by Ritual</span>
          <h2>Featured Categories</h2>
          <p>Curated edits designed around the moments of your day — from morning glow to evening wind-down.</p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={cat.image} alt={cat.name} className={styles.image} loading="lazy" />
              <div className={styles.overlay}>
                <div className={styles.cardContent}>
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
