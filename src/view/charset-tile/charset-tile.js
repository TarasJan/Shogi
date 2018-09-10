import React from 'react';
import PropTypes from 'prop-types'
import ClassNames from 'classnames/bind';
import './charset-tile.scss'


class CharsetTile extends React.Component {
    propTypes = {
        charsetName: PropTypes.string,
        onClick: PropTypes.func
    }

    handleClick = () => {
        if(this.props.onClick) this.props.onClick(this.props);
    }

    klassNames = () => {
        const classes = ['charset-tile'];
        if (!this.props.onClick) classes.push('charset-tile__disabled');
        return ClassNames(classes);
    }

    render() {
        return(<div className={this.klassNames()} onClick={this.handleClick} >{this.props.charsetName}</div>);
    }
}

export default CharsetTile;