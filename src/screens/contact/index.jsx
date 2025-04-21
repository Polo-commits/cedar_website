import PageLayout from "../../components/common/pageLayout/index.jsx";
import {useRef} from "react";

export default function () {
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = "ericnanaantwi97@cedarinspectionventures.com"

        window.location.href = `mailto:${email}
        ?subject=${encodeURIComponent(subjectRef.current.value)}
        &body=${encodeURIComponent(messageRef.current.value)}`;
    }

    return (
        <PageLayout>
            {/* Page Content */}
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Contact Us</h1>
                            <span>feel free to send us a message now!</span>
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
                                <p>
                                    Mobile Numbers
                                </p>
                                <a href="#">+233 (0) 54 279 5320</a><br/>
                                <a href="#">+233 (0) 54 307 1604</a><br/>
                                <a href="#">+233 (0) 50 062 9069</a><br/>
                                <a href="#">+233 (0) 24 62 63191</a>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="contact-item">
                                <i className="fa fa-envelope" />
                                <h4>Email</h4>
                                <p>
                                    Reach to us via our email address
                                </p>
                                <a href="#">cedarinspectionventures@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact-item">
                                <i className="fa fa-map-marker" />
                                <h4>Location</h4>
                                <p>
                                    West-Tanokrom, Western region
                                    <br />
                                    Tema Community 1, Greater Accra Region
                                    <br />
                                    Ghana, West Africa
                                </p>
                                {/*<a href="https://maps.app.goo.gl/iXrEZmJWjfL4naqA8" target="_blank">View on Google Maps</a>*/}
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
                                <h2>
                                    Send us a <em>message</em>
                                </h2>
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
                                                    defaultValue={""}
                                                    ref={messageRef}
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button
                                                    type="submit"
                                                    id="form-submit"
                                                    className="filled-button"
                                                >
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
            {/*<div id="map">*/}
            {/*    <iframe*/}
            {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63602.38171608787!2d-1.8187102751775222!3d4.914748902495986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe779f9768f4561%3A0xa42ac5ea0516a078!2sSekondi%20Taxi%20Station!5e0!3m2!1sen!2sgh!4v1701109059363!5m2!1sen!2sgh"*/}
            {/*        width={600}*/}
            {/*        height={450}*/}
            {/*        style={{ border: 0 }}*/}
            {/*        allowFullScreen=""*/}
            {/*        loading="lazy"*/}
            {/*        referrerPolicy="no-referrer-when-downgrade"*/}
            {/*    />*/}
            {/*</div>*/}
        </PageLayout>

    )
}