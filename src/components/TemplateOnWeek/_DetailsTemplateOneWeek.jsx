import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import PricingOptionsOneWeek from './_PricingOptionOneWeek';

const TemplateDetailsPopup = ({ isOpen, onClose, template, openPosition }) => {
  const [activeTab, setActiveTab] = useState(0);
  const popupRef = useRef(null);

  const { tabs } = template;

  useEffect(() => {
    if (isOpen && popupRef.current && openPosition) {
      popupRef.current.style.transformOrigin = `${openPosition.x}px ${openPosition.y}px`;
    }
  }, [isOpen, openPosition]);

  if (!isOpen) return null;

  const renderContent = () => {
    const tab = tabs[activeTab];
    if (activeTab === 1) { // Index de l'onglet TARIFS
      return <PricingOptionsOneWeek data={tab} />; // Utilisez le bon nom du composant
    } else if (activeTab === 0) {
      return (
        <ul className="included-pages-list">
          {tab.content.map((page, index) => (
            <li key={index}>{page}</li>
          ))}
        </ul>
      );
    } else if (activeTab === 2 || activeTab === 3) {
      if (Array.isArray(tab.content)) {
        return (
          <div className={activeTab === 2 ? 'personalisable-content' : 'offer-content'}>
            {tab.content.map((item, index) => (
              <div key={index} className="content-item">
                {item.subtitle && (
                  <h3>
                    {item.emoji && <span className="emoji">{item.emoji}</span>}
                    {item.subtitle}
                  </h3>
                )}
                <p>{item.text}</p>
              </div>
            ))}
            {activeTab === 2 && (
              <div className="personalisable-footer">
                Vous bénéficierez d&apos;une grande liberté dans la personnalisation pour créer un site qui reflète parfaitement votre identité et qui attire efficacement votre clientèle cible. Laissez libre cours à votre créativité !
              </div>
            )}
          </div>
        );
      }
    }
    return <div dangerouslySetInnerHTML={{ __html: tab.content }} />;
  };

  return (
    <div className="template-details-popup-overlay">
      <div className="template-details-popup hipolite" ref={popupRef}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="popup-content">
          <nav className="tab-navigation">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </nav>
          <div className="tab-content">
            <h2 className="content-title">{tabs[activeTab].contentTitle}</h2>
            <div className="content-area">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

TemplateDetailsPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  template: PropTypes.shape({
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        contentTitle: PropTypes.string,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        pricingOptions: PropTypes.object
      })
    ).isRequired
  }).isRequired,
  openPosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
};

export default TemplateDetailsPopup;