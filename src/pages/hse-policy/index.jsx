import { useEffect, useState } from "react";
import PageLayout from "../../components/common/pageLayout/index.jsx";
import { getHSEPolicies } from "../../libs/sanityClient";
import { PortableText } from "@portabletext/react";

export default function HSEPolicies() {
  const [hse, setHSE] = useState(null);

  useEffect(() => {
    getHSEPolicies().then(data => setHSE(data));
  }, []);

  if (!hse) return <div>Loading...</div>;

  return (
    <PageLayout>
      {/* Page Content */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{hse.title || "HSE Policy"}</h1>
              <span>{hse.subtitle || "Our highest priority is the safety of our employees"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="more-info about-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="more-info-content">
                <div className="row">
                  <div className="col-12 align-self-center">
                    <div className="right-content">
                      <span>{hse.heading || "Our HSE Policies"}</span>
                      <h2>
                        Get to know about <em>Cedar Inspection Ventures (CIV) Limited</em> HSE policies
                      </h2>
                      <div>
                        <PortableText value={hse.body} />
                      </div>
                      {hse.signed && (
                        <p>
                          <br />
                          Signed;<br />
                          {hse.signed}
                        </p>
                      )}
                    </div>
                  </div>

                  {hse.image?.asset?.url && (
                    <div className="col-md-6 mb-3">
                      <div className="left-image">
                        <img src={hse.image.asset.url} alt="HSE Policy" />
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
