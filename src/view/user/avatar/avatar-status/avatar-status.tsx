import * as React from 'react';

interface IAvatarStatus {
  name: string, // username
  status: string | null, // username
}

class AvatarStatus extends React.Component<IAvatarStatus> {
  public render() {
    const { name, status } = this.props;
    return <div>
      <p><strong>{name}</strong></p>
      { this.renderStatus(status) }
    </div>;
    
  }

  private renderStatus = (status: string | null) => {
    if (status === null) {
      return;
    }
    return(<p><i>{status}</i></p>);
  }
}

export default AvatarStatus;