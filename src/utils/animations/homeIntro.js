export const introVariants = {
  visible: {
    transition: {
      staggerChildren: 1,
    },
  },
};

export const introTextVariants = {
  visible: {
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

export const introBgVariants = {
  hidden: {
    opacity: 0,
    // x: 100,
    scale: 0,
  },
  visible: {
    opacity: 1,
    // x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};
