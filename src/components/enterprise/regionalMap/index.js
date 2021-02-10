import React, { useState, useRef, useEffect } from 'react';

import SvgMap from './svgMap';
import { countries } from '../../../utils/mapTooltip/countries';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { FADE_IN_UP } from '../../../utils/animations/variants';

import './styles.scss';

const TEXT_VARIANT = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const RegionalMap = () => {
  const [tooltipDetails, setTooltipDetails] = useState({});

  const controls = useAnimation();

  const mapElement = useRef(null);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const handleMouseEnter = (e) => {
    const details = parseInt(e.target.getAttribute('data-tooltip'));
    setTooltipDetails(countries[details - 1]);
    mapElement.current.style.display = 'block';
  };

  const handleMouseMove = (e) => {
    mapElement.current.style.top = e.clientY + 'px';
    mapElement.current.style.left = e.clientX + 'px';
  };

  const handleMouseLeave = () => {
    mapElement.current.style.display = 'none';
    setTooltipDetails({});
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="regional_map">
      <motion.div
        ref={ref}
        variants={TEXT_VARIANT}
        animate={controls}
        initial="hidden"
        className="regional_map__lead"
      >
        <motion.h3 variants={FADE_IN_UP}>Our Regional Presence</motion.h3>

        <motion.p variants={FADE_IN_UP}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer
        </motion.p>
      </motion.div>

      <div className="regional_map__svg_container">
        <SvgMap
          enter={handleMouseEnter}
          move={handleMouseMove}
          leave={handleMouseLeave}
          mapref={mapElement}
          mapDetails={tooltipDetails}
        />
      </div>
    </section>
  );
};

export default RegionalMap;
