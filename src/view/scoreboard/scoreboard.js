import React from 'react';
import PropTypes from 'prop-types';

export default class Scoreboard extends React.Component {
    props = {
        score: PropTypes.number,
        limit: PropTypes.number
    }

    render() {
        const {score, limit} = this.props;
        const limitSuffix = limit ? ` of ${limit}` : null;
        const text = `${score}${limitSuffix}`;
        return(<p className='question__scoreboard'>{text}</p>);
    }
    
};