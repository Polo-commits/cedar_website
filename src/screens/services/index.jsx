import PageLayout from "../../components/common/pageLayout/index.jsx";
import ServiceImageOne from "../../assets/images/services/ANDT.jpg";
import ServiceImageTwo from "../../assets/images/services/OCTG.jpg";
import ServiceImageThree from "../../assets/images/services/Lifting.jpg";
import ServiceImageFour from "../../assets/images/services/Integrity.jpg";
import CallbackForm from "../../components/home/callbackForm.jsx";


export default function Services () {
    return (
        <PageLayout>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Our Services</h1>
                            <span>We deliver quality services to all clients</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-services">
                <div className="container">
                    <div className="row" id="tabs">
                        <div className="col-md-4">
                            <ul>
                                <li>
                                    <a href="#tabs-1">
                                        Integrity Management <i className="fa fa-angle-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tabs-2">
                                        Advanced NDT <i className="fa fa-angle-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tabs-3">
                                        OCTG Inspection Services <i className="fa fa-angle-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tabs-4">
                                        Lifting Inspection <i className="fa fa-angle-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tabs-5">
                                        Third Party Inspection <i className="fa fa-angle-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tabs-6">
                                        Factory Inspection <i className="fa fa-angle-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Boiler Inspection <i className="fa fa-angle-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Valve and Pressure Gauge Inspection and Installation <i
                                        className="fa fa-angle-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Coating and Spraying <i
                                        className="fa fa-angle-right"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8 services-content">
                            <section className="tabs-content">
                                <article id="tabs-1" className="mb-5">
                                    <img src={ServiceImageFour} alt=""/>
                                    <h4>Integrity Management</h4>
                                    <p>
                                        Clients are seeking benefits that can be provided by modernising
                                        and transforming integrity management, improved efficiencies,
                                        improved safety, reduced risks and costs. Our Integrity and inspection
                                        experts provide ground-breaking integrity management services to achieve these
                                        through inspection tool, providing you with fuller, more reliable understanding
                                        of your assets so you can respond faster, more intuitively and which reduced
                                        operating costs. We deliver game-changing services to keep your assets running
                                        safely and productively.
                                    </p>
                                </article>
                                <article id="tabs-2" className="mb-5">
                                    <img src={ServiceImageOne} alt=""/>
                                    <h4>Advanced NDT</h4>
                                    <p>
                                        Our advanced non-destructive testing (NDT) techniques should
                                        be ever-present in evaluating your critical assets helping
                                        to identify and prevent flaws and increase reliability. Our
                                        highly-skilled team is ready to tackle your projects with a comprehensive
                                        range of solutions, delivered using the must up-to-date equipment and a
                                        range of industry-proven techniques. Our Solution includes:
                                        <br/><br/>
                                        <ol>
                                            <li>Magnetic Particle Inspection (MPI)</li>
                                            <li>Dye Penetrant Inspection (DPI)</li>
                                            <li>Close Visual Inspection (CVI)</li>
                                            <li>Ultrasonic Testing (UT) - Wall thickness and Shear wave</li>
                                            <li>Radiographic Testing (RT) and Radiographic Film interpretation(RFI)</li>
                                            <li>Eddy Current</li>
                                        </ol>
                                    </p>
                                </article>
                                <article id="tabs-3" className="mb-5">
                                    <img src={ServiceImageTwo} alt=""/>
                                    <h4>OCTG Inspection Services</h4>
                                    <p>
                                        To expand on our service, we offer tubular inspections
                                        and thread/equipment inspections according to DS-1, API, NS2
                                        level and client specification of OCTG Inspections. Our
                                        Solution for Oil Country Tubular Goods (OCTG) inspection includes:
                                        <ol>
                                            <li>Close Visual Inspection</li>
                                            <li>Dimensional Inspection and Verification</li>
                                            <li>Magnetic Particle (Both colour contrast and ultraviolet) Inspection</li>
                                            <li>Dye Penetrant Inspection (DPI)</li>
                                            <li>Ultrasonic Thickness Examination (UT)</li>
                                            <li>Specialised Drill Pipe and Tubular Inspection</li>
                                            <li>BHA and Specialty Drilling Tools Inspection</li>
                                            <li>Connection Field Repair and refacing Services including Copper Coat</li>
                                            <li>Third Party Verification Service</li>
                                            <li>Full Length Drift on Tubing and Casing.</li>
                                        </ol>
                                    </p>
                                </article>
                                <article id="tabs-4">
                                    <img src={ServiceImageThree} alt=""/>
                                    <h4>Lifting Inspection</h4>
                                    <p>
                                        Any lifting and hand equipment should be checked
                                        when installed and periodically thereafter. If
                                        this regular check is not done, they can be source
                                        of accident at work. CIV team lead the following inspections in accordance
                                        with internation regulations.
                                        <ol>
                                            <li>Overhead cranes inspection</li>
                                            <li>Forklifts inspection</li>
                                            <li>Lifting Chains, hooks inspection</li>
                                        </ol>
                                    </p>
                                </article>
                                <article id="tabs-5">
                                    <img src={ServiceImageTwo} alt=""/>
                                    <h4>Third Party Inspection</h4>
                                    <p>
                                        For our 3rd party inspection services we provide:
                                        <ol>
                                            <li>FOCUS: Product-oriented,identification of defects.</li>
                                            <li>ACTIVITIES: Inspection testing and measurements.</li>
                                            <li>OBJECTIVE: Ensure final product meet quality standards</li>
                                            <li>DOCUMENTATION: Inspection reports and testing results.</li>
                                        </ol>
                                    </p>
                                </article>
                                <article id="tabs-6">
                                    <img src={ServiceImageThree} alt=""/>
                                    <h4>Factory Inspection</h4>
                                    <p>
                                        Through assessments of factory premises to ensure compliance with safety and regulatory standards.
                                    </p>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <CallbackForm/>
            <p className="mb-5"></p>
        </PageLayout>
    )
}