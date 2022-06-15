import React from "react";
import './planLijst.css';
import NavBar from './components/navbar/NavBar.js';

class PlanLijst extends React.Component {
    state = { opmerking: "", reden:"", id: this.props.bedrijfObject.id } 


    onRedenChange = (e) => {
        this.setState({reden: e.target.value});
    }

    onAantekeningChange = (e) => {
        this.setState({opmerking: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.setToPlanlijst(this.state);
        this.props.showPage("map");
    }

    render() { 
        return (
        <div className="container">
            <NavBar></NavBar>
            <article className="card">
                <button className="back" onClick={(e)=> {e.preventDefault(); this.props.showPage("bedrijf")}}>&lt; Terug</button>
                <h1>Planlijst</h1>
            <section>
                <form className="bedrijfForm" onSubmit={this.onSubmit}> 
                    <h2>{this.props.bedrijfObject.mil_locationname}</h2>
                    
                    <label htmlFor="reden">Waarom gaat het bedrijf naar de Planlijst?</label>
                    <select onChange={this.onRedenChange} name="reden" id="reden">
                        <option value="SBI is relevant">SBI is relevant</option>
                        <option value="relevant op basis van WOZ-gegevens">relevant op basis van WOZ-gegevens</option>
                        <option value="Bedrijf is groot genoeg">Bedrijf is groot genoeg</option>
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
 
export default PlanLijst;