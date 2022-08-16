import React, { Component } from "react";
import illus from "../img/file.png"
import "./strategie.css";

function Strategie() {
  return (
    <div>
      <div className="h-screen mt-10 flex flex-col justify-center text-center items-center relative">
        <img src={illus} />
        <div className="flex flex-row">
          <span className="title-logo">#</span>
          <h1 className="strategie-font">stratégie digitale</h1>
        </div>
        <div className="flex flex-col sta-texte">
          <p>Créons ensemble une expérience digitale</p>
          <p>
            <span className="sta-texte-bold">intelligente</span> et{" "}
            <span className="sta-texte-bold">performante</span>
          </p>
        </div>
        <div className="sta-button">
          <a href=""> DÉCOUVRIR NOUS </a>
        </div>

        {/* <div className="pagination">01</div> */}
      </div>
    </div>
  );
}
export default Strategie;
