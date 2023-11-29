import React, { useState } from "react";
import ImageIllustrator from "../../Components/ImageIlustrator/ImageIlustrator";
import logo from "../../assets/images/logo-pink.svg";
import { Input, Button } from "../../Components/FomComponents/FormComponents";

import "./Login.css";

const LoginPage = () => {
  
    const [user, SetUser] = useState({email: "teste@gmail.com", senha: ""})


  return (
    <div className="layout-grid-login">
      <div className="login">
        <div className="login__illustration">
          <div className="login__illustration-rotate"></div>
          <ImageIllustrator
            imageName="login"
            altText="Imagem de um homem em frente de uma porta de entrada"
            className="login-illustrator "
          />
        </div>

        <div className="frm-login">
          <img src={logo} className="frm-login__logo" alt="" />

          <form className="frm-login__formbox">
            <Input
              className="frm-login__entry"
              type="email"
              id="login"
              name="login"
              required={true}
              value={user.email}
              onChange={(e) => {}}
              placeholder="Username"
            />
            <Input
              className="frm-login__entry"
              type="password"
              id="senha"
              name="senha"
              required={true}
              value={user.senha}
              onChange={(e) => {}}
              placeholder="****"
            />

            <a href="" className="frm-login__link">
              Esqueceu a senha?
            </a>

            <Button
              buttonText="Login"
              id="btn-login"
              name="btn-login"
              type="submit"
              className="frm-login__button"
              onClick={()=>{}}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
