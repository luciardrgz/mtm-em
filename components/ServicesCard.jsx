'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ServicesCard = ({
  id,
  imgUrl,
  icon,
  title,
  description,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      title={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
      loading="lazy"
    />
    {active !== id ? (
      <>
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.8)] rounded-[24px]" style={{ opacity: 0.8 }} />
        <h2 className="font-semibold text-[5vw] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] sm:text-[1.3vw] sm:p-8 sm:justify-start sm:w-full flex-col">
          {title}
        </h2>
      </>
    ) : (
      <div className="absolute bottom-0 p-5 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.79)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-8 h-8 rounded-lg glassmorphism text-white `}
        >
          <FontAwesomeIcon icon={icon} />
        </div>
        <h2 className="font-semibold text-md text-white lg:text-lg md:text-lg">{title}</h2>
        <p className="font-normal lg:text-base md:text-base text-sm leading-normal text-white">
          {description.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    )}
  </motion.div>
);

export default ServicesCard;
