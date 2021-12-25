import React from 'react'

class Counter extends React.Component{
    render() {
        return (
          <div className="counterContainer">
            <p className="like">👍🏽 {this.props.like}</p>
            <p className="dislike">👎🏽 {this.props.dislike}</p>
          </div>
        );
      }
}
export default Counter