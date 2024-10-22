import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  const words = t('data.homePage.sections.hero.rotatingWords', { returnObjects: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const rotateWords = () => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    };

    const intervalId = setInterval(rotateWords, 4000);
    return () => clearInterval(intervalId);
  }, [words.length]);

  const currentWord = words[currentIndex];

  const getWordColor = (index) => {
    const colors = {
      0: '#5F7BE3',    // histoires/stories
      1: '#00C9A7',    // identités/identities
      2: '#EF4880',    // sites web/websites
      3: '#F7D411'     // stratégies/strategies
    };
    return colors[index];
  };

  return (
    <section className="hero-section">
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>
        <div className="play-button">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      <div className="content-container">
        <h1>
          {t('data.homePage.sections.hero.title')}{' '}
          <span 
            className={`animated-word ${isAnimating ? 'fade-out' : 'fade-in'}`} 
            style={{ color: getWordColor(currentIndex) }}
          >
            {currentWord}
          </span>{' '}
          {t('data.homePage.sections.hero.authentiques')}.
        </h1>
        <button className="cta-button">{t('data.homePage.sections.hero.ctaButton')}</button>
      </div>
    </section>
  );
};

export default HeroSection;