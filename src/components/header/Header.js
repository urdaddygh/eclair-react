import React, { useState } from "react";
import {
  calendar,
  logo,
  logout,
  profile,
  question,
  request,
} from "../../Images";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const location = useLocation();
  const linkActiveClassName = (navLink) => {
    const currentParentPath = location.pathname.split("/")[2];
    const isParentLinkActive = currentParentPath === navLink;

    if (isParentLinkActive) return "header_menu__link active_link";
    return "header_menu__link";
  };

  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
    console.log(state);
  };

  return (
    <header>
      <div className="header_container">
        <img
          src={logo}
          alt="logo"
          width="155px"
          height="158px"
          className="header_logo__img"
        />
        <div className="header_menu">
          <NavLink to="/main/home" className={linkActiveClassName("home")}>
            Home
          </NavLink>

          <NavLink
            to="/main/dashboard"
            className={linkActiveClassName("dashboard")}
          >
            Dashboard
          </NavLink>

          {/* <NavLink to="/main/" className="header_menu__link Dashboard">
            Tutorial
          </NavLink> */}
          <NavLink
            to="/main/take_vacation"
            className={linkActiveClassName("take_vacation")}
          >
            Take vacation
          </NavLink>
          <NavLink
            to="/main/documents"
            className={linkActiveClassName("documents")}
          >
            Documents
          </NavLink>
        </div>

        <img
          src={profile}
          alt="profile"
          width="94px"
          height="94px"
          className="header_profile__img"
          onClick={toggle}
        />
        {state && (
          <div className="dropdown">
            <div className="dropdown_head">
              <img
                src={profile}
                alt="profile"
                width="94px"
                height="94px"
                className="header_profile__img"
              />
              <span>
                <p>Kondrat O.</p>
                {/* <p style={{ fontWeight: 200, textAlign: "left" }}>#9965</p> */}
              </span>
            </div>
            <div className="dropdown_list">
              <img src={calendar} alt="" />
              <NavLink to="/main/vacations_calendar">Vacations calendar</NavLink>
            </div>
            <div className="dropdown_list">
              <img src={request} alt="" />
              <NavLink to="/main/vacation_requests">Vacation requests</NavLink>
            </div>
            <div className="dropdown_list">
              <img src={question} alt="" />
              <NavLink to="/main/use">How to use?</NavLink>
            </div>
            <div className="dropdown_list">
              <img src={logout} alt="" />
              <NavLink to="/">Log out</NavLink>
            </div>
          </div>
        )}
        {/* <p className="Login">Log in</p> */}
      </div>
    </header>
  );
};

export default Header;
