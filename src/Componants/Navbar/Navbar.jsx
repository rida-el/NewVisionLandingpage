import React from "react";
import Button from "../Button";
import Logo from "../img/Logo.png";
import Contact from "../img/contact.png";

import { useState } from "react";

import "./navbar.css";
function Navbar() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact us", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full font-sans">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-sans text-gray-800">
          <img className="h-20" src={Logo} alt="" />
        </div>
        <div className="">
          <ion-icon name="menu"></ion-icon>
        </div>
        <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:p1-0 p1-9 transition-all duration-500 ease-in">
          {Links.map((link) => (
            <li className="md:ml-8 text-xl md:my-0 my-7 text-font">
              <a href="" className="hover:scale-75 duration-500">
                {link.name}
              </a>
            </li>
          ))}
          <img className="h-16" src={Contact} alt="" />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
