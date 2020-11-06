import { DIRECTIONS } from "./Slider";

const animations = {
  firstImage: {
    initial: (from: string) => {
      if (from === DIRECTIONS.LEFT) {
        return {
          opacity: 0.4,
          x: 200,
        };
      } else
        return {
          opacity: 0.4,
          x: -200,
        };
    },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        stiffness: 2,
      },
    },
  },
  activeImage: {
    initial: (from: string) => {
      if (from === DIRECTIONS.LEFT) {
        return {
          x: 200,
        };
      } else
        return {
          x: -200,
        };
    },
    animate: {
      opacity: [0.5, 1],
      x: 0,
      transition: {
        duration: 1,
        stiffness: 2,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        stiffness: 2,
      },
    },
  },
  lastImage: {
    initial: (from: string) => {
      if (from === DIRECTIONS.LEFT) {
        return {
          opacity: 0.4,
          x: 200,
        };
      } else
        return {
          opacity: 0.4,
          x: -200,
        };
    },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        stiffness: 2,
      },
    },
  },
};

export default animations;
