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
                                    Any lifting and hand equipment should be checked when installed and periodically thereafter. If this regular check is not done, they can be a source of accidents at work. CIV Limited team lead the following inspection or examination in accordance with international standards and regulations like BS, EN, LOLER, PUWER, ASME and any client-specific safe system of work and requirements.
                                        <ol>
                                            <li>Overhead cranes inspection</li>
                                            <li>Forklifts inspection</li>
                                            <li>Lifting Chains, hooks inspection</li>
                                        </ol>
                                    </p>
                                    <article id="tabs-X" className="mb-5">
  <h4>Supplies of Lifting Accessories</h4>
  <p>
    At CIV Limited, we specialize in supplying high-quality lifting Accessories to meet the needs of various industries. Our range of products includes:
  </p>
  <ul>
    <li>Slings: Wire rope slings, Chain slings and synthetic slings.</li>
    <li>Shackles: High-Strength shackles for secure lifting and rigging applications.</li>
    <li>Hooks: Durable hooks for lifting and rigging, designed for heavy-duty use.</li>
    <li>Lifting Beam: Customizable lifting Beams for specific lifting requirements.</li>
    <li>Other Lifting Accessories: Clamps, Spreader bars and more.</li>
  </ul>
</article>
<article id="tabs-4" className="mb-5">
    <img src={ServiceImageFour} alt="Calibration Services" />
    <h4>Calibration</h4>
    <p>
      At CIV Limited, we provide accurate and reliable calibration services to ensure your measuring instruments are performing at their maximum best. Our expert technicians use state-of-the-art equipment to calibrate a wide range of instruments, ensuring compliance with industry standards. Our calibration services include instruments calibration, workshop calibration and customized calibration.
    </p>
  </article>
  <article id="tabs-5" className="mb-5">
    <img src={ServiceImageFive} alt="Valve & Pressure Gauge Inspection and Installation" />
    <h4>Valve & Pressure Gauge Inspection and Installation</h4>
    <p>
      Cedar Inspection Ventures (CIV) Limited provides comprehensive valve and pressure gauge inspection and installation services to ensure the safety, efficiency and reliability of your system. Our experienced technicians use advanced equipment and techniques to inspect and install valves and pressure gauges, ensuring optimal performance and compliance with industry standards. Our inspection team provides the following range of services:
    </p>
    <ul>
      <li>Thorough inspection or examination of valves to detect leaks, corrosion and other potential issues</li>
      <li>Calibration and inspection of pressure gauges to ensure accurate readings</li>
    </ul>
  </article>
  <article id="tabs-6" className="mb-5">
    <img src={ServiceImageSix} alt="Pipeline Inspection" />
    <h4>Pipeline Inspection</h4>
    <p>
      At CIV Limited, we specialize in providing comprehensive pipeline inspection services in accordance with API standards and other relevant standards to ensure the integrity and safety of your pipeline infrastructure. Our team of experienced professionals utilizes advanced technologies and techniques to detect potential issues before they become major problems. Our pipeline inspection services include visual inspection, pipeline integrity assessment, non-destructive testing (NDT) and leak detection.
    </p>
  </article>
  <article id="tabs-7" className="mb-5">
    <img src={ServiceImageSeven} alt="Marine Protective Coating" />
    <h4>Marine Protective Coating</h4>
    <p>
      At CIV Limited, we specialize in delivering high-quality marine protective coatings to shield your vessels, structures, and equipment from the harsh marine environment. Our experienced team ensures durable, corrosion-resistant, and low-maintenance coatings that meet your specific needs.
    </p>
  </article>
  <article id="tabs-8" className="mb-5">
    <img src={ServiceImageEight} alt="Manpower Supply" />
    <h4>Manpower Supply</h4>
    <p>
      We provide skilled and reliable manpower to meet the needs of various industries. Our manpower supply services include:
    </p>
    <ul>
      <li>Skilled Labour: Experienced professionals for technical and specialized roles</li>
      <li>Unskilled Labour: Reliable workforce for general labour and support tasks</li>
    </ul>
  </article>
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
                                    <h4>Statutory Inspection</h4>
                                    <p>
                                    CIV Limited provides statutory inspection or examination on industrial Machinery or equipment to ensure compliance with regulatory requirements. Our experienced engineers conduct thorough examinations to identify potential issues that will prevent accidents. Our statutory inspection services include:
                                    </p>
                                    <p>
  CIV Limited provides statutory inspection or examination on industrial Machinery or equipment to ensure compliance with regulatory requirements. Our experienced engineers conduct thorough examinations to identify potential issues that will prevent accidents. Our statutory inspection services include:
</p>
<ul>
  <li>Pressure Vessel examination/Inspection</li>
  <li>Lifting Equipment examination/Inspection</li>
  <li>Piping and Tank Inspection</li>
  <li>Boiler Inspection/Examination and others</li>
</ul>
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