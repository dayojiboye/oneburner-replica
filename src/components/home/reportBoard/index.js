import React, { useEffect } from 'react';

import ReportBoardImg from '../../../assets/images/report board.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import {
  parentVariant,
  textVariant,
  imageVariant,
} from '../../../utils/animations/horizontalReversed';

import './styles.scss';

const ReportBoard = () => {
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
      className="report-board"
    >
     <motion.div variants={imageVariant} className="report-board-image">
        <LazyImage src={ReportBoardImg} alt="example" width="400" height="300" />
      </motion.div>

      <motion.div variants={textVariant} className="report-board-text">
        <h2>Timeless report generator</h2>
        <p>
          You can generate quick report of activities of all that has to do with
          the daily running of your business and teams.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ReportBoard;
