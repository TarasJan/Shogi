import * as React from 'react';
import './question.css';
import Scoreboard from '../scoreboard/scoreboard';

interface IQuestionProps {
  question?: string,
  onClick?: (ev:any) => void,
  scoreInfo?: {score: number, limit: number},
  charset?: any
  }


class Question extends React.Component<IQuestionProps> {
  public render() {
    const { question } = this.props;
    return (
      <div className="question" onClick={this.handleClick}>
        { this.renderScoreboard() }
        <div className="question__text">
          {question}
        </div>
      </div>);
  }

  public handleClick = () => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(this.props);
    }
  }

  private renderScoreboard = () => {
    const { scoreInfo } = this.props;
    const { score, limit } = scoreInfo || {score: 0, limit: 0 };
    return <Scoreboard className="question__scoreboard" score={score || 0} limit={limit || 0} />;
  }
}


export default Question;
