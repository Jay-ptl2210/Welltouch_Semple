import React, { useEffect } from "react";
import "./Services.css";
import "./Home.css";
import logo from "../assets/logo.png";

const Services = () => {
  // Lightweight scroll-reveal using IntersectionObserver
  useEffect(() => {
    const revealTargets = document.querySelectorAll('[data-aos], [data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          if (entry.isIntersecting) {
            element.classList.add("in-view");
            observer.unobserve(element);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    revealTargets.forEach((el) => {
      el.setAttribute("data-reveal", "");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const serviceFeatures = [
    {
      icon: "🏭",
      title: "ISO & BIS Certified",
      description: "Quality assured manufacturing with international standards"
    },
    {
      icon: "🌍",
      title: "Global Export",
      description: "Serving clients across 25+ countries worldwide"
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      description: "Quick production and delivery timelines"
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "High-grade materials and strict quality control"
    }
  ];

  const bulkManufacturingFeatures = [
    "High-volume production capacity",
    "Custom packaging solutions",
    "Quality assurance at every step",
    "Competitive bulk pricing",
    "Flexible order quantities",
    "On-time delivery guarantee"
  ];

  const privateLabelFeatures = [
    "Custom brand design & packaging",
    "Exclusive product formulations",
    "Brand registration support",
    "Marketing material assistance",
    "Quality certification support",
    "Distribution network access"
  ];

  const contractManufacturingFeatures = [
    "End-to-end production management",
    "Custom product development",
    "Quality control & testing",
    "Packaging & labeling",
    "Inventory management",
    "Logistics & shipping"
  ];

  return (
    <div className="home services-page">
      {/* Hero */}
      <section className="hero" id="services-hero">
        <div className="floating-shape shape-1" aria-hidden="true" />
        <div className="floating-shape shape-2" aria-hidden="true" />
        <div className="hero-inner" data-aos="fade-up">
          <img src={logo} alt="Welltouch Hygiene" className="hero-logo" />
          <h1>Comprehensive Manufacturing Services</h1>
          <p>
            From bulk manufacturing to private labeling, we provide end-to-end solutions for 
            businesses looking to enter or expand in the hygiene products market. 
            <strong> ISO & BIS certified</strong> with global reach.
          </p>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Why Choose Our Services</h2>
          </div>
          <div className="service-highlights">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="highlight-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="highlight-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Manufacturing */}
      <section className="section service-detail">
        <div className="container section-card" data-aos="fade-up">
          <div className="service-intro">
            <div className="service-icon">🏭</div>
            <div className="service-content">
              <h2>Bulk Manufacturing</h2>
              <p>
                High-volume production of sanitary pads for distributors, wholesalers, and retail chains. 
                We offer competitive pricing, consistent quality, and reliable supply for large-scale orders.
              </p>
            </div>
          </div>
          <div className="service-details">
            <div className="details-grid">
              <div className="detail-card">
                <h3>Production Capacity</h3>
                <p>Large-scale manufacturing with capacity to handle orders from 10,000 to 1,000,000+ units per month.</p>
              </div>
              <div className="detail-card">
                <h3>Quality Assurance</h3>
                <p>ISO 9001:2015 certified processes with in-house quality control and third-party testing.</p>
              </div>
              <div className="detail-card">
                <h3>Customization</h3>
                <p>Flexible packaging options, sizes, and specifications to meet your specific requirements.</p>
              </div>
              <div className="detail-card">
                <h3>Pricing</h3>
                <p>Volume-based pricing with significant discounts for large orders and long-term partnerships.</p>
              </div>
            </div>
            <div className="features-list">
              <h3>Key Features:</h3>
              <ul>
                {bulkManufacturingFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Private Labeling */}
      <section className="section service-detail">
        <div className="container section-card" data-aos="fade-up">
          <div className="service-intro">
            <div className="service-icon">🏷️</div>
            <div className="service-content">
              <h2>Private Label Manufacturing</h2>
              <p>
                Launch your own brand with our comprehensive private labeling services. We handle everything 
                from product development to packaging design, helping you establish a unique market presence.
              </p>
            </div>
          </div>
          <div className="service-details">
            <div className="details-grid">
              <div className="detail-card">
                <h3>Brand Development</h3>
                <p>Complete brand identity creation including logo design, packaging artwork, and marketing materials.</p>
              </div>
              <div className="detail-card">
                <h3>Product Customization</h3>
                <p>Tailored formulations, sizes, and features to differentiate your brand in the market.</p>
              </div>
              <div className="detail-card">
                <h3>Packaging Solutions</h3>
                <p>Custom packaging design with various options including boxes, pouches, and eco-friendly materials.</p>
              </div>
              <div className="detail-card">
                <h3>Market Support</h3>
                <p>Assistance with market entry strategies, certifications, and distribution network development.</p>
              </div>
            </div>
            <div className="features-list">
              <h3>What We Provide:</h3>
              <ul>
                {privateLabelFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Manufacturing */}
      <section className="section service-detail">
        <div className="container section-card" data-aos="fade-up">
          <div className="service-intro">
            <div className="service-icon">📋</div>
            <div className="service-content">
              <h2>Contract Manufacturing</h2>
              <p>
                End-to-end contract manufacturing services for businesses looking to outsource their 
                sanitary pad production. We handle the entire process from concept to delivery.
              </p>
            </div>
          </div>
          <div className="service-details">
            <div className="details-grid">
              <div className="detail-card">
                <h3>Product Development</h3>
                <p>R&D support for new product formulations, testing, and regulatory compliance.</p>
              </div>
              <div className="detail-card">
                <h3>Production Management</h3>
                <p>Complete oversight of manufacturing processes, quality control, and inventory management.</p>
              </div>
              <div className="detail-card">
                <h3>Supply Chain</h3>
                <p>Managed supply chain with reliable sourcing of raw materials and components.</p>
              </div>
              <div className="detail-card">
                <h3>Logistics</h3>
                <p>Comprehensive logistics support including warehousing, packaging, and shipping.</p>
              </div>
            </div>
            <div className="features-list">
              <h3>Our Capabilities:</h3>
              <ul>
                {contractManufacturingFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Our Manufacturing Process</h2>
          </div>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Consultation & Planning</h3>
              <p>Initial consultation to understand your requirements and develop a customized plan.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Product Development</h3>
              <p>R&D and prototyping to create the perfect product formulation and design.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Quality Testing</h3>
              <p>Rigorous testing and quality assurance to meet international standards.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Production & Packaging</h3>
              <p>Large-scale production with custom packaging and labeling.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Delivery & Support</h3>
              <p>On-time delivery with ongoing support and partnership development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="cta-banner">
            <h2>Ready to Start Your Project?</h2>
            <p>Get in touch with our team to discuss your manufacturing needs. We'll provide a customized quote and timeline for your project.</p>
            <div className="cta-actions">
              <a href="#contact" className="btn ghost">Request Quote</a>
              <a href="#contact" className="btn primary">Schedule Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
