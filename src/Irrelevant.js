import React from "react";
import './irrelevant.css';

class Irrelevant extends React.Component {
    state = {  } 

    render() { 
        return (
        <article>
            <h1>irrelevant</h1>
            <section>
                <form action="127.0.0.7:8000" method="GET"> 
                    <h2>{this.props.bedrijfObject.mil_locationname}</h2>
                    
                    <label htmlFor="reden">Waarom is het bedrijf irrelevant:</label>
                    <select name="reden" id="reden">
                    <option value="Bedrijf is al bekend">Bedrijf is al bekend</option>
                    <option value="Bedrijf is al eerder afgekeurd">Bedrijf is al eerder afgekeurd</option>
                    <option value="SBI is niet relevant">SBI is niet relevant</option>
                    <option value="Niet relevant op basis van WOZ-gegevens">Niet relevant op basis van WOZ-gegevens</option>
                    <option value="Bedrijf is te klein">Bedrijf is te klein</option>
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
 
export default Irrelevant;