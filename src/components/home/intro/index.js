import React, { useEffect, useState } from 'react';

import { ChevronRight } from '../../../assets/icons';
import LandingImage from '../../../assets/images/landing-image.png';
import { motion, useAnimation } from 'framer-motion';

import { FADE_IN_UP } from '../../../utils/animations/variants';

import './styles.scss';

const TEXT_VARIANT = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Intro = () => {
  const [loaded, setLoaded] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    if (loaded) {
      controls.start('visible');
    }
  }, [controls, loaded]);

  return (
    <section className="section_wrapper home_intro">
      <div className="home_intro__hero">
        <motion.div
          variants={TEXT_VARIANT}
          animate={controls}
          initial="hidden"
          className="_home_intro_text text_max_width"
        >
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

        <div className="_home_intro_bg">
          <div className="_image_container">
            <img
              src={LandingImage}
              alt="landing"
              width="400"
              height="350"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
