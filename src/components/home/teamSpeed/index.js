import React, { useEffect } from 'react';

import TeamImage from '../../../assets/images/team-speed.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import {
  useContainerVariant,
  FADE_IN_UP,
} from '../../../utils/animations/variants';

import './styles.scss';

const TeamSpeed = () => {
  const controls = useAnimation();

  const CONTAINER_VARIANT = useContainerVariant(0.7, -1);

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: '0px 0px -200px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      variants={CONTAINER_VARIANT}
      animate={controls}
      initial="hidden"
      className="section_wrapper home_team_speed"
    >
      <motion.div variants={FADE_IN_UP} className="home_team_speed__image">
        <LazyImage src={TeamImage} alt="example" width="400" height="300" />
      </motion.div>

      <motion.div variants={FADE_IN_UP} className="home_team_speed__text">
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
