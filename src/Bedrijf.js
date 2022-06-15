import React from "react";
import './bedrijf.css';
import NavBar from './components/navbar/NavBar.js';

class Bedrijf extends React.Component {
    state = {  } 
     

    render() { 

        let buttons;
        if(this.props.bedrijfObject.status ==="onbekend"){
            buttons = <section className="buttonSection">
            <button className="btn1" onClick={()=> this.props.showPage("irrelevant")}>Irrelevant</button>
            <button className="btn2" onClick={()=> this.props.showPage("planLijst")}>Zet op Planlijst</button>
        </section>;
        }

        return (
            <div className="container">
                <NavBar></NavBar>
                <article className="card">
                    <button className="back" onClick={()=> this.props.showPage("map")}>&lt; Terug</button>
                    <article className="bedrijfInfoArticle">
                        <h1>{this.props.bedrijfObject.mil_locationname}</h1>
                        <h3>{this.props.bedrijfObject.mil_activitycode}</h3>
                        <h4>{this.props.bedrijfObject.vest_activity}</h4>
                        <section className="bedrijfInfoArticle__section">
                            <h2>Milieu informatie</h2>
                            <ul>
                                <li><p>Locatienaam&nbsp;</p>{this.props.bedrijfObject.mil_locationname} </li>
                                <li><p>Type&nbsp;</p>{this.props.bedrijfObject.mil_type} </li>
                                <li><p>Activiteit&nbsp;</p>{this.props.bedrijfObject.mil_activity} </li>
                                <li><p>Activiteitscode&nbsp;</p>{this.props.bedrijfObject.mil_activitycode} </li>
                            </ul>
                        </section>
                        <section className="bedrijfInfoArticle__section">
                            <h2>Vestigingsregister</h2>
                            <ul>
                                <li><p>Vestigingsnaam&nbsp;</p>{this.props.bedrijfObject.vest_name} </li>
                                <li><p>Vestiginsactiviteit&nbsp;</p>{this.props.bedrijfObject.vest_activity} </li>
                                <li><p>Vestigingsactiviteitcode&nbsp;</p>{this.props.bedrijfObject.vest_activitycode} </li>
                                <li><p>Werknemers vestiging&nbsp;</p>{this.props.bedrijfObject.vest_employeescode} </li>
                            </ul>
                        </section>
                        <section className="bedrijfInfoArticle__section">
                            <h2>KVK</h2>
                            <ul>
                                <li><p>KVK-nummer&nbsp;</p>{this.props.bedrijfObject.kvk_businessnumber} </li>
                                <li><p>Activiteit&nbsp;</p>{this.props.bedrijfObject.kvk_activity} </li>
                                <li><p>Activiteitscode&nbsp;</p>{this.props.bedrijfObject.kvk_activitycode} </li>
                            </ul>
                        </section>
                        <section className="bedrijfInfoArticle__section">
                            <h2>WOZ</h2>
                            <ul>
                                <li><p>WOZ-nummer&nbsp;</p>{this.props.bedrijfObject.woz_number} </li>
                                <li><p>Gebruikersfunctie&nbsp;</p>{this.props.bedrijfObject.woz_usage} </li>
                                <li><p>Oppervlakte &#40;&#13217;&#41;&nbsp;</p>{this.props.bedrijfObject.woz_size_normalized} </li>
                            </ul>
                        </section>
                        <section className="bedrijfInfoArticle__section">
                            <h2>BAG</h2>
                            <ul>
                                <li><p>BAG-nummer&nbsp;</p>{this.props.bedrijfObject.bag_number} </li>
                                <li><p>Gebruikersfunctie&nbsp;</p>{this.props.bedrijfObject.bag_usage} </li>
                            </ul>
                        </section>
                    </article>

                    {buttons}
                    
                </article>
            </div>
        );
    }
}
 
export default Bedrijf;