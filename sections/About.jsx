'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} mt-11 relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="¡Gusto en conocerte!"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-3 font-medium sm:text-[1.2vw] text-[5
        vw] text-center text-black"
      >
        Somos una empresa que trabaja en pos de mejorar la calidad de vida de sus clientes. <br />Adoptamos{' '}
        <span className="font-extrabold text-secondary-red">nuevas tecnologías</span>{' '}
        para volver más confiable y sostenible nuestro servicio. <br />Realizamos la
        instalación de un insumo vital y crítico para satisfacer las
        necesidades básicas y de confort de empresas, instituciones y
        particulares, con{' '}
        <span className="font-extrabold text-secondary-red">
          continuidad, seguridad, calidad y eficiencia.
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About;
