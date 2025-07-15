import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/common/pageLayout';
import { getGallery } from '../../libs/sanityClient';
import './gallery.css';

export default function GalleryPage() {
  const [projects, setProjects] = useState([]);
  const [lightbox, setLightbox] = useState({ open: false, src: '', caption: '' });

  useEffect(() => {
    getGallery().then(setProjects).catch(console.error);
  }, []);

  return (
    <PageLayout>
      <div className="container">
        <h1 className="gallery-title">Our Project Gallery</h1>

        {projects.map((project, i) => (
          <div key={i} className="gallery-project">
            <h2>{project.title}</h2>
            <span className="category">{project.category}</span>
            <p>{project.description}</p>

            <div className="gallery-grid">
              {project.images.map((imgObj, idx) => (
                <div
                  key={idx}
                  className="gallery-item"
                  onClick={() =>
                    setLightbox({
                      open: true,
                      src: imgObj.image.asset.url,
                      caption: imgObj.caption || ''
                    })
                  }
                >
                  <img
                    src={imgObj.image.asset.url}
                    alt={imgObj.caption || project.title}
                    loading="lazy"
                  />
                  {imgObj.caption && (
                    <div className="caption">{imgObj.caption}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {lightbox.open && (
          <div
            className="lightbox-overlay"
            onClick={() => setLightbox({ open: false, src: '', caption: '' })}
          >
            <img src={lightbox.src} alt="Preview" className="lightbox-img" />
            {lightbox.caption && (
              <div className="lightbox-caption">{lightbox.caption}</div>
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
