import { useState, useRef, useEffect } from 'react';
import styles from '../styles/components.module.css';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.audioPlayer}>
      <audio 
        ref={audioRef}
        preload="metadata"
      >
        <source src="/audio/loi-nho-snippet.mp3" type="audio/mpeg" />
        <source src="/audio/loi-nho-snippet.ogg" type="audio/ogg" />
        Trình duyệt không hỗ trợ audio.
      </audio>

      <div className={styles.audioControls}>
        <button 
          className={styles.playButton}
          onClick={togglePlay}
          title={isPlaying ? 'Dừng' : 'Phát'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>

        <div className={styles.audioInfo}>
          <span className={styles.audioTitle}>
            🎵 "Lối nhỏ" - Đen Vâu
          </span>
          <div className={styles.timeDisplay}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        <div className={styles.progressContainer}>
          <div 
            className={styles.progressBar}
            onClick={handleSeek}
          >
            <div 
              className={styles.progressFill}
              style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
            />
          </div>
        </div>

        <div className={styles.volumeContainer}>
          <span className={styles.volumeIcon}>
            {volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
          </span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className={styles.volumeSlider}
          />
        </div>
      </div>

      <div className={styles.audioNote}>
        <small>💡 Nhấn phát để nghe nhạc trong khi thuyết trình</small>
      </div>
    </div>
  );
}
