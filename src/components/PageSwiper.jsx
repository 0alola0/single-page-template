import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion"
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

const PageSwiper = () => {
  const swiperRef = useRef(null);
  const [hoverStates, setHoverStates] = useState(Array(CONTENTS.length).fill(false));


  useEffect(() => {
    if (swiperRef.current !== null) {
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    
    <Swiper
      spaceBetween={50}
      breakpoints={{
        1000:{
            slidesPerView: 3.5,
            allowTouchMove: false 
          },
          300: {
            slidesPerView: 1.5,
            allowTouchMove: true 
          }
      }}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      ref={swiperRef}
    >
{
  CONTENTS.map((slide, index) => (
    <SwiperSlide key={slide.date}
      style={hoverStates[index] ? { boxShadow: '0px 13px 0px -6px rgba(239,85,85,1)',  backgroundImage: `url(${slide.image})` } : {backgroundImage: `url(${slide.image})`}}
      className="relative mb-28 w-[440px] h-[560px] flex flex-col justify-end items-start pl-[20px] pb-[50px] text-white box-border bg-cover bg-no-repeat bg-center md:w-[320px] md:h-[400px] sm:w-[160px] sm:h-[200px]"
      onMouseEnter={() => {
        setHoverStates(hoverStates.map((state, i) => index === i ? true : state));
      }}
      onMouseLeave={() => {
        setHoverStates(hoverStates.map((state, i) => index === i ? false : state));
      }}
    >
      <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(205.96deg, rgba(67, 26, 26, 0) -7.14%, #431A1A 121.86%)"}}></div>
      <h3 className="z-2 font-montserrat font-bold text-2xl md:text-2xl sm:text-base mr-5" style={{zIndex: 2}}>{slide.title}</h3>
      <p className='opacity-80 font-medium text-sm leading-5 my-4' style={{zIndex: 2}}>{slide.date}</p>
      <motion.button
        className='main-btn'
        animate={{ y: 8 }}
        initial={{ y: 0 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.1 }}
        aria-label="See More"
      >
        See More
        <img src='arrow.svg' alt='arrow right'></img>
      </motion.button>
    </SwiperSlide>
  ))
}
    </Swiper>        
    

  );
};

const CONTENTS = [
    {
        "image": "slide1.webp",
        "title": "The point of using Lorem Ipsum",
        "date": "20 April 2023",
    },
    {
        "image": "slide2.webp",
        "title": "The point of using Lorem Ipsum",
        "date": "21 April 2023",
    },
    {
        "image": "slide3.webp",
        "title": "The point of using Lorem Ipsum",
        "date": "22 April 2023",
    },
    {
        "image": "slide4.webp",
        "title": "The point of using Lorem Ipsum",
        "date": "23 April 2023",
    },
    {
        "image": "slide5.webp",
        "title": "The point of using Lorem Ipsum",
        "date": "24 April 2023",
    },
    {
        "image": "slide6.webp",
        "title": "The point of using Lorem Ipsum",
        "date": "25 April 2023",
    },

]

export default PageSwiper;

