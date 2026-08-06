import {
  PiInstagramLogo,
  PiPinterestLogo,
  PiTiktokLogo,
  PiFacebookLogo,
  PiMapPinDuotone,
  PiEnvelopeDuotone,
  PiPhoneDuotone,
} from 'react-icons/pi';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              LUM<span>A</span>RA
            </div>
            <p className={styles.brandDesc}>
              Modern skincare and wellness essentials, thoughtfully formulated with clean
              ingredients — for rituals that nourish both skin and spirit.
            </p>
            <div className={styles.socials}>
              <a href="#top" className={styles.socialBtn} aria-label="Instagram">
                <PiInstagramLogo />
              </a>
              <a href="#top" className={styles.socialBtn} aria-label="Pinterest">
                <PiPinterestLogo />
              </a>
              <a href="#top" className={styles.socialBtn} aria-label="TikTok">
                <PiTiktokLogo />
              </a>
              <a href="#top" className={styles.socialBtn} aria-label="Facebook">
                <PiFacebookLogo />
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Shop</h4>
            <div className={styles.linkList}>
              <a href="#categories">Skincare</a>
              <a href="#categories">Body & Bath</a>
              <a href="#categories">Wellness Teas</a>
              <a href="#categories">Gift Edits</a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>About</h4>
            <div className={styles.linkList}>
              <a href="#sustainability">Our Story</a>
              <a href="#sustainability">Sustainability</a>
              <a href="#testimonials">Reviews</a>
              <a href="#top">Journal</a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Get in Touch</h4>
            <div className={styles.contactItem}>
              <PiMapPinDuotone className={styles.contactIcon} />
              <span>128 Botanical Lane, Portland, OR</span>
            </div>
            <div className={styles.contactItem}>
              <PiEnvelopeDuotone className={styles.contactIcon} />
              <span>hello@lumara-example.com</span>
            </div>
            <div className={styles.contactItem}>
              <PiPhoneDuotone className={styles.contactIcon} />
              <span>+1 (555) 012-3456</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>&copy; {year} LUMARA BY SAMPRITHA S . All rights reserved. For demonstration purposes only.</span>
          <div className={styles.bottomLinks}>
            <a href="#top">Privacy Policy</a>
            <a href="#top">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
