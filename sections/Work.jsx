'use client';

import Slider from '../components/Slider';
import { particular } from '../utils/constants';

const Hero = () => (
  <section className="sm:py-16 xs:py-8 py-20 p-6">
    <div className="relative h-45 mt-10">
      <Slider slides={particular} sliderHeight="h-[900px]" sliderArrowsColor="white" imgOpacity={1} />
    </div>
  </section>
);

export default Hero;
