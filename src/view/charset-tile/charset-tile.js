import React from 'react';
import ClassNames from 'classnames/bind';
import './charset-tile.scss';


class CharsetTile extends React.Component {
    handleClick = () => {
      const { onClick } = this.props;
      if (onClick) {
        onClick(this.props);
      }
    }

    klassNames = () => {
      const classes = ['charset-tile'];
      if (!this.props.onClick) {
        classes.push('charset-tile__disabled');
      }
      return ClassNames(classes);
    }

    render() {
      return (<div className={this.klassNames()} onClick={this.handleClick}>{this.props.charsetName}</div>);
    }
}

export default CharsetTile;
