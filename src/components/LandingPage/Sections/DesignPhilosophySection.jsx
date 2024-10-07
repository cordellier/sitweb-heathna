import PropTypes from 'prop-types';

const DesignPhilosophySection = ({ title }) => {
  return (
    <section className="design-philosophy">
      <h2 className="design-philosophy__title">{title}</h2>
    </section>
  );
};

DesignPhilosophySection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DesignPhilosophySection;