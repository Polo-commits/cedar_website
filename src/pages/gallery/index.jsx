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
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className="gallery-item"
                  onClick={() =>
                    setLightbox({
                      open: true,
                      src: img.asset.url,
                      caption: img.caption || img.description || ''
                    })
                  }
                >
                  <img src={img.asset.url} alt={project.title} loading="lazy" />
                  {img.caption && (
                    <div className="caption">{img.caption}</div>
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
