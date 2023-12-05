import React from 'react';
import "./ImageIllustrator.css"
import formDefaultImage from "../../assets/images/default-image.jpeg"
import tipoEventoImage from "../../assets/images/tipo-evento.svg"
import tipoUsuarioImage from "../../assets/images/tipo-usuario.svg"
import loginImage from "../../assets/images/login.svg"

const ImageIllustrator = ({altText, imageName, className }) => {
    let imageResource;
    switch (imageName) {
        case 'login':
            imageResource = loginImage;
            break;
        case 'evento':
            imageResource = tipoEventoImage;
            break;
        case 'usuario':
            imageResource = tipoUsuarioImage;
            break;
        default:
            imageResource = formDefaultImage;
            break;
    }

    return (
        <figure className='illustrator-box'>
            <img src={imageResource} alt={altText} className={`illustrator-box__image ${className}`} />
        </figure>
    );
};

export default ImageIllustrator;