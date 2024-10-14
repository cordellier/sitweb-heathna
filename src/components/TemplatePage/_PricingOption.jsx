const PricingOptions = ({ options }) => {
  return (
    <div className="pricing-options">
      {options.map((option, index) => (
        <div key={index} className={`pricing-card ${option.isBestOption ? 'best-option' : ''}`}>
          {option.isBestOption && <span className="best-option-label">MEILLEURE OPTION</span>}
          <h3>{option.title}</h3>
          <div className="price">
            {option.price}
            {option.priceNote && <span className="price-note">{option.priceNote}</span>}
          </div>
          <ul className="features">
            {option.features.map((feature, i) => (
              <li key={i} className="included">{feature}</li>
            ))}
            {option.notIncluded && option.notIncluded.map((feature, i) => (
              <li key={i} className="not-included">{feature}</li>
            ))}
          </ul>
          <button className="choose-option">COMMANDER</button>
        </div>
      ))}
    </div>
  );
};

export default PricingOptions;