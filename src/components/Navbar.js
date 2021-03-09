import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
      <div className='container'>
        <div className='nabar-brand'>Github Search</div>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink to='/' exact className='nav-link'>
              Main
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' className='nav-link'>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
