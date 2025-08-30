import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import logo from "../assets/logo.png";
import iso from "../assets/iso.png";
import bis from "../assets/bis.png";

function Home() {
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

  return (
    <div className="home">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Welltouch Hygiene Pvt. Ltd. | Hygiene Products Manufacturer & Exporter</title>
        <meta
          name="description"
          content="Welltouch Hygiene Pvt. Ltd. is a trusted manufacturer & exporter of hygiene products. Explore our brands Confortime & Miss N Moms, trusted worldwide."
        />
        <meta
          name="keywords"
          content="Welltouch Hygiene, Hygiene Products Manufacturer, Hygiene Exporter, Confortime, Miss N Moms, Cleaning products, Hygiene Solutions, Gujarat"
        />
        <meta name="author" content="Welltouch Hygiene Pvt. Ltd." />

        {/* OpenGraph for Social Media */}
        <meta property="og:title" content="Welltouch Hygiene Pvt. Ltd." />
        <meta
          property="og:description"
          content="Manufacturer & Exporter of Hygiene Products – Confortime & Miss N Moms"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.welltouchhygiene.com/" />
        <meta property="og:image" content="/logo512.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welltouch Hygiene Pvt. Ltd." />
        <meta
          name="twitter:description"
          content="Manufacturer & Exporter of Hygiene Products – Confortime & Miss N Moms"
        />
        <meta name="twitter:image" content="/logo512.png" />
      </Helmet>

      {/* ✅ Hero Section */}
      <section className="hero" id="home">
        <div className="floating-shape shape-1" aria-hidden="true" />
        <div className="floating-shape shape-2" aria-hidden="true" />
        <div className="hero-inner" data-aos="fade-up">
          <img src={logo} alt="Welltouch Hygiene" className="hero-logo" />
          <h1>Trusted Sanitary Pad Manufacturer – ISO & BIS Certified</h1>
          <p>
            "Welltouch Hygiene Pvt. Ltd. delivers premium hygiene solutions under our brands
            <strong> Miss N Moms</strong> & <strong>Confortime</strong>, along with private label sanitary pad manufacturing for global partners."
          </p>
          <div className="hero-cta">
            <a href="#products" className="btn primary">Explore Products</a>
            <a href="#partner" className="btn ghost">Partner With Us</a>
          </div>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ✅ Company Highlights */}
      <section className="section highlights" id="highlights">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Company Highlights</h2>
          </div>
          <div className="grid" data-aos-delay="80">
            <div className="highlight">
              <div className="title">🌍 Based in Surat, Gujarat, India</div>
              <div className="desc">Nationwide and international supply network.</div>
            </div>
            <div className="highlight">
              <div className="title">✅ ISO & BIS Certified</div>
              <div className="desc">Certified for hygiene and safety standards.</div>
            </div>
            <div className="highlight">
              <div className="title">🔑 Private Label Expertise</div>
              <div className="desc">OEM manufacturing for global partners.</div>
            </div>
            <div className="highlight">
              <div className="title">🏭 Modern Facilities</div>
              <div className="desc">Reliable, high‑capacity output.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Company Introduction (split) */}
      <section className="section intro" id="about">
        <div className="container section-card" data-aos="fade-up">
          <div className="intro-grid">
            <div className="intro-media" aria-hidden="true">
              <img src={logo} alt="Welltouch" />
            </div>
            <div className="intro-text">
              <h2>Company Introduction</h2>
              <p>
                "At Welltouch Hygiene Pvt. Ltd., we are committed to providing safe, comfortable, and high-quality
                sanitary pads that support women's health and confidence. Our brands, Miss N Moms and Confortime, are
                trusted for their softness, absorbency, and all-day protection.
              </p>
              <p>
                We also offer custom sanitary pad manufacturing (OEM / private label), allowing businesses to build
                their own brand with our expert production and packaging solutions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Our Expertise */}
      <section className="section expertise" id="expertise" aria-label="Expertise">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Expertise That Defines Us</h2>
          </div>
          <div className="cards" data-aos-delay="80">
            <div className="card"><h3>Private Label Manufacturing</h3><p>Launch your own brand with custom packaging & branding.</p></div>
            <div className="card"><h3>Bulk Job Work Services</h3><p>High-volume production for domestic & international markets.</p></div>
            <div className="card"><h3>Innovative R&D</h3><p>Continuous improvements in absorbency, comfort, and eco options.</p></div>
            <div className="card"><h3>Trusted Quality</h3><p>Strict quality checks on each pad before packaging.</p></div>
          </div>
        </div>
      </section>

      {/* ✅ Stats */}
      <section className="section stats" aria-label="Key company stats">
        <div className="container section-card" data-aos="zoom-in">
          <div className="stat">
            <span className="stat-value">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-value">25+</span>
            <span className="stat-label">Countries Served</span>
          </div>
          <div className="stat">
            <span className="stat-value">100+</span>
            <span className="stat-label">Products & SKUs</span>
          </div>
          <div className="stat">
            <span className="stat-value">4.7★</span>
            <span className="stat-label">Partner Rating</span>
          </div>
        </div>
      </section>

      {/* ✅ Products Section */}
      <section className="section products" id="products">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Explore Our Sanitary Pad Range</h2>
            <p>Discover trusted brands and flexible private label options.</p>
          </div>
          <div className="cards" data-aos-delay="100">
            <div className="card">
              <div className="card-badge">Brand</div>
              <h3>Miss N Moms</h3>
              <p>Ultra-thin, overnight, and day-use pads for modern women.</p>
              <a href="#contact" className="btn primary">Request a Quote</a>
            </div>
            <div className="card">
              <div className="card-badge">Brand</div>
              <h3>Confortime</h3>
              <p>Soft cotton-feel pads for gentle care and reliable protection.</p>
              <a href="#contact" className="btn primary">Request a Quote</a>
            </div>
            <div className="card">
              <div className="card-badge">OEM</div>
              <h3>Private Label Pads</h3>
              <p>Custom sanitary pads under your brand with flexible packaging.</p>
              <a href="#contact" className="btn primary">Request a Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="section why" id="why">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Why Welltouch Hygiene is the Right Partner</h2>
          </div>
          <ul className="reasons" data-aos-delay="80">
            <li>ISO & BIS Certified Manufacturer.</li>
            <li>Two Trusted Brands – Miss N Moms & Confortime.</li>
            <li>Affordable OEM & Private Label Services.</li>
            <li>Advanced Manufacturing Technology.</li>
            <li>On-time delivery with global reach.</li>
          </ul>
        </div>
      </section>

      {/* ✅ Trust & Certificates */}
      <section className="section trust">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Certified & Trusted</h2>
            <p>We are proud to be ISO-certified and BIS-approved sanitary pad manufacturer. Our certifications guarantee quality, safety, and hygiene standards for every product we deliver.</p>
          </div>
          <div className="badges" data-aos="zoom-in" data-aos-delay="100">
            <img src={iso} alt="ISO Certified" />
            <img src={bis} alt="BIS Certified" />
          </div>
        </div>
      </section>

      {/* ✅ Contact CTA */}
      <section className="section" id="partner">
        <div className="container section-card" data-aos="fade-up">
          <div className="cta-banner">
            <h2>Start Your Partnership Today</h2>
            <p>Looking for a reliable sanitary pad supplier or planning to start your own private label brand? Get in touch for bulk orders, OEM manufacturing, or collaboration opportunities.</p>
            <div className="cta-actions">
              <a href="#contact" className="btn ghost">Request a Quote</a>
              <a href="#products" className="btn primary">Explore Products</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

