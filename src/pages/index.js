import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Slide from '../components/Slide';
import Navigation from '../components/Navigation';
import AudioPlayer from '../components/AudioPlayer';
import { slides } from '../data/slides';
import loadingStyles from '../styles/loading.module.css';
import infoPanelStyles from '../styles/info-panel.module.css';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Fix viewport height on mobile
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  useEffect(() => {
    // Handle fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleSlideChange = (newSlideIndex) => {
    if (newSlideIndex >= 0 && newSlideIndex < slides.length) {
      setCurrentSlide(newSlideIndex);
    }
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.log('Fullscreen not supported:', error);
      // Fallback for browsers that don't support fullscreen
      setIsFullscreen(!isFullscreen);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
          }
          break;
        case 'ArrowLeft':
          event.preventDefault();
          if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
          }
          break;
        case 'Home':
          event.preventDefault();
          setCurrentSlide(0);
          break;
        case 'End':
          event.preventDefault();
          setCurrentSlide(slides.length - 1);
          break;
        case 'f':
        case 'F11':
          event.preventDefault();
          toggleFullscreen();
          break;
        default: {
          // Check if it's a number key (1-9)
          const num = parseInt(event.key);
          if (num >= 1 && num <= 9 && num <= slides.length) {
            event.preventDefault();
            setCurrentSlide(num - 1);
          }
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, slides.length]);

  if (isLoading) {
    return (
      <div className={loadingStyles.loadingContainer}>
        <Head>
          <title>Đang tải... - Giai cấp và Đấu tranh giai cấp</title>
        </Head>
        <div className={loadingStyles.loadingSpinner}>
          <div className={loadingStyles.spinner}></div>
          <p>Đang chuẩn bị thuyết trình...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="presentation-container">
      <Head>
        <title>
          Slide {currentSlide + 1}: {slides[currentSlide]?.title} - Giai cấp và Đấu tranh giai cấp
        </title>
        <meta 
          name="description" 
          content="Thuyết trình về Giai cấp và đấu tranh giai cấp theo quan điểm triết học Mác-Lênin, phân tích qua bài hát 'Lối nhỏ' của Đen Vâu" 
        />
        <meta name="keywords" content="triết học, mác-lênin, giai cấp, đấu tranh giai cấp, đen vâu, lối nhỏ" />
        <meta name="author" content="Nhóm thuyết trình Triết học Mác-Lênin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giai-cap-thuyetrinh.vercel.app/" />
        <meta property="og:title" content="Giai cấp và Đấu tranh giai cấp - Thuyết trình" />
        <meta property="og:description" content="Phân tích triết học Mác-Lênin qua bài hát 'Lối nhỏ' của Đen Vâu" />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://giai-cap-thuyetrinh.vercel.app/" />
        <meta property="twitter:title" content="Giai cấp và Đấu tranh giai cấp - Thuyết trình" />
        <meta property="twitter:description" content="Phân tích triết học Mác-Lênin qua bài hát 'Lối nhỏ' của Đen Vâu" />
        <meta property="twitter:image" content="/images/og-image.jpg" />
        
        {/* Preload fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>

      {/* Header - Hidden in fullscreen mode */}
      {!isFullscreen && <Header />}

          {/* Main Presentation Area */}
          <main 
            className={`main-content ${isFullscreen ? 'fullscreen' : ''}`}
            style={isFullscreen ? (slides[currentSlide]?.image ? {
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            } : {
              background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)'
            }) : {}}
          >
            <Slide
              data={slides[currentSlide]}
              slideNumber={currentSlide + 1}
              totalSlides={slides.length}
              isFullscreen={isFullscreen}
            />
          </main>

      {/* Navigation Controls */}
      <Navigation 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onSlideChange={handleSlideChange}
        onFullscreenToggle={toggleFullscreen}
      />

      {/* Audio Player - Only show on audio slides or when needed */}
      {(slides[currentSlide]?.type === 'audio-intro' || currentSlide >= 2) && (
        <AudioPlayer />
      )}

      {/* Presentation Info Panel - Hidden in fullscreen */}
      {!isFullscreen && (
        <div className={infoPanelStyles.infoPanel}>
          <div className={infoPanelStyles.keyboardShortcuts}>
            <h4>⌨️ Phím tắt:</h4>
            <ul>
              <li><kbd className={infoPanelStyles.kbd}>←</kbd> <kbd className={infoPanelStyles.kbd}>→</kbd> Di chuyển slide</li>
              <li><kbd className={infoPanelStyles.kbd}>Space</kbd> Slide tiếp theo</li>
              <li><kbd className={infoPanelStyles.kbd}>F</kbd> Toàn màn hình</li>
              <li><kbd className={infoPanelStyles.kbd}>1-9</kbd> Chuyển đến slide</li>
              <li><kbd className={infoPanelStyles.kbd}>Home</kbd> <kbd className={infoPanelStyles.kbd}>End</kbd> Slide đầu/cuối</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
