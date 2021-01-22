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
    <header className="header">
      <div className="header-wrap">
        <div className="logo-container">
          <div className="logo">
            <a href="/">
              <Logo />
            </a>
          </div>

          <div className="hamburger-btn">
            <button
              type="button"
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
