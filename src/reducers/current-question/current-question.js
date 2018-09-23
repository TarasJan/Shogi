import Constants from '../../constants';

const currentQuestion = (state = {}, action) => {
  switch (action.type) {
    case Constants.NEW_QUESTION:
      return action.question;
    case Constants.ANSWER_QUESTION:
      return action.correctly ? 'Well done' : 'Wrong';
    default:
      return state;
  }
};

export default currentQuestion;
