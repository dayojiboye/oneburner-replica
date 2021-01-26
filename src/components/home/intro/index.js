import React from 'react';

import { ChevronRight } from '../../../assets/icons';
import LandingImage from '../../../assets/images/landing-image.png';
import { motion } from 'framer-motion';
import LazyImage from '../../ui/lazyImage';

import {
  useParentVariant,
  useContainerVariant,
  ZOOM_IN,
  FADE_IN_UP,
} from '../../../utils/animations/variants';

import './styles.scss';

const Intro = () => {
  const PARENT_VARIANT = useParentVariant(1, -1);

  const CONTAINER_VARIANT = useContainerVariant(0.3, 1, 0.5);

  return (
    <section className="section_wrapper home_intro">
      <motion.div
        variants={PARENT_VARIANT}
        animate="visible"
        initial="hidden"
        className="home_intro__hero"
      >
        <motion.div variants={CONTAINER_VARIANT} className="_home_intro_text">
          <motion.h1 variants={FADE_IN_UP}>
            Collaborate with your team and get more done
          </motion.h1>

          <motion.p variants={FADE_IN_UP}>
            Communicate effectively with Oneburner for easy collaboration, team
            work and remote work.
          </motion.p>

          <motion.a
            variants={FADE_IN_UP}
            href="/"
            className="_home_intro_btn"
          >
            Start Free Trial <ChevronRight />
          </motion.a>
        </motion.div>

        <motion.div variants={ZOOM_IN} className="_home_intro_bg">
          <LazyImage
            src={LandingImage}
            alt="landing"
            width="400"
            height="350"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
