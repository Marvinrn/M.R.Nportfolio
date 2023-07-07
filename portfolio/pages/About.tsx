import React from 'react';
import BackGround2 from '../components/BackGround2';
import Image from 'next/image';
import mrnJojo from '../assets/Images/mrnJojo1.png'

const About = () => {
    return (
        <section id='about' className='about'>
            <div className='about__content'>
                <h2 className='about__title'> A PROPOS DE MOI</h2>
                <Image src={mrnJojo} alt='Dessin de moi en version Jojo Bizarre Adventure' width={350} height={350} />
                <p className='about__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod commodo eros, sed fringilla purus tristique in. Sed bibendum, diam sed finibus feugiat, justo lectus vestibulum nulla, nec tincidunt lacus lorem id diam. Mauris malesuada justo in ex tempus, vitae varius tortor tristique. In hac habitasse platea dictumst. Nulla nec leo rutrum, sollicitudin nunc id, laoreet purus. Donec semper, mauris vel dignissim fringilla, lorem urna blandit dui, eget posuere sapien neque vitae nunc. Proin rutrum augue a ex tincidunt, eu ullamcorper nulla dapibus. Maecenas eu erat vitae tellus condimentum scelerisque.</p>
            </div>
            <BackGround2 />
        </section>
    );
};
export default About;