import React, { useState, useRef } from 'react';

import SvgMap from './svgMap';
import { countries } from '../../../utils/mapTooltip/countries';
import './styles.scss';

const RegionalMap = () => {
  const [tooltipDetails, setTooltipDetails] = useState({});

  const mapElement = useRef(null);

  const handleMouseEnter = (e) => {
    const details = parseInt(e.target.getAttribute('data-tooltip'));
    setTooltipDetails(countries[details - 1]);
    mapElement.current.style.display = 'block';
  };

  const handleMouseMove = (e) => {
    mapElement.current.style.top = e.clientY + 'px';
    mapElement.current.style.left = e.clientX + 'px';
  };

  const handleMouseLeave = () => {
    mapElement.current.style.display = 'none';
    setTooltipDetails({});
  };

  return (
    <section className="regional_map">
      <div className="regional_map__lead">
        <h3>Our Regional Presence</h3>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer
        </p>
      </div>

      <div className="regional_map__svg_container">
        <SvgMap
          enter={handleMouseEnter}
          move={handleMouseMove}
          leave={handleMouseLeave}
          mapref={mapElement}
          mapDetails={tooltipDetails}
        />
      </div>
    </section>
  );
};

export default RegionalMap;
