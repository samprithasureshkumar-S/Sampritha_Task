import { motion } from 'framer-motion';
import { PiQuotesFill, PiStarFill } from 'react-icons/pi';
import { testimonials } from '../../data/siteData';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={`section ${styles.section}`} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Community Love</span>
          <h2>What Our Customers Say</h2>
          <p>Real words from the community who've made LUMARA part of their everyday ritual.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <PiQuotesFill className={styles.quoteIcon} />
              <span className={styles.stars}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <PiStarFill key={idx} style={{ opacity: idx < t.rating ? 1 : 0.25 }} />
                ))}
              </span>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.person}>
                <img src={t.avatar} alt={t.name} className={styles.avatar} loading="lazy" />
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
