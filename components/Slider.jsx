import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { React, useState } from 'react';
import { slides } from '../utils/constants';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => (
    setCurrentIndex(slideIndex)
  );

  return (
    <div className="w-max-[1400px] h-[500px] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})`, opacity: 0.5 }}
        className="w-full h-[500px] rounded-2xl bg-center bg-cover duration-500"
      />

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl text-black cursor-pointer">
        <FontAwesomeIcon
          icon={faChevronLeft}
          width={30}
          height={30}
          onClick={prevSlide}
        />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 text-black cursor-pointer">
        <FontAwesomeIcon
          icon={faChevronRight}
          width={30}
          height={30}
          onClick={nextSlide}
        />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-xs mr-3 cursor-pointer">
            <FontAwesomeIcon icon={faCircle} color="#ae0000" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
