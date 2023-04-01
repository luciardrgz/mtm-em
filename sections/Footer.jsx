'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[1px] bg-black opacity-20" />
        <div className="flex items-center justify-center lg:justify-between md:justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-[#4d4d4d] text-center">
            MTM Soluciones Electromecánicas
          </h4>
          <a href="https://www.linkedin.com/in/luciardrgz/" target="_blank" rel="noreferrer" className="font-normal text-[14px] text-black opacity-20">
            luciardrgz | 2023
          </a>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
