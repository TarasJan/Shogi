import * as React from 'react';
import './progress-bar.scss'

interface IProgressBar {
  exp: number, // number of experience in the bar
  limit: number, // limit of experience in the bar
}

class ProgressBar extends React.Component<IProgressBar> {
  public render() {
    return(
    <svg className='progress-bar'>
      <rect className='progress-bar__base' />
      <rect className='progress-bar__fill' width={this.barWidth()}/>
      <text
          x="50%"
          y="50%"
          alignment-baseline="middle"
          text-anchor="middle"
        >
        {this.barText()}
        </text>
    </svg>
    );
  }
  
  private barText = () => {
    const { exp, limit } = this.props;
    return `Exp: ${exp} / ${limit}`;
  }
  
  private barWidth = () => {
    const { exp, limit } = this.props;
    return `${100 * Math.min((exp/limit), 1)}%`
  }
}

export default ProgressBar;