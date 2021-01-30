import React, { useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';

import { motion, useAnimation } from 'framer-motion';

import { FADE_IN_UP } from '../../../utils/animations/variants';

const LazyImage = ({ width, height, src, alt, ...props }) => {
  const controls = useAnimation();

  const [loaded, setLoaded] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px 10px',
  });

  useEffect(() => {
    if (loaded) {
      controls.start('visible');
    }
  }, [controls, loaded]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      transition={{ delayChildren: 0.7 }}
      initial="hidden"
      data-inview={inView}
      style={{
        paddingBottom: `${(height / width) * 100}%`,
        position: 'relative',
      }}
    >
      {inView && (
        <motion.img
          variants={FADE_IN_UP}
          src={src}
          alt={alt}
          width={width}
          height={height}
          {...props}
          onLoad={() => setLoaded(true)}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      )}
    </motion.div>
  );
};

export default LazyImage;
