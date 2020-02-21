import React, { Component } from "react";
import ExampleComponent from "react-rounded-image";
import MyPhoto from "./me.jpg";
 
class Try extends Component {

    // click =() => {
    //     alert("click")
    // }
  
  render() {
    let active = true;
    return (
      <div style={{backgroundColor: '#34afb8', display:'flex'}}>
        <ExampleComponent
          image={MyPhoto}
          roundedColor= {active ? "#FFFFFF" : ""}
          imageWidth="120"
          imageHeight="120"
          roundedSize="6"
          //onClick={this.click()}
        />
        <ExampleComponent
          image={MyPhoto}
          imageWidth="100"
          imageHeight="100"
          roundedSize=""
        />
        <ExampleComponent
          image={MyPhoto}
          imageWidth="100"
          imageHeight="100"
          roundedSize="1"
        />
        <ExampleComponent
          image={MyPhoto}
          imageWidth="100"
          imageHeight="100"
          roundedSize="1"
        />
 
        
      </div>
    );
  }
}

export default  Try;