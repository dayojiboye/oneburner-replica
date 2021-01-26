import React from 'react';

import FooterHeading from './footerHeading';
import FooterGrid from './footerGrid';
import './styles.scss';

const footer = () => {
  return (
    <footer className="footer _max_width">
      <div className="footer__wrapper">
        <FooterHeading />
        <FooterGrid />
        <hr className="_footer_divider" />
        <span className="_footer_copyright">© 2021 Copyright</span>
      </div>
    </footer>
  );
};

export default footer;
