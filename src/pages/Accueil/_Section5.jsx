import { useTranslation } from 'react-i18next';

const CaseStudies = () => {
  const { t } = useTranslation();
  const cases = t('data.homePage.sections.testimonials.cases', { returnObjects: true });

  return (
    <section className="case-studies">
      <div className="grid">
        {Array.isArray(cases) && cases.map(caseStudy => (
          <div className="case-card" key={caseStudy.id}>
            <div 
              className="image-container"
              style={{ backgroundColor: caseStudy.color }}
            >
              <img src={`/src/assets/cases/${caseStudy.id}.jpg`} alt={caseStudy.title} />
            </div>
            <div className="content">
              <h3>{caseStudy.title}</h3>
              <p>{caseStudy.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;