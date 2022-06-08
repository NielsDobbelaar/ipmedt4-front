import React from "react";
import './App.css';


import MyMap from "./MyMap";
import Bedrijf from "./Bedrijf";
import Irrelevant from "./Irrelevant";
import Planlijst from "./PlanLijst";

class App extends React.Component {
  state = { showing: "map", currentBedrijf: ""} 

  
  setBedrijf = (bedrijfID) => {
    this.setState({currentBedrijf: bedrijfID});
    console.log(1)

  }

  setIrrelevant = (bedrijfID) => {
    //implement setirrelevant
    console.log("setIrrelevant")
  }

  setToPlanlijst = (bedrijfID) => {
    //implement setToPlanLijst
    console.log("setToPlanLijst");
  }

  showPage = (page) =>{
    this.setState({showing: page})
  }

  render() { 
    console.log(this.state)
    switch (this.state.showing){
      case "bedrijf": 
        return <Bedrijf bedrijfID={this.state.currentBedrijf} showPage={this.showPage}></Bedrijf>
      case "irrelevant":
        return <Irrelevant bedrijfID={this.state.currentBedrijf} showPage={this.showPage} setIrrelevant={this.setIrrelevant}></Irrelevant>
      case "planLijst":
        return <Planlijst bedrijfID={this.state.currentBedrijf} showPage={this.showPage} setToPlanlijst={this.setToPlanlijst} ></Planlijst>
      default:
        return <MyMap setBedrijf={this.setBedrijf} showPage={this.showPage}/>
    }

  }
}
 
export default App;
