import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="">
      <header className="Header">
        <img className="Logo" src="../../Assets/logo.svg" alt="" />
        <nav>
          <Link href="" to="/">Home</Link>
          <Link href="" to="EventsType">Event Types</Link>
          <Link href="" to="EventsPage">Events</Link>
          <Link href="" to="Login">Login</Link>
          <Link href="" to="TestPage">Tests</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
