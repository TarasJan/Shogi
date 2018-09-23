import Constants from '../constants';
import Helper from '../helpers';
import Charsets from '../helpers/charsets/charsets';


const buildAnswer = (text: string) => ({
  color: 'tuna',
  text,
});

interface IQuestionProps {
  text?: string,
  question?: string,
  charset?: object[],
  charsetName?: string
}

const Actions = {
  answerQuestion: (props: IQuestionProps) => {
    const { text, question, charset } = props;
    if (!text || !charset || !question) {
      return { type: Constants.ANSWER_QUESTION, correctly: false };
    }
    const correctly = charset[question] === text;
    return { type: Constants.ANSWER_QUESTION, correctly };
  },
  increaseScore: (delta: number) => ({ type: Constants.INCREASE_SCORE, delta }),
  resetScore: (value: number) => ({ type: Constants.RESET_SCORE, value }),
  sendNewQuestion: (props: IQuestionProps) => {
    let charset;
    if (props.charset) {
      charset = props.charset;
    } else if (props.charsetName) {
      charset = Charsets[props.charsetName];
    } else {
      return;
    }
    const question = Helper.randomKey(charset);
    const unshuffledAnswers = [buildAnswer(charset[question])];
    for (let i = 0; i < 3; i += 1) {
      unshuffledAnswers.push(buildAnswer(Helper.randomElement(charset)));
    }
    const answers = unshuffledAnswers.map(a => [Math.random(), a]).sort((a, b) => +a[0] - +b[0]).map(a => a[1]);
    return { type: Constants.NEW_QUESTION, question, answers };
  },
  setCharset: (charsetName: string) => ({ type: Constants.SET_CHARSET, charsetName }),
};

export default Actions;
