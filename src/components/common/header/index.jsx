import Logo from "../../../assets/images/logo.png";
import {Link, useLocation} from "react-router-dom";

export default function () {
    const route = useLocation();

    const links = {
        "/": "Home",
        "/about": "About Us",
        "/hse-policies": "HSE Policies",
        "/services": "Our Services",
        "/contact": "Contact Us",
    }

    return (
        <header className="">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img src={Logo} alt="" className="logo-image" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            {Object.entries(links).map((link) =>
                                <li className={`nav-item ${route.pathname === link[0] && 'active'}`} key={link[0]}>
                                    <Link to={link[0]} className="nav-link">
                                        {link[1]}
                                        {" "}
                                        {route.pathname === link[0]
                                            && 'active' && <span className="sr-only">(current)</span>}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}