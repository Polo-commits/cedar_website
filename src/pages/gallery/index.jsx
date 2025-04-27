import { useEffect, useState } from 'react';
import sanityClient from "../../sanity/sanityClient";

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "gallery"]{
        _id,
        title,
        "imageUrl": image.asset->url
      }`
    )
    .then((data) => setGalleryItems(data))
    .catch(console.error);
  }, []);

  return (
    <div className="gallery-page" style={{ padding: '50px' }}>
      <h1>Gallery</h1>
      <div className="gallery-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {galleryItems.map((item) => (
          <div key={item._id} className="gallery-item" style={{
            overflow: 'hidden',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              style={{
                width: '100%', 
                height: '300px', 
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
