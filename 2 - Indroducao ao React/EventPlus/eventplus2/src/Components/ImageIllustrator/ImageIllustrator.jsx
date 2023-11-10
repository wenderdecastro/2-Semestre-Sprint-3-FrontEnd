import React from 'react';
import "./ImageIllustrator.css"
import tipoEventoImage from "../../assets/images/tipo-evento.svg"
import tipoUsuarioImage from "../../assets/images/tipo-usuario.svg"
import loginImage from "../../assets/images/login.svg"



const ImageIllustrator = ({ altText, imageName, className }) => {
    const imageResource = undefined;

    switch (imageName) {
        case 'login':
            imageResource = loginImage;
            break;
        case 'evento':
            imageResource = tipoEventoImage;
            break;
        case 'usuario':
            imageResource = tipoUsuarioImageImage;
            break;
        default:
            break;
    }

    return (
        <figure className='illustrator-box'>
            <img src={imageResource} alt={altText} className={`illustrator-box__image ${className}`} />
        </figure>
    );
};

export default ImageIllustrator;