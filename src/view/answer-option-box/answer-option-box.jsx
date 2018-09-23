import React from 'react';
import './answer-option-box.css';
import AnswerOption from '../answer-option';

class AnswerOptionBox extends React.Component {
  renderOptions = () => {
    const { answers, question } = this.props;
    if (answers.length > 0) {
      return answers.map((answer, index) => {
        const { text, color } = answer;
        const { charset, onClick } = this.props;
        return (
          <AnswerOption
            color={color}
            charset={charset}
            index={index}
            key={index}
            onClick={onClick}
            question={question}
            text={text}
          />
        );
      });
    }
    return null;
  }

  render() {
    return <div className="answer-option-box">{ this.renderOptions() }</div>;
  }
}

export default AnswerOptionBox;
