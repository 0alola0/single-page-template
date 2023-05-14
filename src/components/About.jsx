import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView = false] = useInView({ threshold: 0.2 }); // Set a threshold for intersection

  return (
    <AnimatePresence>
      <section className="mb-56">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
            transition: { delay: 0.5, duration: 1 },
          }}
          exit={{ opacity: 0 }}
          className="flex flex-col md:flex-row items-center justify-start lg:pl-[250px] mt-32 md:px-[100px] sm:px-[40px] px-[40px]"
        >
          <div className="w-full flex items-center flex-col md:w-auto md:max-w-[50%] object-cover mb-8 md:mb-0">
            <img src="astronaut.jpg" alt="about us comany image" />
            <span className="block w-[96%] h-2 border-t-0 border-b border-l border-r border-solid border-gray-700 bg-transparent"></span>
          </div>

          <div className="max-w-[600px] md:w-[50%] lg:ml-[90px] md:ml-[30px]">
            <h2 className="font-montserrat font-bold text-2xl md:text-4xl leading-10 pt-10 md:pt-[20px] md:pb-[30px]">
              About Company
            </h2>
            <p className="font-montserrat font-medium text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <motion.button
              className="main-btn main-btn-red mt-10 md:mt-4"
              animate={{ y: 8 }}
              initial={{ y: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.1 }}
            >
              See More
              <img src="arrow-red.svg" alt="arrow right"></img>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  );
};

export default About;
