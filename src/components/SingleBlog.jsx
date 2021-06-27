import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
const SingleBlog = ({ match }) => {
  const [blog, setBlog] = useState({});
  console.log(match.params.id);
  useEffect(() => {
    fetchBlog();
  }, []);
  const fetchBlog = async () => {
    const res = await fetch(`http://localhost:5000/blogs/${match.params.id}`);
    const data = await res.json();
    setBlog(data);
    console.log(data);
  };
  return (
    <div className='container'>
      <Link to='/blogs'>
        <button
          className='btn btn-dark my-2 customHover '
          style={{ float: 'left' }}
        >
          Go Back
        </button>
      </Link>
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.text}</p>
        {/* <p>{HTMLReactParser(blog.text)}</p> */}
      </div>
    </div>
  );
};

export default SingleBlog;
