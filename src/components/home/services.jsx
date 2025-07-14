import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getServices } from "../../libs/sanityClient.js";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  return (
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>
                Our <em>Services</em>
              </h2>
              <span>What we do at Cedar Inspection Ventures Limited.</span>
            </div>
          </div>

          {services.map((service) => (
            <div className="col-md-3" key={service._id}>
              <div className="service-item">
                {service.image?.asset?.url ? (
  <img src={service.image.asset.url} alt={service.title} />
) : (
  <p>No image available</p>
)}

                <div className="down-content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <Link to={`/services/${service.slug.current}`} className="filled-button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
