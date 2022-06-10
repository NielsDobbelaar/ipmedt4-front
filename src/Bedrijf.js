import React from "react";
import './bedrijf.css';

class Bedrijf extends React.Component {
    state = {  } 
     

    render() { 
        return (
        <article>
            <article className="bedrijfInfoArticle">
            <h1>{this.props.bedrijfObject.mil_locationname}</h1>
            <section className="bedrijfInfoArticle__section">
                <h2>Mil informatie:</h2>
                <ul>
                    <li>mil_locationname: {this.props.bedrijfObject.mil_locationname} </li>
                    <li>mil_type: {this.props.bedrijfObject.mil_type} </li>
                    <li>mil_activity: {this.props.bedrijfObject.mil_activity} </li>
                    <li>mil_activitycode: {this.props.bedrijfObject.mil_activitycode} </li>
                </ul>
            </section>
            <section className="bedrijfInfoArticle__section">
                <h2>vest informatie:</h2>
                <ul>
                    <li>vest_name: {this.props.bedrijfObject.vest_name} </li>
                    <li>vest_activity: {this.props.bedrijfObject.vest_activity} </li>
                    <li>vest_activitycode: {this.props.bedrijfObject.vest_activitycode} </li>
                    <li>vest_employeescode: {this.props.bedrijfObject.vest_employeescode} </li>
                </ul>
            </section>
            <section className="bedrijfInfoArticle__section">
                <h2>kvk informatie:</h2>
                <ul>
                    <li>kvk_businessnumber: {this.props.bedrijfObject.kvk_businessnumber} </li>
                    <li>kvk_activity: {this.props.bedrijfObject.kvk_activity} </li>
                    <li>kvk_activitycode: {this.props.bedrijfObject.kvk_activitycode} </li>
                </ul>
            </section>
            <section className="bedrijfInfoArticle__section">
                <h2>woz informatie:</h2>
                <ul>
                    <li>woz_number: {this.props.bedrijfObject.woz_number} </li>
                    <li>woz_usage: {this.props.bedrijfObject.woz_usage} </li>
                    <li>woz_size_normalized: {this.props.bedrijfObject.woz_size_normalized} </li>
                </ul>
            </section>
            <section className="bedrijfInfoArticle__section">
                <h2>bag informatie:</h2>
                <ul>
                    <li>bag_number: {this.props.bedrijfObject.bag_number} </li>
                    <li>bag_usage: {this.props.bedrijfObject.bag_usage} </li>
                </ul>
            </section>
            </article>


            <section className="buttonSection">
                <button onClick={()=> this.props.showPage("map")}>Terug</button>
                <button onClick={()=> this.props.showPage("irrelevant")}>Irrelevant</button>
                <button onClick={()=> this.props.showPage("planLijst")}>Zet op Planlijst</button>
            </section>
        </article>
        );
    }
}
 
export default Bedrijf;