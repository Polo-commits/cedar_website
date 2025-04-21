import Slider from "react-slick";

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
        <div className="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <h2>Cedar Inspection Ventures <em>(CIV)</em> Limited Leadership</h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <Slider {...slickSettings}>
                            {/*<OwlCarousel {...testimonialsOptions}>*/}
                            <div className="testimonial-item">
                                <div className="inner-content">
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
                            <div className="testimonial-item">
                                <div className="inner-content">
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
                            <div className="testimonial-item">
                                <div className="inner-content">
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

                            {/*</OwlCarousel>*/}

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}