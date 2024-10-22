// src/hooks/useContactForm.js
import { useState } from 'react';

const useContactForm = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };

  return { showContactForm, handleContactClick, closeContactForm };
};

export default useContactForm;
