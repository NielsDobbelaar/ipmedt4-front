import React from "react";
import './App.css';
import Header from './components/header/Header';
// import NavBar from './components/navbar/NavBar';
// import Introduction from './components/content/Introduction';


import MyMap from "./MyMap";
import Bedrijf from "./Bedrijf";
import Irrelevant from "./Irrelevant";
import Planlijst from "./PlanLijst";

class App extends React.Component {
  state = { showing: "map", currentBedrijf: ""} 

  
  setBedrijf = (bedrijfID) => {
    this.setState({currentBedrijf: bedrijfID});

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
    // vraag me niet waarom maar hij spit errors als deze lijn niet in setTimeout staat ookal is het letterlijk 0 seconden delay
    setTimeout(() => {
      this.setState({showing: page})
    }, 0);
  }

  render() { 
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
