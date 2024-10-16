import { useState, useEffect, useRef } from "react";
import templateDetails from "../../data/templateDetails.json";
import PricingOptions from "../TemplatePage/_PricingOption";
import FormationModuleGrid from '../TemplatePage/_FormationModule';

const TemplateDetailsPopup = ({ isOpen, onClose, template, openPosition }) => {
  const [activeTab, setActiveTab] = useState(0);
  const popupRef = useRef(null);

  const { tabs } = templateDetails;

  useEffect(() => {
    if (isOpen && popupRef.current && openPosition) {
      popupRef.current.style.transformOrigin = `${openPosition.x}px ${openPosition.y}px`;
    }
  }, [isOpen, openPosition]);

  if (!isOpen) return null;

  const renderContent = () => {
    const tab = tabs[activeTab];
    if (activeTab === tabs.length - 1) {
      return <PricingOptions options={tab.pricingOptions} />;
    } else if (activeTab === 0) { // LES PAGES INCLUSES
      return (
        <ul className="included-pages-list">
          {tab.content.map((page, index) => (
            <li key={index}>{page}</li>
          ))}
        </ul>
      );
    } else if (activeTab === 1 || activeTab === 3) { // 100% PERSONNALISABLE ou UNE OFFRE COMPLÈTE
      if (Array.isArray(tab.content)) {
        return (
          <div className={activeTab === 1 ? "personalisable-content" : "offer-content"}>
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
            {activeTab === 1 && (
              <div className="personalisable-footer">
                Vous bénéficierez d'une grande liberté dans la personnalisation pour créer un site qui reflète parfaitement votre identité et qui attire efficacement votre clientèle cible. Laissez libre cours à votre créativité !
              </div>
            )}
          </div>
        );
      }
    } else if (activeTab === 4) { // FORMATION
      return <FormationModuleGrid modules={tab.modules} />;
    }
    // Pour les autres onglets, utilisez le rendu HTML si le contenu n'est pas un tableau
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
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </nav>
          <div className="tab-content">
            <h2 className="content-title">{tabs[activeTab].contentTitle}</h2>
            <div className="content-area">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetailsPopup;