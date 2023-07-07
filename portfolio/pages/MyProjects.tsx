import React from 'react';
import BackGround3 from '../components/BackGround3';


const MyProjects = () => {
    return (
        <section className='myProjects'>
            <div className='myProjects__content'>
                <h2 className='myProjects__title'>Mes Projets</h2>
                <div className='myProjects__cards--flex'>
                    <div className='myProjects__cards'>
                        <h3>Projet 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod commodo eros, sed fringilla purus tristique in. Sed bibendum, diam sed finibus feugiat, justo lectus vestibulum nulla, nec tincidunt lacus lorem id diam. Mauris malesuada justo in ex tempus, vitae varius tortor tristique. In hac habitasse platea dictumst. Nulla nec leo rutrum, sollicitudin nunc id, laoreet purus. Donec semper, mauris vel dignissim fringilla, lorem urna blandit dui, eget posuere sapien neque vitae nunc. Proin rutrum augue a ex tincidunt, eu ullamcorper nulla dapibus. Maecenas eu erat vitae tellus condimentum scelerisque</p>
                    </div>
                    <div className='myProjects__cards'>
                        <h3>Projet 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod commodo eros, sed fringilla purus tristique in. Sed bibendum, diam sed finibus feugiat, justo lectus vestibulum nulla, nec tincidunt lacus lorem id diam. Mauris malesuada justo in ex tempus, vitae varius tortor tristique. In hac habitasse platea dictumst. Nulla nec leo rutrum, sollicitudin nunc id, laoreet purus. Donec semper, mauris vel dignissim fringilla, lorem urna blandit dui, eget posuere sapien neque vitae nunc. Proin rutrum augue a ex tincidunt, eu ullamcorper nulla dapibus. Maecenas eu erat vitae tellus condimentum scelerisque</p>
                    </div>
                    <div className='myProjects__cards'>
                        <h3>Projet 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod commodo eros, sed fringilla purus tristique in. Sed bibendum, diam sed finibus feugiat, justo lectus vestibulum nulla, nec tincidunt lacus lorem id diam. Mauris malesuada justo in ex tempus, vitae varius tortor tristique. In hac habitasse platea dictumst. Nulla nec leo rutrum, sollicitudin nunc id, laoreet purus. Donec semper, mauris vel dignissim fringilla, lorem urna blandit dui, eget posuere sapien neque vitae nunc. Proin rutrum augue a ex tincidunt, eu ullamcorper nulla dapibus. Maecenas eu erat vitae tellus condimentum scelerisque</p>
                    </div>
                </div>
            </div>
            <BackGround3 />
        </section>
    );
};

export default MyProjects;