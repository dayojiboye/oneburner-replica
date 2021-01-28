export const ZOOM_IN = {
  hidden: {
    // opacity: 0,
    scale: 0,
  },
  visible: {
    // opacity: 1, check if this fixes the lighthouse ish
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

export const FADE_IN_UP = {
  hidden: {
    opacity: 0,
    y: 150,
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
