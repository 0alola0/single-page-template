import { useRef, useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import NavBtn from "./NavBtn";
import PAGELIST from "../PAGELIST.json";
import { motion, AnimatePresence } from "framer-motion";

const NavigationDesktop = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("mobile_nav");
    navRef.current.classList.contains("mobile_nav")
      ? setNavOpen(true)
      : setNavOpen(false);
  };

  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -100 }}
      className="nav-desktop"
    >
      <img className="logoImage" src="logo.svg" alt="company logo" />
      <AnimatePresence>
        <motion.nav
          animate={{
            opacity: navOpen||!navRef.current?.classList.contains('mobile_nav') ? 1 : 0,
          }}
          initial={{
            opacity: !navRef.current?.classList.contains('mobile_nav')? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          ref={navRef}
        >
          <div className="nav_links_container">
            <Link to={"/home"} key={"home"}>
              <NavBtn pageName={"home"} activeBase={true} />
            </Link>
            {PAGELIST.map((e) => (
              <Link to={"/" + e.title} key={e.title}>
                <NavBtn pageName={e.title} activeBase={false} />
              </Link>
            ))}
          </div>
          <form className="search_form" action="search">
            <input
              className="search_input"
              type="text"
              placeholder="Search keyword ..."
            />
            <img className="searchImage" src="search.svg" alt="search icon" />
          </form>
        </motion.nav>
      </AnimatePresence>
      {navOpen ? (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            rotate: navOpen ? 90 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="nav_btn"
          onClick={showNav}
          aria-label="Open Menu"
        >
          <img
            className="nav_btn_img"
            src="menuClose.svg"
            alt="hamburger menu"
          />
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            rotate: navOpen ? 90 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="nav_btn"
          aria-label="Close Menu"
          onClick={showNav}
        >
          <img className="nav_btn_img" src="menuOpen.svg" alt="hamburger menu" />
        </motion.button>
      )}
    </motion.div>
  );
};

export default NavigationDesktop;
