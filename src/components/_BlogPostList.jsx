import PropTypes from 'prop-types';

const BlogPostList = ({ posts }) => (
    <div className="blog-post-list">
      {posts.map(post => (
        <div key={post.id} className="blog-post-item">
          <img src={post.image} alt={post.title} />
          <div className="post-content">
            <span className="tag">{post.category}</span>
            <h4>{post.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );

BlogPostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogPostList;
