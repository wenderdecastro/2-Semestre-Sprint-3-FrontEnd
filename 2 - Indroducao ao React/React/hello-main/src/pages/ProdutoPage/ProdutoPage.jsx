import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';

const ProdutoPage = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            <h1>Página de Produtos</h1>
            <span>{theme}</span>
        </div>
    );
};

export default ProdutoPage;