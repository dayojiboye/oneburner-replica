import React, { useEffect } from 'react';

import customerSupportImg from '../../../assets/images/customer-support.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import {
  parentVariant,
  textVariant,
  imageVariant,
} from '../../../utils/animations/horizontalReversed';

import './styles.scss';

const CustomerSupport = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: '0px 0px -150px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={parentVariant}
      animate={controls}
      initial="hidden"
      className="customer-support"
    >
      <motion.div variants={imageVariant} className="customer-support-image">
        <LazyImage
          src={customerSupportImg}
          alt="example"
          width="400"
          height="270"
        />
      </motion.div>

      <motion.div variants={textVariant} className="customer-support-text">
        <h2>24/7 customer support</h2>
        <p>
          Our team of responsible member is always available to help you all day
          long and ready to meet your demand. Reach out to us and we will always
          be there.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CustomerSupport;
