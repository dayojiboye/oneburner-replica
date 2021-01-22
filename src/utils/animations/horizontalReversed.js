export const parentVariant = {
  visible: {
    transition: {
      staggerChildren: 0.6,
      staggerDirection: -1,
    },
  },
};

export const textVariant = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

export const imageVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};
