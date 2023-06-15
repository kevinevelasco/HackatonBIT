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
          src="https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2023-03/covid-ent-hipertension-2-1500x797.jpg?itok=y_0JNqmV"
          alt='Imagen 1'
        />
        <img
          className={`slider-image ${currentSlide === 1 ? 'active' : ''}`}
          src="https://img.freepik.com/premium-photo/healthcare-medical-doctor-working-with-professional-team-physician-nursing-assistant_34200-767.jpg?w=2000"
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
