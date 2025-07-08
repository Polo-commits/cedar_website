import { useEffect, useState } from 'react'
import { getServices } from '../../lib/sanityClient'
import { PortableText } from '@portabletext/react'
import PageLayout from "../../components/common/pageLayout/index.jsx"
import CallbackForm from "../../components/home/callbackForm.jsx"

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices().then(data => {
      setServices(data)
    })
  }, [])

  return (
    <PageLayout>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Services</h1>
              <span>We deliver quality services to all clients</span>
            </div>
          </div>
        </div>
      </div>

      <div className="single-services">
        <div className="container">
          <div className="row" id="tabs">
            <div className="col-md-4">
              <ul>
                {services.map((service, index) => (
                  <li key={service._id}>
                    <a href={`#tabs-${index}`}>
                      {service.title} <i className="fa fa-angle-right" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-8 services-content">
              <section className="tabs-content">
                {services.map((service, index) => (
                  <article key={service._id} id={`tabs-${index}`} className="mb-5">
                    {service.icon?.asset?.url && (
                      <img src={service.icon.asset.url} alt={service.title} />
                    )}
                    <h4>{service.title}</h4>
                    {service.description && <p>{service.description}</p>}
                    <PortableText value={service.body} />
                  </article>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>

      <CallbackForm />
    </PageLayout>
  )
}
