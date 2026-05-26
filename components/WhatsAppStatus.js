'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './WhatsAppStatus.module.css';

const WhatsAppStatus = ({ stories = [], onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const duration = 5000; // 5 seconds per slide
  const intervalTime = 50; // Update progress every 50ms

  const nextSlide = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      if (onComplete) onComplete();
    }
  }, [currentIndex, stories.length, onComplete]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    } else {
      setProgress(0);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + (intervalTime / duration) * 100;
        if (nextProgress >= 100) {
          clearInterval(timer);
          nextSlide();
          return 100;
        }
        return nextProgress;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, nextSlide]);

  const handlePointerDown = () => {
    setIsPaused(true);
  };

  const handlePointerUp = () => {
    setIsPaused(false);
  };

  if (!stories || stories.length === 0) return null;

  const currentStory = stories[currentIndex];

  return (
    <div className={styles.statusContainer} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerLeave={handlePointerUp}>
      {/* Progress Bars */}
      <div className={styles.progressContainer}>
        {stories.map((story, index) => (
          <div key={index} className={styles.progressBar}>
            <div
              className={`${styles.progressFill} ${index === currentIndex && !isPaused ? styles.activeFill : ''}`}
              style={{
                width: index < currentIndex ? '100%' : index === currentIndex ? `${progress}%` : '0%',
              }}
            />
          </div>
        ))}
      </div>

      {/* User Info */}
      <div className={styles.userInfo}>
        {currentStory.avatar && <img src={currentStory.avatar} alt="User Avatar" className={styles.avatar} />}
        <div>
          <div className={styles.userName}>{currentStory.userName || 'Usuário'}</div>
          <div className={styles.time}>{currentStory.time || 'Agora mesmo'}</div>
        </div>
      </div>

      {/* Story Content */}
      <div className={styles.imageContainer}>
        {currentStory.type === 'video' ? (
          <video src={currentStory.url} className={styles.image} autoPlay muted playsInline loop={false} />
        ) : (
          <img src={currentStory.url} alt="Status" className={styles.image} />
        )}
        {currentStory.caption && <div className={styles.caption}>{currentStory.caption}</div>}
      </div>

      {/* Navigation Areas */}
      <div className={`${styles.navArea} ${styles.navLeft}`} onClick={prevSlide}></div>
      <div className={`${styles.navArea} ${styles.navRight}`} onClick={nextSlide}></div>
    </div>
  );
};

export default WhatsAppStatus;
