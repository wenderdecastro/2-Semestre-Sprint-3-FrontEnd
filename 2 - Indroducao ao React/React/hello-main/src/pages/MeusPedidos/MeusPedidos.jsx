import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';

const MeusProdutos = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            <h1>Meus Pedidos</h1>
            <span>{theme}</span>
        </div>
    );
};

export default MeusProdutos;