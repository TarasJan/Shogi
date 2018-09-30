import * as React from 'react';
import AvatarStatus from './avatar-status';

interface IAvatar {
  id: string | null, // id of user portrait
  name: string // username
  status: string | null // status set by the user
}

class Avatar extends React.Component<IAvatar> {
  public render() {
    const {id, name, status} = this.props;
    return <div>
      {this.renderAvatar(id)}
      <AvatarStatus name={name} status={status} />
    </div>;
  }
  
  private renderAvatar = (id: string | null) => {
    if (id) {
      return <img width={100} height='auto' src={ process.env.PUBLIC_URL +`/${id}.png`} />
    } else {
      return this.defaultAvatar();
    }
  }
  
  // default blank avatar
  private defaultAvatar = () => {
    return(
      <svg width="100" height="100">
        <rect width="100" height="100" fill="aliceblue" />
        <circle cx="50" cy="50" r="30" fill="gray" />
        <circle cx="50" cy="150" r="60" fill="gray" />
      </svg>
    );
  }
}

export default Avatar;