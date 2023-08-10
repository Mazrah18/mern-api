import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:5000/blogs/' + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:5000/blogs/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        history.push('/');
      } else {
        console.error('Error deleting blog:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error deleting blog:', error);
    });
  };

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;