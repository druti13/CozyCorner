import React from 'react';
import Slider from "react-slick";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import Button from '../shared/Button';

const HeroData = [
    {
        id: 1,
        img: image1,
        subtitle: "Interior Decor",
        title: "Sofa",
        title2: "Comfy&Stylish"
    },
    {
        id: 2,
        img: image2,
        subtitle: "Interior Decor",
        title: "Mirror",
        title2: "Elegant&Chic"
    },
    {
        id: 3,
        img: image3,
        subtitle: "Interior Decor",
        title: "Table",
        title2: "Modern&Functional"
    }
];

const Hero = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
    };

    return (
        <div className='container'>
            <div className='overflow-hidden -w-[680px] min-h-[550px]
            sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
                <div className='container pb-9 sm:pb-0'>
            <Slider {...settings}>
                {HeroData.map((data) => (
                    <div key={data.id}>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='flex flex-col justify-center
                            gap-4 sm:pl-3 pt-12 sm:pt-0 text-center order-2 sm:order-1
                            relative z-10'>
                                <h1 data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true" className='text-2xl sm:text-6xl 
                                lg:text-2xl font-bold'>{data.subtitle}</h1>
                                <h1 data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true" className='text-5xl sm:text-6xl 
                                lg:text-7xl font-semibold '>{data.title}</h1>
                                <h1 data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true" className='text-5xl text-white  dark:text-white/5 sm:text-[80px]
                                md:tex-[100px] xl:text-[90px] font-semibold'>{data.title2}</h1>
                                <div data-aos="fade-up"
                                data-aos-offset="0"
                                data-aos-duration="500"
                                data-aos-delay="300">
                                    <Button 
                                    text="Shop Now"
                                    bgColor="bg-primary"
                                    textColor="text-white"/>
                                    
                                </div>
                            </div>
                            <div className='order-1 sm:order-2'>
                            <div
                            data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-once="true">
                                <img src={data.img} alt={data.title} 
                                className='w-[800px] h-[500px] sm:w-[450px] sm:scale-105 lg:scale-110 
                                object-contain mx-auto drop-shadow-[-8px_4px__6px_rgba(0,0,0,.4)] relative z-40' />
                            </div>
                           
                        </div>
                        
                    </div>
                    </div>
                    
                ))}
            </Slider>
            </div>
            </div>
        </div>
    );
}

export default Hero;
