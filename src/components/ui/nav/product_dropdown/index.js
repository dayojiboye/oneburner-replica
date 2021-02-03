import React from 'react';

import {
  BriefcaseSVG,
  StoreSVG,
  PlugSVG,
  NotesSVG,
} from '../../../../assets/icons';

const ProductDropdown = () => {
  return (
    <ul className="dropdown_menu__wrapper">
      <li>
        <a href="/">
          <span className="drop_list_icon">
            <BriefcaseSVG />
          </span>
          <div className="drop_list_text">
            <span className="drop_list_text__heading">Clients</span>
            <span className="drop_list_text__description">
              See the amazing team that uses Oneburner.
            </span>
          </div>
        </a>
      </li>

      <li>
        <a href="/">
          <span className="drop_list_icon">
            <StoreSVG />
          </span>
          <div className="drop_list_text">
            <span className="drop_list_text__heading">Oneburner Stores</span>
            <span className="drop_list_text__description">
              Explore our ready made solutions to expand your business.
            </span>
          </div>
        </a>
      </li>

      <li>
        <a href="/">
          <span className="drop_list_icon">
            <PlugSVG />
          </span>
          <div className="drop_list_text">
            <span className="drop_list_text__heading">Integrations</span>
            <span className="drop_list_text__description">
              Connect different solution to Oneburner and get more done.
            </span>
          </div>
        </a>
      </li>

      <li>
        <a href="/">
          <span className="drop_list_icon">
            <NotesSVG />
          </span>
          <div className="drop_list_text">
            <span className="drop_list_text__heading">Why Oneburner?</span>
            <span className="drop_list_text__description">
              Learn more about our features, success rates, benefits and demo.
            </span>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default ProductDropdown;
