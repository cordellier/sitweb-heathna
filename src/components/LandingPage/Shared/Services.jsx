import PropTypes from 'prop-types';

const Services = ({ services }) => {
  return (
    <div className="services">
      {services.map((service) => (
        <div key={service.title} className="service">
          {service.icon && (
            <img
              src={service.icon}
              alt={service.title || ""}
              className="service-icon"
            />
          )}
          {service.image && (
            <img
              src={service.image}
              alt={service.title || ""}
              className="service-image"
            />
          )}
          {service.title && <h4>{service.title}</h4>}
          {service.description && <p>{service.description}</p>}
        </div>
      ))}
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      icon: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default Services;