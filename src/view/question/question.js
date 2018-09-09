import React from 'react';
import PropTypes from 'prop-types';
import './question.css';
import Scoreboard from '../scoreboard/scoreboard';

const propTypes = {
    question: PropTypes.string,
    onClick: PropTypes.func,
    scoreInfo: PropTypes.object,
    charset: PropTypes.object
}

class Question extends React.Component {

    handleClick = () => {
        if(this.props.onClick) {
            this.props.onClick(this.props);
        }
    }

    renderScoreboard = () => {
        const {score, limit } = this.props.scoreInfo;
        return <Scoreboard className='question__scoreboard' score={ score } limit={ limit } />;
    }

    render() {
        return(
        <div className='question' onClick={this.handleClick}>
            { this.renderScoreboard() }
            <div className='question__text'>
                {this.props.question}
            </div>
        </div>);
    }
}

Question.propTypes = propTypes;

export default Question;