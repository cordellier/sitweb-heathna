import PropTypes from 'prop-types';

const ClientStoriesSection = ({ title, clients, cta }) => {
  return (
    <section className="client-stories">
      <div className="client-stories__content">
        <div className="client-stories__title-container">
          <h2 className="client-stories__title">{title}</h2>
          {cta && (
            <a href={cta.link} className="client-stories__cta">
              {cta.text}
            </a>
          )}
        </div>
        <div className="client-stories__grid">
          {clients.map((client, index) => (
            <div key={index} className="client-stories__card">
              <img src={client.logo} alt={client.name} className="client-stories__logo" />
              {client.description && (
                <div className="client-stories__description">
                  <p>{client.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ClientStoriesSection.propTypes = {
  title: PropTypes.string.isRequired,
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
  cta: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default ClientStoriesSection;