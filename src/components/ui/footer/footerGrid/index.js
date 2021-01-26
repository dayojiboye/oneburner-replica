import React from 'react';

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
} from '../../../../assets/icons';

import FooterLinks from '../footerLinks';

import './styles.scss';

const footerGrid = () => {
  return (
    <div className="footer_grid">
      <div className="footer_grid__extra">
        <span>No 1 CRM solution in Africa</span>

        <div className="_footer_extra_links">
          <a href="/">Terms of use</a> | <a href="/">Privacy Policy</a>
        </div>

        <div className="_footer_contact">
          <span>Get in touch</span>

          <span className="_footer_number">+234-80-000-0000</span>

          <div className="_footer_social_icons">
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
