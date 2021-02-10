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
    },
  },
};

const Outro = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="enterprise_outro">
      <motion.div
        ref={ref}
        variants={TEXT_VARIANT}
        animate={controls}
        initial="hidden"
        className="enterprise_outro__content text_max_width"
      >
        <motion.h3 variants={FADE_IN_UP}>
          Want to learn more on how we can impact your enterprise?
        </motion.h3>

        <motion.a
          variants={FADE_IN_UP}
          href="/"
          className="enterprise_outro_btn"
        >
          Contact Sales <ChevronRight />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Outro;
