import Slider from "react-slick";
import ClientLogo from "../../assets/images/client-01.png";

export default function () {
    const PrevArrow = (props) => <button {...props} className="PrevArrow"></button>;
    const NextArrow = (props) => <button {...props} className="NextArrow"></button>;

    const slickSettings = {
        autoplay: true,
        autoplaySpeed: 15000,
        speed: 600,
        slidesToShow: 2,
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
        <div className="partners">
            <div className="container">
                <div className="row">
                    <Slider {...slickSettings}>
                            <div className="partner-item">
                                <img src={ClientLogo} title={1} alt={1} />
                            </div>
                            <div className="partner-item">
                                <img src={ClientLogo} title={2} alt={2} />
                            </div>
                            <div className="partner-item">
                                <img src={ClientLogo} title={3} alt={3} />
                            </div>
                            <div className="partner-item">
                                <img src={ClientLogo} title={4} alt={4} />
                            </div>
                            <div className="partner-item">
                                <img src={ClientLogo} title={5} alt={5} />
                            </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}