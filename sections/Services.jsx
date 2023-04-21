'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { servicesDetails } from '../utils/constants';
import { staggerContainer, textVariant } from '../utils/motion';
import { ServicesCard } from '../components';

const Services = () => {
  const [active, setActive] = useState();

  return (
    <section className={`${styles.paddings}`} id="services">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col mt-9`}
      >
        <motion.h2 variants={textVariant(0.3)} className={styles.sectionTitle}>
          ¿En qué podemos ayudarte?
        </motion.h2>
        <div className="mt-5 flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {servicesDetails.map((service, index) => (
            <ServicesCard
              key={service.id}
              {...service}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
