import React, { useEffect } from 'react';

import { ChevronRight } from '../../../assets/icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { FADE_IN_UP } from '../../../utils/animations/variants';

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
    <motion.section
      ref={ref}
      animate={controls}
      transition={{ staggerChildren: 0.3 }}
      initial="hidden"
      className="home_outro"
    >
      <motion.h3 variants={FADE_IN_UP}>Choose a better way to work</motion.h3>

      <motion.p variants={FADE_IN_UP}>
        No credit card details | No additional installation | No time wasting
      </motion.p>

      <motion.a variants={FADE_IN_UP} href="/" className="home_outro__btn">
        Start My Free Trial <ChevronRight />
      </motion.a>
    </motion.section>
  );
};

export default Outro;
