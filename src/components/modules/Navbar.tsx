import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className='navbar'>
      <li>
        <Link className='navbar-link' to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link className='navbar-link' to='/resume'>
          Resume
        </Link>
      </li>
      <li>
        <Link className='navbar-link' to='/contact'>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
