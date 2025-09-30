import styles from '../styles/carousel.module.css';

export default function PointsCarousel({ items, type = 'points' }) {
  const renderItem = (item, index) => {
    if (type === 'categories') {
      return (
        <div className={styles.categoryItem} style={{ borderLeftColor: item.color }}>
          <div className={styles.categoryIcon}>{item.icon}</div>
          <h4 className={styles.categoryTitle} style={{ color: item.color }}>
            {item.title}
          </h4>
          <ul className={styles.categoryPoints}>
            {item.points.map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))}
          </ul>
        </div>
      );
    } else if (type === 'characteristics') {
      return (
        <div className={styles.characteristicItem}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      );
    } else if (type === 'examples') {
      return (
        <div className={styles.exampleItem}>
          <div className={styles.examplePeriod}>{item.period}</div>
          <div className={styles.exampleContent}>
            <p><strong>Nội dung:</strong> {item.description}</p>
            <p><strong>Kết quả:</strong> {item.result}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.pointItem}>
          {typeof item === 'string' ? item : item.content || item}
        </div>
      );
    }
  };

  // Luôn hiển thị dạng vertical list (bỏ carousel)
  return (
    <div className={styles.verticalList}>
      {items.map((item, index) => (
        <div key={index} className={styles.verticalItem}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}