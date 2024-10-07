import PropTypes from 'prop-types';

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  const categories = ['Tout', 'Actualités', 'Conseils', 'Étude de cas'];

  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category}
          className={activeCategory === category ? 'active' : ''}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

CategoryFilter.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
