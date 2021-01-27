import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import { motion, useAnimation } from 'framer-motion';

import { FADE_IN_UP } from '../../../utils/animations/variants';

const LazyImage = ({ width, height, src, alt, ...props }) => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -100px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      transition={{ delayChildren: 0.5 }}
      initial="hidden"
      data-inview={inView}
      style={{
        paddingBottom: `${(height / width) * 100}%`,
        position: 'relative',
      }}
    >
      {inView ? (
        <motion.img
          variants={FADE_IN_UP}
          src={src}
          alt={alt}
          width={width}
          height={height}
          {...props}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      ) : null}
    </motion.div>
  );
};

export default LazyImage;
