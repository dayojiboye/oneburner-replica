import React, { useEffect } from 'react';

import ReportBoardImg from '../../../assets/images/report board.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../../ui/lazyImage';

import { FADE_IN_UP } from '../../../utils/animations/variants';

import './styles.scss';

const ReportBoard = () => {
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
      className="section_wrapper home_rpt_board"
    >
      <div className="home_rpt_board__image">
        <LazyImage
          src={ReportBoardImg}
          alt="example"
          width="400"
          height="300"
        />
      </div>

      <motion.div
        variants={FADE_IN_UP}
        className="home_rpt_board__text text_max_width"
      >
        <h2>Timeless report generator</h2>
        <p>
          You can generate quick report of activities of all that has to do with
          the daily running of your business and teams.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ReportBoard;
