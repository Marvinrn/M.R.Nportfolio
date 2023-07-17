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
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
    };

    return (
        <section id='myProjects' className='myProjects'>
            <div className='myProjects__content'>
                <h2 className='myProjects__title'>Les projets dont je suis fier</h2>
                <div className='myProjects__cards--flex'>
                    <div className='myProjects__cards'>
                        <h3><a href='https://github.com/Marvinrn/groupomaniaV2' target='blank'>GroupomaniaV2</a></h3>
                        <Slider {...settings} className='caroussel'>
                            {GroupomaniaV2.map(({ id, cover, alt }) => {
                                return (
                                    <div key={id}>
                                        <a href='https://github.com/Marvinrn/groupomaniaV2' target='blank'>
                                            <Image className='myProjects__img' src={cover} alt={alt} width={500} height={200} />
                                        </a>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <div className='myProjects__cards'>
                        <h3><a href='https://picker-wheel.vercel.app/' target='blank'>PickerWheel</a></h3>
                        <Slider {...settings} className='caroussel'>
                            {PickerWheel.map(({ id, cover, alt }) => {
                                return (
                                    <div key={id}>
                                        <a href='https://picker-wheel.vercel.app/' target='blank'>
                                            <Image className='myProjects__img' src={cover} alt={alt} width={500} height={200} />
                                        </a>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <div className='myProjects__cards'>
                        <h3><a href='https://oden-weeb.vercel.app/' target='blank'>OdenWeeb</a></h3>
                        <Slider {...settings} className='caroussel'>
                            {OdenWeeb.map(({ id, cover, alt }) => {
                                return (
                                    <div key={id}>
                                        <a href='https://oden-weeb.vercel.app/' target='blank'>
                                            <Image className='myProjects__img' src={cover} alt={alt} width={500} height={200} loading="lazy" />
                                        </a>
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