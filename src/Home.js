import React from "react";
import "./home.css";
import logo from './assets/logo.svg';

class Home extends React.Component {
    state = {}
    render() {
        return (
            <article className="home__container">
                <section className="home__card">
                    <figure className="figure__card">
                        <img src={logo} alt="logo" height={"80px"} />
                    </figure>
                    <h1 className="home_card__h1">Milieu Navigator</h1>
                    <button className="home__button" onClick={(e) => { e.preventDefault(); this.props.showPage("Mymap") }}>&nbsp;Begin</button>
                </section>
            </article>
        );
    }
}

export default Home;