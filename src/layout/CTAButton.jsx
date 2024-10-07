const CTAButton = ({ children, onClick, className = '' }) => {
  return (
    <button 
      className={`cta-button ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CTAButton;