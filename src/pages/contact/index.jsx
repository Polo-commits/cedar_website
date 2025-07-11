import PageLayout from "../../components/common/pageLayout/index.jsx";
import { useEffect, useState, useRef } from "react";
import { getContact } from "../../libs/sanityClient.js";

export default function Contact() {
  const [contactData, setContactData] = useState(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    getContact().then(setContactData);
  }, []);

  if (!contactData) return <div>Loading...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = contactData.email || "ericnanaantwi97@cedarinspectionventures.com";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subjectRef.current.value
    )}&body=${encodeURIComponent(messageRef.current.value)}`;
  };

  return (
    <PageLayout>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{contactData.title}</h1>
              <span>{contactData.subtitle}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-information">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-item">
                <i className="fa fa-phone" />
                <h4>Phone</h4>
                <p>Mobile Numbers</p>
                {contactData.phones?.map((phone) => (
                  <div key={phone}>
                    <a href={`tel:${phone}`}>{phone}</a><br />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-5">
              <div className="contact-item">
                <i className="fa fa-envelope" />
                <h4>Email</h4>
                <p>Reach to us via our email address</p>
                <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-item">
                <i className="fa fa-map-marker" />
                <h4>Location</h4>
                <p>{contactData.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="callback-form contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Send us a <em>message</em></h2>
                <span>Get in touch with us via email.</span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="contact-form">
                <form id="contact" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          ref={subjectRef}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows={6}
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          ref={messageRef}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="filled-button">
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {contactData.mapLink && (
        <div id="map">
          <iframe
            src={contactData.mapLink}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </PageLayout>
  );
}
