import React, { useEffect } from 'react';

import LeadMgtImg from '../../../assets/images/lead-mgt.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import {
  parentVariant,
  textVariant,
  imageVariant,
} from '../../../utils/animations/horizontal';

import './styles.scss';

const LeadMgt = () => {
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
      className="lead-mgt"
    >
      <motion.div variants={textVariant} className="lead-mgt-text">
        <h2>Efficient lead management</h2>
        <p>
          Track and manage prospective customers. Manage their notes, emails,
          meetings, calls, contacts, and files.
        </p>
      </motion.div>

      <motion.div variants={imageVariant} className="lead-mgt-image">
        <LazyImage src={LeadMgtImg} alt="example" width="400" height="300" />
      </motion.div>
    </motion.div>
  );
};

export default LeadMgt;
