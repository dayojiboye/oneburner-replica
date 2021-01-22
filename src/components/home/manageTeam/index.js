import React, { useEffect } from 'react';

import TeamImage from '../../../assets/images/manage-video.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import {
  parentVariant,
  textVariant,
  imageVariant,
} from '../../../utils/animations/horizontal';

import './styles.scss';

const ManageTeam = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: '0px 0px -150px 0px',
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
      className="manage-team"
    >
      <motion.div variants={textVariant} className="manage-team-text">
        <h2>Manage team activities all in one place</h2>
        <p>
          Keep your team organized and informed with activities that are up to
          date.
        </p>
      </motion.div>

      <motion.div variants={imageVariant} className="manage-team-video">
        <LazyImage src={TeamImage} alt="example" width="400" height="300" />
      </motion.div>
    </motion.div>
  );
};

export default ManageTeam;
