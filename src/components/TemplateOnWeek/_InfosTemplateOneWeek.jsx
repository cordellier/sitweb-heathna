import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const InfosTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(false);

  useEffect(() => {
    let bounceInterval;
    if (!isOpen) {
      bounceInterval = setInterval(() => {
        setShouldBounce(true);
        setTimeout(() => setShouldBounce(false), 1000);
      }, 5000);
    }

    return () => clearInterval(bounceInterval);
  }, [isOpen]);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen && <div className="overlay-dark" onClick={toggleOpen}></div>}
      <div className={`template-info ${isOpen ? 'is-open' : ''} ${shouldBounce && !isOpen ? 'bounce-animation' : ''}`}>
        <div className="tab-button" onClick={toggleOpen}>
          <ChevronRight size={24} />
          <span>Infos</span>
        </div>
        <div className="content-area">
          <div className="video-container">
            <button className="play-button">
              <div className="play-icon"></div>
            </button>
          </div>
          <ul>
            <li>
              <h4>Personnalisation complète du template choisi</h4>
              <p>Ajustement des couleurs, images, polices et structure selon vos besoins.</p>
            </li>
            <li>
              <h4>Création d'un site de 8 pages</h4>
              <p>Comprend toutes les pages nécessaires (hors pages de vente), avec mise en place du blog, une page « liens » pour Instagram et des pages légales pour garantir la conformité.</p>
            </li>
            <li>
              <h4>Contenus intégrés et outils spécifiques</h4>
              <p>Intégration de vos textes, images, outils de rdv, podcasts et formulaires, selon vos besoins.</p>
            </li>
            <li>
              <h4>Responsive & SEO</h4>
              <p>Un design adapté à tous les écrans et une optimisation SEO de base pour améliorer votre visibilité.</p>
            </li>
            <li>
              <h4>E-mail & hébergement offerts</h4>
              <p>Un e-mail professionnel et l'hébergement gratuit pendant 1 mois.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfosTemplate;
