import Constants from '../../constants';

const answers = (state = {}, action) => {
  switch (action.type) {
    case Constants.NEW_QUESTION:
      return action.answers;
    default:
      return state;
  }
};

export default answers;
