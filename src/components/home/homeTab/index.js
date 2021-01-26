import React from 'react';

import './styles.scss';

const homeTab = () => {
  return (
    <section className="home_tab">
      <nav>
        <ul>
          <li className="_active_home_tab">
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
    </section>
  );
};

export default homeTab;
