import React from 'react';
import "./UserProfile.css"
import loginIcon from "../../Assets/images/icone-logout.svg"
import { Link } from "react-router-dom";

const UserProfile = ({ href, to, linkText}) => {
    return (
        <div className="header__login">

            <Link className="login__link" href={href} to={to}>{linkText}</Link>
            <img src={loginIcon} className="login__icon" alt="" />

        </div>
    );
};

export default UserProfile;