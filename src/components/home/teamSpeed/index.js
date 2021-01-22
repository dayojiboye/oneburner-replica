import React, { useEffect } from 'react';

import TeamImage from '../../../assets/images/team-speed.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import {
  parentVariant,
  textVariant,
  imageVariant,
} from '../../../utils/animations/horizontalReversed';

import './styles.scss';

const TeamSpeed = () => {
  const controls = useAnimation();

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
    <motion.div
      ref={ref}
      variants={parentVariant}
      animate={controls}
      initial="hidden"
      className="team-speed"
    >
      <LazyImage
        variants={imageVariant}
        styling="team-speed-image"
        src={TeamImage}
        alt="example"
      />

      <motion.div variants={textVariant} className="team-speed-text">
        <h2>Bring your team up to speed</h2>
        <p>
          Collaborate on project from start to finish, see information at a
          glance, add comment, attachment and more with Oneburner.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TeamSpeed;
