import React from 'react';

import { Link } from 'react-router-dom';
import './styles.scss';

const footerLinks = () => {
  return (
    <div className="footer_links">
      <ul>
        <li>
          <span>PRODUCT</span>

          <a href="/">Features</a>
          <Link to="/enterprise">Enterprise</Link>
          <a href="/">Security</a>
          <a href="/">Trust</a>
          <a href="/">Customer Stories</a>
          <a href="/">Pricing</a>
          <a href="/">Integrations</a>
          <a href="/">Oneburner Partners</a>
        </li>

        <li>
          <span>COMPANY</span>

          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Careers</a>
          <a href="/">In the News</a>
        </li>

        <li>
          <span>ONEBURNER FOR TEAMS</span>

          <a href="/">Engineering</a>
          <a href="/">Financial Services</a>
          <a href="/">CRM and Sales</a>
          <a href="/">IT</a>
          <a href="/">Marketing</a>
          <a href="/">Customer Support</a>
          <a href="/">Human Resources</a>
          <a href="/">Project Management</a>
          <a href="/">Remote Work</a>
        </li>

        <li>
          <span>RESOURCES</span>

          <a href="/">Community</a>
          <a href="/">Guides</a>
          <a href="/">Templates</a>
          <a href="/">Video Tutorials</a>
          <a href="/">Professional Services</a>
          <a href="/">Knowledge Base</a>
          <a href="/">Blog</a>
          <a href="/">Webinars</a>
          <a href="/">Find a Partner</a>
        </li>
      </ul>
    </div>
  );
};

export default footerLinks;
