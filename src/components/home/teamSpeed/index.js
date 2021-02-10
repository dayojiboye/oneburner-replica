import React, { useEffect } from 'react';

import TeamImage from '../../../assets/images/team-speed.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import { FADE_IN_UP } from '../../../utils/animations/variants';

import './styles.scss';

const TeamSpeed = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.2,
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
      initial="hidden"
      className="section_wrapper home_team_speed"
    >
      <div className="home_team_speed__image">
        <LazyImage
          src={TeamImage}
          alt="example"
          width="400"
          height="300"
          toAnimate
        />
      </div>

      <motion.div
        variants={FADE_IN_UP}
        className="home_team_speed__text text_max_width"
      >
        <h2>Bring your team up to speed</h2>
        <p>
          Collaborate on project from start to finish, see information at a
          glance, add comment, attachment and more with Oneburner.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default TeamSpeed;
