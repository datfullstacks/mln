import styles from '../styles/components.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🎓</span>
          <span className={styles.logoText}>Triết học Mác-Lênin</span>
        </div>
        <div className={styles.headerInfo}>
          <span className={styles.subject}>MLN111 - Chương 3</span>
          <span className={styles.topic}>Giai cấp & Đấu tranh giai cấp</span>
        </div>
      </div>
    </header>
  );
}
