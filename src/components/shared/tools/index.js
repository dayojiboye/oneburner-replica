import React, { Fragment } from 'react';

import { icons } from './toolsIcons';
import './styles.scss';

const favoriteTools = () => {
  return (
    <section className="section_wrapper favorite_tools">
      <h2 className="d_inline_block text_max_width">
        Integrate with your favourite tools easily in one click
      </h2>

      <div className="favorite_tools__images_container">
        <div className="_icons_grid">
          {icons.logos.map((item) => {
            return <Fragment key={item.name}>{item.icon}</Fragment>;
          })}
        </div>
      </div>
    </section>
  );
};

export default favoriteTools;
