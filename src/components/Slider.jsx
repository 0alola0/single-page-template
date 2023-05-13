import React, { useRef, useState, useEffect } from "react";
import PageSwiper from "./PageSwiper";
import { motion } from "framer-motion";

const Slider = () => {
  const [disabledButton, setDisabledButton] = useState(1);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const handleNextButtonClick = () => {
    prevButtonRef.current.click();
    setDisabledButton(disabledButton - 1);
    console.log(disabledButton);
  };
  const handlePrevButtonClick = () => {
    nextButtonRef.current.click();
    setDisabledButton(disabledButton + 1);
    console.log(disabledButton);
  };
  return (
    <section className=" bg-gray-100 lg:pl-[250px] mt-32 md:pl-[100px] sm:pl-[40px] pl-[40px] ">
      <div className="swiper-button-prev">
        <button className="swiper-button-prev-icon" ref={prevButtonRef} />
      </div>
      <div className="swiper-button-next">
        <button className="swiper-button-next-icon" ref={nextButtonRef} />
      </div>

      <div className="flex justify-between pr-20 items-center">
        <h2 className="font-montserrat font-bold text-4xl leading-10 pt-[90px] pb-[90px]">NEWS</h2>
        <div className="flex space-x-4 ctrl_buttons">
          <motion.button
            onClick={handleNextButtonClick}
            style={{
              opacity: disabledButton < 2 ? 0.2 : 1,
            }}
            disabled={disabledButton < 2}
            initial={{ x: 200  }}
            animate={{ x:0,  transition: { delay: 0.5 } }}
            whileHover={{ scale: 1.1 }}
          >
            <img src="right.svg" alt="arrow controller" />
          </motion.button>
          <motion.button
            onClick={handlePrevButtonClick}
            style={{
              opacity: disabledButton > 3 ? 0.2 : 1,
            }}
            disabled={disabledButton > 3}
            initial={{ x: 200  }}
            animate={{ x:0,  transition: { delay: 0.5 } }}
            whileHover={{ scale: 1.1 }}
          >
            <img src="left.svg" alt="arrow controller" />
          </motion.button>
        </div>
      </div>

      <article>
        <PageSwiper />
      </article>
    </section>
  );
};

export default Slider;
