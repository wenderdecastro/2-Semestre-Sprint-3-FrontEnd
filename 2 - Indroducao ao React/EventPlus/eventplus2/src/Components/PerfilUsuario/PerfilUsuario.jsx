import React from "react";
import iconeLogout from "../../assets/images/icone-logout.svg";
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

import "./PerfilUsuario.css";
const PerfilUsuario = () => {
    const { userData, setUserData } = useContext(UserContext)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        setUserData({})
        navigate("/")
    }
    return (
        <div className="perfil-usuario">
            {userData.nome ? (
                <>
                    <span className="perfil-usuario__menuitem">{userData.nome}</span>
                    <img
                        title="Deslogar"
                        className="perfil-usuario__icon"
                        src={iconeLogout}
                        alt="imagem ilustrativa de uma porta de saída do usuário "
                        onClick={logout} />
                </>
            )
                : (
                    <Link to="/login" className="perfil-usuario__menuitem">Login</Link>
                )
            }


            <span className="perfil-usuario__menuitem"></span>


        </div>
    );
};

export default PerfilUsuario;
