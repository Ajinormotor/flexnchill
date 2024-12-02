


const useHeroMotion = () => {

    const containerVariant = {
      hidden: { y: 100, opacity: 0 },
      exit: { opacity: 0, y: 10},
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1, 
        },
      },
    };
  
    const itemVariant = {
      hidden: { y: 70, opacity: 0 },
      visible: { y: 0, opacity: 1 },
      exit: { opacity: 0.4, y: 10},
    };
  
    return {
      containerVariant,
      itemVariant,
    };
  };
  
  export default useHeroMotion;
  