import React, { useState } from 'react';

import { ChevronDown, ChevronRight } from '../../../assets/icons';
import ProductDropdown from './product_dropdown';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './styles.scss';

const Nav = ({ isOpen }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const location = useLocation();

  const handleShowdDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className={`nav ${isOpen ? '_open' : ''}`}>
      {location.pathname !== '/signin' && (
        <ul className="nav__start">
          <li className="_has_dropdown">
            <button onClick={handleShowdDropdown}>
              Product{' '}
              <ChevronDown
                className={`_dropdown_icon ${showDropdown ? '_flip' : ''}`}
              />
            </button>
            <div className={`dropdown_menu ${showDropdown ? '_show' : ''}`}>
              <ProductDropdown />
            </div>
          </li>

          <li>
            <a href="/">Pricing</a>
          </li>

          <li>
            <Link to="/enterprise">Enterprise</Link>
          </li>

          <li>
            <a href="/">Support</a>
          </li>
        </ul>
      )}

      <ul
        className={`nav__end ${
          location.pathname === '/signin' ? 'ml_auto' : ''
        }`}
      >
        {location.pathname !== '/signin' && (
          <>
            <li>
              <Link to="/contact">Contact Sales</Link>
            </li>

            <li>
              <Link to="/signin">Login</Link>
            </li>
          </>
        )}

        {location.pathname === '/signin' && (
          <li style={{ marginRight: '0.5rem' }}>
            <a href="/">New Customer?</a>
          </li>
        )}

        <li>
          <a href="/" className="_signup_link">
            Try For Free <ChevronRight />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
