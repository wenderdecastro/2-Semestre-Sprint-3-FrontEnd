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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus iste doloremque culpa rerum mollitia neque numquam amet! Non unde magni sed provident quaerat rerum voluptatibus, dicta quisquam recusandae. Maxime, maiores unde. Quisquam, exercitationem a expedita quam, facere quas fugit nihil vitae quod saepe omnis qui quis in quibusdam labore nam ipsam vero provident. Eveniet id facilis maxime provident? Natus suscipit quos totam aliquam debitis, corporis magnam ut inventore ducimus nisi, tenetur odio ipsum. Doloribus ea aspernatur iste non, enim quod quo asperiores nesciunt, quia optio libero delectus, voluptatibus dolore obcaecati minus. Excepturi nisi harum ipsa eius similique. Placeat, nesciunt.
                </p>
            </div>
        </section>
    );
};

export default VisionSection;