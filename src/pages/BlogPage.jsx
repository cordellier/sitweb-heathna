import { useState, useEffect } from 'react';
import blogData from '../data/blogData.json';
import FeaturedPost from '../components/_FeaturedPost';
import CategoryFilter from '../components/_CategoryFilter';
import BlogPostList from '../components/_BlogPostList';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Tout');

  useEffect(() => {
    setPosts(blogData.posts);
    setFilteredPosts(blogData.posts);
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'Tout') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === category));
    }
  };

  return (
    <div className="blog-page">
      <div className="blog-page__inner">
        <h1>Actualités et Conseils Créatifs</h1>
        <p>Découvrez les dernières tendances et conseils pratiques pour booster vos projets, qu'ils soient personnels ou professionnels.</p>
        
        {posts.length > 0 && <FeaturedPost post={posts[0]} />}
        
        <h2>Les articles par catégorie</h2>
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
        
        <BlogPostList posts={filteredPosts} />
      </div>
    </div>
  );
};

export default BlogPage;