import { useState } from 'react';
import helpMessages from '../../data/helpMessages.json';

const BesoinAide = ({ pageId }) => {
  const [isHovered, setIsHovered] = useState(false);

  const message = helpMessages[pageId] || "Aucune aide disponible pour cette page.";

  return (
    <div 
      className="besoin-aide-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="aide-bulle">
          {message}
        </div>
      )}
      <button className="besoin-aide-bouton">
        Besoin d'aide ?
      </button>
    </div>
  );
};

export default BesoinAide;