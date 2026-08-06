import { useState } from 'react';
import { motion } from 'framer-motion';
import { PiEnvelopeSimpleOpenDuotone } from 'react-icons/pi';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className={`section ${styles.section}`}>
      <span className={`${styles.blob} ${styles.blobA}`} />
      <span className={`${styles.blob} ${styles.blobB}`} />
      <div className="container">
        <motion.div
          className={styles.wrap}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <PiEnvelopeSimpleOpenDuotone className={styles.icon} />
          <h2 className={styles.title}>Join the LUMARA Circle</h2>
          <p className={styles.desc}>
            Be the first to hear about new formulas, wellness rituals, and members-only offers —
            delivered straight to your inbox.
          </p>

          {submitted ? (
            <p className={styles.successMsg}>Thank you for subscribing — welcome to the circle!</p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                Subscribe
              </button>
            </form>
          )}
          <p className={styles.note}>No spam, ever. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
