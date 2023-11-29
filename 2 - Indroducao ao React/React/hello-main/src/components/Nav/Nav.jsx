import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from '../../Contexts/ThemeContext';

const Nav = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const changeTheme = () => {
        setTheme( localStorage.getItem(theme) !== null ? localStorage.getItem(theme) == 'light' : 'light')
    }

    return (
        <nav>
           <Link to="/">Home</Link> | &nbsp;
           <Link to="/produtos">Produtos</Link> | &nbsp;
           <Link to="/dados">Dados Importantes</Link> | &nbsp;
           <Link to="/meuspedidos">Meus pedidos</Link> | &nbsp;
           {/* <span>Tema Atual: {theme}</span> */}
            <button onClick={changeTheme}> {theme}</button>
        </nav>
    );
};

export default Nav;