import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const slides = [
    {
        type: 'video',
        src: 'https://videos.pexels.com/video-files/1536322/1536322-hd_1920_1080_30fps.mp4',
        text: {
            heading: 'Nearshore Software Development Experts',
            description: 'Tech solutions to accelerate your Digital Transformation',
            buttonText: 'Explore more'
        }
    },
    {
        type: 'image',
        src: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        text: {
            heading: 'Innovative Design Solutions',
            description: 'Transforming ideas into stunning visuals',
            buttonText: 'Learn More'
        }
    },
    {
        type: 'image',
        src: 'https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        text: {
            heading: 'Advanced Analytics',
            description: 'Unlocking insights to drive your business forward',
            buttonText: 'Discover More'
        }
    },
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <>
        <hr/>
        <div className='relative h-[45rem] overflow-hidden'>
            <div className='relative h-full'>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute left inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {slide.type === 'video' ? (
                            <video className='h-[40rem] w-full object-cover' src={slide.src} autoPlay loop muted></video>
                        ) : (
                            <img className='h-[40rem] w-full object-cover' src={slide.src} alt={`Slide ${index + 1}`} />
                        )}
                    </div>
                ))}
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-5'>
                    <h2 className='text-[1.8rem] font-semibold min-[900px]:text-[2.8rem] mb-4 '>{slides[currentSlide].text.heading}</h2>
                    <p className='text-[1rem] mx-10 mb-6'>{slides[currentSlide].text.description}</p>
                    <button className='border-2 w-[70%] px-6 py-2 rounded-full font-semibold'>{slides[currentSlide].text.buttonText}</button>
                </div>
                <button
                    onClick={handlePrev}
                    className='absolute left-[50%] focus:bg-transparent top-[90%] focus:text-white focus:border focus:border-white transform -translate-y-1/2 bg-white text-black p-6 rounded-[50%]'
                >
                    <FaArrowLeft/>
                </button>
                <button
                    onClick={handleNext}
                    className='absolute right-[10%] focus:bg-transparent  focus:text-white focus:border focus:border-white top-[90%] transform -translate-y-1/2 bg-white text-black  p-6 rounded-[50%]'
                >
                    <FaArrowRight/>
                </button>
            </div>
        </div>
        </>
    );
};

export default HeroSlider;
