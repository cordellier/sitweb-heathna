import { useTranslation } from 'react-i18next';

const SectionDeux = () => {
  const { t } = useTranslation();
    
  return (
    <section className="section-deux">
      <div className="content-wrapper">
        <h2>
          <span className="creative">{t('data.homePage.sections.creative.words.creativity')}.</span>
          {' '}
          <span className="strategie">{t('data.homePage.sections.creative.words.strategy')}.</span>
          {' '}
          <span className="innovation">{t('data.homePage.sections.creative.words.innovation')}.</span>
        </h2>
        <p className="subtitle">{t('data.homePage.sections.creative.subtitle')}</p>
      </div>
      <div className="video-wrapper">
        <video autoPlay muted loop playsInline>
          <source src="/video2.mp4" type="video/mp4" />
        </video>
        <button 
          className="play-button" 
          aria-label={t('data.homePage.sections.creative.videoLabel', 'Lire la vidéo')}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </section>
  );
};
  
export default SectionDeux;