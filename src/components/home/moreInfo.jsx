import { Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";

export default function MoreInfo({ title, body, image }) {
  return (
    <div className="more-info">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="more-info-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="left-image">
                    <img src={image} alt="Who We Are" />
                  </div>
                </div>
                <div className="col-md-6 align-self-center">
                  <div className="right-content">
                    <span>Who we are</span>
                    <h2>{title}</h2>
                    <PortableText value={body} />
                    <Link to="/about" className="filled-button">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
