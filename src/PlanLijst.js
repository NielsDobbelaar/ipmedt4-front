import React from "react";
import './planLijst.css';

class PlanLijst extends React.Component {
    state = {  } 

    render() { 
        return (
        <section>
            <h1>planLijst</h1>
            <h2>{this.props.bedrijfID}</h2>
            <button onClick={()=> this.props.showPage("bedrijf")}>Terug</button>
            <button onClick={() =>{this.props.setToPlanlijst(this.props.bedrijfID); this.props.showPage("map")}}>Verplaats naar Planslijst</button>
        </section>
        );
    }
}
 
export default PlanLijst;