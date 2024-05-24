const containerVariants: {} = {
  initial: {
    y: '-100vh',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: 'easeOut',
      type: 'spring',
      damping: 20,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
}

export default containerVariants
