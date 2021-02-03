import React, { useState } from 'react';

import { ChevronDown, ChevronRight } from '../../../assets/icons';
import ProductDropdown from './product_dropdown';
import './styles.scss';

const Nav = ({ isOpen }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowdDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const navStyle = ['nav', isOpen ? '_open' : null];

  const dropdownStyle = ['dropdown_menu', showDropdown ? '_show' : null];

  const iconStyle = ['_dropdown_icon', showDropdown ? '_flip' : null];

  return (
    <nav className={navStyle.join(' ')}>
      <ul className="nav__start">
        <li className="_has_dropdown">
          <button onClick={handleShowdDropdown}>
            Product <ChevronDown className={iconStyle.join(' ')} />
          </button>
          <div className={dropdownStyle.join(' ')}>
            <ProductDropdown />
          </div>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Enterprise</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
      </ul>

      <ul className="nav__end">
        <li>
          <a href="/">Contact Sales</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
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
