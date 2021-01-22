import React, { useEffect } from 'react';

import { ChevronRight } from '../../../assets/icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  introTextVariants,
  fadeInUp,
} from '../../../utils/animations/homeIntro';

import './styles.scss';

const Outro = () => {
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
      variants={introTextVariants}
      animate={controls}
      initial="hidden"
      className="home-outro"
    >
      <motion.h3 variants={fadeInUp}>Choose a better way to work</motion.h3>

      <motion.p variants={fadeInUp}>
        No credit card details | No additional installation | No time wasting
      </motion.p>

      <motion.a variants={fadeInUp} href="/" className="home-outro-btn">
        Start my free trial <ChevronRight />
      </motion.a>
    </motion.div>
  );
};

export default Outro;
