import React, { Component } from "react";
import illus from "../img/file.svg";
import "./strategie.css";

function Strategie() {
  return (
    <div className="h-screen justify-start flex flex-col text-center items-center relative">
      <img className="h-[30%]" src={illus} />
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
      <div className="text-hor text-hor-border">
        <p>NOUS CRÉONS DES EXPÉRIENCES DIGITALES</p>
      </div>
      {/* <div className="pagination">01</div> */}
    </div>
  );
}
export default Strategie;
