import { useState } from 'react';
import styles from '../styles/components.module.css';

export default function Navigation({ 
  currentSlide, 
  totalSlides, 
  onSlideChange, 
  onFullscreenToggle 
}) {
  const [showSlideSelector, setShowSlideSelector] = useState(false);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      onSlideChange(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      onSlideChange(currentSlide - 1);
    }
  };

  const goToSlide = (slideIndex) => {
    onSlideChange(slideIndex);
    setShowSlideSelector(false);
  };

  // Keyboard navigation
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight' || event.key === ' ') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'f' || event.key === 'F11') {
      event.preventDefault();
      onFullscreenToggle();
    }
  };

  // Add keyboard event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyPress);
  }

  return (
    <div className={styles.navigation}>
      <button 
        className={`${styles.navButton} ${currentSlide === 0 ? styles.disabled : ''}`}
        onClick={prevSlide}
        disabled={currentSlide === 0}
        title="Slide trước (←)"
      >
        ← Trước
      </button>

      <div className={styles.slideSelector}>
        <button 
          className={styles.slideIndicator}
          onClick={() => setShowSlideSelector(!showSlideSelector)}
          title="Chọn slide"
        >
          {currentSlide + 1} / {totalSlides}
        </button>
        
        {showSlideSelector && (
          <div className={styles.slideDropdown}>
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                className={`${styles.slideOption} ${i === currentSlide ? styles.active : ''}`}
                onClick={() => goToSlide(i)}
              >
                Slide {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      <button 
        className={`${styles.navButton} ${currentSlide === totalSlides - 1 ? styles.disabled : ''}`}
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        title="Slide sau (→)"
      >
        Sau →
      </button>

      <button 
        className={styles.navButton}
        onClick={onFullscreenToggle}
        title="Toàn màn hình (F)"
      >
        ⛶ Fullscreen
      </button>

      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>
    </div>
  );
}
