import PropTypes from 'prop-types';

const WebDevelopmentSection = ({ title, services }) => {
  return (
    <section className="web-development">
      <div className="web-development__content">
        <h2 className="web-development__title">{title}</h2>
        <div className="web-development__services">
          <h3 className="web-development__subtitle">PÔLE DÉVELOPPEMENT</h3>
          <div className="web-development__grid">
            {services.map((service, index) => (
              <div key={index} className="web-development__service">
                <img src={service.image} alt="" className="web-development__icon" />
                <h4 className="web-development__service-title">{service.title}</h4>
                <p className="web-development__description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

WebDevelopmentSection.propTypes = {
  title: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WebDevelopmentSection;