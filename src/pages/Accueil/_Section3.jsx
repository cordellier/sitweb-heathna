import React from 'react';
import { FaReact, FaWordpress, FaJs } from 'react-icons/fa';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobepremierepro } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const SectionTrois = () => {
  const { t } = useTranslation();
  
  const tools = [
    { id: 'ai', icon: <SiAdobeillustrator />, name: t('data.homePage.sections.technology.tools.0.name') },
    { id: 'ps', icon: <SiAdobephotoshop />, name: t('data.homePage.sections.technology.tools.1.name') },
    { id: 'id', icon: <SiAdobeindesign />, name: t('data.homePage.sections.technology.tools.2.name') },
    { id: 'pr', icon: <SiAdobepremierepro />, name: t('data.homePage.sections.technology.tools.3.name') },
    { id: 'js', icon: <FaJs />, name: t('data.homePage.sections.technology.tools.4.name') },
    { id: 'react', icon: <FaReact />, name: t('data.homePage.sections.technology.tools.5.name') },
    { id: 'wp', icon: <FaWordpress />, name: t('data.homePage.sections.technology.tools.6.name') }
  ];

  return (
    <section className="section-trois">
      <div className="left-content">
        <h2>{t('data.homePage.sections.technology.title')}</h2>
        <p className="subtitle">{t('data.homePage.sections.technology.subtitle')}</p>
        <div className="tools-grid">
          {tools.map((tool) => (
            <div key={tool.id} className="tool-item">
              {tool.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="right-content">
        <img src="/src/assets/img-acceuil/Technologie_et_créativité.png" alt="Creative workspace" />
      </div>
    </section>
  );
};

export default SectionTrois; // Ajout de l'export default