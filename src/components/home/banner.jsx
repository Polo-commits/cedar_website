import Slider from "react-slick";
import {Link} from "react-router-dom";


export default function () {
    const PrevArrow = (props) => <button {...props} className="PrevArrow"></button>;
    const NextArrow = (props) => <button {...props} className="NextArrow"></button>;

    const slickSettings = {
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        // fade: true,
        draggable: false,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
    };
    return (
        <div className="main-banner header-text" id="top">
            <Slider {...slickSettings} className="Modern-Slider">
                {/* Item */}
                <div className="item item-1">
                    <div className="img-fill">
                        <div className="text-content">
                            <h6>we are ready to help you</h6>
                            <h4>
                                Integrity Management
                            </h4>
                            <p>
                                Clients are seeking benefits that can be provided by modernising
                                and transforming integrity management, improved efficiencies,
                                improved safety, reduced risks and costs. Our Integrity and inspection
                                experts...
                            </p>
                            <Link to={"/services"} className="filled-button">
                                learn more
                            </Link>
                        </div>
                    </div>
                </div>
                {/* // Item */}
                {/* Item */}
                <div className="item item-2">
                    <div className="img-fill">
                        <div className="text-content">
                            <h6>we are here to support you</h6>
                            <h4>
                                Advanced NDT
                            </h4>
                            <p>
                                Our advanced non-destructive testing (NDT) techniques should
                                be ever-present in evaluating your critical assets helping
                                to identify and prevent flaws and increase reliability. Our
                                highly-skilled team...
                            </p>
                            <Link to={"/services"} className="filled-button">
                                learn more
                            </Link>
                        </div>
                    </div>
                </div>
                {/* // Item */}
                {/* Item */}
                <div className="item item-3">
                    <div className="img-fill">
                        <div className="text-content">
                            <h6>we have a solid background</h6>
                            <h4>
                                OCTG Inspection Services
                            </h4>
                            <p>
                                To expand on our service, we offer tubular inspections
                                and thread/equipment inspections according to DS-1, API, NS2
                                level and client specification of OCTG Inspections. Our
                                Solution...
                            </p>
                            <Link to={"/services"} className="filled-button">
                                learn more
                            </Link>
                        </div>
                    </div>
                </div>
                {/* // Item */}
                <div className="item item-4">
                    <div className="img-fill">
                        <div className="text-content">
                            <h6>we have qualified personnel</h6>
                            <h4>
                                Lifting Inspection
                            </h4>
                            <p>
                                Any lifting and hard equipment should be checked
                                when installed and periodically thereafter. If
                                this regular check is not done, they can be source
                                of accident...
                            </p>
                            <Link to={"/services"} className="filled-button">
                                learn more
                            </Link>
                        </div>
                    </div>
                </div>
                {/* // Item */}
            </Slider>
        </div>
    )
}