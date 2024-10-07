import PropTypes from 'prop-types';

const PartnershipSection = ({ title, backgroundImage }) => {
  return (
    <section className="partnership" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="partnership__content">
        <h2 className="partnership__title">{title}</h2>
      </div>
      <div className="partnership__overlay"></div>
    </section>
  );
};

PartnershipSection.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default PartnershipSection;