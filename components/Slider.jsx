import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import SliderControls from './SliderControls';
import styles from '../styles';

const Slider = ({ slides, sliderHeight, controlsColor, section }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (newIndex) => setCurrentIndex(newIndex);

  const nextSlide = (newIndex) => setCurrentIndex(newIndex);

  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  const preloadImages = (images) => images.map((image) => {
    const img = new Image();
    img.src = image.url;
    return img;
  });

  const [preloadedImages, setPreloadedImages] = useState([]);

  useEffect(() => {
    setPreloadedImages(preloadImages(slides));
  }, [slides]);

  return (
    <div>
      {preloadedImages.length === slides.length ? (
        <div className={`w-max-[1400px] ${section === 'hero' ? `${sliderHeight} ${styles.heroSliderContainer}` : `${styles.workSliderContainer}`}`}>
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
            }}
            className={`w-max-[1400px] ${section === 'hero' ? `${sliderHeight} ${styles.heroSlider}` : `${styles.workSlider}`}`}
            alt={slides[currentIndex].title}
            loading="lazy"
          />

          <SliderControls
            currentIndex={currentIndex}
            slides={slides}
            onPrevSlide={prevSlide}
            onNextSlide={nextSlide}
            controlsColor={controlsColor}
          />

          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`hidden lg:block md:block text-xs mr-3 cursor-pointer ${
                  index === currentIndex ? 'text-gray-500' : 'text-[#ae0000]'
                }`}
              >
                <FontAwesomeIcon icon={faCircle} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`w-max-[1400px] ${sliderHeight} w-full m-auto relative group`} />
      )}
    </div>
  );
};

export default Slider;
