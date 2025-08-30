import React, { useEffect, useState } from "react";
import "./Contact.css";
import "./Home.css";
import logo from "../assets/logo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      details: ["info@welltouchhygiene.com", "sales@welltouchhygiene.com"],
      description: "Send us an email for any inquiries"
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      description: "Call us during business hours"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      details: ["+91 98765 43210"],
      description: "Quick responses via WhatsApp"
    },
    {
      icon: "📍",
      title: "Address",
      details: ["Plot No. 123, Industrial Area", "Surat, Gujarat - 394101", "India"],
      description: "Visit our manufacturing facility"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const inquiryTypes = [
    "Bulk Manufacturing Inquiry",
    "Private Label Partnership",
    "Contract Manufacturing",
    "Product Information",
    "Pricing & Quotation",
    "Quality & Certifications",
    "General Inquiry"
  ];

  return (
    <div className="home contact-page">
      {/* Hero */}
      <section className="hero" id="contact-hero">
        <div className="floating-shape shape-1" aria-hidden="true" />
        <div className="floating-shape shape-2" aria-hidden="true" />
        <div className="hero-inner" data-aos="fade-up">
          <img src={logo} alt="Welltouch Hygiene" className="hero-logo" />
          <h1>Get in Touch</h1>
          <p>
            Ready to start your partnership with Welltouch Hygiene? Contact us for 
            bulk orders, private labeling, or any inquiries. We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Contact Information</h2>
          </div>
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-method-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <div className="method-details">
                  {method.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
                <p className="method-description">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="contact-content">
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    {inquiryTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your inquiry in detail..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
            <div className="office-info-section">
              <h2>Office Hours</h2>
              <div className="office-hours">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="schedule-item">
                    <span className="day">{schedule.day}</span>
                    <span className="hours">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="office-location">
                <h3>📍 Manufacturing Facility</h3>
                <p>Plot No. 123, Industrial Area</p>
                <p>Surat, Gujarat - 394101</p>
                <p>India</p>
              </div>
              <div className="emergency-contact">
                <h3>🚨 Emergency Contact</h3>
                <p>For urgent matters outside office hours:</p>
                <p className="emergency-phone">+91 98765 43212</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Quick Contact Options</h2>
          </div>
          <div className="quick-contact-grid">
            <div className="quick-contact-card">
              <div className="quick-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Chat with our team for instant support</p>
              <button type="button" className="quick-link">Start Chat</button>
            </div>
            <div className="quick-contact-card">
              <div className="quick-icon">📋</div>
              <h3>Request Quote</h3>
              <p>Get a customized quote for your needs</p>
              <button type="button" className="quick-link">Get Quote</button>
            </div>
            <div className="quick-contact-card">
              <div className="quick-icon">📞</div>
              <h3>Call Back</h3>
              <p>Request a call back at your convenience</p>
              <button type="button" className="quick-link">Schedule Call</button>
            </div>
            <div className="quick-contact-card">
              <div className="quick-icon">📧</div>
              <h3>Email Support</h3>
              <p>Send us an email for detailed inquiries</p>
              <a href="mailto:info@welltouchhygiene.com" className="quick-link">Send Email</a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Find Us</h2>
          </div>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <span className="map-icon">🗺️</span>
                <h3>Surat, Gujarat, India</h3>
                <p>Our manufacturing facility is located in the industrial area of Surat, Gujarat.</p>
                <p>Easy access from major highways and airports.</p>
              </div>
            </div>
            <div className="location-details">
              <h3>📍 Location Details</h3>
              <div className="location-info">
                <p><strong>Address:</strong> Plot No. 123, Industrial Area, Surat, Gujarat - 394101, India</p>
                <p><strong>Nearest Airport:</strong> Surat International Airport (15 km)</p>
                <p><strong>Nearest Railway:</strong> Surat Railway Station (8 km)</p>
                <p><strong>Nearest Port:</strong> Hazira Port (25 km)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="cta-banner">
            <h2>Ready to Start Your Partnership?</h2>
            <p>Contact us today to discuss your manufacturing needs. Our team is ready to help you find the perfect solution for your business.</p>
            <div className="cta-actions">
              <a href="tel:+919876543210" className="btn ghost">Call Now</a>
              <a href="mailto:info@welltouchhygiene.com" className="btn primary">Send Email</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
