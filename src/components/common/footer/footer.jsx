import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFooter } from "../../../libs/sanityClient";

export default function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    getFooter().then(setFooterData).catch(console.error);
    // If you *really* want to scroll top:
    // window.scrollTo(0, 0);
  }, []);

  if (!footerData) return null;

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">

            {/* Left - Logo + Description + Socials */}
            <div className="col-md-3 footer-item">
              <img src={Logo} alt="" className="logo-image" />
              <p>{footerData.description}</p>
              <ul className="social-icons">
                {footerData.socialLinks?.map((link, i) =>
                  link?.url && link?.icon ? (
                    <li key={i}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        <i className={`fa ${link.icon}`}></i>
                      </a>
                    </li>
                  ) : null
                )}
              </ul>
            </div>

            {/* Services */}
            <div className="col-md-3 footer-item">
              <h4>Services</h4>
              <ul className="menu-list">
                {footerData.services?.map((service, i) => (
                  <li key={i}>
                    <Link to="/services">{service}</Link>
                  </li>
                ))}
              </ul>
              <br /><br />
              <h4>Languages we operate with</h4>
              <p>{footerData.languages}</p>
            </div>

            {/* Additional Pages */}
            <div className="col-md-3 footer-item">
              <h4>Additional Pages</h4>
              <ul className="menu-list">
                {footerData.additionalPages?.map((page, i) =>
                  page?.slug?.current ? (
                    <li key={i}>
                      <Link to={`/${page.slug.current}`}>{page.title}</Link>
                    </li>
                  ) : null
                )}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3 footer-item last-item">
              <h4>Contact Us</h4>
              <ul className="menu-list">
                <li>
                  <span>Location:</span><br />
                  <a>{footerData.location}</a>
                </li>
                <li>
                  <span>Mobile Numbers:</span><br />
                  {footerData.phones?.map((phone, i) => (
                    <div key={i}>
                      <a href={`tel:${phone}`}>{phone}</a>
                    </div>
                  ))}
                </li>
                <li>
                  <span>Email Address:</span><br />
                  <a href={`mailto:${footerData.email}`}>{footerData.email}</a>
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
  );
}
