import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const logo = require('../../assets/logo.png');

  return (
    <div className='navbar'>
      <NavLink className='navbar-logo-container' to='/'>
        <img className='navbar-logo' src={logo} alt='logo-navbar' />
      </NavLink>
      <ul className='navbar-list'>
        <li>
          <NavLink className='navbar-link' to='/' end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='navbar-link' to='/cv'>
            CV
          </NavLink>
        </li>
        <li>
          <NavLink className={'navbar-link'} to='/contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
