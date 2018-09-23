import React from 'react';
import './question.css';
import Scoreboard from '../scoreboard/scoreboard';

class Question extends React.Component {
    handleClick = () => {
      const { onClick } = this.props;
      if (onClick) {
        onClick(this.props);
      }
    }

    renderScoreboard = () => {
      const { scoreInfo } = this.props;
      const { score, limit } = scoreInfo;
      return <Scoreboard className="question__scoreboard" score={score} limit={limit} />;
    }

    render() {
      const { question } = this.props;
      return (
        <div className="question" onClick={this.handleClick}>
          { this.renderScoreboard() }
          <div className="question__text">
            {question}
          </div>
        </div>);
    }
}


export default Question;
