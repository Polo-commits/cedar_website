import MoreInfoImage from "../../assets/images/more_info/info_img.jpg";
import {Link} from "react-router-dom";


export default function () {
    return (
        <div className="more-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="more-info-content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="left-image">
                                        <img src={MoreInfoImage} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6 align-self-center">
                                    <div className="right-content">
                                        <span>Who we are</span>
                                        <h2>
                                            Get to know about <em>Cedar Inspection Ventures (CIV) Limited</em>
                                        </h2>
                                        <p>
                                            Our experience in inspection, together with our extensive knowledge
                                            of international standards guarantees that our clients have access to
                                            the best personnel and techniques in the respective inspection disciplines.
                                            Our inspectors are equipped with modern equipment and operations are
                                            coordinated and reported via our web-based asset management platform.
                                            <br />
                                            <br />
                                            CIV believe that we form part of your front line risk management resource
                                            ensuring that project assets are prepared in compliance with relevant
                                            standards...
                                        </p>
                                        <Link to={'/about'} className="filled-button">
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
    )
}