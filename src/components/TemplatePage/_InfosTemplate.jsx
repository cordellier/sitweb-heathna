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
      <div className={`infos-template-template ${isOpen ? 'open' : ''} ${shouldBounce && !isOpen ? 'bounce' : ''}`}>
        <div className="tab" onClick={toggleOpen}>
          <ChevronRight size={24} />
          <span>Infos</span>
        </div>
        <div className="content">
          <h2>Découvrez notre offre complète</h2>
          <div className="video-container">
            <video controls>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
          <p>Cette vidéo explique en détail notre offre de templates et la formation associée pour devenir autonome.</p>
          <ul>
            <li>Templates au design professionnel</li>
            <li>Conçus stratégiquement pour convertir</li>
            <li>Adaptés à tous les appareils</li>
            <li>Formation complète incluse</li>
          </ul>
          <button className="cta">Mon template</button>
        </div>
      </div>
    </>
  );
};

export default InfosTemplate;