'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { navLinks } from '../utils/constants';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} fixed top-0 left-0 w-full bg-[#ae0000] flex items-center h-[82px] z-20`}
    >
      <img
        src="/logo.webp"
        alt="MTM logo"
        title="MTM Soluciones Electromecánicas"
        className="w-[140px] object-contain fixed left-0"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <motion.li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-black ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={`#${nav.id}`} title={nav.title}>{nav.title}</a>
          </motion.li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? '/close.svg' : '/menu.svg'}
          alt="hamburger menu icon"
          title="Menú"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-hamburger-menu-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-20`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-black ${
                  index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
