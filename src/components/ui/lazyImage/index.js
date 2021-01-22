import React from 'react';

import { useInView } from 'react-intersection-observer';

const LazyImage = ({ width, height, src, alt, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      data-inview={inView}
      style={{
        paddingBottom: `${(height / width) * 100}%`,
        position: 'relative',
      }}
    >
      {inView ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          {...props}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      ) : null}
    </div>
  );
};

export default LazyImage;
