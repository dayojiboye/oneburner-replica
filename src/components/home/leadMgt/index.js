import React, { useEffect } from 'react';

import LeadMgtImg from '../../../assets/images/lead-mgt.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import { FADE_IN_UP } from '../../../utils/animations/variants';

import './styles.scss';

const LeadMgt = () => {
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
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      className="section_wrapper home_mgt"
    >
      <motion.div
        variants={FADE_IN_UP}
        className="home_mgt__text text_max_width"
      >
        <h2>Efficient lead management</h2>
        <p>
          Track and manage prospective customers. Manage their notes, emails,
          meetings, calls, contacts, and files.
        </p>
      </motion.div>

      <div className="home_mgt__image">
        <LazyImage src={LeadMgtImg} alt="example" width="400" height="300" />
      </div>
    </motion.section>
  );
};

export default LeadMgt;
