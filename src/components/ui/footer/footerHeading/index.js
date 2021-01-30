import React from 'react';

import { Logo, ChevronDownPurple } from '../../../../assets/icons';
import './styles.scss';

const footerHeading = () => {
  return (
    <div className="footer_heading">
      <div className="footer_heading__logo">
        <Logo />
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
