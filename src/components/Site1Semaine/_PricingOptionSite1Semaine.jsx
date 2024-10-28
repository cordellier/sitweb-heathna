import PropTypes from 'prop-types';

const PricingOptions = ({ data }) => {
  const { title, duration, mainOffer, webManagement, additionalOptions } = data;

  return (
    <div className="pricing-section">
      <h1 className="pricing-title">{title}</h1>
      <p className="duration">{duration}</p>
      
      <div className="pricing-layout">
        {/* Carte principale */}
        <div className="main-pricing-card">
          <div className="special-offer">{mainOffer.label}</div>
          <h3>{mainOffer.title}</h3>
          <div className="starting-from">{mainOffer.startingFrom}</div>
          <div className="price-container">
            <span className="original-price">{mainOffer.originalPrice}</span>
            <span className="discounted-price">{mainOffer.discountedPrice}</span>
          </div>
          <ul className="features">
            {mainOffer.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="subscription-note">{mainOffer.note}</p>
          <button className="contact-button">{mainOffer.buttonText}</button>
        </div>

        {/* Cartes additionnelles */}
        <div className="additional-cards">
          <div className="web-management-card">
            <h3>{webManagement.title}</h3>
            <div className="starting-from">{webManagement.startingFrom}</div>
            <div className="price-container">
              <span className="price">{webManagement.price}</span>
              <span className="period">{webManagement.period}</span>
            </div>
            <ul className="features">
              {webManagement.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="additional-options-card">
            <h3>{additionalOptions.title}</h3>
            <ul className="options-list">
              {additionalOptions.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

PricingOptions.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    mainOffer: PropTypes.shape({
      label: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      startingFrom: PropTypes.string.isRequired,
      originalPrice: PropTypes.string.isRequired,
      discountedPrice: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      note: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired
    }).isRequired,
    webManagement: PropTypes.shape({
      title: PropTypes.string.isRequired,
      startingFrom: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    additionalOptions: PropTypes.shape({
      title: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  }).isRequired
};

export default PricingOptions;