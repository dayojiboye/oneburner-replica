import React from 'react';

import LazyImage from '../../ui/lazyImage';
import WomanImg from '../../../assets/images/woman_image.png';
import './styles.scss';

const reviews = () => {
  return (
    <section className="enterprise_reviews section_wrapper">
      <div className="enterprise_reviews__lead">
        <p>
          Best. Product. Ever! We like Oneburner more and more each day because
          it makes our work a lot easier. It's just amazing. Very easy to use,
          impressed us on multiple levels. Thank you so much for your help and
          is worth much more than we paid. We were treated like royalty.
        </p>
      </div>

      <div className="enterprise_reviews__customer_container">
        <div className="enterprise_customer_image">
          <LazyImage
            src={WomanImg}
            alt="customer review"
            width="122"
            height="122"
          />
        </div>

        <div className="enterprise_customer_info">
          <span>Kemi Hassan</span>
          <span>CEO, Saharaa Inc. </span>
        </div>
      </div>
    </section>
  );
};

export default reviews;
