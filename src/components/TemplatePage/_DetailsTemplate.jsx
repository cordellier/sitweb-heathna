import { useState, useEffect, useRef } from "react";
import templateDetails from "../../data/templateDetails.json";
import PricingOptions from "../TemplatePage/_PricingOption";

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
              {activeTab === tabs.length - 1 ? (
                <PricingOptions options={tabs[activeTab].pricingOptions} />
              ) : (
                <div
                  dangerouslySetInnerHTML={{ __html: tabs[activeTab].content }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetailsPopup;
