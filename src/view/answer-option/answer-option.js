import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';
import './answer-option.css';


const propTypes = {
  question: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  index: PropTypes.number,
  charset: PropTypes.object,
  question: PropTypes.string
};

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

AnswerOption.propTypes = propTypes;


export default AnswerOption;