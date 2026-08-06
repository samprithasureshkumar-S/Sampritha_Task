import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PiListBold, PiXBold, PiMagnifyingGlassBold, PiUserBold, PiHandbagBold } from 'react-icons/pi';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Skincare', href: '#categories' },
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'Collections', href: '#collections' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Journal', href: '#testimonials' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          LUM<span>A</span>RA
        </a>

        <nav className={styles.links}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            <PiMagnifyingGlassBold />
          </button>
          <button className={styles.iconBtn} aria-label="Account">
            <PiUserBold />
          </button>
          <button className={styles.iconBtn} aria-label="Bag">
            <PiHandbagBold />
          </button>
          <button
            className={styles.menuBtn}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <PiXBold /> : <PiListBold />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.mobileLinks}>
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
