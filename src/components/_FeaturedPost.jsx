import PropTypes from 'prop-types';

const FeaturedPost = ({ post }) => (
    <div className="featured-post">
      <img src={post.image} alt={post.title} />
      <div className="featured-content">
        <span className="tag">{post.category}</span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <a href="#" className="read-more">Découvrer le dernier article</a>
      </div>
    </div>
  );

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
