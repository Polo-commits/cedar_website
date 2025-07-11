import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import { client, getServices } from "../../libs/sanityClient.js";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

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
                {service.image && (
                  <img src={urlFor(service.image).width(400).url()} alt={service.title} />
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
