import { useState, useRef, useEffect } from "react";
import InfosTemplate from "../components/TemplatePage/_InfosTemplate";
import Footer from "../components/_Footer";
import TemplateDetailsPopup from "../components/TemplatePage/_DetailsTemplate";
import templateDetailsOneWeek from "../data/templateDetailsOneWeek.json";

const OneWeekTemplate = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [openPosition, setOpenPosition] = useState(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--position",
        `${sliderPosition}%`
      );
    }
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [sliderPosition]);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  const handleSavoirPlusClick = (event) => {
    setOpenPosition({ x: event.clientX, y: event.clientY });
    setIsDetailsOpen(true);
  };

  return (
    <>
      <div className={`site-en-1-semaine ${isVisible ? "is-visible" : ""}`}>
        <div className="content-wrapper">
          <div className="content-section">
            <h2 className="site-type animate-element">SITE VITRINE</h2>
            <h1 className="main-title animate-element">SITE EN 1 SEMAINE</h1>
            <h3 className="subtitle animate-element">À PARTIR DE NOS THÈMES</h3>
            <p className="description animate-element">
              Vous n'avez pas encore de site internet, ou ce dernier ne reflète
              pas votre professionnalisme ? La technique, le budget ou le manque
              de temps vous empêchent de passer à l'action ? Ne laissez pas ces
              obstacles freiner votre activité! Choisissez un thème et en 1
              semaine, vous aurez un site professionnel et efficace, prêt à
              booster votre visibilité.
            </p>
            <div className="buttons animate-element">
              <button className="savoir-plus" onClick={handleSavoirPlusClick}>
                SAVOIR +
              </button>
              <button className="choisir-theme">
                CHOISIR MON THÈME
              </button>
            </div>
          </div>

          <div className="image-section animate-element">
            <div className="container" ref={containerRef}>
              <div className="image-container">
                <img
                  className="image-before slider-image"
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Avant"
                />
                <img
                  className="image-after slider-image"
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Après"
                />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                aria-label="Pourcentage de l'image avant affichée"
                className="slider"
              />
              <div className="slider-line" aria-hidden="true"></div>
              <div className="slider-button" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="128"
                    y1="40"
                    x2="128"
                    y2="216"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                  <line
                    x1="96"
                    y1="128"
                    x2="16"
                    y2="128"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                  <polyline
                    points="48 160 16 128 48 96"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></polyline>
                  <line
                    x1="160"
                    y1="128"
                    x2="240"
                    y2="128"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                  <polyline
                    points="208 96 240 128 208 160"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <InfosTemplate />
      </div>

      <TemplateDetailsPopup 
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        template={templateDetailsOneWeek}
        openPosition={openPosition}
      />
      
      <Footer />
    </>
  );
};

export default OneWeekTemplate;