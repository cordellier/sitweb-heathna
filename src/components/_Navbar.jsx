import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from './_NavbarDropdown';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Annuler tout timeout en cours
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    // Définir un timeout pour masquer le dropdown
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200); // Vous pouvez ajuster cette durée
  };

  return (
    <>
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="navbar__logo-container">
            N
          </div>
          <div className="navbar__container">
            <ul className="navbar__links">
              <li 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/expertises">Expertises</Link>
                {showDropdown && (
                  <div 
                    ref={dropdownRef} 
                    className="navbar-dropdown" 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavbarDropdown />
                  </div>
                )}
              </li>
              <li><Link to="/offre">Collaboration</Link></li>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
            <button className="navbar__cta">CONTACTER NOUS</button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
