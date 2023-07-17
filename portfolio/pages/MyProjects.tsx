import React from 'react';
import BackGround3 from '../components/BackGround3';
import Image from 'next/image';
import { GroupomaniaV2 } from '@/datas/carousselData';
import { PickerWheel } from '@/datas/carousselData';
import { OdenWeeb } from '@/datas/carousselData';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MyProjects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section id='myProjects' className='myProjects'>
            <div className='myProjects__content'>
                <h2 className='myProjects__title'>Mes Projets</h2>
                <div className='myProjects__cards--flex'>
                    <div className='myProjects__cards'>
                        <h3>GroupomaniaV2</h3>
                        <Slider {...settings} className='caroussel'>
                            {GroupomaniaV2.map(({ id, cover }) => {
                                return (
                                    <div key={id}>
                                        <Image className='myProjects__img' src={cover} alt='test' width={500} height={200} />
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <div className='myProjects__cards'>
                        <h3>PickerWheel</h3>
                        <Slider {...settings} className='caroussel'>
                            {PickerWheel.map(({ id, cover }) => {
                                return (
                                    <div key={id}>
                                        <Image className='myProjects__img' src={cover} alt='test' width={500} height={200} />
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <div className='myProjects__cards'>
                        <h3>OdenWeeb</h3>
                        <Slider {...settings} className='caroussel'>
                            {OdenWeeb.map(({ id, cover }) => {
                                return (
                                    <div key={id}>
                                        <Image className='myProjects__img' src={cover} alt='test' width={500} height={200} />
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
            <BackGround3 />
        </section>
    );
};

export default MyProjects;