import * as React from 'react';
import classnames from 'classnames';
import SelectionBox from '../../components/selection-box';
import './charset-tile.scss';

interface ICharsetTileProps {
  onClick?: (ev: any) => void,
  charsetName: string,
  symbol: string
}

class CharsetTile extends React.Component<ICharsetTileProps> {
  public render() {
    return (
    <SelectionBox
      className={this.klassNames()}
      onClick={this.handleClick}>
        <div className='charset-tile__text'>
          <span><strong>{this.props.symbol}</strong></span><br />
          <span>{this.props.charsetName}</span>
        </div>
    </SelectionBox>);
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
