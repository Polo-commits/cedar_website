import PageLayout from "../../components/common/pageLayout/index.jsx";
import AboutImage from "../../assets/images/banners/banner_three.jpg";
import FunFacts from "../../components/home/funFacts.jsx";


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
                                <h1>About Us</h1>
                                <span>We have experienced and qualified personnel</span>
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
                                                <span>our solid background on inspection</span>
                                                <h2>
                                                    Get to know about <em>Cedar Inspection Ventures (CIV) Limited </em>
                                                </h2>
                                                <p>
                                                    Our experience in inspection, together with our extensive knowledge
                                                    of international standards guarantees that our clients have access
                                                    to
                                                    the best personnel and techniques in the respective inspection
                                                    disciplines.
                                                    Our inspectors are equipped with modern equipment and operations are
                                                    coordinated and reported via our web-based asset management
                                                    platform.
                                                    <br/>
                                                    <br/>
                                                    CIV Limited believe that we form part of your front line risk management
                                                    resource
                                                    ensuring that project assets are prepared in compliance with
                                                    relevant
                                                    standards. Our team comprises of extensively qualified, safety
                                                    focused
                                                    inspectors who are highly mobile and at home in their operating
                                                    environments. Our inspectors are highly experienced and fully
                                                    qualified
                                                    with the international Standards of ISO, ASNT, ASME, LEEA and etc.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
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
                <FunFacts/>
                <div className="team mb-3 mt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h2>
                                        Our Leading <em>members</em>
                                    </h2>
                                    <span>Brief background of the leadership of Cedar Inspection Ventures (CIV) Limited</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="team-item">
                                    <div className="down-content">
                                        <h4>Nana Antwi-Boasiako</h4>
                                        <span>CEO / Managing Director</span>
                                        <p>
                                            He is a young Ghanaian man who have been in oil inspection field for
                                            years and  Knows what entails in that field. He has adequate knowledge
                                            on Non-Destructive Testing (NDT) and Oil County Tubular Goods (OCTG)
                                            inspection. He is a person who pays attention to ideas generate and
                                            greatly consider details of issues.He is agile to Business,
                                            Project scheduling and cost control. Antwi-Boasiako delight in
                                            business development, team development and purse sustainable
                                            growth of businesses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="team-item">
                                    <div className="down-content">
                                        <h4>Mohammed Abdelhahim Rabie</h4>
                                        <span>Technical Manager/ NDT Consultant</span>
                                        <p>
                                            He is Egyptian Metallurgy Engineer who has been in oil field since 20 years ago
                                            until now with adequated knowledge on non destructive test and oil county
                                            tubular goods ( OCTG) , Lifting inspection , new manufacture welding in onshore
                                            / offshore rigs for drilling , service , owner company's in north africa with
                                            various inspection company Nov tuboscope, STC , Scope petroleum company Iraq .
                                            He is NDT Level III inspector and has Asnt No 333744 Level iii MT , PT , UT
                                            methods and can create and develop procedures , SOP , and certified , training
                                            inspectors
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="team-item">
                                <div className="down-content">
                                    <h4>Charles A. Okyere</h4>
                                    <span>Operations Manager</span>
                                    <p>
                                        He is a vibrant Ghanaian man who have been in oil inspection field since 2009.
                                        He has work both offshore and onshore in different countries.
                                        He is a man of man languages (English, French, German, Spanish, Italian,
                                        Greek , Ga, Fante , Nzema). Okyere support a large team within a
                                        time - sensitive and demanding environment,including career
                                        development plans for direct reports and resolutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </PageLayout>
    )
}