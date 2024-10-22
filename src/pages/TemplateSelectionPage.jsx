import { useState, useEffect, useRef } from "react";
import templateData from "../data/templateData.json";
import templateDetailsData from "../data/templateDetailsData.json";
import InfosTemplate from "../components/TemplatePage/_InfosTemplate";
import BesoinAide from "../components/Aide/_BesoinAide";
import TemplateDetailsPopup from "../components/TemplatePage/_DetailsTemplate";
import Footer from "../components/_Footer";

const TemplateSelectionPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openPosition, setOpenPosition] = useState({ x: 0, y: 0 });
  const carouselRef = useRef(null);
  const timeRef = useRef(null);

  const { templates } = templateData;

  useEffect(() => {
    const carouselDom = carouselRef.current;

    const showSlider = (index) => {
      setCurrentIndex(index);
      carouselDom.classList.add("changing");

      setTimeout(() => {
        carouselDom.classList.remove("changing");
      }, 500);
    };
  }, [templates.length]);

  const getCurrentTemplateDetails = () => {
    const currentTemplate = templates[currentIndex];
    return templateDetailsData.templates.find(t => t.id === currentTemplate.id) || templateDetailsData.templates[0];
  };

  const handleOpenPopup = (event) => {
    const rect = event.target.getBoundingClientRect();
    setOpenPosition({ 
      x: rect.left + rect.width / 2, 
      y: rect.top + rect.height / 2 
    });
    setIsPopupOpen(true);
  };

  return (
    <>
      <div className="template-selection-page">
        <div className="carousel" ref={carouselRef}>
          <div className="list">
            {templates.map((template, index) => (
              <div
                key={template.id}
                className={`item ${index === currentIndex ? "active" : ""}`}
                style={{
                  zIndex: index === currentIndex ? 1 : 0,
                  opacity: index === currentIndex ? 1 : 0,
                }}
              >
                <img src={template.image} alt={template.title} />
                <div className="content">
                  <div className="author">{template.author}</div>
                  <div className="title">{template.title}</div>
                  <div className="topic">{template.topic}</div>
                  <div className="des">{template.description}</div>
                  <div className="buttons">
                    <button onClick={handleOpenPopup}>SAVOIR +</button>
                    <button>COMMANDER</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="thumbnail">
            {templates.map((template, index) => (
              <div
                key={template.id}
                className={`item ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={template.image} alt={template.title} />
                <div className="content">
                  <div className="title">{template.title}</div>
                  <div className="description">{template.topic}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="time" ref={timeRef}></div>
        </div>
        <InfosTemplate />
        <BesoinAide pageId="template-selection" />
        <TemplateDetailsPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          template={getCurrentTemplateDetails()}
          openPosition={openPosition}
        />
      </div>
      <Footer />
    </>
  );
};

export default TemplateSelectionPage;