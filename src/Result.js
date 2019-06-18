import React, {Component} from 'react';


class Result extends Component {

  render() {
    return (
      <div>
      <h1>  {this.props.name} directed, wrote and starred in everyone's favorite movie, {this.props.favMovie}</h1>
      </div>
      )
  }
}

export default Result;
