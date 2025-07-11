import { useEffect, useState } from "react";
import PageLayout from "../../components/common/pageLayout/index.jsx";
import { PortableText } from "@portabletext/react";
import { getAboutPage, client } from "../../libs/sanityClient.js";
import imageUrlBuilder from "@sanity/image-url";

export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    getAboutPage().then(setAboutData);
  }, []);

  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  if (!aboutData) return <div>Loading...</div>;

  return (
    <PageLayout>
      <div className="container">
        <h1>{aboutData.title}</h1>
        <span>{aboutData.subtitle}</span>

        <h2>
          Get to know about <em>{aboutData.heading}</em>
        </h2>

        <PortableText value={aboutData.body} />

        <img src={urlFor(aboutData.image)} alt="About Banner" />

        <h3>Our Leading Members</h3>
        {aboutData.teamMembers?.map((m) => (
          <div key={m.name}>
            <h4>{m.name}</h4>
            <span>{m.title}</span>
            <p>{m.bio}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
