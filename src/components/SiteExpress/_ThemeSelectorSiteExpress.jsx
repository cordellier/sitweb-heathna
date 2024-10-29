import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

const ThemeSelector = ({ isOpen, onClose, openPosition }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    if (isOpen && popupRef.current && openPosition) {
      popupRef.current.style.transformOrigin = `${openPosition.x}px ${openPosition.y}px`;
    }
  }, [isOpen, openPosition]);

  if (!isOpen) return null;

  return (
    <div className="theme-selector-overlay">
      <div className="theme-selector-popup" ref={popupRef}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="popup-content">
          <h2 className="theme-title animate-fade-down">Choisissez votre thème</h2>
          <div className="themes-container">
            <div className="ipad-frame animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <img src="/theme1.jpg" alt="Thème 1" />
            </div>
            <div className="ipad-frame animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img src="/theme2.jpg" alt="Thème 2" />
            </div>
            <div className="ipad-frame animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <img src="/theme1.jpg" alt="Thème 3" />
            </div>
            <div className="ipad-frame animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <img src="/theme2.jpg" alt="Thème 4" />
            </div>
          </div>
          <div className="contact-section animate-fade-up">
            <button className="contact-btn">NOUS CONTACTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

ThemeSelector.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  openPosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
};

export default ThemeSelector;