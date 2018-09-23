import React from 'react';

export default class Scoreboard extends React.Component {
    render() {
      const { limit, score } = this.props;
      const limitSuffix = limit ? ` of ${limit}` : null;
      const text = `${score}${limitSuffix}`;
      return (<p className="question__scoreboard">{text}</p>);
    }
}
