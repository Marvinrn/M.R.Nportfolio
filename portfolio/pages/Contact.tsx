import React from 'react';
import BackGround4 from '../components/BackGround4';

const Contact = () => {
    return (
        <section id='contact' className='contact'>
            <BackGround4 />
            <div className='contact__content'>
                <h1 className='contact__title'>Marvin Rodrigues Novo</h1>
                <p className='contact__subtitle'>Développeur Web Front-End</p>
                <button className='contact__btn' >Qui suis-je?</button>
            </div>
        </section>
    );
};

export default Contact;