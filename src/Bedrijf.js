import React from "react";
import './bedrijf.css';

class Bedrijf extends React.Component {
    state = {  } 

    render() { 
        return (
        <section>
            <h1>{this.props.bedrijfID}</h1>
            <button onClick={()=> this.props.showPage("map")}>Terug</button>
            <button onClick={()=> this.props.showPage("irrelevant")}>Irrelevant</button>
            <button onClick={()=> this.props.showPage("planLijst")}>Zet op Planlijst</button>
        </section>
        );
    }
}
 
export default Bedrijf;