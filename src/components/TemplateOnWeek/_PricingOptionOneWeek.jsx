const PricingOptionsOneWeek = ({ data }) => {
  if (!data || !data.pricingOptions) return null;
  
  const { contentTitle, pricingOptions } = data;
  const { mainOffer, webManagement, additionalOptions } = pricingOptions;

  return (
    <div className="pricing-section-template">
      <div className="pricing-cards">
        {/* Carte principale */}
        <div className="main-card">
          <div className="special-offer">OFFRES SPÉCIALES !</div>
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

        {/* Gestion Web */}
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

        {/* Options supplémentaires */}
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
  );
};

export default PricingOptionsOneWeek;