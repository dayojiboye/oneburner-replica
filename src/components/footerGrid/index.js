import React from 'react';

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
} from '../../assets/icons';

import FooterLinks from '../footerLinks';

import './styles.scss';

const footerGrid = () => {
  return (
    <div className="footer-grid">
      <div className="footer-extra">
        <span>No 1 CRM solution in Africa</span>

        <div className="footer-extra-links">
          <a href="/">Terms of use</a> | <a href="/">Privacy Policy</a>
        </div>

        <div className="footer-contact">
          <span>Get in touch</span>

          <span className="footer-number">+234-80-000-0000</span>

          <div className="footer-social-icons">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedinIcon />
            <YoutubeIcon />
          </div>
        </div>
      </div>

      <FooterLinks />
    </div>
  );
};

export default footerGrid;
