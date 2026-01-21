import React, { useState, useEffect } from 'react'
import './App.css'
import companyData from '../company-data.json'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Load data from JSON file
    setData(companyData)
    // Update document title
    document.title = companyData.name || 'VOLTPAY DIGITAL LTD'
  }, [])

  if (!data) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          {data.logo && data.logo.trim() !== '' && (
            <img src={data.logo} alt={data.name} className="logo" />
          )}
          <h1 className="company-name">{data.name}</h1>
          <p className="tagline">{data.tagline}</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Welcome to {data.name}</h2>
            <p className="description">{data.description}</p>
            <div className="company-info">
              <div className="info-item">
                <strong>Founded:</strong> {data.yearFounded}
              </div>
              <div className="info-item">
                <strong>Team Size:</strong> {data.employees}
              </div>
              <div className="info-item">
                <strong>Location:</strong> {data.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {data.services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.details && (
                  <p className="service-details">{service.details}</p>
                )}
                {service.features && service.features.length > 0 && (
                  <div className="service-features">
                    <h4>Key Features</h4>
                    <div className="features-list">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                )}
                {service.technologies && service.technologies.length > 0 && (
                  <div className="service-technologies">
                    <h4>Technologies</h4>
                    <div className="technologies-list">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="technology-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
                {service.pricing && (
                  <div className="service-pricing">{service.pricing}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong>
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
            </div>
            <div className="contact-item">
              <strong>Address:</strong>
              <span>{data.contact.address}</span>
            </div>
          </div>
          <div className="social-links">
            <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={data.social.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href={data.social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

