import React from "react";
import CTAButton from "../layout/CTAButton";

const HeaderClients = () => {
  // Importez toutes les images du dossier renard
  const renardImages = import.meta.glob('/src/assets/renard/*.{png,jpg,jpeg,gif,svg}', { eager: true });

  // Convertissez l'objet d'importation en tableau d'URLs
  const imageUrls = Object.values(renardImages).map(module => module.default);

  const handleCTAClick = () => {
    console.log('CTA clicked!');
  };

  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": imageUrls.length }}>
        {imageUrls.map((src, index) => (
          <div
            key={index}
            className="item"
            style={{ "--position": index + 1 }}
          >
            <img src={src} alt={`Image client ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="content">
        <div className="author">
        </div>
        <div className="model">
          <h1>Quelques-uns de nos plus beaux succès clients</h1>
          <h2></h2>
          </div>

      </div>
    </div>
  );
};

export default HeaderClients;