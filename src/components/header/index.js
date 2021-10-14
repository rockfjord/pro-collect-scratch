import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../navigation";
import "./navbar.css";
import "../../assets/css/global.css";
import { Addshrink } from "../common/util/Addshrink";
import data from "../../data/data-layouts/data-Head.json";
import Logo from "../../assets/img/nftnthex.png";

function Head() {
  useEffect(() => {
    Addshrink();
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <span>
            <img src={Logo} alt="logo" />
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
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                data-toggle="dropdown"
              >
                Discover
              </NavLink>
              <div className="dropdown-menu">
                {data[0].dataUp &&
                  data[0].dataUp.map((item, i) => (
                    <NavLink key={i} className="dropdown-item" to={item.path}>
                      {item.title}
                    </NavLink>
                  ))}
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/activity">
                Activity
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                data-toggle="dropdown"
              >
                Pages
              </NavLink>
              <div className="dropdown-menu">
                {data[1].dataDown &&
                  data[1].dataDown.map((item, i) => (
                    <NavLink key={i} className="dropdown-item" to={item.path}>
                      {item.title}
                    </NavLink>
                  ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Head;
