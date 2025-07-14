import { useEffect, useState } from "react";
import PageLayout from "../../components/common/pageLayout/index.jsx";
import { PortableText } from "@portabletext/react";
import { getAbout, client } from "../../libs/sanityClient.js";
import imageUrlBuilder from "@sanity/image-url";
import FunFacts from "../../components/home/funFacts.jsx";

export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    getAbout().then(setAboutData);
  }, []);

  const builder = imageUrlBuilder(client);
  const urlFor = (source) => builder.image(source);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="page-heading header-text">
        <div className="container">
          <h1>{aboutData.title}</h1>
          <span>{aboutData.subtitle}</span>
        </div>
      </div>

      {/* About Content */}
      <div className="more-info about-info">
        <div className="container">
          <div className="row">
            {/* Left: Text */}
            <div className="col-md-6 align-self-center">
              <div className="right-content">
                <h2>
                  Get to know about <em>{aboutData.heading}</em>
                </h2>
                <PortableText value={aboutData.body} />
              </div>
            </div>

            {/* Right: Image */}
            <div className="col-md-6">
              {aboutData.image && (
                <div className="left-image">
                  <img src={urlFor(aboutData.image).url()} alt="About" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Optional Fun Facts */}
      <FunFacts />

      {/* Team Members */}
      <div className="team mb-5 mt-0">
        <div className="container">
          <div className="section-heading">
            <h2>
              Our Leading <em>Members</em>
            </h2>
            <span>Meet the team behind Cedar Inspection Ventures</span>
          </div>
          <div className="row">
            {aboutData.teamMembers?.map((m) => (
              <div className="col-md-4 mb-4" key={m.name}>
                <div className="team-item">
                  {m.photo?.asset?.url && (
                    <img src={m.photo.asset.url} alt={m.name} />
                  )}
                  <div className="down-content">
                    <h4>{m.name}</h4>
                    <span>{m.title}</span>
                    <p>{m.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
