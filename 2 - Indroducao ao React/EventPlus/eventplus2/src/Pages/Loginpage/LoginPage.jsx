import React, { useState, useEffect } from "react";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import logo from "../../assets/images/logo-pink.svg";
import { Input, Button } from "../../Components/FormComponents/FormComponents";

import "./LoginPage.css";
import api, {loginResource} from "../../Services/api";
import { useContext } from "react";
import { UserContext, userDecodeToken } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  
    const [user, SetUser] = useState({email: "admin@admin.com", senha: "admin123"})
    const {userData, setUserData} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
      const token = localStorage.getItem("token")
      if(token === null)
      navigate("/")
  }, [])

    async function handleSubmit(event) {
      event.preventDefault();

      if (user.email.length < 3 || user.senha.length < 8) {
        alert("caracteres insuficientes")
      }
      else{
        try {
          const promise = await api.post(loginResource, {email: user.email, senha: user.senha})
          const userFullData = userDecodeToken(promise.data.token)
          setUserData(userFullData)
          localStorage.setItem("token", JSON.stringify(userFullData))
          console.log(JSON.stringify(userFullData));
          navigate("/")
        } catch (error) {
          alert(error)
        }
      }

      
    }

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

          <form className="frm-login__formbox" onSubmit={handleSubmit}>
            <Input
              className="frm-login__entry"
              type="email"
              id="login"
              name="login"
              required={true}
              value={user.email}
              manipulationFunction={(e) => {SetUser({...user, email: e.target.value.trim()})}}
              placeholder="Username"
            />
            <Input
              className="frm-login__entry"
              type="password"
              id="senha"
              name="senha"
              required={true}
              value={user.senha}
              manipulationFunction={(e) => {SetUser({...user, senha: e.target.value.trim()})}}
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
