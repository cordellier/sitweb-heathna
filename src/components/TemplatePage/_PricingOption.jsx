const PricingOptions = () => {
  const options = [
    {
      title: "PAIEMENT UNIQUE",
      originalPrice: "697€",
      discountedPrice: "597€",
      features: [
        "Template de site",
        "Accès à la formation",
        "Accès au Bonus",
        "Support en ligne de 3 mois",
      ],
      notIncluded: [
        "1h d'accompagnement web",
        "Audit et vérification finales"
      ]
    },
    {
      title: "AVEC ACCOMPAGNEMENT",
      originalPrice: "897€",
      discountedPrice: "797€",
      features: [
        "Template de site",
        "Accès à la formation",
        "Accès au Bonus",
        "Support en ligne de 3 mois",
        "1h d'accompagnement web",
        "Audit et vérification finales"
      ]
    }
  ];

  return (
    <div className="pricing-section">
      <div className="pricing-options">
        {options.map((option, index) => (
          <div key={index} className="pricing-card">
            <div className="special-offer">Offres spéciales !</div>
            <h3>{option.title}</h3>
            <div className="price-container">
              <span className="original-price">{option.originalPrice}</span>
              <span className="discounted-price">{option.discountedPrice}</span>
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
    </div>
  );
};

export default PricingOptions;