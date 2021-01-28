import React from 'react';

import { ChevronRight } from '../../../assets/icons';
import LandingImage from '../../../assets/images/landing-image.png';
import { motion } from 'framer-motion';

import { FADE_IN_UP, ZOOM_IN } from '../../../utils/animations/variants';

import './styles.scss';

const PARENT_VARIANT = {
  visible: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
};

const TEXT_VARIANT = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Intro = () => {
  return (
    <section className="section_wrapper home_intro">
      <motion.div
        variants={PARENT_VARIANT}
        animate="visible"
        initial="hidden"
        className="home_intro__hero"
      >
        <motion.div variants={TEXT_VARIANT} className="_home_intro_text">
          <motion.h1 variants={FADE_IN_UP}>
            Collaborate with your team and get more done
          </motion.h1>

          <motion.p variants={FADE_IN_UP}>
            Communicate effectively with Oneburner for easy collaboration, team
            work and remote work.
          </motion.p>

          <motion.a variants={FADE_IN_UP} href="/" className="_home_intro_btn">
            Start Free Trial <ChevronRight />
          </motion.a>
        </motion.div>

        <motion.div variants={ZOOM_IN} className="_home_intro_bg">
          <div className="_image_container">
            <img src={LandingImage} alt="landing" width="400" height="350" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;