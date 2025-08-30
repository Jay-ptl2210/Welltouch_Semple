import React, { useEffect } from "react";
import "./Certificates.css";
import "./Home.css";
import logo from "../assets/logo.png";
import iso from "../assets/iso.png";
import bis from "../assets/bis.png";

const Certificates = () => {
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

  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      type: "Quality Management System",
      description: "International standard for quality management systems ensuring consistent product quality and customer satisfaction.",
      benefits: [
        "Systematic approach to quality management",
        "Continuous improvement processes",
        "Customer focus and satisfaction",
        "Risk-based thinking",
        "Process approach and evidence-based decision making"
      ],
      validity: "Valid until 2025",
      icon: "🏆"
    },
    {
      id: 2,
      name: "BIS Certification",
      type: "Bureau of Indian Standards",
      description: "Indian national standard ensuring products meet safety, quality, and performance requirements for the Indian market.",
      benefits: [
        "Compliance with Indian safety standards",
        "Quality assurance for domestic market",
        "Government recognition and trust",
        "Enhanced market credibility",
        "Legal compliance for Indian operations"
      ],
      validity: "Valid until 2024",
      icon: "🇮🇳"
    },
    {
      id: 3,
      name: "CE Marking",
      type: "European Conformity",
      description: "European Union safety certification indicating products meet EU safety, health, and environmental requirements.",
      benefits: [
        "Access to European markets",
        "Safety and health compliance",
        "Environmental protection standards",
        "Free movement within EU",
        "Enhanced international credibility"
      ],
      validity: "Valid until 2026",
      icon: "🇪🇺"
    },
    {
      id: 4,
      name: "FDA Registration",
      type: "Food and Drug Administration",
      description: "US FDA registration for medical devices and hygiene products ensuring safety and efficacy standards.",
      benefits: [
        "Access to US markets",
        "Medical device compliance",
        "Safety and efficacy standards",
        "Regulatory compliance",
        "International market access"
      ],
      validity: "Valid until 2025",
      icon: "🇺🇸"
    }
  ];

  const qualityStandards = [
    {
      standard: "Raw Material Testing",
      description: "Comprehensive testing of all raw materials before production",
      icon: "🧪"
    },
    {
      standard: "In-Process Quality Control",
      description: "Continuous monitoring during manufacturing process",
      icon: "🔍"
    },
    {
      standard: "Final Product Testing",
      description: "Rigorous testing of finished products before shipment",
      icon: "✅"
    },
    {
      standard: "Packaging Standards",
      description: "Hygienic packaging meeting international standards",
      icon: "📦"
    }
  ];

  const complianceAreas = [
    {
      area: "Safety Standards",
      description: "Compliance with international safety requirements for hygiene products",
      icon: "🛡️"
    },
    {
      area: "Environmental Standards",
      description: "Eco-friendly manufacturing processes and materials",
      icon: "🌱"
    },
    {
      area: "Hygiene Standards",
      description: "Sterile manufacturing environment and processes",
      icon: "🧼"
    },
    {
      area: "Performance Standards",
      description: "Product performance testing and validation",
      icon: "📊"
    }
  ];

  return (
    <div className="home certificates-page">
      {/* Hero */}
      <section className="hero" id="certificates-hero">
        <div className="floating-shape shape-1" aria-hidden="true" />
        <div className="floating-shape shape-2" aria-hidden="true" />
        <div className="hero-inner" data-aos="fade-up">
        <img src={logo} alt="Welltouch Hygiene" className="hero-logo" />
          <h1>Quality Certifications & Standards</h1>
          <p>
            We maintain the highest international standards with <strong>ISO 9001:2015</strong> and <strong>BIS</strong> certifications. 
            Our commitment to quality ensures safe, reliable, and superior products for global markets.
          </p>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Our Certifications</h2>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={cert.id} className="certification-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="cert-header">
                  <div className="cert-icon">{cert.icon}</div>
                  <div className="cert-info">
                    <h3>{cert.name}</h3>
                    <p className="cert-type">{cert.type}</p>
                  </div>
                </div>
                <div className="cert-description">
                  <p>{cert.description}</p>
                </div>
                <div className="cert-benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {cert.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="cert-validity">
                  <span className="validity-label">Valid until:</span>
                  <span className="validity-date">{cert.validity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Gallery */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Certificate Gallery</h2>
          </div>
          <div className="certificate-gallery">
            <div className="cert-image-card">
              <div className="cert-display-icon">
                <img src={iso} alt="ISO 9001:2015" />
              </div>
            </div>
            <div className="cert-image-card">
              <div className="cert-display-icon">
                <img src={bis} alt="BIS Certification" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Quality Control Standards</h2>
          </div>
          <div className="standards-grid">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="standard-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="standard-icon">{standard.icon}</div>
                <h3>{standard.standard}</h3>
                <p>{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Compliance Areas</h2>
          </div>
          <div className="compliance-grid">
            {complianceAreas.map((area, index) => (
              <div key={index} className="compliance-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="compliance-icon">{area.icon}</div>
                <h3>{area.area}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="quality-commitment">
            <div className="commitment-content">
              <h2>Our Quality Commitment</h2>
              <p>
                At Welltouch Hygiene, quality is not just a certification - it's our core value. 
                We maintain rigorous quality control processes at every stage of production, from 
                raw material sourcing to final product delivery. Our certifications are a testament 
                to our commitment to excellence and customer satisfaction.
              </p>
              <div className="commitment-points">
                <div className="point">
                  <span className="point-icon">✅</span>
                  <span>Regular audits and inspections</span>
                </div>
                <div className="point">
                  <span className="point-icon">✅</span>
                  <span>Continuous improvement processes</span>
                </div>
                <div className="point">
                  <span className="point-icon">✅</span>
                  <span>Employee training and development</span>
                </div>
                <div className="point">
                  <span className="point-icon">✅</span>
                  <span>Customer feedback integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="cta-banner">
            <h2>Quality Assured Products</h2>
            <p>Choose Welltouch Hygiene for products that meet the highest international quality standards. Our certifications guarantee safety, reliability, and excellence.</p>
            <div className="cta-actions">
              <a href="/contact" className="btn ghost">Request Certificates</a>
              <a href="/contact" className="btn primary">Get Quote</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
