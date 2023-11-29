import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';

const Dados = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            <h1>Página de Dados</h1>
            <span>{theme}</span>
        </div>
    );
};

export default Dados;