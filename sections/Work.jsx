'use client';

import { motion } from 'framer-motion';
import Slider from '../components/Slider';
import { particular } from '../utils/constants';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';
import CTAInstagram from '../components/CTAInstagram';

const Work = () => (
  <section className={`${styles.paddings}`} id="work">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col mt-9`}
    >
      <motion.h2 variants={textVariant(0.3)} className={styles.sectionTitle}>
        Mirá nuestros trabajos
      </motion.h2>
      <div className="mt-3 relative hidden lg:block md:block">
        <Slider
          slides={particular}
          sliderHeight="h-[47rem]"
          controlsColor="white"
          section="work"
        />
      </div>

      <div className="mt-5 relative lg:hidden md:hidden">
        <Slider
          slides={particular}
          sliderHeight="h-[31.25rem]"
          controlsColor="white"
          section="work"
        />
      </div>
      <CTAInstagram />
    </motion.div>
  </section>
);

export default Work;
