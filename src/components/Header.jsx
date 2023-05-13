import React from 'react';
import { motion, AnimatePresence} from 'framer-motion';


const Header = () => {
  return (
    <div className='hero_container'>
        <header>
            <div className="header_text_container">
                <h1>Company’s First Service Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <motion.button
                className='main-btn'
                animate={{ y: 11 }}
                initial={{ y: 0 }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.1 }}
                >
                    See More
                    <img src='arrow.svg' alt='arrow right'></img>
                </motion.button>
            </div>
        </header>

        <AnimatePresence>
        <motion.div
        animate={{ y: 0 }}
        initial={{ y: -10 }}
        transition={{ duration: 1.5 }}
        className='underline_border'></motion.div>
        </AnimatePresence>
      
    </div>
  );
}

export default Header;
