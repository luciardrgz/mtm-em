'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import Slider from '../components/Slider';
import { staggerContainer, textVariant } from '../utils/motion';
import { industrial } from '../utils/constants';

const Hero = () => (
  <section className={`${styles.paddings}`} id="home">
    <div className="relative h-45 mt-20">
      <Slider slides={industrial} sliderHeight="h-[500px]" sliderArrowsColor="black" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex md:flex-row flex-col sm:py-2 py-6 m-auto absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(0.3)} className={styles.heroHeading}>
            Soluciones eléctricas
          </motion.h1>
          <motion.h1 variants={textVariant(0.3)} className={styles.heroSub}>
            para tu negocio o industria.
          </motion.h1>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
