import React from 'react';

import { ChevronDownPurple } from '../../../../assets/icons';
import Logo from '../../../../assets/icons/logo.svg';
import './styles.scss';

const footerHeading = () => {
  return (
    <div className="footer_heading">
      <div className="footer_heading__logo">
        <img src={Logo} alt="oneburner logo" />
      </div>

      <div className="footer_heading__lang">
        <button>
          <span>English</span>
          <ChevronDownPurple className="_footer_chevron_drop" />
        </button>
      </div>
    </div>
  );
};

export default footerHeading;
