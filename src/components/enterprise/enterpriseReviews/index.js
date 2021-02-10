import React, { useEffect } from 'react';

import LazyImage from '../../ui/lazyImage';
import WomanImg from '../../../assets/images/woman_image.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { FADE_IN_UP } from '../../../utils/animations/variants';

import './styles.scss';

const Reviews = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="enterprise_reviews section_wrapper">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        className="enterprise_reviews__lead"
      >
        <motion.p variants={FADE_IN_UP}>
          Best. Product. Ever! We like Oneburner more and more each day because
          it makes our work a lot easier. It's just amazing. Very easy to use,
          impressed us on multiple levels. Thank you so much for your help and
          is worth much more than we paid. We were treated like royalty.
        </motion.p>
      </motion.div>

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

export default Reviews;
