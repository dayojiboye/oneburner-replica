import React from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({ variants, styling, src, alt, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      data-inview={inView}
      variants={variants}
      className={styling}
    >
      {inView ? <img src={src} alt={alt} {...props} /> : null}
    </motion.div>
  );
};

export default LazyImage;
