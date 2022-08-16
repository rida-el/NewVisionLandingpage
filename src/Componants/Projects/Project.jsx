import React from "react";
import mockup from "../img/mockup.png";
import "./project.css";

export default function Project() {
  return (
    <div className="h-screen bg flex flex-col justify-center items-center">
      <div className="flex tx-pro">
        <div className="flex justify-center items-center max-w-[40%] px-[10%]">
          <img className="mockup-img" src={mockup} alt="" />
        </div>
        <div className="flex flex-col items-left max-w-[30%] items-start ">
          <h1 className="font-t1">Projets &</h1>
          <h1 className="font-t2">ÉTUDES DE CAS</h1>
          <div className="pt-[10%]">
            <p className="font-p">
              Découvrez nos projets ainsi qu'une sélection d'études de cas,
              apportant une réponse digitale réfléchie et adaptée à des
              problématiques aux enjeux variés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
