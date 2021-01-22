import React, { useEffect } from 'react';

import TaskTimelineImg from '../../../assets/images/task-timeline.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import {
  parentVariant,
  textVariant,
  imageVariant,
} from '../../../utils/animations/horizontal';

import './styles.scss';

const TaskTimeline = () => {
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
      className="task-timeline"
    >
      <motion.div variants={textVariant} className="task-timeline-text">
        <h2>Automated task timeline</h2>
        <p>View dates, projects, calendar, sprint and more with reliability.</p>
      </motion.div>

      <motion.div variants={imageVariant} className="task-timeline-image">
        <LazyImage src={TaskTimelineImg} alt="example" width="400" height="300" />
      </motion.div>
    </motion.div>
  );
};

export default TaskTimeline;
