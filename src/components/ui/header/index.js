import React from 'react';

import Nav from '../nav';
import Logo from '../../../assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import './styles.scss';

const header = ({ clicked, isOpen }) => {
  const buttonStyle = [
    'hamburger',
    'hamburger--collapse',
    isOpen ? 'is-active' : null,
  ];

  return (
    <header className="header _max_width">
      <div className="header__wrapper">
        <div className="header_logo_container">
          <div className="_logo">
            <Link to="/" aria-label="OneBurner logo">
              <img src={Logo} alt="oneburner logo" />
            </Link>
          </div>

          <div className="_hamburger_btn">
            <button
              type="button"
              aria-label="navigation button"
              onClick={clicked}
              className={buttonStyle.join(' ')}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>

        <Nav isOpen={isOpen} />
      </div>
    </header>
  );
};

export default header;
