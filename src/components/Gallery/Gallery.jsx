import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    '/moto-1.png',
    '/moto-2.png',
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2>Galeria</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`Ducati view ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="modal"
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-content">
            <img src={selectedImage} alt="Ducati enlarged view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;