import React from "react";
import './irrelevant.css';

class Irrelevant extends React.Component {
    state = {  } 

    render() { 
        return (
        <section>
            <h1>irrelevant</h1>
            <h2>{this.props.bedrijfID}</h2>
            <button onClick={this.props.showBedrijf}>Terug</button>
            <button onClick={()=>{this.props.setIrrelevant(this.props.bedrijfID); this.props.showMap()}}>Markeer irrelevant</button>
        </section>
        );
    }
}
 
export default Irrelevant;