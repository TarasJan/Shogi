import React from 'react';

import ClassNames from 'classnames/bind';
import './answer-option.scss';


class AnswerOption extends React.Component {
  classNames = () => (ClassNames(['answer-option', `answer-option__${this.props.color}`]));
  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props)
    }
  }
  render() {
    return <div className={this.classNames()} onClick={this.handleClick}>{this.props.text}</div>;
  }
}


export default AnswerOption;