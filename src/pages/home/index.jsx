import { useEffect, useState } from "react";
import { client } from '../../libs/sanityClient';

import Banner from "../../components/home/banner.jsx";
import RequestForm from "../../components/home/requestForm.jsx";
import Services from "../../components/home/services.jsx";
import FunFacts from "../../components/home/funFacts.jsx";
import MoreInfo from "../../components/home/moreInfo.jsx";
import CallbackForm from "../../components/home/callbackForm.jsx";
import Testimonials from "../../components/home/testimonials.jsx";
import PageLayout from "../../components/common/pageLayout/index.jsx";

export default function HomePage() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "homepage"][0]{
      title,
      subtitle,
      heroImage {
        asset->{ url }
      },
      buttonText,
      introText
    }`)
    .then((data) => setHomeData(data))
    .catch(console.error);
  }, []);

  if (!homeData) return <div>Loading...</div>;

  return (
    <PageLayout>
      <Banner data={homeData} />
      <MoreInfo introText={homeData.introText} />
      <Services />
      <FunFacts />
      <CallbackForm />
      <Testimonials />
      <RequestForm />
    </PageLayout>
  );
}
