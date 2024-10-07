import PropTypes from 'prop-types';

const WebSolutionsSection = ({ title, services }) => {
  return (
    <section className="web-solutions">
      <div className="web-solutions__content">
        <h2 className="web-solutions__title">{title}</h2>
        <div className="web-solutions__services">
          <h3 className="web-solutions__subtitle">PÔLE WORDPRESS</h3>
          <div className="web-solutions__grid">
            {services.map((service, index) => (
              <div key={index} className="web-solutions__service">
                <img src={service.icon} alt="" className="web-solutions__icon" />
                <h4 className="web-solutions__service-title">{service.title}</h4>
                <p className="web-solutions__description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

WebSolutionsSection.propTypes = {
  title: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WebSolutionsSection;