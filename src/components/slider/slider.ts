import posed from 'react-pose';

const Slider = posed.div({
    hoverable: true,
    init: {
      opacity: 0,
    },
    hover: {
      opacity: 1
    } 
  }
  );

export default Slider;