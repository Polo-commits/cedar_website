import Preloader from "../preloader/index.jsx";
import TopBanner from "../topBanner/index.jsx";
import Header from "../header/index.jsx";
import Footer from "../footer/footer.jsx";


export default function ({ children }) {
    return (
        <>
            <Preloader />
            <TopBanner />
            <Header />
            {children}
            <Footer />
        </>
    )
}