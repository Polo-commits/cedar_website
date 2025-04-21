import ServiceImageOne from "../../assets/images/services/ANDT.jpg";
import ServiceImageTwo from "../../assets/images/services/OCTG.jpg";
import ServiceImageThree from "../../assets/images/services/Lifting.jpg";
import ServiceImageFour from "../../assets/images/services/Integrity.jpg";
import {Link} from "react-router-dom";


export default function () {
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
                    <div className="col-md-3">
                        <div className="service-item">
                            <img src={ServiceImageFour} alt="" />
                            <div className="down-content">
                                <h4>Integrity Management</h4>
                                <p>
                                    Clients are seeking benefits that can be provided by modernising
                                    and transforming integrity management, improved efficiencies,
                                    improved safety, reduced risks and costs. Our Integrity and inspection
                                    experts...
                                </p>
                                <Link to={"/services"} className="filled-button">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-item">
                            <img src={ServiceImageOne} alt="" />
                            <div className="down-content">
                                <h4>Advanced NDT</h4>
                                <p>
                                    Our advanced non-destructive testing (NDT) techniques should
                                    be ever-present in evaluating your critical assets helping
                                    to identify and prevent flaws and increase reliability. Our
                                    highly-skilled team...
                                </p>
                                <Link to={"/services"} className="filled-button">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-item">
                            <img src={ServiceImageTwo} alt="" />
                            <div className="down-content">
                                <h4>OCTG Inspection Services</h4>
                                <p>
                                    To expand on our service, we offer tubular inspections
                                    and thread/equipment inspections according to DS-1, API, NS2
                                    level and client specification of OCTG Inspections. Our
                                    Solution for...
                                </p>
                                <Link to={"/services"} className="filled-button">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="service-item">
                            <img src={ServiceImageThree} alt="" />
                            <div className="down-content">
                                <h4>Lifting Inspection</h4>
                                <p>
                                    Any lifting and hand equipment should be checked
                                    when installed and periodically thereafter. If
                                    this regular check is not done, they can be source
                                    of accident...
                                </p>
                                <Link to={"/services"} className="filled-button">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}