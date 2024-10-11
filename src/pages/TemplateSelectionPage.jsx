import { useState, useEffect, useRef } from 'react';
import templateData from '../data/templateData.json';
import InfosTemplate from '../components/TemplatePage/_InfosTemplate';
import BesoinAide from '../components/Aide/_BesoinAide';

const TemplateSelectionPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const timeRef = useRef(null);

  const { templates } = templateData;

  useEffect(() => {
    const carouselDom = carouselRef.current;

    const showSlider = (index) => {
      setCurrentIndex(index);
      carouselDom.classList.add('changing');

      setTimeout(() => {
        carouselDom.classList.remove('changing');
      }, 500);
    };

  }, [templates.length]);

  return (
    <div className="template-selection-page">
      <div className="carousel" ref={carouselRef}>
        <div className="list">
          {templates.map((template, index) => (
            <div 
              key={template.id} 
              className={`item ${index === currentIndex ? 'active' : ''}`}
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
                  <button>SAVOIR +</button>
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
              className={`item ${index === currentIndex ? 'active' : ''}`}
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
    </div>
  );
};

export default TemplateSelectionPage;
