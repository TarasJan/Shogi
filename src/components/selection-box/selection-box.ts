import posed from 'react-pose';

const SelectionBox = posed.div({
    hoverable: true,
    init: {
      scale: 1,
    },
    hover: {
      scale: 1.2
    } 
  }
  );

export default SelectionBox;