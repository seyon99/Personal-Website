import React, {useEffect, useState} from "react";
import './Home.css'

class Home extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        animationClass: 'test'
      }
      this.changeState = this.changeState.bind(this);
    }
    
    changeState(){
      if(this.state.animationClass === 'test'){
        this.setState({
          animationClass: 'test paused'
        });
      }else{
        this.setState({
          animationClass: 'test'
        });
      }
    }
    render() {
      return(
      <div className={this.state.animationClass}>
        <h1 className="homeTitle">Seyon Kuganesan</h1>
        {/* <p>Hello! I Study Computer Science at the University of Toronto and I am passionate about software development. I have interned at Ciena and Interac in Software Engineering and Site Reliability Engineering roles respectively.
            Thanks for visiting my website, and please feel free to contact me!
            </p> */}
      </div>
      );
    }
  }
  
  /*
   * Render the above component into the div#app
   */
export default Home;