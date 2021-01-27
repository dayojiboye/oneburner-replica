import React from 'react';

import Nav from '../nav';
import { Logo } from '../../../assets/icons';
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
            <a href="/" aria-label="OneBurner logo">
              <Logo />
            </a>
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
