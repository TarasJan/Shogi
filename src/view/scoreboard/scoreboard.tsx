import * as React from 'react';

export default class Scoreboard extends React.Component<{limit?: number, score?: number, className?: string}> {
    public render() {
      const { limit, score } = this.props;
      const limitSuffix = limit ? ` of ${limit}` : null;
      const text = `${score}${limitSuffix}`;
      return (<p className="question__scoreboard">{text}</p>);
    }
}
