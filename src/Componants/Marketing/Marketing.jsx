import React from "react";
import icons from "../data/media.json";
import "./marketing.css";
export default function Marketing() {
  return (
    <div>
      <div className="h-screen justify-start flex flex-col text-center items-center relative">
        <div className="icons">
          <div className="media flex">
            {icons.map((icon, i) => (
              <>
                <img
                  className="h-[11rem] "
                  src={require("../img/logo/" + icon.image + ".png")}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
