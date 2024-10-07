import PropTypes from 'prop-types';

const CreativityStrategySection = ({ title }) => {
  return (
    <section className="creativity-strategy">
      <h2 className="creativity-strategy__title">{title}</h2>
    </section>
  );
};

CreativityStrategySection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CreativityStrategySection;