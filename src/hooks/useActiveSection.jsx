// src/hooks/useActiveSection.js
import { useState } from 'react';

const useActiveSection = (initialSection = "web") => {
  const [activeSection, setActiveSection] = useState(initialSection);

  const handleMouseEnter = (sectionKey) => {
    setActiveSection(sectionKey);
  };

  return { activeSection, handleMouseEnter };
};

export default useActiveSection;
