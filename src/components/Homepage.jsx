import React from "react";
import {dataApi} from "./Api";
import Avatar from "./Avatar";
import Buttons from "./buttons";
import Counter from "./counter";



export default class GetUsers extends React.Component {
  
    state = {
        url: "",
        like: 0,
        dislike: 0,
      };
    
      getImg = async () => {
        const url = await dataApi.dataApi();
        this.setState({ url });
        console.log(url);
      };
    
      componentDidMount() {
        this.getImg();
      }
    
      addingCounter = (status) => {
        if (status === "Like") {
          this.setState({ like: this.state.like + 1 });
          
        } else {
          this.setState({ dislike: this.state.dislike+ 1 });
         
        }
      };
    
      render() {
        return (
          <div className="container">
            <div className="wrapper">
              <Counter
                like={this.state.like}
                dislike={this.state.dislike}
              />
            </div>
            <div className="wrapper">
              <Avatar url={this.state.url} />
            </div>
            <div className="wrapper">
              <Buttons
                generateImg={this.getImg}
                addingCounter={this.addingCounter}
              />
            </div>
          </div>
        );
      }
}
