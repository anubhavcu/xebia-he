import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import CreateBlog from './components/CreateBlog';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import SingleBlog from './components/SingleBlog';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // fetchBlogs();
  }, []);
  // const fetchBlogs = async () => {
  //   const res = await fetch('http://localhost:5000/blogs');
  //   const data = await res.json();
  //   console.log(data);
  //   setBlogs(data);
  // };

  const addBlog = async (text) => {
    // console.log(text);
    try {
      const res = await fetch('http://localhost:5000/blogs', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(text),
      });

      const data = await res.json();
    } catch (e) {
      alert('something went wrong while post request', e);
    }

    // console.log(data);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newBlog = { id, ...text };
    // setBlogs([...blogs, newBlog]);
  };

  return (
    <Router>
      <Navbar />
      <main className='App py-3'>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} exact />
        <Route path='/blogs' component={Blogs} exact />
        <Route path='/blog/:id/:name' component={SingleBlog} exact />
        <Route
          path='/blogs/new'
          exact
          render={(props) => <CreateBlog onAdd={addBlog} />}
        />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
