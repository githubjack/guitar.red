import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <Logo />
      <div>
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/faqs">Faqs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <button className="button-outline">make a booking</button>
      </div>
    </>
  );
}

export default Header;
