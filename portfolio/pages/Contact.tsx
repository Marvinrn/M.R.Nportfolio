import React from 'react';
import BackGround4 from '../components/BackGround4';

const Contact = () => {
    return (
        <section id='contact' className='contact'>
            <BackGround4 />
            <div className='contact__content'>
                <h1 className='contact__title'>Contact</h1>
                <p className='contact__subtitle'>Si vous souhaitez me contacter, vous pouvez simplement m'envoyer un e-mail à l'adresse suivante:</p>
                <a className='contact__mail' href="mailto:marvinnrn@gmail.com" >marvinnrn@gmail.com</a>
                <div className='contact__links--flex'>
                    <a href='http://www.linkedin.com/in/marvinrodriguesnovo' target='_blank' className='contact__links'>LinkedIn</a>
                    <a className='contact__btnLink' href='/CV_RODRIGUESNOVO_Marvin.pdf' download="CV_RODRIGUESNOVO_Marvin">
                        <button className='contact__btn' >Télecharger mon CV</button>
                    </a>
                    <a href='https://github.com/Marvinrn' target='_blank' className='contact__links'>Github</a>
                </div>
            </div>
        </section >
    );
};

export default Contact;