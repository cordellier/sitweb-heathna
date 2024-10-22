// src/components/_Navbar.js
import { Link } from 'react-router-dom';
import NavbarDropdown from './_NavbarDropdown';
import ContactForm from '../pages/ContactForm';
import useDropdown from '../hooks/useDropdown';
import useContactForm from '../hooks/useContactForm';

function Navbar() {
  const { showDropdown, dropdownRef, handleMouseEnter, handleMouseLeave } = useDropdown();
  const { showContactForm, handleContactClick, closeContactForm } = useContactForm();

  return (
    <>
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="navbar__logo-container">
            <Link to="/"><img src="/src/assets/logo/Logo Haethna _ 6.webp" alt="Logo" /></Link>
          </div>
          <div className="navbar__container">
            <ul className="navbar__links">
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link>Expertises</Link>
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
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/culture">Culture</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="#" onClick={handleContactClick} className="navbar__cta">CONTACTER NOUS</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <ContactForm isOpen={showContactForm} onClose={closeContactForm} />
    </>
  );
}

export default Navbar;
