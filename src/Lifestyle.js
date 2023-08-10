import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Lifestyle = () => {
  const { error, isPending, data: lifestyle } = useFetch('http://localhost:5000/lifestyle');

  return (
    <div className="home">
      <h1 style={{ textAlign: 'center' }}> LifeStyle</h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {lifestyle && <BlogList blogs={lifestyle} category="lifestyle" />}
    </div>
  );
}

export default Lifestyle;
