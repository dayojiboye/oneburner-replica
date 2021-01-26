import React, { useEffect } from 'react';

import TaskTimelineImg from '../../../assets/images/task-timeline.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import {
  useContainerVariant,
  FADE_IN_UP,
} from '../../../utils/animations/variants';

import './styles.scss';

const TaskTimeline = () => {
  const controls = useAnimation();

  const CONTAINER_VARIANT = useContainerVariant(0.7)

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
      className="section_wrapper home_task"
    >
      <motion.div variants={FADE_IN_UP} className="home_task__text">
        <h2>Automated task timeline</h2>
        <p>View dates, projects, calendar, sprint and more with reliability.</p>
      </motion.div>

      <motion.div variants={FADE_IN_UP} className="home_task__image">
        <LazyImage
          src={TaskTimelineImg}
          alt="example"
          width="400"
          height="300"
        />
      </motion.div>
    </motion.section>
  );
};

export default TaskTimeline;
