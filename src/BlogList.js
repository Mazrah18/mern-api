import { Link } from 'react-router-dom';

const BlogList = ({ blogs, category }) => {
  if (blogs.length === 0) {
    return <p className="blog-list">No {category} blogs found.</p>;
  }
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/${category}/${blog._id}`} className="blog-link">
            {/* Use the 'category' prop to generate the correct link */}
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-author">Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
