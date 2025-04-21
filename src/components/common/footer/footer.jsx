import Logo from "../../../assets/images/logo.png";
import {Link} from "react-router-dom";


export default function () {
    window.scrollTo(0, 0);
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 footer-item">
                            <img src={Logo} alt="" className="logo-image"/>
                            <p>
                                Drawing on extensive inspection experience and international standards,
                                we offer clients top-tier personnel, modern equipment, and efficient
                                coordination via our web-based platform.
                            </p>
                            <ul className="social-icons">
                                <li>
                                    <a
                                        rel="nofollow"
                                        href="https://fb.com/templatemo"
                                        target="_blank"
                                    >
                                        <i className="fa fa-facebook"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-linkedin"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-behance"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-item">
                            <h4>Services</h4>
                            <ul className="menu-list">
                                <li>
                                    <Link to={"/services"}>Integrity Management</Link>
                                </li>
                                <li>
                                    <Link to={"/services"}>Advanced NDT</Link>
                                </li>
                                <li>
                                    <Link to={"/services"}>OCTG Inspection Services</Link>
                                </li>
                                <li>
                                    <Link to={"/services"}>Lifting Inspection</Link>
                                </li>
                                <li>
                                    <Link to={"/services"}>Third Party Inspection</Link>
                                </li>
                                <li>
                                    <Link to={"/services"}>Factory Inspection</Link>
                                </li>
                                <li>
                                    <Link to={"/services"}>Boiler Inspection</Link>
                                </li>
                                <li>
                                    <Link to={"/services"}>Valve and Pressure Gauge Inspection and Installation</Link>
                                </li>
                                <li>
                                    <Link to={"/services"}>Coating and Spraying</Link>
                                </li>
                            </ul>
                            <br/><br/>
                            <h4>Languages we operate with</h4>
                            <ul className="menu-list">
                                <p>English, Spanish, German, French, Italian.</p>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-item">
                            <h4>Additional Pages</h4>
                            <ul className="menu-list">
                                <li>
                                    <Link to={'/about'}>About Us</Link>
                                </li>
                                <li>
                                    <a href="#">How We Work</a>
                                </li>
                                <li>
                                    <a href="#">Quick Support</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-item last-item">
                            <h4>Contact Us</h4>
                            <ul className="menu-list">
                                <li>
                                    <span>Location:</span><br/>
                                    <a>
                                        Tema Community 1, Greater Accra<br/>
                                        Ghana, West Africa</a>
                                </li>
                                <li>
                                    <span>Mobile Numbers:</span><br />
                                    <a>+233 (0) 246263191</a><br />
                                    <a>+233 (0) 500629069</a><br />
                                    <a>+233 (0) 543071604</a><br />
                                    <a>+233 (0) 542795320</a>
                                </li>
                                <li>
                                    <span>Email Address:</span><br />
                                    <a>cedarinspectionventures@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                Copyright © {new Date().getFullYear()} Cedar Inspection Ventures Limited
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}