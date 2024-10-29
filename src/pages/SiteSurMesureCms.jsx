import { useState, useEffect } from "react";
import InfosTemplateSiteSurMesureCms from "../components/SiteSurMesureCms/_InfosTemplateSiteSurMesureCms";
import TemplateDetailsPopup from "../components/SiteSurMesureCms/_DetailsTemplateSiteSurMesureCms";
import Footer from "../components/_Footer";
import templateDetailsSurMesure from "../data/templateDetailsSurMesure.json";

const SiteSurMesureCms = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [openPosition, setOpenPosition] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSavoirPlusClick = (event) => {
    setOpenPosition({ x: event.clientX, y: event.clientY });
    setIsDetailsOpen(true);
  };

  const handleContactClick = (event) => {
    setOpenPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
      <div className={`site-en-1-semaine ${isVisible ? "is-visible" : ""}`}>
        <div className="content-wrapper">
          <div className="content-section">
            <h2 className="site-type animate-element">
              SITE VITRINE ET E-COMMERCE
            </h2>
            <h1 className="main-title animate-element">UN SITE SUR MESURE</h1>
            <h3 className="subtitle animate-element">TAILLÉ À VOS BESOINS</h3>
            <p className="description animate-element">
              Votre site web doit refléter l'essence de votre entreprise.
              Ensemble, nous concevons un site sur-mesure qui vous ressemble,
              avec une attention particulière portée à vos besoins et à votre
              identité. Pas de solutions génériques, mais une approche
              authentique, adaptée à votre vision et à votre activité. Notre
              objectif est de vous offrir un site qui inspire confiance et qui
              évolue avec vous, tout en restant fidèle à ce que vous êtes.
            </p>
            <div className="buttons animate-element">
              <button className="savoir-plus" onClick={handleSavoirPlusClick}>
                SAVOIR +
              </button>
              <button className="choisir-theme" onClick={handleContactClick}>
                NOUS CONTACTER
              </button>
            </div>
          </div>

          <div className="image-section animate-element">
            <img 
              src="/api/placeholder/400/320"
              alt="Site sur mesure illustration" 
              className="site-image"
            />
          </div>
        </div>
        <InfosTemplateSiteSurMesureCms />
      </div>

      <TemplateDetailsPopup
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        template={templateDetailsSurMesure}
        openPosition={openPosition}
      />
      
      <Footer />
    </>
  );
};

export default SiteSurMesureCms;