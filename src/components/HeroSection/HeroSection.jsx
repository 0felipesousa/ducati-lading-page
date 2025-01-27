import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Ducati Panigale",
      description: "Poder, elegância e tecnologia italiana em sua forma mais pura.",
      mainImage: "/moto-1.png",
      thumbnail: "/moto-1.png",
      gradient: "linear-gradient(45deg, #e32b2b,#000000)",
      thumbBackground: "bg-black"
    },
    {
      id: 1,
      title: "Ducati Diavel",
      description: "Performance extrema com design revolucionário.",
      mainImage: "/moto-2.png",
      thumbnail: "/moto-2.png",
      gradient: "linear-gradient(45deg, #000000, #e32b2b)",
      thumbBackground: "bg-red"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide(current => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(current => (current - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="hero">
      <div 
        className="hero-background"
        style={{ background: slides[currentSlide].gradient }}
      ></div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
          <button className="hero-btn">Agende seu Test Drive</button>
        </div>

        <div className="hero-image">
          <img 
            src={slides[currentSlide].mainImage} 
            alt="Ducati Motorcycle" 
            className="main-bike"
          />
        </div>
      </div>

      {/* Controles de navegação */}
      <div className="navigation-controls">
        <button 
          className="nav-arrow prev"
          onClick={prevSlide}
        >
          &#8592;
        </button>
        <button 
          className="nav-arrow next"
          onClick={nextSlide}
        >
          &#8594;
        </button>
      </div>

      {/* Miniaturas */}
      <div className="thumbnails">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`thumbnail ${currentSlide === index ? 'active' : ''} ${slide.thumbBackground}`}
            onClick={() => setCurrentSlide(index)}
          >
            <img src={slide.thumbnail} alt={`Miniatura ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;