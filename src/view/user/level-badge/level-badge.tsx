import * as React from 'react';

interface ILevelBadge {
  level: number, // current level of the player
}

class LevelBadge extends React.Component<ILevelBadge> {
  public render() {
    const {level} = this.props;
    const size = 80;
    const radius = 2* size / 5;
    return(
      <svg width={size} height={size}>
        <rect width={size} height={size} fill="white" />
        <circle cx={size/2} cy={size/2} r={radius} fill="red" />
        <text
          x="50%"
          y="50%"
          alignment-baseline="middle"
          text-anchor="middle"
        >
          {`Lvl ${level || 0}`}
        </text>
      </svg>
    );
  }
}

export default LevelBadge;