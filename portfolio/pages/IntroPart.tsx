import React, { MouseEvent } from 'react';
import BackGround from '../components/BackGround';

const IntroPart = () => {

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const section = document.querySelector('#about');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id='home' className='intro'>
            <BackGround />
            <div className='intro__content'>
                <h1 className='intro__title'>Marvin Rodrigues Novo</h1>
                <p className='intro__subtitle'>Développeur Web Front-End</p>
                <button className='intro__btn' onClick={handleClick}>
                    Qui suis-je?
                </button>
            </div>
        </section>
    );
};

export default IntroPart;
