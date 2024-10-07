import PropTypes from 'prop-types';

const ExpertiseSection = ({ title, subtitle, services }) => {
  return (
    <section className="expertise">
      <div className="expertise__content">
        <div className="expertise__text">
          <h2 className="expertise__title">{title}</h2>
          {subtitle && <p className="expertise__subtitle">{subtitle}</p>}
        </div>
        <div className="expertise__grid">
          {services.map((service, index) => (
            <div key={index} className="expertise__card">
              <img src={service.image} alt={service.name} className="expertise__image" />
              <h3 className="expertise__service-title">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ExpertiseSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExpertiseSection;