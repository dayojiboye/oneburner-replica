import React, { useEffect } from 'react';

import LeadMgtImg from '../../../assets/images/lead-mgt.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import {
  useContainerVariant,
  FADE_IN_UP,
} from '../../../utils/animations/variants';

import './styles.scss';

const LeadMgt = () => {
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
      className="section_wrapper home_mgt"
    >
      <motion.div variants={FADE_IN_UP} className="home_mgt__text">
        <h2>Efficient lead management</h2>
        <p>
          Track and manage prospective customers. Manage their notes, emails,
          meetings, calls, contacts, and files.
        </p>
      </motion.div>

      <motion.div variants={FADE_IN_UP} className="home_mgt__image">
        <LazyImage src={LeadMgtImg} alt="example" width="400" height="300" />
      </motion.div>
    </motion.section>
  );
};

export default LeadMgt;
