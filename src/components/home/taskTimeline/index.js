import React, { useEffect } from 'react';

import TaskTimelineImg from '../../../assets/images/task-timeline.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import { FADE_IN_UP } from '../../../utils/animations/variants';

import './styles.scss';

const TaskTimeline = () => {
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
      className="section_wrapper home_task"
    >
      <motion.div
        variants={FADE_IN_UP}
        className="home_task__text text_max_width"
      >
        <h2>Automated task timeline</h2>
        <p>View dates, projects, calendar, sprint and more with reliability.</p>
      </motion.div>

      <div className="home_task__image">
        <LazyImage
          src={TaskTimelineImg}
          alt="example"
          width="400"
          height="300"
          toAnimate
        />
      </div>
    </motion.section>
  );
};

export default TaskTimeline;
