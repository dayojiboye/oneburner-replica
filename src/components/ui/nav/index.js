import React, { useState } from 'react';

import { ChevronDown, ChevronRight } from '../../../assets/icons';
import './styles.scss';

const Nav = ({ isOpen }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowdDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const navStyle = ['nav', isOpen ? 'open' : null];

  const dropdownStyle = ['dropdownMenu', showDropdown ? 'show' : null];

  const iconStyle = ['dropdown-icon', showDropdown ? 'flip' : null];

  return (
    <nav className={navStyle.join(' ')}>
      <ul className="nav-start">
        <li className="hasDropDown">
          <button onClick={handleShowdDropdown}>
            Product <ChevronDown className={iconStyle.join(' ')} />
          </button>
          <div className={dropdownStyle.join(' ')}>
            <div className="dropdown-wrap">
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
            </div>
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

      <ul className="nav-end">
        <li>
          <a href="/">Contact Sales</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/" className="signup-link">
            Try For Free <ChevronRight />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
