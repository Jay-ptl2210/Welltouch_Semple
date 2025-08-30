import React, { useEffect, useState } from "react";
import "./About.css";
import "./Home.css";
import logo from "../assets/logo.png";

const About = () => {
  // Counter animation logic
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    let interval1 = setInterval(() => {
      setClients((prev) => (prev < 120 ? prev + 1 : prev));
    }, 20);
    let interval2 = setInterval(() => {
      setProjects((prev) => (prev < 250 ? prev + 1 : prev));
    }, 15);
    let interval3 = setInterval(() => {
      setYears((prev) => (prev < 15 ? prev + 1 : prev));
    }, 120);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className="home about-page">
      {/* Hero */}
      <section className="hero" id="about-hero">
        <div className="floating-shape shape-1" aria-hidden="true" />
        <div className="floating-shape shape-2" aria-hidden="true" />
        <div className="hero-inner" data-aos="fade-up">
          <img src={logo} alt="Welltouch Hygiene" className="hero-logo" />
          <h1>About Welltouch Hygiene Pvt. Ltd.</h1>
          <p>
            We manufacture and export premium sanitary pads under our brands
            <strong> Miss N Moms</strong> and <strong>Confortime</strong>, and partner with
            businesses worldwide for private label (OEM) manufacturing.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="section highlights">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>At a Glance</h2>
          </div>
          <div className="grid">
            <div className="highlight"><div className="title">🌍 Global Partners</div><div className="desc">Supplying India and overseas markets.</div></div>
            <div className="highlight"><div className="title">✅ ISO & BIS</div><div className="desc">Certified for quality and safety.</div></div>
            <div className="highlight"><div className="title">🔑 Private Label OEM</div><div className="desc">End‑to‑end custom branding.</div></div>
            <div className="highlight"><div className="title">🏭 Modern Facility</div><div className="desc">Reliable, high‑capacity output.</div></div>
          </div>
        </div>
      </section>

      {/* Company Story Split */}
      <section className="section intro">
        <div className="container section-card" data-aos="fade-up">
          <div className="intro-grid">
            <div className="intro-media" aria-hidden="true">
              <img src={logo} alt="Welltouch" />
            </div>
            <div className="intro-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2015 in Surat, Gujarat, Welltouch Hygiene Pvt. Ltd. began with a vision to revolutionize hygienic care. We focus on manufacturing safe, comfortable and high‑quality sanitary pads that support women's health and confidence every day.
              </p>
              <p>
                With innovation, strict QA and customer‑centric service, we've grown into a trusted partner for distributors, wholesalers and private label brands across India and internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>What We Do</h2>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-badge">Core Business</div>
              <h3>Sanitary Pad Manufacturing</h3>
              <p>We manufacture premium sanitary pads under our own brands Miss N Moms and Confortime, ensuring quality and comfort for women worldwide.</p>
            </div>
            <div className="card">
              <div className="card-badge">OEM Services</div>
              <h3>Private Label Manufacturing</h3>
              <p>We offer complete OEM services for businesses wanting to launch their own sanitary pad brand with custom packaging and branding.</p>
            </div>
            <div className="card">
              <div className="card-badge">Export</div>
              <h3>Global Distribution</h3>
              <p>We export our products to over 25 countries, serving distributors, wholesalers, and retail chains worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values as cards */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head"><h2>What Drives Us</h2></div>
          <div className="cards">
            <div className="card"><h3>Mission</h3><p>Deliver eco‑friendly, affordable hygiene solutions that improve everyday life.</p></div>
            <div className="card"><h3>Vision</h3><p>Be a global leader in hygiene innovation and sustainable manufacturing.</p></div>
            <div className="card"><h3>Values</h3><p>Integrity, Customer Focus, Innovation and Sustainability.</p></div>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="section stats" aria-label="Company stats">
        <div className="container section-card" data-aos="zoom-in">
          <div className="stat"><span className="stat-value">{clients}+</span><span className="stat-label">Happy Clients</span></div>
          <div className="stat"><span className="stat-value">{projects}+</span><span className="stat-label">Projects Delivered</span></div>
          <div className="stat"><span className="stat-value">{years}+</span><span className="stat-label">Years Experience</span></div>
          <div className="stat"><span className="stat-value">2</span><span className="stat-label">Brands</span></div>
        </div>
      </section>

      {/* Owner Introduction */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Meet Our Founder</h2>
              <p>
                <strong>Mr. [Owner Name]</strong>, the visionary founder of Welltouch Hygiene Pvt. Ltd., brings over 15 years of experience in the hygiene and wellness industry. With a deep understanding of women's health needs and a commitment to quality, he leads our company towards creating meaningful solutions for a better tomorrow.
              </p>
              <p>
                Under his leadership, we have grown from a small manufacturing unit to a trusted partner serving clients across 25+ countries, maintaining the highest standards of quality and customer satisfaction.
              </p>
            </div>
            <div className="intro-media owner-photo" aria-hidden="true">
              <div className="photo-placeholder">
                <span>👤</span>
                <p>Owner Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;