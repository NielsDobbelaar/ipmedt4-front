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
  showBedrijf = () => {
    this.setState({showing: "bedrijf"});
    console.log(2)
  }

  showMap = () => {
    this.setState({currentBedrijf: "", showing: "map"})
  }

  showIrrelevant = () => {
    this.setState({showing: "irrelevant"});
  }

  showPlanLijst = () => {
    this.setState({showing: "planLijst"});
  }

  setIrrelevant = (bedrijfID) => {
    //implement setirrelevant
    console.log("setIrrelevant")
  }

  setToPlanlijst = (bedrijfID) => {
    //implement setToPlanLijst
    console.log("setToPlanLijst");
  }

  render() { 
    switch (this.state.showing){
      case "bedrijf": 
        return <Bedrijf bedrijfID={this.state.currentBedrijf} showMap={this.showMap} showPlanLijst={this.showPlanLijst} showIrrelevant={this.showIrrelevant}></Bedrijf>
      case "irrelevant":
        return <Irrelevant bedrijfID={this.state.currentBedrijf} showMap={this.showMap} setIrrelevant={this.setIrrelevant} showBedrijf={this.showBedrijf}></Irrelevant>
      case "planLijst":
        return <Planlijst bedrijfID={this.state.currentBedrijf} showMap={this.showMap} showBedrijf={this.showBedrijf} setToPlanlijst={this.setToPlanlijst} ></Planlijst>
      default:
        return <MyMap setBedrijf={this.setBedrijf} showBedrijf={this.showBedrijf}/>
    }

  }
}
 
export default App;
