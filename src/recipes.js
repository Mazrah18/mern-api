
// import BlogList from "./BlogList";
// import { useState } from "react";
// import useFetch from "./useFetch";

// const Recipes = () => {
//   const { error, isPending, data: food } = useFetch('http://localhost:5000/recipes');
//   console.log(food);
//   const [searchTerm, setSearchTerm] = useState('');
//    // Ensure that 'food' is not null before filtering
//    const filteredBlogs = food
//    ? food.filter(blog =>
//        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
//      )
//    : [];
//   return (
//     <div className="home">
//       <h1 style={{ textAlign: 'center' }}> Food Recipes</h1>

//       <input
//         type="text"
//         placeholder="Search recipes..."
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//       />
//       {error && <div>{error}</div>}
//       {isPending && <div>Loading...</div>}

//       {food && <BlogList blogs={filteredBlogs} category="recipes" />}

//     </div>
//   );
// }

// export default Recipes;




// // import React, { useState } from 'react';
// // import BlogList from './BlogList';
// // import useFetch from './useFetch';

// // const Recipes = () => {
// //   const { error, isPending, data: food } = useFetch('http://localhost:5000/recipes');
// //   const [searchTerm, setSearchTerm] = useState('');
// //   console.log(food); // Add this line to check the value of 'data'
//   // const filteredBlogs = food.filter(blog =>
//   //   blog.title.toLowerCase().includes(searchTerm.toLowerCase())
//   // );

// //   return (
// //     <div className="home">
// //       <h1 style={{ textAlign: 'center' }}> Food Recipes</h1>
// //       <input
// //         type="text"
// //         placeholder="Search recipes..."
// //         value={searchTerm}
// //         onChange={e => setSearchTerm(e.target.value)}
// //       />
// //       {error && <div>{error}</div>}
// //       {isPending && <div>Loading...</div>}
// //       {food && <BlogList blogs={filteredBlogs} category="recipes" />}
// //     </div>
// //   );
// // };

// // export default Recipes;

import React from 'react';
import FilteredBlogs from './FilteredBlogs';

const Recipes = () => {
  return (
    <div className="home">
      <h1 style={{ textAlign: 'center' }}> Food Recipes</h1>
      <FilteredBlogs category="recipes" />
    </div>
  );
};

export default Recipes;
