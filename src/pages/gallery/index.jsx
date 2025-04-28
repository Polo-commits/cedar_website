// src/pages/gallery/index.js

import { client } from '../../sanityClient';
import Image from 'next/image';

export async function getStaticProps() {
  const galleryData = await client.fetch(`*[_type == "gallery"][0].images[]{asset->{url}}`);
  
  return {
    props: {
      galleryImages: galleryData || [],
    },
    revalidate: 60, // Revalidate every 60 seconds (optional)
  };
}

export default function Gallery({ galleryImages }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Cedar Inspection Gallery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {galleryImages.map((img, index) => (
          <div key={index} style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
            <Image
              src={img.asset.url}
              alt={`Gallery Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
