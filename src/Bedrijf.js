import React from "react";
import './bedrijf.css';

class Bedrijf extends React.Component {
    state = {  } 

    render() { 
        return (
        <section>
            <h1>{this.props.bedrijfID}</h1>
            <button onClick={this.props.showMap}>Terug</button>
        </section>
        );
    }
}
 
export default Bedrijf;