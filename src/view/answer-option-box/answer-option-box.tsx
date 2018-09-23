import * as React from 'react';
import './answer-option-box.css';
import AnswerOption from '../answer-option';

class AnswerOptionBox extends React.Component<{question?: string, answers: any, charset?: any, onClick?: (ev: any) => void}> {
  public render() {
    return <div className="answer-option-box">{ this.renderOptions() }</div>;
  }

  private renderOptions = () => {
    const { answers, question } = this.props;
    if (answers.length > 0) {
      return answers.map((answer: {text: string, color: string}, index: number) => {
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

}

export default AnswerOptionBox;
