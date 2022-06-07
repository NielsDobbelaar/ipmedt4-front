import React from "react";
import './App.css';


import MyMap from "./MyMap";
import Bedrijf from "./Bedrijf";

class App extends React.Component {
  state = { showingBedrijf: false, currentBedrijf: "test"} 

  
  showBedrijf = (bedrijfID) => {
    this.setState({currentBedrijf: bedrijfID, showingBedrijf: true})

  }

  showMap = () => {
    this.setState({currentBedrijf: "", showingBedrijf: false})
  }

  render() { 
    if(this.state.showingBedrijf){
      return(
        <Bedrijf bedrijfID={this.state.currentBedrijf} showMap={this.showMap}></Bedrijf>
      )
    }
    return (
      <MyMap showBedrijf={this.showBedrijf}/>
    );
  }
}
 
export default App;
