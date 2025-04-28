// src/pages/gallery/index.jsx

import React, { useState, useEffect } from 'react';
import { client } from '../../sanityClient';
import PageLayout from '../../components/common/pageLayout/index.jsx';
import './gallery.css';

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    client
      .fetch(`*[_type == "gallery"][0].images[]{asset->{url}}`)
      .then(data => setImages(data.map(item => item.asset.url)))
      .catch(console.error);
  }, []);

  const openLightbox = idx => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = () => setCurrentIndex((currentIndex + images.length - 1) % images.length);
  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);

  return (
    <PageLayout>
      <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>
        Cedar Inspection Gallery
      </h1>

      <div className="gallery-grid">
        {images.map((src, idx) => (
          <div key={idx} className="gallery-item" onClick={() => openLightbox(idx)}>
            <img src={src} alt={`Gallery ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox-overlay">
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <button className="lightbox-prev" onClick={prevImage}>&lsaquo;</button>
          <img src={images[currentIndex]} alt="" className="lightbox-img" />
          <button className="lightbox-next" onClick={nextImage}>&rsaquo;</button>
        </div>
      )}
    </PageLayout>
  );
}

