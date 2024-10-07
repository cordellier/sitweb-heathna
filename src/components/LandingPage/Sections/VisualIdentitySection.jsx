import PropTypes from 'prop-types';

const VisualIdentitySection = ({ title, services }) => {
  return (
    <section className="visual-identity">
      <div className="visual-identity__content">
        <h2 className="visual-identity__title">{title}</h2>
        <div className="visual-identity__services">
          <h3 className="visual-identity__subtitle">PÔLE IDENTITÉ VISUELLE</h3>
          <div className="visual-identity__grid">
            {services.map((service, index) => (
              <div key={index} className="visual-identity__service">
                <img src={service.icon} alt="" className="visual-identity__icon" />
                <h4 className="visual-identity__service-title">{service.title}</h4>
                <p className="visual-identity__description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

VisualIdentitySection.propTypes = {
  title: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VisualIdentitySection;