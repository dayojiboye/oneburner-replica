import React, { useEffect } from 'react';

import { AwardRibbon } from '../../../assets/icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { FADE_IN_UP } from '../../../utils/animations/variants';

import './styles.scss';

const HowOneBurnerWorks = () => {
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
      className="how_one_burner_works"
    >
      <motion.div
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.7,
            },
          },
        }}
        className="how_one_burner_helps"
      >
        <motion.h2 variants={FADE_IN_UP} className="d_inline_block">
          How Oneburner help enterprises grow
        </motion.h2>

        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.7,
              },
            },
          }}
          className="how_one_burner_helps__grid"
        >
          <motion.div
            variants={FADE_IN_UP}
            className="_grid_briefing text_max_width"
          >
            <p>
              Oneburner software solution helps your business by creating an
              enabling environment for easy communication and feedbacks in real
              time. Oneburner brings all your user and teams in a single place
              with 99.99% uptime SLA and Data security
            </p>
          </motion.div>

          <div className="_grid_list_items text_max_width">
            <motion.ul
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.5,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              <motion.li variants={FADE_IN_UP}>
                <span className="_main_text_size">
                  Data protection and control
                </span>
              </motion.li>

              <motion.li variants={FADE_IN_UP}>
                <span className="_main_text_size">Reporting and analytics</span>
              </motion.li>

              <motion.li variants={FADE_IN_UP}>
                <span className="_main_text_size">
                  Use single sign-on and multi-factor authentication to secure
                  accounts
                </span>
              </motion.li>

              <motion.li variants={FADE_IN_UP}>
                <span className="_main_text_size">
                  Enterprise integration with other tools
                </span>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>

      <div className="one_burner_award">
        <div className="one_burner_award__grid">
          <div className="award_container">
            <AwardRibbon />
          </div>

          <div className="award_content">
            <span>Best Collaboration Software</span>
            <span>Africa tech coalition award 2020</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowOneBurnerWorks;
