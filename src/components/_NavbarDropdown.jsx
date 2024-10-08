import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import dropdownData from "../data/dropdownData.json";

const NavbarDropdown = () => {
  const [activeSection, setActiveSection] = useState("web");
  const { sections, content } = dropdownData;
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    console.log("Item clicked:", item.title);  // Pour le débogage
    if (item.title === "Template et Formation") {
      navigate("/template-selection");
      // Fermer la dropdown
      const dropdownElement = document.querySelector('.navbar-dropdown');
      if (dropdownElement) {
        dropdownElement.style.display = 'none';
      }
    } else {
      // Gérer les autres clics ici
      const sectionId = item.title.replace(/\s+/g, "-").toLowerCase();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.div
      className="navbar-dropdown"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="dropdown-menu">
        {sections.map((section) => (
          <div
            key={section.key}
            className={`dropdown-item ${activeSection === section.key ? "active" : ""}`}
            onMouseEnter={() => setActiveSection(section.key)}
          >
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
      <motion.div
        className="dropdown-content"
        key={activeSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
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