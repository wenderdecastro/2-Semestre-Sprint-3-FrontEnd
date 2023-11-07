import React from 'react';
import './VisionSection.css'
import Title from '../../Components/Title/Title'

const VisionSection = () => {
    return (
        <section className='vision'>
            <div className='vision__box'>
                <Title
                    potatoClass='margin-above'
                    color='white'
                    titleText={"Visão"}
                    >
                </Title>
                <p className='vision__text'>
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </section>
    );
};

export default VisionSection;