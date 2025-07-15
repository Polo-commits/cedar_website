import { PortableText } from "@portabletext/react";

export default function FunFacts({ visionTitle, visionBody, missionTitle, missionBody, valuesTitle, valuesBody }) {
  return (
    <div className="fun-facts">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left-content">
              <h2>
                {visionTitle && <>Our <em>{visionTitle}</em></>}
              </h2>
              <PortableText value={visionBody} />

              <h2>
                {missionTitle && <>Our <em>{missionTitle}</em></>}
              </h2>
              <PortableText value={missionBody} />
            </div>
          </div>

          <div className="col-md-6 align-self-center">
            <h2>
              {valuesTitle && <>Our <em>{valuesTitle}</em></>}
            </h2>
            <PortableText value={valuesBody} />
          </div>
        </div>
      </div>
    </div>
  );
}
