import { useTranslation } from 'react-i18next';

const ExpertisesSection = () => {
  const { t } = useTranslation();
  const expertises = t('data.homePage.sections.expertise.cards', { returnObjects: true });

  return (
    <section className="expertises-section">
      <div className="left-content">
        <h2>{t('data.homePage.sections.expertise.title')}</h2>
        <p>{t('data.homePage.sections.expertise.subtitle')}</p>
      </div>
      <div className="cards-grid">
        {Array.isArray(expertises) && expertises.map((expertise, index) => (
          <a href={expertise.link} className="card" key={index}>
            <img src={`/src/assets/expertises/${expertise.title.toLowerCase()}.jpg`} alt={expertise.title} />
            <span className="card-title">{expertise.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ExpertisesSection;