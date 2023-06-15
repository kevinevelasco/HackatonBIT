import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 2);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((currentSlide - 1 + 2) % 2);
  };

  return (
    <main className='slider'>
      <section className='slider-container'>
        <img
          className={`slider-image ${currentSlide === 0 ? 'active' : ''}`}
          src="/assets/slider1.jpg"
          alt='Imagen 1'
        />
        <img
          className={`slider-image ${currentSlide === 1 ? 'active' : ''}`}
          src="/assets/slider3.jpg"
          alt='Imagen 2'
        />
        
        <button className='slider-button prev' onClick={handlePreviousSlide}>
          ⏮
        </button>
        <button className='slider-button next' onClick={handleNextSlide}>
          ⏭
        </button>
      </section>
    </main>
  );
};

export default Slider;
