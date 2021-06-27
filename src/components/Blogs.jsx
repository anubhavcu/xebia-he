import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBlog from './SearchBlogs';
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);
  const fetchBlogs = async () => {
    const res = await fetch('http://localhost:5000/blogs');
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };
  const searchingText = async (text) => {
    console.log(text);
    // searchComments()

    const res = await fetch(`http://localhost:5000/blogs?q=${text}`);
    const data = await res.json();
    setBlogs(data);
    console.log(data);
  };

  return (
    <div className='container'>
      <Link to='/'>
        <button
          className='btn btn-dark mb-3 customHover '
          style={{ float: 'left' }}
        >
          Go back
        </button>
      </Link>
      {<SearchBlog searchingText={searchingText} />}
      <h2 className='my-5'>Recent blogs...</h2>
      {blogs.map((item) => (
        <div className='container'>
          <Link to={`/blog/${item.id}/${item.title}`}>
            {/* <div className='card'>
            <div className='card-body'>
              <h2 key={item.id}>{item.title}</h2>
            </div>
          </div> */}
            <div className='card m-4 customHover   align-items-stretch cardTile rounded'>
              <div className='card-body'>
                <h4 style={{ textDecoration: 'none' }}>{item.title}</h4>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
