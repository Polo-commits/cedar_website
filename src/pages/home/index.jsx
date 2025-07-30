import { useEffect, useState } from "react";
import { client } from '../../libs/sanityClient';

import Banner from "../../components/home/banner.jsx";
import MoreInfo from "../../components/home/moreInfo.jsx";
import Services from "../../components/home/services.jsx";
import FunFacts from "../../components/home/funFacts.jsx";
import CallbackForm from "../../components/home/callbackForm.jsx";
import Testimonials from "../../components/home/testimonials.jsx";
import RequestForm from "../../components/home/requestForm.jsx";
import PageLayout from "../../components/common/pageLayout/index.jsx";

export default function HomePage() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "homepage"][0]{
      title,
      slug,
      heroImage { asset->{ url } },
      heroHeadline,
      heroSubtext,
      callToActionText,
      callToActionLink,
      whoWeAreTitle,
      whoWeAreBody,
      whoWeAreImage { asset->{ url } },
      mission,
      vision,
      values,
      seoTitle,
      seoDescription
    }`)
    .then((data) => setHomeData(data))
    .catch(console.error);
  }, []);

  if (!homeData) return <div>Loading...</div>;

  return (
    <PageLayout>
      <Banner data={homeData} />

      <MoreInfo 
        title={homeData.whoWeAreTitle}
        body={homeData.whoWeAreBody}
        image={
          (homeData.whoWeAreImage && homeData.whoWeAreImage.asset)
            ? homeData.whoWeAreImage.asset.url
            : ""
        }
      />

      <Services />

      <FunFacts
        mission={homeData.mission}
        vision={homeData.vision}
        values={homeData.values}
      />

      <CallbackForm />
      <Testimonials />
      <RequestForm />
    </PageLayout>
  );
}
