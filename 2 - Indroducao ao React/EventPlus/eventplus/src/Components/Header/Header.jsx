import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.svg"
import UserProfile from "../UserProfile/UserProfile";
import Container from "../Container/Container";

const Header = (props) => {
  return (
    <div className="header">
      <Container>
        <img src={logo} className="header__logo" alt="" />
        <nav className="header__nav">
          <Link className="header__link" href="" to="/">Home</Link>
          <Link className="header__link" href="" to="EventsType">Event Types</Link>
          <Link className="header__link" href="" to="EventsPage">Events</Link>
          <Link className="header__link" href="" to="TestPage">Tests</Link>
        </nav>
        <UserProfile href="" to="Login" linkText="Login" />
      </Container>
    </div>
  );
};

export default Header;
