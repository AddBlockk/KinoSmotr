import "./WatchNow.scss";
import { useState } from "react";

import prev from "../../assets/images/watchNow/prev.svg";
import next from "../../assets/images/watchNow/next.svg";

import watchNow1 from "../../assets/images/watchNow/watch-now1.webp";
import watchNow2 from "../../assets/images/watchNow/watch-now2.webp";
import watchNow3 from "../../assets/images/watchNow/watch-now3.webp";
import watchNow4 from "../../assets/images/watchNow/watch-now4.webp";
import watchNow5 from "../../assets/images/watchNow/watch-now5.webp";

export function WatchNow() {
  const images = [watchNow1, watchNow2, watchNow3, watchNow4, watchNow5];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? Math.ceil(images.length / 4) - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === Math.ceil(images.length / 4) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getSlides = () => {
    const slides = [];
    for (let i = 0; i < images.length; i += 4) {
      slides.push(images.slice(i, i + 4));
    }
    return slides;
  };

  const slides = getSlides();

  return (
    <div className="slider">
      <h2>Сейчас смотрят</h2>
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide.map((image, imgIndex) => (
              <a href="#">
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Slide ${index * 4 + imgIndex}`}
                />
              </a>
            ))}
          </div>
        ))}
      </div>
      <button className="slider-button prev" onClick={goToPrevious}>
        <img src={prev} alt="" className="slider-button-nav" />
      </button>
      <button className="slider-button next" onClick={goToNext}>
        <img src={next} alt="" className="slider-button-nav" />
      </button>
    </div>
  );
}
