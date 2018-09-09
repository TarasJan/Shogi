import React from 'react';
import　{　connect　}　from　'react-redux';
import Actions from '../../actions/actions';
import Charsets from './../../helpers/charsets';
import CharsetTile from './../../view/charset-tile';
import './charset-bar.css';


const mapStateToProps = state => {
    const { charset } = state;
    return {charset};
  };
  
  const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { charset } = stateProps;
    return {
      charset,
      onTileClick: (props) => {
        dispatch(Actions.setCharset(props.charsetName));
        dispatch(Actions.resetScore(0));
        dispatch(Actions.sendNewQuestion(props))
      }
    }
  };


class CharsetBar extends React.Component {
  renderTiles = () => {
    const {charset, onTileClick} = this.props;
    debugger;
    return Object.keys(Charsets).map((name) => {
      const onClick = (charset === Charsets[name]) ? undefined : onTileClick;
      return <CharsetTile onClick={onClick} charsetName={name} key={name} />
   });
  }

  render() {
      return <div className={'charset-bar'}>{ this.renderTiles() }</div>
  }
}

export default connect(mapStateToProps, null, mergeProps)(CharsetBar);