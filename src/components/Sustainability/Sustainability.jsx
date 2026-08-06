import { motion } from 'framer-motion';
import { ph, sustainabilityStats } from '../../data/siteData';
import styles from './Sustainability.module.css';

const sustainImage = ph(800, 600, '4E5C4A', 'FAF8F5', 'Sustainability');

const Sustainability = () => {
  return (
    <section className={`section ${styles.section}`} id="sustainability">
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.imageWrap}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={sustainImage} alt="Sustainable sourcing placeholder" className={styles.image} loading="lazy" />
          </motion.div>

          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={`eyebrow ${styles.eyebrow}`}>Rooted in Responsibility</span>
            <h2 className={styles.title}>Kind to Skin, Kind to Earth</h2>
            <p className={styles.desc}>
              From refillable packaging to ethically sourced botanicals, every choice we make is
              guided by a simple question — does this honor both people and planet? We partner with
              growers who share our commitment to regenerative, transparent farming.
            </p>

            <div className={styles.statsGrid}>
              {sustainabilityStats.map((stat) => (
                <div key={stat.id} className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
