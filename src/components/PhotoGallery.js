import React from 'react';
import './PhotoGallery.css';

// You can replace these with your actual image paths later
const images = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
];

function PhotoGallery() {
  return (
    <section className="photo-gallery">
      <h2>Our Work</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PhotoGallery;
