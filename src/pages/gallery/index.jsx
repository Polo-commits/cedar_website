// src/pages/gallery/index.jsx

import { useEffect, useState } from 'react';
import { client } from '../../sanityClient';

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    client.fetch(
      `*[_type == "gallery"][0].images[]{asset->{url}}`
    )
    .then((data) => setGalleryItems(data || []))
    .catch(console.error);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Cedar Inspection Gallery</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
        }}
      >
        {galleryItems.map((img, idx) => (
          <div
            key={idx}
            style={{
              overflow: 'hidden',
              borderRadius: '10px',
            }}
          >
            <img
              src={img.asset.url}
              alt={`Gallery Image ${idx + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
