// src/hooks/useDropdown.js
import { useState, useRef } from 'react';
import { DROPDOWN_HIDE_DELAY } from '../constants/constants';

const useDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, DROPDOWN_HIDE_DELAY);
  };

  return { showDropdown, dropdownRef, handleMouseEnter, handleMouseLeave };
};

export default useDropdown;
