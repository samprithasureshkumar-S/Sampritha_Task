import { PiLeafDuotone, PiTruckDuotone, PiSparkleDuotone } from 'react-icons/pi';
import styles from './AnnouncementBar.module.css';

const AnnouncementBar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.track}>
        <span className={styles.item}>
          <PiTruckDuotone className={styles.icon} />
          Complimentary shipping on orders over $50
        </span>
        <span className={styles.item}>
          <PiLeafDuotone className={styles.icon} />
          Clean, cruelty-free ingredients
        </span>
        <span className={styles.item}>
          <PiSparkleDuotone className={styles.icon} />
          30-day glow guarantee
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
