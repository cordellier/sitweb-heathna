// src/hooks/useDropdownNavigation.js
import { useNavigate } from 'react-router-dom';

const useDropdownNavigation = () => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    console.log("Item clicked:", item.title);

    if (item.title === "Template CMS avec formation") {
      navigate("/template-selection");
      closeDropdown();
    } else if (item.title === "Site Vitrine en 1 Semaine") {
      navigate("/custom-website");
      closeDropdown();
    } else {
      console.log("Scrolling to section:", item.title);
      const sectionId = item.title.replace(/\s+/g, "-").toLowerCase();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.log("Section not found:", sectionId);
      }
    }
  };

  const closeDropdown = () => {
    const dropdownElement = document.querySelector('.navbar-dropdown');
    if (dropdownElement) {
      dropdownElement.style.display = 'none';
    }
  };

  return { handleItemClick, closeDropdown };
};

export default useDropdownNavigation;
