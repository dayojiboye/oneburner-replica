import React from 'react';

import { Logo, WorldIcon, ChevronDownPurple } from '../../assets/icons';
import './styles.scss';

const footerHeading = () => {
  return (
    <div className="footer-heading">
      <div className="footer-logo">
        <Logo />
      </div>

      <div className="footer-lang-dropdown">
        <button>
          <span>
            <WorldIcon className="footer-world-icon" /> English
          </span>
          <ChevronDownPurple className="footer-chevron-drop" />
        </button>
      </div>
    </div>
  );
};

export default footerHeading;
