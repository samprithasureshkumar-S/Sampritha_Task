import { motion } from 'framer-motion';
import { PiArrowRightBold } from 'react-icons/pi';
import { collections } from '../../data/siteData';
import styles from './WellnessCollections.module.css';

const WellnessCollections = () => {
  return (
    <section className={`section ${styles.section}`} id="collections">
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Curated Edits</span>
          <h2>Wellness Collections</h2>
          <p>Considered pairings of skincare and ritual, designed to accompany the rhythms of your day.</p>
        </div>

        {collections.map((col, i) => (
          <motion.div
            key={col.id}
            className={`${styles.row} ${col.reverse ? styles.reverse : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.imageCol}>
              <img src={col.image} alt={col.name} className={styles.image} loading="lazy" />
            </div>
            <div className={styles.textCol}>
              <p className={styles.tagline}>{col.tagline}</p>
              <h3 className={styles.name}>{col.name}</h3>
              <p className={styles.desc}>{col.description}</p>
              <a href="#best-sellers" className="btn btn-outline">
                Discover the Edit <PiArrowRightBold />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WellnessCollections;
