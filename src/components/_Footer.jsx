import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value.toLowerCase();
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Logo et tagline */}
        <div className="footer-brand">
          <Link to="/">
            <img 
              src="/src/assets/logo/Logo Haethna _ 6.webp" 
              alt={t('data.footer.brand.logoAlt', 'Logo Haethna')} 
            />
          </Link>
          <p>{t('data.footer.brand.tagline')}</p>
        </div>

        {/* À propos */}
        <div className="footer-section">
          <h3>{t('data.footer.about.title')}</h3>
          <ul>
            <li><Link to="/concept">{t('data.footer.about.concept')}</Link></li>
            <li><Link to="/qui-sommes-nous">{t('data.footer.about.whoWeAre')}</Link></li>
            <li><Link to="/faq">{t('data.footer.about.faq')}</Link></li>
            <li><Link to="/offres-emploi">{t('data.footer.about.jobs')}</Link></li>
            <li><Link to="/offres-stage">{t('data.footer.about.internships')}</Link></li>
          </ul>
        </div>

        {/* Nous rencontrer */}
        <div className="footer-section">
          <h3>{t('data.footer.meetUs.title')}</h3>
          <ul>
            <li><Link to="/recruteurs">{t('data.footer.meetUs.recruiters')}</Link></li>
            <li><Link to="/blog">{t('data.footer.meetUs.blog')}</Link></li>
            <li><Link to="/jobs">{t('data.footer.meetUs.jobs')}</Link></li>
            <li><Link to="/contact">{t('data.footer.meetUs.contact')}</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>{t('data.footer.newsletter.title')}</h3>
          <p>{t('data.footer.newsletter.description')}</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder={t('data.footer.newsletter.placeholder')}
              aria-label={t('data.footer.newsletter.placeholder')}
            />
            <button type="submit">{t('data.footer.newsletter.button')}</button>
          </div>
          <p className="newsletter-disclaimer">
            {t('data.footer.newsletter.disclaimer')}{' '}
            <Link to="/politique-confidentialite">{t('data.footer.newsletter.privacyLink')}</Link>
          </p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="legal-links">
            <Link to="/mentions-legales">{t('data.footer.legal.mentions')}</Link>
            <Link to="/cgu">{t('data.footer.legal.terms')}</Link>
            <Link to="/confidentialite">{t('data.footer.legal.privacy')}</Link>
          </div>
          <div className="language-selector">
            <select 
              value={i18n.language.toUpperCase()}
              onChange={handleLanguageChange}
              aria-label={t('data.footer.languageSelector', 'Sélectionnez la langue')}
            >
              <option value="FR">FR</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;