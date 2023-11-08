import React from 'react';
import Title from '../Title/Title'
import './ContactSection.css'

const ContactSection = () => {
    return (
        <section className='contato'>
            <Title titleText={"Contato"} />
            <div className='endereco__box'>
                <img src="" alt="" className='contato__img-map' />
            </div>
            <p>
                Rua Niterói, 180 - Centro
                São Caetano  do  Sul - SP
                <a 
                href="tel:+551142252000" 
                className='contato__telefone'>
                    (11) 4225-2000
                </a>

            </p>
        </section>
    );
};

export default ContactSection;