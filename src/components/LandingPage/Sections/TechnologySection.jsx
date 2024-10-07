import PropTypes from 'prop-types';

const TechnologySection = ({ title, subtitle, tools }) => {
  return (
    <section className="technology">
      <div className="technology__content">
        <div className="technology__text">
          <h2 className="technology__title">{title}</h2>
          <p className="technology__subtitle">{subtitle}</p>
          <div className="technology__tools">
            {tools.map((tool, index) => (
              <img 
                key={index} 
                src={tool.icon} 
                alt={tool.name} 
                className="technology__tool-icon"
              />
            ))}
          </div>
        </div>
        <div className="technology__image">
          {/* L'image sera définie en CSS comme background-image */}
        </div>
      </div>
    </section>
  );
};

TechnologySection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TechnologySection;