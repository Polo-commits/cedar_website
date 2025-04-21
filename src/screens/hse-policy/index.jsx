import PageLayout from "../../components/common/pageLayout/index.jsx";
import AboutImage from "../../assets/images/banners/banner_three.jpg";


export default function () {
    // window.scrollTo(0, 0);
    return (
        <PageLayout>
            <>
                {/* Page Content */}
                <div className="page-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>HSE Policy</h1>
                                <span>Our highest priority is the safety of our employees</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-info about-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="more-info-content">
                                    <div className="row">
                                        <div className="col-12 align-self-center">
                                            <div className="right-content">
                                                <span>our HSE policies</span>
                                                <h2>
                                                    Get to know about <em>Cedar Inspection Ventures (CIV)
                                                    Limited </em> HSE policies
                                                </h2>
                                                <p>
                                                    Our highest priority at Cedar Inspection Ventures (CIV) Limited
                                                    is the safety of our employees, clients, and other contractors.
                                                    We are committed to safety excellence and strive daily for zero
                                                    injuries and incidents.
                                                    <br/>
                                                    <br/>
                                                    CIV is committed to conducting our business in a manner that
                                                    protects the environment and the health and safety of our employees
                                                    and the public.
                                                    <br/>
                                                    <br/>
                                                    To meet this commitment, CIV maintains management systems designed
                                                    to ensure compliance with all applicable laws, regulations and
                                                    internal requirements, as well as to facilitate the continuous
                                                    improvement of our processes, products, and personnel.
                                                    CIV will set an example of leadership in the field of health,
                                                    safety and environmental management, and will promote resource
                                                    conservation, the reduction of waste and pollution prevention.
                                                    <br/>
                                                    <br/>
                                                    CIV will work with our suppliers, contractors and customers to
                                                    promote responsible HSE&S practices. We will work with the
                                                    government, industry, and public in support of laws, regulations,
                                                    standards and other programs that safeguard the community,
                                                    workplace and the environment. We will also support education
                                                    and research that promotes and advances HSE&S progress and
                                                    knowledge for the common good.
                                                    CIV will maintain communication and dialogue with the public
                                                    regarding workplace HSE&S issues and will communicate with our
                                                    stakeholders regarding health or environmental risks related to
                                                    the services we provide. We will report publicly on our progress and
                                                    on our overall impact.
                                                    <br/>
                                                    <br/>
                                                    Signed;<br/>
                                                    ADDO ERIC NANA ANTWI-BOASIAKO<br/>
                                                    (chief Execrative Officer)
                                                    <br/>
                                                    <br/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="left-image">
                                                <img src={AboutImage} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </PageLayout>
    )
}