import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import SliderControls from './SliderControls';

const Slider = ({ slides, sliderHeight, controlsColor, overlay }) => {
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
        <div
          className={`w-max-[1400px] ${sliderHeight} w-full m-auto relative group`}
        >
          {overlay && <div className="w-full h-full absolute top-0 left-0 bg-[#ffffff81] rounded-2xl" />}
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
            }}
            className={`w-full ${sliderHeight} rounded-2xl bg-center bg-cover duration-500`}
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
                className="text-xs mr-3 cursor-pointer"
              >
                <FontAwesomeIcon icon={faCircle} color="#ae0000" />
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
