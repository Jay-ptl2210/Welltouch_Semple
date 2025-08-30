import React, { useEffect } from "react";
import "./Clients.css";
import "./Home.css";
import logo from "../assets/logo.png";

const Clients = () => {
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

  const clientTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "HealthCare Plus Ltd.",
      country: "United Kingdom",
      rating: 5,
      testimonial: "Welltouch Hygiene has been our trusted partner for over 3 years. Their quality is exceptional and delivery is always on time. Highly recommended!",
      image: "👩‍💼"
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      company: "MediCare International",
      country: "UAE",
      rating: 5,
      testimonial: "The private label service exceeded our expectations. Professional team, quality products, and excellent support throughout the process.",
      image: "👨‍💼"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      company: "Wellness Solutions",
      country: "Spain",
      rating: 5,
      testimonial: "Outstanding quality and competitive pricing. Welltouch has helped us expand our product range successfully in the European market.",
      image: "👩‍💼"
    },
    {
      id: 4,
      name: "David Chen",
      company: "Asia Health Products",
      country: "Singapore",
      rating: 5,
      testimonial: "Reliable supplier with consistent quality. Their bulk manufacturing capabilities have supported our rapid growth in the Asian market.",
      image: "👨‍💼"
    }
  ];

  const globalReach = [
    { region: "Europe", countries: ["UK", "Germany", "France", "Spain", "Italy", "Netherlands"], clients: 45 },
    { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman"], clients: 32 },
    { region: "Asia Pacific", countries: ["Singapore", "Malaysia", "Thailand", "Vietnam", "Philippines"], clients: 28 },
    { region: "Africa", countries: ["South Africa", "Nigeria", "Kenya", "Ghana", "Egypt"], clients: 18 },
    { region: "Americas", countries: ["USA", "Canada", "Brazil", "Mexico", "Argentina"], clients: 22 },
    { region: "India", countries: ["All States"], clients: 65 }
  ];

  const partnershipTypes = [
    {
      type: "Distributors",
      count: 85,
      description: "Regional and national distributors across 25+ countries",
      icon: "📦"
    },
    {
      type: "Wholesalers",
      count: 120,
      description: "Large-scale wholesalers serving retail networks",
      icon: "🏪"
    },
    {
      type: "Private Label",
      count: 45,
      description: "Brands manufacturing under their own labels",
      icon: "🏷️"
    },
    {
      type: "Retail Chains",
      count: 35,
      description: "Major retail chains and supermarkets",
      icon: "🛒"
    }
  ];

  const successMetrics = [
    { metric: "Years of Partnership", value: "10+", description: "Long-term relationships" },
    { metric: "Countries Served", value: "25+", description: "Global presence" },
    { metric: "Client Satisfaction", value: "98%", description: "Based on feedback" },
    { metric: "Repeat Orders", value: "95%", description: "Client retention rate" }
  ];

  return (
    <div className="home clients-page">
      {/* Hero */}
      <section className="hero" id="clients-hero">
        <div className="floating-shape shape-1" aria-hidden="true" />
        <div className="floating-shape shape-2" aria-hidden="true" />
        <div className="hero-inner" data-aos="fade-up">
          <img src={logo} alt="Welltouch Hygiene" className="hero-logo" />
          <h1>Trusted by Global Partners</h1>
          <p>
            We serve <strong>285+ clients</strong> across <strong>25+ countries</strong> worldwide. 
            From distributors to private label brands, our partners trust us for quality, 
            reliability, and exceptional service.
          </p>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Our Success Metrics</h2>
          </div>
          <div className="metrics-grid">
            {successMetrics.map((metric, index) => (
              <div key={index} className="metric-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="metric-value">{metric.value}</div>
                <h3>{metric.metric}</h3>
                <p>{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Global Reach</h2>
            <p>Our products reach customers across six continents through our trusted network of partners.</p>
          </div>
          <div className="regions-grid">
            {globalReach.map((region, index) => (
              <div key={index} className="region-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3>{region.region}</h3>
                <div className="region-count">{region.clients} Clients</div>
                <div className="countries-list">
                  {region.countries.map((country, idx) => (
                    <span key={idx} className="country-tag">{country}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Types of Partnerships</h2>
          </div>
          <div className="partnerships-grid">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="partnership-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="partnership-icon">{partnership.icon}</div>
                <h3>{partnership.type}</h3>
                <div className="partnership-count">{partnership.count}+</div>
                <p>{partnership.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {clientTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="testimonial-header">
                  <div className="client-image">{testimonial.image}</div>
                  <div className="client-info">
                    <h4>{testimonial.name}</h4>
                    <p className="company">{testimonial.company}</p>
                    <p className="country">{testimonial.country}</p>
                  </div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                </div>
                <div className="testimonial-content">
                  <p>"{testimonial.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Why Clients Choose Welltouch</h2>
          </div>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">🏆</div>
              <h3>Proven Track Record</h3>
              <p>10+ years of successful partnerships with consistent quality and delivery.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🌍</div>
              <h3>Global Network</h3>
              <p>Established distribution network serving 25+ countries worldwide.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">⚡</div>
              <h3>Fast Response</h3>
              <p>Quick response times and flexible solutions for urgent requirements.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>ISO & BIS certified products with strict quality control processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="cta-banner">
            <h2>Join Our Global Network</h2>
            <p>Become part of our success story. Contact us to discuss partnership opportunities and start your journey with Welltouch Hygiene.</p>
            <div className="cta-actions">
              <a href="#contact" className="btn ghost">Become a Partner</a>
              <a href="#contact" className="btn primary">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
