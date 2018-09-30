import * as React from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions/actions';
import Charsets from '../../helpers/charsets';
import CharsetTile from '../../view/charset-tile';
import './charset-bar.css';

interface ICharsetBarProps {
  charset?: object[],
  text?: string,
  charsetName?: string,
  onTileClick?: (ev: any) => void,
  question?: string
}

interface IStateProps {
  charset: object
}

const mapStateToProps = (state: IStateProps) => {
  const { charset } = state;
  return { charset };
};

const mergeProps = (stateProps: IStateProps, dispatchProps: any) => {
  const { dispatch } = dispatchProps;
  const { charset } = stateProps;
  return {
    charset,
    onTileClick: (props: ICharsetBarProps) => {
      if(props && props.charsetName) {
        dispatch(Actions.setCharset(props.charsetName));
        dispatch(Actions.resetScore(0));
        dispatch(Actions.sendNewQuestion(props));
      }
    },
  };
};


class CharsetBar extends React.Component<ICharsetBarProps> {
  public render() {
    return <div className="charset-bar">{ this.renderTiles() }</div>;
  }

  private renderTiles = () => {
    const { charset, onTileClick } = this.props;
    return Object.keys(Charsets).map((name) => {
      const onClick = (charset === Charsets[name]) ? undefined : onTileClick;
      return <CharsetTile
        charsetName={name}
        key={name}
        onClick={onClick}
        symbol={Charsets[name].symbol}
      />;
    });
  }

}


export default connect(mapStateToProps, null, mergeProps)(CharsetBar);
