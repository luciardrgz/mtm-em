'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ServicesCard = ({ id, imgUrl, title, description, icon, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[70vh] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id && (
    <div
      className="absolute w-full h-full bg-[rgba(0,0,0,0.8)] rounded-[24px]"
      style={{ opacity: 0.7 }}
    />
    )}
    {active !== id ? (
      <h3 className="font-semibold text-[5vw] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] sm:text-[1.3vw] sm:p-8 sm:justify-start sm:w-full flex-col">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.8)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <FontAwesomeIcon icon={icon} color="white" />
        </div>
        <h2 className="mt-2 font-semibold sm:text-[32px] text-[24px] text-white uppercase">
          {title}
        </h2>
        <p className="font-normal text-[16px] leading-[20.16px] text-white ">
          {description}
        </p>
      </div>
    )}
  </motion.div>
);

export default ServicesCard;

