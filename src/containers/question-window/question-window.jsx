import React from 'react';
import { connect } from 'react-redux';
import Question from '../../view/question/question';
import AnswerOptionBox from '../../view/answer-option-box/answer-option-box';
import './question-window.css';
import Actions from '../../actions/actions';

const mapStateToProps = (state) => {
  const {
    question, answers, charset, scoreInfo,
  } = state;
  return {
    answers,
    charset,
    question,
    scoreInfo,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { scoreInfo } = stateProps;
  return {
    ...stateProps,
    ...ownProps,
    onLoad: (props) => { dispatch(Actions.sendNewQuestion(props)); },
    onOptionClick: (props) => {
      const answerResult = Actions.answerQuestion(props);
      if (answerResult.correctly) {
        if (scoreInfo.limit - 1 <= scoreInfo.score) {
          dispatch(Actions.increaseScore(-scoreInfo.score));
        } else {
          dispatch(Actions.increaseScore(1));
        }
      }
      dispatch(answerResult);

      const nextQuestion = Actions.sendNewQuestion(props);
      setTimeout(dispatch, 1000, nextQuestion);
    },
  };
};

class QuestionWindow extends React.Component {
  componentDidMount() {
    const { onLoad } = this.props;
    onLoad(this.props);
  }

  render() {
    const {
      answers, charset, onOptionClick, question, scoreInfo,
    } = this.props;
    return (
      <div className="question-window">
        <Question question={question} charset={charset} scoreInfo={scoreInfo} />
        <AnswerOptionBox question={question} answers={answers} onClick={onOptionClick} charset={charset} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(QuestionWindow);
