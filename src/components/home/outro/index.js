import React, { useEffect } from 'react';

import { ChevronRight } from '../../../assets/icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { FADE_IN_UP } from '../../../utils/animations/variants';

import './styles.scss';

const Outro = () => {
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
    <section className="home_outro">
      <motion.div
        ref={ref}
        animate={controls}
        transition={{ staggerChildren: 0.2 }}
        initial="hidden"
        className="home_outro__content text_max_width"
      >
        <motion.h3 variants={FADE_IN_UP}>Choose a better way to work</motion.h3>

        <motion.p variants={FADE_IN_UP}>
          No credit card details | No additional installation | No time wasting
        </motion.p>

        <motion.a
          variants={FADE_IN_UP}
          href="/"
          className="home_outro__content__btn"
        >
          Start My Free Trial <ChevronRight />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Outro;
