import { useState, useEffect, useRef } from 'react';
import templateData from '../data/templateData.json';

const TemplateSelectionPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const carouselRef = useRef(null);
  const timeRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const { templates } = templateData;

  useEffect(() => {
    const carouselDom = carouselRef.current;
    const nextDom = nextRef.current;
    const prevDom = prevRef.current;
    const timeDom = timeRef.current;

    let timeRunning = 7000;
    let timeAutoNext = 10000;

    const showSlider = (type) => {
      setDirection(type);
      if (type === 'next') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % templates.length);
        carouselDom.classList.add('next');
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + templates.length) % templates.length);
        carouselDom.classList.add('prev');
      }

      // Reset time animation
      timeDom.style.animation = 'none';
      timeDom.offsetHeight; // Trigger reflow
      timeDom.style.animation = null;

      setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
      }, timeRunning);
    };

    nextDom.onclick = () => showSlider('next');
    prevDom.onclick = () => showSlider('prev');

    const autoNextInterval = setInterval(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => {
      clearInterval(autoNextInterval);
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
                <div className="author">LUNDEV</div>
                <div className="title">{template.title}</div>
                <div className="topic">{template.topic}</div>
                <div className="des">{template.description}</div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
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
            >
              <img src={template.image} alt={template.title} />
              <div className="content">
                <div className="title">{template.title}</div>
                <div className="description">{template.topic}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" ref={prevRef}>&lt;</button>
          <button id="next" ref={nextRef}>&gt;</button>
        </div>

        <div className="time" ref={timeRef}></div>
      </div>
    </div>
  );
};

export default TemplateSelectionPage;