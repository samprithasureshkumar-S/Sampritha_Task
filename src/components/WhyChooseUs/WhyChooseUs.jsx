import { motion } from 'framer-motion';
import { PiLeafDuotone, PiHeartDuotone, PiGlobeHemisphereWestDuotone, PiSparkleDuotone } from 'react-icons/pi';
import { whyChooseUs } from '../../data/siteData';
import styles from './WhyChooseUs.module.css';

const ICONS = {
  leaf: PiLeafDuotone,
  heart: PiHeartDuotone,
  globe: PiGlobeHemisphereWestDuotone,
  sparkles: PiSparkleDuotone,
};

const WhyChooseUs = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Our Promise</span>
          <h2>Why Choose LUMARA</h2>
          <p>We believe beauty and wellness should feel good in every sense — for you, and for the planet.</p>
        </div>

        <div className={styles.grid}>
          {whyChooseUs.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.id}
                className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.iconWrap}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
