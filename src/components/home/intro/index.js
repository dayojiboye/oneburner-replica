import React from 'react';

import { ChevronRight } from '../../../assets/icons';
import LandingImage from '../../../assets/images/landing-image.png';
import { motion } from 'framer-motion';
import LazyImage from '../../ui/lazyImage';

import {
  introVariants,
  introTextVariants,
  introBgVariants,
  fadeInUp,
} from '../../../utils/animations/homeIntro';

import './styles.scss';

const Intro = () => {
  return (
    <div className="intro">
      <motion.div
        variants={introVariants}
        animate="visible"
        initial="hidden"
        className="intro-hero"
      >
        <motion.div variants={introTextVariants} className="intro-text">
          <motion.h1 variants={fadeInUp}>
            Collaborate with your team and get more done
          </motion.h1>

          <motion.p variants={fadeInUp}>
            Communicate effectively with Oneburner for easy collaboration, team
            work and remote work.
          </motion.p>

          <motion.a variants={fadeInUp} href="/" className="intro-text-btn">
            Start Free Trial <ChevronRight />
          </motion.a>
        </motion.div>

        <motion.div variants={introBgVariants} className="intro-bg">
          <LazyImage
            src={LandingImage}
            alt="landing"
            width="400"
            height="350"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
