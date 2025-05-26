export const fadeInAnimation = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,

    transition: {
      delay: 0.05 * index,
      duration: 0.3,
    },
  }),
};

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.05,
      duration: 0.3,
    },
  },
};

export const listItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const slidedownAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.2,
    },
  },
};

export const slideupAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.2,
    },
  },
};

export const slideLeftAnimation = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.2,
    },
  },
};
export const slideRightAnimation = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.2,
    },
  },
};

export const opacityAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      delay: 0.2,
      duration: 0.02,
    },
  },
};

// export const fadeInAnimation = {
//   initial: {
//     opacity: 0,
//   },
//   animate: (index: number) => ({
//     opacity: 1,

//     transition: {
//       delay: 0.05 * index,
//       duration: 0.3,
//     },
//   }),
// };
