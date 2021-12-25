import React from "react";

class Buttons extends React.Component{

    newImg = async (e) => {
        this.props.addingCounter(e.target.textContent);
        this.props.getImg();
      };
    
      render() {
        return (
          <div className="voteContainer">
            <button onClick={(e) => this.newImg(e)}>Like</button>
            <button onClick={(e) => this.newImg(e)}>Dislike</button>
          </div>
        );
      }
    }
    export default Buttons