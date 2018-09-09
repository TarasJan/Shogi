import Constants from './../constants';
import Helper from './../helpers';
import Charsets from '../helpers/charsets/charsets';

const Actions = {
    sendNewQuestion: (props) => {
        let charset;
        if(props.charset){
            charset = props.charset;
        } else if (props.charsetName) {
            charset = Charsets[props.charsetName];
        } else {
            return;
        }
        const question = Helper.randomKey(charset);
        let answers = [{
            text: charset[question],
            color: 'tuna'
        }];
        for(let i =0; i < 3; i++) {
            answers.push({
            text: Helper.randomElement(charset),
            color: 'tuna'
            });
        }
        answers = answers.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        return {type: Constants.NEW_QUESTION, question, answers };
    },
    answerQuestion: (props) => {
        const {text, question, charset} = props;
        const correctly = charset[question] === text;
        return {type: Constants.ANSWER_QUESTION, correctly};
    },
    increaseScore: (delta) => ( {type: Constants.INCREASE_SCORE, delta} ),
    resetScore: (value) => ( {type: Constants.RESET_SCORE, value} ),
    setCharset: (charsetName) => ( {type: Constants.SET_CHARSET, charsetName} )
}

export default Actions;