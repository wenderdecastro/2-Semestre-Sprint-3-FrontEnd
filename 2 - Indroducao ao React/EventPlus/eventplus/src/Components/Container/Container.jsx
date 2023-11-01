import React from 'react';
import "./Container.css"

const container = ({children}) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};

export default container;