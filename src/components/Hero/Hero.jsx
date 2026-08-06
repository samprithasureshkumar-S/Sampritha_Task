import { motion } from 'framer-motion';
import { PiArrowRightBold, PiFlowerLotusDuotone } from 'react-icons/pi';
import { ph } from '../../data/siteData';
import styles from './Hero.module.css';

const heroImage = ph(900, 1125, 'EFE7DE', '3B4638', 'Hero+Ritual');

const Hero = () => {
  return (
    <section className={styles.hero} id="top">
      <span className={`${styles.blob} ${styles.blob1}`} />
      <span className={`${styles.blob} ${styles.blob2}`} />
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Clean Beauty · Mindful Wellness</span>
          <h1 className={styles.title}>
            Rituals for skin that <em>glows</em>, moments that breathe
          </h1>
          <p className={styles.subtitle}>
            Thoughtfully formulated skincare and botanical wellness essentials, made with
            clean ingredients and slow-crafted care — for a routine that feels as good as it looks.
          </p>
          <div className={styles.ctaRow}>
            <a href="#best-sellers" className="btn btn-primary">
              Shop Best Sellers <PiArrowRightBold />
            </a>
            <a href="#collections" className="btn btn-outline">
              Explore Collections
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10K+</span>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4.8/5</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Clean Formulas</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <img src={heroImage} alt="Botanical skincare ritual placeholder" className={styles.image} />
          <div className={styles.badge}>
            <PiFlowerLotusDuotone className={styles.badgeIcon} />
            <div>
              <div className={styles.badgeTitle}>Botanically Powered</div>
              <div className={styles.badgeSub}>98% naturally derived</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
