import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { client } from "../../libs/sanityClient";

export default function Banner() {
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "homepage"][0]{
        title,
        subtitle,
        buttonText,
        heroImage{
          asset->{
            url
          }
        }
      }`)
      .then((response) => setData(response))
      .catch(console.error);
  }, []);

  if (!data) return <div>Loading...</div>;

  const PrevArrow = (props) => <button {...props} className="PrevArrow" />;
  const NextArrow = (props) => <button {...props} className="NextArrow" />;

  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="main-banner header-text" id="top">
      <Slider {...settings} className="Modern-Slider">
        <div className="item item-1">
          <div
            className="img-fill"
            style={{
              backgroundImage: `url(${data.heroImage.asset.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-content">
              <h6>{data.subtitle}</h6>
              <h4>{data.title}</h4>
              <p>{/* Description field if needed */}</p>
              <Link to="/services" className="filled-button">
                {data.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
