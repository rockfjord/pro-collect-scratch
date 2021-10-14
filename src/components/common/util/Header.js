/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Addshrink } from "./Addshrink";
import Logo from "../../../assets/img/nftnthex.png";

function Head({ Title }) {
  useEffect(() => {
    Addshrink();
  }, [window.pageYOffset]);

  return (
    <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <span>
            <img src={Logo} alt="NFTNT" />
          </span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Head;
