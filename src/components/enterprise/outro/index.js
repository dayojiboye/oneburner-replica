import React from 'react';

import { ChevronRight } from '../../../assets/icons';
import './styles.scss';

const outro = () => {
  return (
    <section className="enterprise_outro">
      <div className="enterprise_outro__content text_max_width">
        <h3>Want to learn more on how we can impact your enterprise?</h3>

        <a href="/" className="enterprise_outro_btn">
          Contact Sales <ChevronRight />
        </a>
      </div>
    </section>
  );
};

export default outro;
