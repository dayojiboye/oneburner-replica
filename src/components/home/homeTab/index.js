import React from 'react';

import './styles.scss';

const homeTab = () => {
  return (
    <div className="homeTab">
      <nav>
        <ul>
          <li className="active-home-tab">
            <a href="/">CRM & Sales</a>
          </li>
          <li>
            <a href="/">Human Resources</a>
          </li>
          <li>
            <a href="/">Marketing</a>
          </li>
          <li>
            <a href="/">Remote Work</a>
          </li>
          <li>
            <a href="/">Project Management</a>
          </li>
          <li>
            <a href="/">Social Media</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default homeTab;
