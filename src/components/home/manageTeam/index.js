import React, { useEffect } from 'react';

import TeamImage from '../../../assets/images/manage-video.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import {
  useContainerVariant,
  FADE_IN_UP,
} from '../../../utils/animations/variants';

import './styles.scss';

const ManageTeam = () => {
  const controls = useAnimation();

  const CONTAINER_VARIANT = useContainerVariant(0.7);

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
    <motion.section
      ref={ref}
      variants={CONTAINER_VARIANT}
      animate={controls}
      initial="hidden"
      className="section_wrapper home_mgt_team"
    >
      <motion.div variants={FADE_IN_UP} className="home_mgt_team__text">
        <h2>Manage team activities all in one place</h2>
        <p>
          Keep your team organized and informed with activities that are up to
          date.
        </p>
      </motion.div>

      <motion.div variants={FADE_IN_UP} className="home_mgt_team__image">
        <LazyImage src={TeamImage} alt="example" width="400" height="300" />
      </motion.div>
    </motion.section>
  );
};

export default ManageTeam;
