'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const ContactCard = ({ id, icon, title, info }) => (
  <div className="flex items-start">
    <FontAwesomeIcon icon={icon} color="#ae0000" className="w-5 h-5 mt-11 lg:w-6 lg:h-6 lg:mt-[3.3rem]" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col mt-9 ml-6`}
    >
      <motion.h2 variants={textVariant(0.3)} className="lg:text-[2vw] md:text-[3vw] sm:text-[3vw] text-[6vw] font-bold text-gradient">
        {title}
      </motion.h2>
      {id === 'phone' ? <a href="tel:+5492235828183" title="Llamar a este teléfono" className="text-base font-medium text-gray-900">{info}</a> : <p className="text-base font-medium text-gray-900">{info}</p>}
    </motion.div>
  </div>
);

export default ContactCard;
