// src/components/_NavbarDropdown.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types'; // Ajout des PropTypes
import { useNavigate } from 'react-router-dom'; // Ajout de useNavigate
import dropdownData from '../data/dropdownData.json';
import useActiveSection from '../hooks/useActiveSection';
import useDropdownNavigation from '../hooks/useDropdownNavigation';
import { NAVBAR_DROPDOWN_ANIMATION, DROPDOWN_CONTENT_ANIMATION } from '../constants/animationSettings';

const NavbarDropdown = ({ onClose }) => { // Ajout de la prop onClose
  const { activeSection, handleMouseEnter } = useActiveSection();
  const { handleItemClick } = useDropdownNavigation();
  const navigate = useNavigate();
  const { sections, content } = dropdownData;

  const handleItemNavigation = (item) => {
    const routeMap = {
      "Site Sur-Mesure": "/site-sur-mesure",
      "Site Vitrine en 1 Semaine": "/custom-website",
      "Site Durable en 1 semaine": "/site-express",
      "Template CMS avec formation": "/template-cms",
      "Site Web Durable Sur-Mesure": "/site-durable-mesure",
      "Brandboard": "/brandboard",
      "Charte Graphique": "/charte-graphique",
      "Carte de Visite": "/carte-visite",
      "Flyer - Dépliant": "/flyer-depliant"
    };

    const route = routeMap[item.title];
    if (route) {
      navigate(route);
      if (onClose) onClose(); // Ferme la dropdown après navigation
    }
    handleItemClick(item); // Garde la fonction existante pour d'autres fonctionnalités
  };

  return (
    <motion.div
      className="navbar-dropdown"
      initial={NAVBAR_DROPDOWN_ANIMATION.initial}
      animate={NAVBAR_DROPDOWN_ANIMATION.animate}
      transition={NAVBAR_DROPDOWN_ANIMATION.transition}
    >
      <div className="dropdown-menu">
        {sections.map((section) => (
          <div
            key={section.key}
            className={`dropdown-item ${activeSection === section.key ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(section.key)}
          >
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
      <motion.div
        className="dropdown-content"
        key={activeSection}
        initial={DROPDOWN_CONTENT_ANIMATION.initial}
        animate={DROPDOWN_CONTENT_ANIMATION.animate}
        transition={DROPDOWN_CONTENT_ANIMATION.transition}
      >
        {content[activeSection]?.map((section, index) => (
          <div key={index} className="content-section">
            <h3>{section.title}</h3>
            <div className="content-items">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="content-item"
                  onClick={() => handleItemNavigation(item)}
                >
                  <div className="icon">
                    <img src={item.icon} alt={`${item.title} Icon`} />
                  </div>
                  <div className="item-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

NavbarDropdown.propTypes = {
  onClose: PropTypes.func
};

export default NavbarDropdown;