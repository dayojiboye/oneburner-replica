import React, { useEffect } from 'react';

import customerSupportImg from '../../../assets/images/customer-support.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import { FADE_IN_UP } from '../../../utils/animations/variants';

import './styles.scss';

const CustomerSupport = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      className="section_wrapper customer_support"
    >
      <div className="customer_support__image">
        <LazyImage
          src={customerSupportImg}
          alt="example"
          width="400"
          height="300"
          toAnimate
        />
      </div>

      <motion.div
        variants={FADE_IN_UP}
        className="customer_support__text text_max_width"
      >
        <h2>24/7 customer support</h2>
        <p>
          Our team of responsible members is always available to help you all
          day long and ready to meet your demand. Reach out to us and we will
          always be there.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default CustomerSupport;
