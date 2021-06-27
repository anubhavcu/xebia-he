import { Link } from 'react-router-dom';
const Navbar = () => {
  const navLink = {
    color: 'white',
    textDecoration: 'none',
  };
  return (
    <nav>
      <Link to='/' style={navLink}>
        <h1>xebia-blogs</h1>
      </Link>
      <ul className='nav-links'>
        <Link to='/blogs' style={navLink}>
          <li className='customHover'>Blogs</li>
        </Link>
        <Link to='/blogs/new' style={navLink}>
          <li className='customHover'>Create Blogs</li>
        </Link>
        <li>
          <a href='https://www.linkedin.com/in/anubhavksr/' target='blank'>
            <span className='btn btn-outline-success mt-3 p-2 text-light customHover'>
              Contact{' '}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
