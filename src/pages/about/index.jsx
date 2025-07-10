import { useEffect, useState } from "react";
import { getAbout } from "../../libs/sanityClient";

export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    getAbout().then(setAboutData);
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <PageLayout>
      <div>{aboutData.title}</div>
      <div dangerouslySetInnerHTML={{ __html: aboutData.content }}></div>
      {aboutData.teamMembers.map(member => (
        <div key={member.name}>
          <h4>{member.name}</h4>
          <p>{member.bio}</p>
        </div>
      ))}
    </PageLayout>
  );
}
