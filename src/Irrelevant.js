import React from "react";
import './irrelevant.css';
import NavBar from './components/navbar/NavBar.js';

class Irrelevant extends React.Component {
    state = { reden: "", opmerking:"", mil_locationname: this.props.bedrijfObject.mil_locationname } 

    onRedenChange = (e) => {
        this.setState({reden: e.target.value});
    }

    onAantekeningChange = (e) => {
        this.setState({opmerking: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.setIrrelevant(this.state);
        this.props.showPage("map");
    }

    render() { 
        return (
        <div className="container">
            <NavBar></NavBar>
            <article className="card">
            <button className="back" onClick={(e)=> {e.preventDefault(); this.props.showPage("bedrijf")}}>&lt; Terug</button>
            <h1>Irrelevant</h1>
            <section>
                <form className="bedrijfForm" onSubmit={this.onSubmit}> 
                    <h2>{this.props.bedrijfObject.mil_locationname}</h2>
                    
                    <label htmlFor="reden">Waarom is het bedrijf irrelevant?</label>
                    <select onChange={this.onRedenChange} name="reden" id="reden">
                        <option value="Bedrijf is al bekend">Bedrijf is al bekend</option>
                        <option value="Bedrijf is al eerder afgekeurd">Bedrijf is al eerder afgekeurd</option>
                        <option value="SBI is niet relevant">SBI is niet relevant</option>
                        <option value="Niet relevant op basis van WOZ-gegevens">Niet relevant op basis van WOZ-gegevens</option>
                        <option value="Bedrijf is te klein">Bedrijf is te klein</option>
                    </select>

                    <label htmlFor="aantekening">Aantekening/Toelichting</label>
                    <textarea onChange={this.onAantekeningChange} name="aantekening" id="aantekening" placeholder="Vul hier je aantekening/toelichting in"/>

                    <input type="submit" value="Versturen" />
                    </form>
               </section>
            </article>
        </div>
        );
    }
}
 
export default Irrelevant;