import React from "react";
import './App.css';
import Header from './components/header/Header';
// import NavBar from './components/navbar/NavBar';
// import Introduction from './components/content/Introduction';

import MyMap from "./MyMap";
import Bedrijf from "./Bedrijf";
import Irrelevant from "./Irrelevant";
import Planlijst from "./PlanLijst";
import Home from "./Home";


class App extends React.Component {
  state = { showing: "map", currentBedrijf: "" }


  setBedrijf = (bedrijfObject) => {
    this.setState({ currentBedrijf: bedrijfObject });

  }

  setIrrelevant = (bedrijfObject) => {
    //implement setirrelevant
    console.log("setIrrelevant")
  }

  setToPlanlijst = (bedrijfObject) => {
    //implement setToPlanLijst
    console.log("setToPlanLijst");
  }

  setToMymap = (bedrijfObject) => {
    console.log("setToMymap");
  }

  showPage = (page) => {
    // vraag me niet waarom maar hij spit errors als deze lijn niet in setTimeout staat ookal is het letterlijk 0 seconden delay
    setTimeout(() => {
      this.setState({ showing: page })
    }, 0);
  }

  render() {
    switch (this.state.showing) {
      case "bedrijf":
        return <Bedrijf bedrijfObject={this.state.currentBedrijf} showPage={this.showPage}></Bedrijf>
      case "irrelevant":
        return <Irrelevant bedrijfObject={this.state.currentBedrijf} showPage={this.showPage} setIrrelevant={this.setIrrelevant}></Irrelevant>
      case "planLijst":
        return <Planlijst bedrijfObject={this.state.currentBedrijf} showPage={this.showPage} setToPlanlijst={this.setToPlanlijst} ></Planlijst>
      case "Mymap":
        return <MyMap bedrijfObject={this.state.currentBedrijf} showPage={this.showPage} setToMymap={this.setToPlanlijst}></MyMap>
      default:
        // return <MyMap setBedrijf={this.setBedrijf} showPage={this.showPage} />
        return <Home setBedrijf={this.setBedrijf} showPage={this.showPage} />
    }

  }
}

export default App;
