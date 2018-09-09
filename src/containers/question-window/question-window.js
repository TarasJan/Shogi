import React from 'react';
import PropTypes from 'prop-types';
import　{　connect　}　from　'react-redux';
import Question from '../../view/question/question';
import AnswerOptionBox from '../../view/answer-option-box';
import './question-window.css';
import Actions from '../../actions/actions';

const propTypes = {
  question: PropTypes.string,
  answers: PropTypes.array,
  onClick: PropTypes.func
};

const mapStateToProps = state => {
  const {question, answers, charset, scoreInfo} = state;
  return {
    question,
    answers,
    charset,
    scoreInfo
  }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {dispatch} = dispatchProps;
  const {scoreInfo} = stateProps;
  return {
    ...stateProps,
    ...ownProps,
    onLoad: (props) => { dispatch(Actions.sendNewQuestion(props)) },
    onOptionClick: (props) => {
      const answerResult = Actions.answerQuestion(props);
      if(answerResult.correctly) {
        if (scoreInfo.limit-1 <= scoreInfo.score) {
          dispatch(Actions.increaseScore(-scoreInfo.score));
        } else {
          dispatch(Actions.increaseScore(1));
        }
      } 
      dispatch(answerResult);
  
      const nextQuestion = Actions.sendNewQuestion(props);
      setTimeout(dispatch, 1000, nextQuestion);
    }
  }
}

class QuestionWindow extends React.Component {
  componentDidMount() {
    this.props.onLoad(this.props);
  }

  render() {
    return (<div className='question-window'>
        <Question question={this.props.question} charset={this.props.charset} scoreInfo={this.props.scoreInfo} />
        <AnswerOptionBox question={this.props.question} answers={this.props.answers} onClick={this.props.onOptionClick}  charset={this.props.charset}/>
  </div>);
  }
}

QuestionWindow.propTypes = propTypes;

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(QuestionWindow);
