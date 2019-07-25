import React from 'react';
const Header = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <a href='!#' className='navbar-brand'>
        Notes App
      </a>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item active'>
          <a className='nav-link' href='!#'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='!#'>
            Add Note
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='!#'>
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
