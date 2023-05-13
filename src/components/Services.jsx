import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView = false] = useInView({ threshold: 0.2 }); // Set a threshold for intersection

  return (
    <section className=" min-h-[365px] flex flex-col justify-around items-center mt-28 px-28">
      <motion.h2 initial={{opacity:0}} animate={{ opacity: 1, transition: { delay: 2 } }} className="font-montserrat font-semibold text-4xl leading-tight mb-16">SERVICES</motion.h2>
      <div className="flex flex-row justify-center items-center xl:gap-56 lg:gap-32 flex-wrap">
        <AnimatePresence>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50, transition: { delay: 0.5 } }}
            whileHover={{ scale: 1.1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col text-center items-center justify-center p-4 font-montserrat font-bold text-2xl leading-10"
          >
            <img className='mb-6' src="service1.svg" alt="service icon" />
            Service Name
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50, transition: { delay: 1 } }}
            whileHover={{ scale: 1.1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col text-center items-center justify-center p-4 font-montserrat font-bold text-2xl leading-10"
          >
            <img className='mb-6' src="service2.svg" alt="service icon" />
            Service Name
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50, transition: { delay: 1.5 } }}
            whileHover={{ scale: 1.1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col text-center items-center justify-center p-4 font-montserrat font-bold text-2xl leading-10"
          >
            <img className='mb-6' src="service3.svg" alt="service icon" />
            Service Name
          </motion.div>
        </AnimatePresence>
        </div>
    </section>
  );
}

export default Services;
