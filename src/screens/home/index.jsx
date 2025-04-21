import Banner from "../../components/home/banner.jsx";
import RequestForm from "../../components/home/requestForm.jsx";
import Services from "../../components/home/services.jsx";
import FunFacts from "../../components/home/funFacts.jsx";
import MoreInfo from "../../components/home/moreInfo.jsx";
import CallbackForm from "../../components/home/callbackForm.jsx";
import Testimonials from "../../components/home/testimonials.jsx";
import PageLayout from "../../components/common/pageLayout/index.jsx";


export default function () {
    return (
        <PageLayout>
            <Banner />
            <Services />
            <FunFacts />
            <MoreInfo />
            <CallbackForm />
            <Testimonials />
            <RequestForm />

            {/*<Partners />*/}
        </PageLayout>

    )
}