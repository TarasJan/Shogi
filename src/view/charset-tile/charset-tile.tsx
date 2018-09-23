import * as React from 'react';
import classnames from 'classnames';
import './charset-tile.scss';

interface ICharsetTileProps {
  onClick?: (ev: any) => void,
  charsetName: string 
}

class CharsetTile extends React.Component<ICharsetTileProps> {
  public render() {
    return (<div className={this.klassNames()} onClick={this.handleClick}>{this.props.charsetName}</div>);
  }

  private handleClick = () => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(this.props);
    }
  }

  private klassNames = () => {
    const classes = ['charset-tile'];
    if (!this.props.onClick) {
      classes.push('charset-tile__disabled');
    }
    return classnames(classes);
  }
}

export default CharsetTile;
