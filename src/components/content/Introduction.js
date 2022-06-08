import React from "react";
import "./Introduction.css";
import Header from "../../components/header/Header";
import illustration from '../../assets/illustration-1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Introduction = () => {
    return (
        <Router>
            <div className="introduction">
                <img src={illustration} alt="Illustration"/>
                <div className="intro-text">
                    <h1>Datagestuurd milieutoezicht</h1>
                    <p>De milieu navigator combineert meerdere databronnen en bepaalt op basis van slimme algoritmes waar zich bedrijven bevinden met een potentieel mileurisico.</p>
                </div>
                <Link to="/" className="intro-btns">
                    <button className="btn">Verder →</button>
                    {/* <FontAwesomeIcon icon={solid('arrow-right')} /> */}
                </Link>

                {/* <Switch>
                    <Route path="/about" component={About} />
                </Switch> */}
            </div>
        </Router>
    );
};

function About() {
    return <h2>Test</h2>
}

export default Introduction;