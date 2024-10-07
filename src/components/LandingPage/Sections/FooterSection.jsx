import PropTypes from 'prop-types';

const FooterSection = ({ cta, logo, copyright, hours, socials, newsletter }) => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__top">
          <button className="footer__cta">{cta.text}</button>
        </div>
        <div className="footer__main">
          <div className="footer__logo-container">
            <img src={logo} alt="Haethna Logo" className="footer__logo" />
            <p className="footer__copyright">{copyright}</p>
          </div>
          <div className="footer__info">
            <div className="footer__hours-socials">
              <div className="footer__hours">
                <h3>HORAIRES</h3>
                <p>{hours}</p>
              </div>
              <div className="footer__socials">
                <h3>SOCIALS</h3>
                <div className="footer__social-icons">
                  {socials.map((social) => (
                    <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer">
                      <img src={`/path/to/${social}-icon.svg`} alt={`${social} icon`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="footer__newsletter">
              <h3>ÊTRE INFORMER DES OFFRES</h3>
              <form className="footer__form">
                <input type="email" placeholder={newsletter.placeholder} required />
                <button type="submit">{newsletter.buttonText}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterSection.propTypes = {
  cta: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
  logo: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  socials: PropTypes.arrayOf(PropTypes.string).isRequired,
  newsletter: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
};

export default FooterSection;