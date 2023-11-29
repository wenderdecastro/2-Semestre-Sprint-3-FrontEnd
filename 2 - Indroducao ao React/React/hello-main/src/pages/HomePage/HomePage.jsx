import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';

const HomePage = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div>
            <h1>Página Home</h1>
            <span>{theme}</span>
        </div>
    );
};

export default HomePage;