import * as React from 'react';
import { connect } from 'react-redux';
import Slider from '../../components/slider';
import Avatar from '../../view/user/avatar';
import LevelBadge from '../../view/user/level-badge';
import ProgressBar from '../../view/user/progress-bar';
import './user-slider.scss';

interface IUserModel {
  avatarId: string | null // name corresponding to the file of the avatar
  charsets: string[],
  exp: number, 
  level: number,
  name: string,
  status: string | null // status message of the user
}

interface IUserState {
  user?: IUserModel,
}

const mapStateToProps = (state: IUserState) => {
  const { user } = state;
  return { user };
};

class UserSlider extends React.Component<IUserState> {
  public render() {
    let name = 'Unknown';
    let charsets = [];
    let level =0;
    let exp = 0;
    let avatarId = null;
    let status = null;
    const { user } = this.props;
    if (user) {
      (
        {
          avatarId,
          charsets,
          level,
          exp,
          name,
          status
        } = user
      );
    }
    return (
      <Slider className="user-slider">
        <div className='user-slider__content'>
          <Avatar id={avatarId} name={name} status={status} />
          <LevelBadge level={level} />
          <ProgressBar exp={exp} limit={1000} />
        </div>
      </Slider>
    );
  }
}

export default connect(mapStateToProps)(UserSlider);
