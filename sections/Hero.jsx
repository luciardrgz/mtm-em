'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import Slider from '../components/Slider';
import { staggerContainer, textVariant } from '../utils/motion';
import { industrial } from '../utils/constants';

const Hero = () => (
  <section className="sm:py-16 xs:py-8 py-20 p-6" id="home">
    <div className="relative h-45 mt-10">
      <Slider slides={industrial} sliderHeight="h-[500px]" sliderArrowsColor="black" imgOpacity={0.5} />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex md:flex-row flex-col sm:py-2 py-6 m-auto absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Soluciones eléctricas
          </motion.h1>
          <motion.h1 variants={textVariant(1.1)} className={styles.heroSub}>
            para tu negocio o industria.
          </motion.h1>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
