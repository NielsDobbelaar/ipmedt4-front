import React from "react";
import './planLijst.css';

class PlanLijst extends React.Component {
    state = {  } 

    render() { 
        return (
            <article>
            <h1>PlanLijst</h1>
            <section>
                <form action="127.0.0.7:8000" method="GET"> 
                    <h2>{this.props.bedrijfObject.mil_locationname}</h2>
                    
                    <label htmlFor="reden">Waarom gaat het bedrijf naar de PlanLijst:</label>
                    <select name="reden" id="reden">
                    <option value="SBI is relevant">SBI is niet relevant</option>
                    <option value="relevant op basis van WOZ-gegevens">Niet relevant op basis van WOZ-gegevens</option>
                    <option value="Bedrijf is groot genoeg">Bedrijf is te klein</option>
                    </select>

                    <label htmlFor="aantekening">Aantekening/Toelichting</label>
                    <input type="text" name="aantekening" id="aantekening"></input>

                    <button onClick={(e)=> {e.preventDefault(); this.props.showPage("bedrijf")}}>Terug</button>
                    <input type="submit" value="submit" />
                    </form>
               </section>
            </article>
        );
    }
}
 
export default PlanLijst;