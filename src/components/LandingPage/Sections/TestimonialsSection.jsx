import PropTypes from 'prop-types';


const TestimonialsSection = ({ title, testimonials }) => {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">
        <span className="testimonials__title-part1">Ce que disent</span>
        <span className="testimonials__title-part2">nos clients</span>
      </h2>
      <div className="testimonials__container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonials__card">
            <div className="testimonials__header">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="testimonials__avatar"
              />
              <div className="testimonials__info">
                <h3 className="testimonials__name">{testimonial.name}</h3>
                <p className="testimonials__role">{testimonial.role}</p>
              </div>
            </div>
            <p className="testimonials__content">"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

TestimonialsSection.propTypes = {
  title: PropTypes.string.isRequired,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TestimonialsSection;