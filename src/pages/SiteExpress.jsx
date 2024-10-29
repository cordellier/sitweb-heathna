// src/pages/SiteExpress.jsx
import { useState, useRef } from "react";
import BesoinAide from "../components/Aide/_BesoinAide";
import Footer from "../components/_Footer";
import InfosTemplate from "../components//SiteExpress/_InfosSiteExpress";
import TemplateDetailsPopup from "../components/TemplatePage/_DetailsTemplate";

const SiteExpress = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openPosition, setOpenPosition] = useState({ x: 0, y: 0 });
  const carouselRef = useRef(null);

  const handleOpenPopup = (event) => {
    const rect = event.target.getBoundingClientRect();
    setOpenPosition({ 
      x: rect.left + rect.width / 2, 
      y: rect.top + rect.height / 2 
    });
    setIsPopupOpen(true);
  };

  const templateDetails = {
    id: "site-express",
    title: "SITE ESPRESS",
    subtitle: "PREMIUM ET ÉCO-CONÇU",
    description: "Choisissez un template conçu pour respecter les critères d'éco-conception et développé par un expert avec des technologies modernes comme React. En une semaine, obtenez un site rapide, moderne et éco-responsable. Alliant esthétique et performance, il minimise son impact environnemental tout en assurant une expérience intuitive et fluide sur tous les appareils. Combinez efficacité, modernité et engagement écologique.",
    image: "/src/assets/template/mockup-template.webp"
  };

  return (
    <>
      <div className="site-express-page">
        <div className="carousel" ref={carouselRef}>
          <div className="list">
            <div className="item active" style={{ opacity: 1, zIndex: 1 }}>
              <img src={templateDetails.image} alt={templateDetails.title} />
              <div className="content">
                <div className="author">SITE VITRINE</div>
                <div className="title">{templateDetails.title}</div>
                <div className="topic">{templateDetails.subtitle}</div>
                <div className="des">{templateDetails.description}</div>
                <div className="buttons">
                  <button onClick={handleOpenPopup}>SAVOIR +</button>
                  <button>VOIR LES THÈMES</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <InfosTemplate />
        <BesoinAide pageId="site-express" />
        <TemplateDetailsPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          template={templateDetails}
          openPosition={openPosition}
        />
      </div>
      <Footer />
    </>
  );
};

export default SiteExpress;