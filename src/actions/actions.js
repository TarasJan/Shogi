import Constants from '../constants';
import Helper from '../helpers';
import Charsets from '../helpers/charsets/charsets';


const buildAnswer = text => ({
  color: 'tuna',
  text,
});

const Actions = {
  answerQuestion: (props) => {
    const { text, question, charset } = props;
    const correctly = charset[question] === text;
    return { type: Constants.ANSWER_QUESTION, correctly };
  },
  increaseScore: delta => ({ type: Constants.INCREASE_SCORE, delta }),
  resetScore: value => ({ type: Constants.RESET_SCORE, value }),
  sendNewQuestion: (props) => {
    let charset;
    if (props.charset) {
      charset = props.charset;
    } else if (props.charsetName) {
      charset = Charsets[props.charsetName];
    } else {
      return;
    }
    const question = Helper.randomKey(charset);
    let answers = [buildAnswer(charset[question])];
    for (let i = 0; i < 3; i += 1) {
      answers.push(buildAnswer(Helper.randomElement(charset)));
    }
    answers = answers.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1]);
    return { type: Constants.NEW_QUESTION, question, answers };
  },
  setCharset: charsetName => ({ type: Constants.SET_CHARSET, charsetName }),
};

export default Actions;
