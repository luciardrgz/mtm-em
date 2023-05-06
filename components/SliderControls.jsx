import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const SliderControls = ({ currentIndex, slides, onPrevSlide, onNextSlide, controlsColor }) => {
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    onPrevSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    onNextSlide(newIndex);
  };

  return (
    <div>
      <div
        className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 lg:text-2xl md:text-2xl text-lg p-2 text-${controlsColor} md:text-black cursor-pointer`}
      >
        <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} />
      </div>

      <div
        className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 lg:text-2xl md:text-2xl text-lg p-2 text-${controlsColor} md:text-black cursor-pointer`}
      >
        <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} />
      </div>
    </div>
  );
};

export default SliderControls;
