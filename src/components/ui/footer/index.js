import React from 'react';

import FooterHeading from './footerHeading';
import FooterGrid from './footerGrid';
import { useLocation } from 'react-router-dom';
import './styles.scss';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer _max_width">
      <div className="footer__wrapper">
        {location.pathname !== '/signin' && (
          <>
            <FooterHeading />
            <FooterGrid />
          </>
        )}
        
        <div
          style={{
            textAlign: location.pathname === '/signin' ? 'center' : 'left',
          }}
        >
          <span className="_footer_copyright">© 2021 Copyright</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
