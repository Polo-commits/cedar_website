import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getLeadership } from "../../libs/sanityClient";

export default function Testimonials() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    getLeadership().then(setMembers);
  }, []);

  const PrevArrow = (props) => <button {...props} className="PrevArrow"></button>;
  const NextArrow = (props) => <button {...props} className="NextArrow"></button>;

  const slickSettings = {
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
    <div className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Cedar Inspection Ventures <em>(CIV)</em> Limited Leadership</h2>
            </div>
          </div>
          <div className="col-md-12">
            <Slider {...slickSettings}>
              {members.map((member, idx) => (
                <div key={idx} className="testimonial-item">
                  <div className="inner-content">
                    <h4>{member.name}</h4>
                    <span>{member.title}</span>
                    <p>{member.bio}</p>
                    {member.photo?.asset?.url && (
                      <img src={member.photo.asset.url} alt={member.name} style={{ maxWidth: '150px' }} />
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
