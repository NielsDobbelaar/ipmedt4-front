import React from "react";
import './planLijst.css';
import NavBar from './components/navbar/NavBar.js';

class PlanLijst extends React.Component {
    state = {  } 

    render() { 
        return (
        <div className="container">
            <NavBar></NavBar>
            <article className="card">
                <button className="back" onClick={(e)=> {e.preventDefault(); this.props.showPage("bedrijf")}}>&lt; Terug</button>
                <h1>Planlijst</h1>
            <section>
                <form class="bedrijfForm" action="127.0.0.7:8000" method="GET"> 
                    <h2>{this.props.bedrijfObject.mil_locationname}</h2>
                    
                    <label htmlFor="reden">Waarom gaat het bedrijf naar de Planlijst?</label>
                    <select name="reden" id="reden">
                        <option value="SBI is relevant">SBI is niet relevant</option>
                        <option value="relevant op basis van WOZ-gegevens">Niet relevant op basis van WOZ-gegevens</option>
                        <option value="Bedrijf is groot genoeg">Bedrijf is te klein</option>
                    </select>

                    <label htmlFor="aantekening">Aantekening/Toelichting</label>
                    <textarea name="aantekening" id="aantekening" placeholder="Vul hier je aantekening/toelichting in"/>

                    <input type="submit" value="Versturen" />
                    </form>
               </section>
            </article>
        </div>
        );
    }
}
 
export default PlanLijst;