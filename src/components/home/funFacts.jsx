import { PortableText } from '@portabletext/react';

export default function FunFacts({ mission, vision, values }) {
  return (
    <div className="fun-facts">
      <div className="container">
        <div className="row">
          {/* Vision & Mission */}
          <div className="col-md-6">
            <div className="left-content">
              <h2>Our Vision</h2>
              {vision && <PortableText value={vision} />}

              <h2>Our Mission</h2>
              {mission && <PortableText value={mission} />}
            </div>
          </div>

          {/* Values */}
          <div className="col-md-6 align-self-center">
            <h2>Our Values</h2>
            {values && <PortableText value={values} />}
          </div>
        </div>
      </div>
    </div>
  );
}
