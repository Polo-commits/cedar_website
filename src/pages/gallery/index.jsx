// src/pages/gallery/index.jsx

import React, { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { client } from '../../sanityClient';
import PageLayout from '../../components/common/pageLayout/index.jsx';
import './gallery.css';  // your existing grid styles

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    client
      .fetch(`*[_type == "gallery"][0].images[]{asset->{url}}`)
      .then(data => {
        // data is [{asset:{url}}, …]
        setImages(data.map(item => item.asset.url));
      })
      .catch(console.error);
  }, []);

  return (
    <PageLayout>
      <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>
        Cedar Inspection Gallery
      </h1>

      <div className="gallery-grid">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="gallery-item"
            onClick={() => {
              setStartIndex(idx);
              setOpen(true);
            }}
          >
            <img src={src} alt={`Gallery ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={startIndex}
      />
    </PageLayout>
  );
}
