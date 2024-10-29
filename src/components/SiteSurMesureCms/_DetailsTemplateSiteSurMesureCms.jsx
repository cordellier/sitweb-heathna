import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import PricingOptionsSiteMsureCms from './_PricingOptionSiteSurMesureCms';

const TemplateDetailsPopup = ({ isOpen, onClose, template, openPosition }) => {
  const popupRef = useRef(null);

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
          <div className="tab-content">
            <h2 className="content-title">Tarifs et suppléments</h2>
            <div className="content-area">
              <PricingOptionsSiteMsureCms data={template} />
            </div>
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
    pricingOptions: PropTypes.object.isRequired
  }).isRequired,
  openPosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
};

export default TemplateDetailsPopup;