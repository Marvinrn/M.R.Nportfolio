import React, { MouseEvent } from 'react';
import BackGround from '../components/BackGround';

const IntroPart = () => {
    return (
        <section className='intro'>
            <BackGround />
            <div className='intro__content'>
                <h1 className='intro__title'>Marvin Rodrigues Novo</h1>
                <p className='intro__subtitle'>Développeur Web Front-End</p>
                <button className='intro__btn'>
                    Qui suis-je?
                </button>
            </div>
        </section>
    );
};

export default IntroPart;
