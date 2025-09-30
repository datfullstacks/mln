import { useEffect, useState } from 'react';
import styles from '../styles/components.module.css';
import PointsCarousel from './PointsCarousel';

// Image Placeholder Component
function ImagePlaceholder({ imagePath, alt, className = '' }) {
  const [imageError, setImageError] = useState(false);

  if (imageError || !imagePath) {
    return (
      <div className={className} style={{
        width: '100%',
        height: '100%',
        minHeight: '300px',
        background: 'linear-gradient(135deg, #ffebee, #ffcdd2)',
        border: '2px dashed #d32f2f',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#d32f2f',
        fontSize: '0.9rem',
        textAlign: 'center',
        padding: '1rem'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖼️</div>
        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Hình ảnh minh họa
        </div>
        <div style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '0.5rem' }}>
          {imagePath ? `File: ${imagePath.split('/').pop()}` : 'Chưa có hình ảnh'}
        </div>
        <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>
          {alt}
        </div>
      </div>
    );
  }

  return (
    <img 
      src={imagePath} 
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
      style={{ 
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        minHeight: '300px'
      }}
    />
  );
}

export default function Slide({ data, slideNumber, totalSlides, isFullscreen }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [data]);

  const slideStyle = isFullscreen ? {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)'
  } : {
    background: data.background || '#ffffff'
  };

  return (
    <div 
      className={`${styles.slide} ${isVisible ? styles.slideVisible : ''} ${isFullscreen ? styles.slideFullscreen : ''}`}
      style={slideStyle}
    >
      <div className={styles.slideHeader}>
        <span className={styles.slideNumber}>
          {slideNumber} / {totalSlides}
        </span>
        <h1 className={styles.slideTitle}>{data.title}</h1>
      </div>

      <div className={styles.slideContent}>
        {/* Left side - Image (Hidden in fullscreen) */}
        {!isFullscreen && (
          <div className={styles.slideImageSection}>
            {data.image ? (
              <ImagePlaceholder 
                imagePath={data.image} 
                alt={`Hình minh họa cho ${data.title}`}
                className={styles.slideImage}
              />
            ) : (
              <div className={styles.slideImagePlaceholder}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖼️</div>
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  Hình ảnh minh họa
                </div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                  Chưa có hình ảnh cho slide này
                </div>
              </div>
            )}
          </div>
        )}

        {/* Right side - Content (Full width in fullscreen) */}
        <div className={`${styles.slideTextSection} ${isFullscreen ? styles.slideTextFullscreen : ''}`}>
          {data.type === 'intro' && <IntroSlide content={data.content} />}
          {data.type === 'text' && <TextSlide content={data.content} />}
          {data.type === 'audio-intro' && <AudioIntroSlide content={data.content} />}
          {data.type === 'quote-analysis' && <QuoteAnalysisSlide content={data.content} />}
          {data.type === 'analysis-detailed' && <DetailedAnalysisSlide content={data.content} />}
          {data.type === 'concept' && <ConceptSlide content={data.content} />}
          {data.type === 'application' && <ApplicationSlide content={data.content} />}
          {data.type === 'conclusion' && <ConclusionSlide content={data.content} />}
        </div>
      </div>
    </div>
  );
}

// Intro Slide Component
function IntroSlide({ content }) {
  return (
    <div className={styles.introSlide}>
      <h2 className={styles.subtitle}>{content.subtitle}</h2>
      <p className={styles.description}>{content.description}</p>
      <blockquote className={styles.heroQuote}>
        {content.quote}
      </blockquote>
      <p className={styles.author}>— {content.author}</p>
      
      {content.objectives && (
        <div className={styles.objectives}>
          <h3>🎯 Mục tiêu bài học:</h3>
          <ul className={styles.objectivesList}>
            {content.objectives.map((objective, index) => (
              <li key={index} className={styles.objectiveItem}>
                {objective}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Text Slide Component
function TextSlide({ content }) {
  return (
    <div className={styles.textSlide}>
      <p className={styles.definition}>{content.definition}</p>
      
      {content.points && (
        <PointsCarousel items={content.points} type="points" />
      )}
      
      {content.note && (
        <div className={styles.note}>
          <p>{content.note}</p>
        </div>
      )}
      {content.examples && (
        <div className={styles.examples}>
          <h4>📋 Ví dụ:</h4>
          <PointsCarousel items={content.examples} type="points" />
        </div>
      )}
    </div>
  );
}

// Audio Intro Slide Component
function AudioIntroSlide({ content }) {
  return (
    <div className={styles.audioSlide}>
      <p className={styles.description}>{content.description}</p>
      <div className={styles.lyricsContainer}>
        {content.lyrics.map((lyric, index) => (
          <blockquote key={index} className={styles.lyricQuote}>
            {lyric}
          </blockquote>
        ))}
      </div>
      <div className={styles.instruction}>
        <span className={styles.instructionIcon}>🎵</span>
        <p>{content.instruction}</p>
      </div>
      {content.question && (
        <div className={styles.question}>
          <h4>❓ Câu hỏi cần suy ngẫm:</h4>
          <p>{content.question}</p>
        </div>
      )}
    </div>
  );
}

// Quote Analysis Slide Component
function QuoteAnalysisSlide({ content }) {
  return (
    <div className={styles.quoteAnalysisSlide}>
      <blockquote className={styles.mainQuote}>
        {content.quote}
      </blockquote>
      <div className={styles.analysisContainer}>
        <h3>📝 Phân tích chi tiết:</h3>
        {content.analysis.map((item, index) => (
          <div key={index} className={styles.analysisItem}>
            <h4>{item.term}</h4>
            <p><strong>Ý nghĩa:</strong> {item.explanation}</p>
            <p><strong>Ví dụ:</strong> {item.example}</p>
          </div>
        ))}
        <div className={styles.conclusion}>
          <strong>💡 Kết luận:</strong> {content.conclusion}
        </div>
      </div>
    </div>
  );
}

// Detailed Analysis Slide Component
function DetailedAnalysisSlide({ content }) {
  return (
    <div className={styles.detailedAnalysisSlide}>
      <PointsCarousel items={content.categories} type="categories" />
    </div>
  );
}

// Concept Slide Component
function ConceptSlide({ content }) {
  return (
    <div className={styles.conceptSlide}>
      <p className={styles.definition}>{content.definition}</p>
      
      {content.characteristics && (
        <PointsCarousel items={content.characteristics} type="characteristics" />
      )}
      
      <blockquote className={styles.conceptQuote}>
        {content.quote}
      </blockquote>
    </div>
  );
}

// Application Slide Component
function ApplicationSlide({ content }) {
  return (
    <div className={styles.applicationSlide}>
      {content.examples && (
        <PointsCarousel items={content.examples} type="examples" />
      )}
      
      <div className={styles.modernRelevance}>
        <h4>🌟 Ý nghĩa hiện đại:</h4>
        <p>{content.modernRelevance}</p>
      </div>
    </div>
  );
}

// Conclusion Slide Component
function ConclusionSlide({ content }) {
  return (
    <div className={styles.conclusionSlide}>
      {content.question && (
        <div className={styles.questionSection}>
          <h3 className={styles.questionTitle}>❓ {content.question}</h3>
          <div className={styles.answersContainer}>
            {content.answers.map((answer, index) => (
              <div key={index} className={styles.answerItem}>
                <h4>{answer.title}</h4>
                <p>{answer.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {content.mainPoints && (
        <PointsCarousel items={content.mainPoints} type="points" />
      )}
      
      {content.quote && (
        <blockquote className={styles.conclusionQuote}>
          {content.quote}
        </blockquote>
      )}
      
      {content.summary && (
        <div className={styles.summary}>
          <p>{content.summary}</p>
        </div>
      )}
      
      {content.conclusion && (
        <div className={styles.conclusion}>
          <p>{content.conclusion}</p>
        </div>
      )}
      
      {content.callToAction && (
        <div className={styles.callToAction}>
          <p>{content.callToAction}</p>
        </div>
      )}
      
      {content.thanks && (
        <div className={styles.thanks}>
          <h2>{content.thanks}</h2>
          <div className={styles.thanksEmoji}>🙏✨</div>
        </div>
      )}
    </div>
  );
}
