import React, { useEffect } from 'react';

import { ChevronRight } from '../../../assets/icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { FADE_IN_UP } from '../../../utils/animations/variants';

import './styles.scss';

const TEXT_VARIANT = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      // delayChildren: 0.1,
    },
  },
};

const Intro = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="enterprise_intro">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        className="enterprise_intro__hero"
      >
        <motion.div
          variants={TEXT_VARIANT}
          className="enterprise_hero_content text_max_width"
        >
          <motion.h1 variants={FADE_IN_UP}>
            Modern solution built for your enterprise growth
          </motion.h1>

          <motion.p variants={FADE_IN_UP}>
            Centralize your team in a secure, flexible and managed platform
          </motion.p>

          <motion.a href="/" variants={FADE_IN_UP}>
            Request a demo <ChevronRight />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
