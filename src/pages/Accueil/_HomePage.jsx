import { useEffect, useRef, useState } from 'react';

const HomePage = () => {
  const svgRef = useRef(null);
  const contentRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const svg = svgRef.current;
    const content = contentRef.current;
    let points = [];

    const getNumberOfPoints = () => {
      if (windowSize.width <= 480) {  // Mobile
        return 50;
      } else if (windowSize.width <= 768) {  // Tablet
        return 100;
      } else {  // Desktop
        return 200;
      }
    };

    const createPoints = () => {
      const numberOfPoints = getNumberOfPoints();
      points = [];
      for (let i = 0; i < numberOfPoints; i++) {
        points.push({
          x: Math.random() * windowSize.width,
          y: Math.random() * windowSize.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 1,
          colorClass: `color-${Math.floor(Math.random() * 8) + 1}`
        });
      }
    };

    const drawPoints = () => {
      svg.innerHTML = '';
      points.forEach((point, index) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', point.x);
        circle.setAttribute('cy', point.y);
        circle.setAttribute('r', point.radius);
        circle.classList.add(point.colorClass);
        circle.setAttribute('id', `point_${index}`);
        svg.appendChild(circle);
      });
    };

    const updatePoints = () => {
      points.forEach((point, index) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > windowSize.width) point.vx *= -1;
        if (point.y < 0 || point.y > windowSize.height) point.vy *= -1;

        const circle = svg.getElementById(`point_${index}`);
        circle.setAttribute('cx', point.x);
        circle.setAttribute('cy', point.y);
      });
    };

    const drawLines = (mouseX, mouseY) => {
      svg.querySelectorAll('line').forEach(line => line.remove());
      points.forEach((point, index) => {
        const dx = mouseX - point.x;
        const dy = mouseY - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', point.x);
          line.setAttribute('y1', point.y);
          line.setAttribute('x2', mouseX);
          line.setAttribute('y2', mouseY);
          line.classList.add(point.colorClass);
          line.setAttribute('stroke-width', 2 - distance / 100);
          line.setAttribute('opacity', 1 - distance / 200);
          svg.appendChild(line);
        }
      });
    };

    const animate = () => {
      updatePoints();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      drawLines(event.clientX, event.clientY);
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      createPoints();
      drawPoints();
    };

    createPoints();
    drawPoints();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  return (
    <div className="home-page">
      <div className="content" ref={contentRef}>
        <span>Studio</span>
        <p>de communication créative</p>
        <span>Haethna</span>
      </div>
      <svg width="100%" height="100%" id="svg" ref={svgRef}></svg>
    </div>
  );
};

export default HomePage;