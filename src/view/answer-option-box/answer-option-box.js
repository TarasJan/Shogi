import React from 'react';
import PropTypes from 'prop-types';
import './answer-option-box.css';
import AnswerOption from './../answer-option';

  const propTypes = {
    question: PropTypes.string,
    answers:  PropTypes.array,
    onClick: PropTypes.func,
    charset: PropTypes.object
  };

class AnswerOptionBox extends React.Component {
  renderOptions = () => {
    const { answers, question } = this.props;
    if (answers.length > 0) {
      return answers.map((answer, index) => {
        const { text, color } = answer;
        return <AnswerOption 
          text={ text }
          color={ color }
          key={ index }
          index = { index }
          question={ question }
          onClick={this.props.onClick}
          charset={this.props.charset}
          />
      });
    }
    return null;
  }

  render() {
    return <div className={ 'answer-option-box' }>{ this.renderOptions() }</div>;
  }
}

AnswerOptionBox.propTypes = propTypes;

export default AnswerOptionBox;