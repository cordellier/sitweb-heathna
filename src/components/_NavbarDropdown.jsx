// src/components/NavbarDropdown.js
import { motion } from 'framer-motion';
import dropdownData from '../data/dropdownData.json';
import useActiveSection from '../hooks/useActiveSection';
import useDropdownNavigation from '../hooks/useDropdownNavigation';
import { NAVBAR_DROPDOWN_ANIMATION, DROPDOWN_CONTENT_ANIMATION } from '../constants/animationSettings';

const NavbarDropdown = () => {
  const { activeSection, handleMouseEnter } = useActiveSection();
  const { handleItemClick } = useDropdownNavigation();
  const { sections, content } = dropdownData;

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
                  onClick={() => handleItemClick(item)}
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

export default NavbarDropdown;
