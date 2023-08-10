import React, { useState } from 'react';
import useFetch from './useFetch';
import BlogList from './BlogList';

const FilteredBlogs = ({ category }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { error, isPending, data: blogs } = useFetch(`http://localhost:5000/${category}`);

  const filteredBlogs = blogs 
  ? blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div>
      <input
        type="text"
        placeholder={`Search ${category}...`}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={filteredBlogs} category={category} />}
    </div>
  );
};

export default FilteredBlogs;
