import * as React from 'react';
import classNames from 'classnames';
import './answer-option.scss';

interface IAnswerOptionProps {
  color: string,
  onClick?: (ev: any) => void,
  text?: string,
  charset?: any,
  index: number,
  question?: string
}
class AnswerOption extends React.Component<IAnswerOptionProps> {
  public handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props)
    }
  }
  public render() {
    return <div className={this.classNames()} onClick={this.handleClick}>{this.props.text}</div>;
  }
  private classNames = () => (classNames(['answer-option', `answer-option__${this.props.color}`]));
}


export default AnswerOption;