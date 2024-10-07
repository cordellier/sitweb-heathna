import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from './_NavbarDropdown';
import ContactForm from '../pages/ContactForm';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactForm(true);
  };

  return (
    <>
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="navbar__logo-container">
            <Link to="/">N</Link>
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
              <li><a href="#" onClick={handleContactClick} className="navbar__cta">CONTACTER NOUS</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <ContactForm isOpen={showContactForm} onClose={() => setShowContactForm(false)} />
    </>
  );
}

export default Navbar;