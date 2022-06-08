import React from "react";
import "./Progress.css";

const Progress = () => {
    return (
        <div className="footer">
            <div id="progress">
            <div id="progress-bar"></div>
            <ul id="progress-num">
                <li class="step active"></li>
                <li class="step"></li>
                <li class="step"></li>
            </ul>
            </div>
            <div className="btns">
                <button id="progress-prev" className="btn" disabled>Prev</button>
                <button id="progress-next" className="btn" disabled>Next</button>
            </div>
        </div>
    );
};

export default Progress;