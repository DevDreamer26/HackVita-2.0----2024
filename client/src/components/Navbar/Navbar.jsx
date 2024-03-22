import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
         <h1>Finance</h1>
          
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <RxCross1 /> : <GiHamburgerMenu />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/module" activeClassName="active" onClick={toggleMenu}>
              Module
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeClassName="active" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
