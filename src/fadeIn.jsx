export const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 90 : -90, // Adjust the direction of the animation
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: delay,
        ease: 'easeOut',
      },
    },
  };
};
