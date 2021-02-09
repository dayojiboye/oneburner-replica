import React from 'react';

import { ChevronRight } from '../../../assets/icons';
import './styles.scss';

const Intro = () => {
  return (
    <section className="enterprise_intro">
      <div className="enterprise_intro__hero">
        <div className="enterprise_hero_content text_max_width">
          <h1>Modern solution built for your enterprise growth</h1>
          <p>Centralize your team in a secure, flexible and managed platform</p>

          <a href="/">
            Request a demo <ChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
