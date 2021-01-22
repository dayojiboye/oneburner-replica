import React from 'react';

import FooterHeading from '../../footerHeading';
import FooterGrid from '../../footerGrid';
import './styles.scss';

const footer = () => {
  return (
    <footer className="footer">
      <FooterHeading />
      <FooterGrid />
      <hr className="footer-divider" />
      <span className="footer-copyright">© 2021 Copyright</span>
    </footer>
  );
};

export default footer;
