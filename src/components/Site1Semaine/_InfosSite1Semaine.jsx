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
      {isOpen && <div className="dark-overlay" onClick={toggleOpen}></div>}
      <div className={`infos-template ${isOpen ? 'open' : ''} ${shouldBounce && !isOpen ? 'bounce' : ''}`}>
        <div className="tab" onClick={toggleOpen}>
          <ChevronRight size={24} />
          <span>Infos</span>
        </div>
        <div className="content">
          <h2>Découvrez notre offre complète</h2>
          <ul>
            <li>
              <h4>Design sur-mesure</h4>
              <p>Élaboration et intégration de maquettes personnalisées.</p>
            </li>
            <li>
              <h4>Contenus intégrés</h4>
              <p>Ajout de vos textes, images, formulaires et pages légales (mentions légales, politique de confidentialité).</p>
            </li>
            <li>
              <h4>Outils spécifiques</h4>
              <p>Intégration d'outils comme newsletters, calendriers, ou podcasts selon vos besoins.</p>
            </li>
            <li>
              <h4>Responsive & SEO</h4>
              <p>Un design adapté à tous les écrans et une optimisation SEO basique pour améliorer votre visibilité.</p>
            </li>
            <li>
              <h4>E-mail & hébergement offerts</h4>
              <p>Un e-mail pro et l'hébergement gratuit pendant 1 mois.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfosTemplate;