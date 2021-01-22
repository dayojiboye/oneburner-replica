import React, { Fragment } from 'react';

import { icons } from './toolsIcons';
import './styles.scss';

const favoriteTools = () => {
  return (
    <div className="fav-tools">
      <h2>Integrate with your favourite tools easily in one click</h2>

      <div className="tools-images-container">
        <div className="first-layer-icons">
          {icons.firstLayer.map((item) => {
            return <Fragment key={item.name}>{item.icon}</Fragment>;
          })}
        </div>

        <div className="second-layer-icons">
          {icons.secondLayer.map((item) => {
            return <Fragment key={item.name}>{item.icon}</Fragment>;
          })}
        </div>
      </div>
    </div>
  );
};

export default favoriteTools;
