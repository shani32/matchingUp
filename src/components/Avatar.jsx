import React from 'react';



export default class Avatar extends React.Component {
    
    renderImg = () => {
        return <img src={this.props.url} alt="Random Img" />;
      };
    
      render() {
        return <div className="img-container">{this.renderImg()}</div>;
      }

}