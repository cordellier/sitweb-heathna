import { useEffect, useRef } from 'react';

const CasClients = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll('.item');

    const handleMouseMove = (e, item) => {
      const rect = item.getBoundingClientRect();
      const positionX = ((e.clientX - rect.left) / item.offsetWidth) * 100;
      const positionY = ((e.clientY - rect.top) / item.offsetHeight) * 100;
      
      item.style.setProperty('--rX', `${(0.5)*(50 - positionY)}deg`);
      item.style.setProperty('--rY', `${-(0.5)*(50 - positionX)}deg`);
    };

    const handleMouseOut = (item) => {
      item.style.setProperty('--rX', '0deg');
      item.style.setProperty('--rY', '0deg');
    };

    items.forEach(item => {
      item.addEventListener('mousemove', (e) => handleMouseMove(e, item));
      item.addEventListener('mouseout', () => handleMouseOut(item));
    });

    // Nettoyage des event listeners
    return () => {
      items.forEach(item => {
        item.removeEventListener('mousemove', handleMouseMove);
        item.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <section className="cas-clients" ref={sectionRef}>
      <h2>Découvrez quelques cas clients.</h2>
      <div className="main">
        <div className="wrap">
          <div className="item">
            <h3>Cuisine Passion</h3>
            <p>Création d’une identité visuelle et refonte d'un site vitrine pour une entreprise indépendante dans le secteur culinaire.</p>
            <img src="/src/assets/img-clients/cuisine-passion.jpg" alt="Cuisine Passion" />
          </div>
        </div>
        <div className="wrap">
          <div className="item">
            <h3>La p'tite bricole </h3>
            <p>Création d’une identité visuelle et papeterie pour une micro-entreprise dans le secteur du multi-service.</p>
            <img src="/src/assets/img-clients/La-petite-bricole.jpg" alt="La-petite-bricole" />
          </div>
        </div>
        <div className="wrap">
          <div className="item">
            <h3>Elysium Dietetic</h3>
            <p>Création d’une identité visuelle et conception d’un site vitrine pour une entreprise dans le secteur de la santé.</p>
            <img src="/src/assets/img-clients/Elysium Dietetic.jpg" alt="Elysium Dietetic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasClients;