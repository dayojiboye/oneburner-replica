import React from 'react';

import { countries } from '../../../utils/mapTooltip/countries';
import './styles.scss';

const contactAddress = () => {
  return (
    <div className="contact_address">
      <div className="contact_address__header">
        <h2>Our offices around Africa</h2>
      </div>

      <div className="contact_address__countries">
        {countries.map((item) => {
          return (
            <div key={item.country} className="contact_country_wrapper">
              <span className="_contact_country">{item.country}</span>
              <span className="_contact_address">{item.address}</span>
              <span className="_contact_phone">{item.phone}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default contactAddress;
