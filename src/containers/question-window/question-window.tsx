import * as React from 'react';
import { connect } from 'react-redux';
import Question from '../../view/question/question';
import AnswerOptionBox from '../../view/answer-option-box/answer-option-box';
import './question-window.css';
import Actions from '../../actions/actions';

interface IQuestionWindowState {
  answers?: object[],
  charset?: object[],
  text?: string,
  charsetName?: string,
  question?: string,
  scoreInfo?: {limit: number, score: number},
  onOptionClick?: (ev: any) => void,
  onLoad?: (props: any) => void
}

const mapStateToProps = (state: IQuestionWindowState) => {
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

const mergeProps = (stateProps: IQuestionWindowState, dispatchProps: any, ownProps: any) => {
  const { dispatch } = dispatchProps;
  const { scoreInfo } = stateProps;
  return {
    ...stateProps,
    ...ownProps,
    onLoad: (props: IQuestionWindowState) => { dispatch(Actions.sendNewQuestion(props)); },
    onOptionClick: (props: IQuestionWindowState) => {
      const answerResult = Actions.answerQuestion(props);
      if (answerResult.correctly && scoreInfo ) {
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

class QuestionWindow extends React.Component<IQuestionWindowState> {
  public componentDidMount() {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad(this.props);
    }
  }

  public render() {
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
