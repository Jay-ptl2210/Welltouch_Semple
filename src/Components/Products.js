import React, { useEffect } from "react";
import "./Product.css";
import "./Home.css";
import logo from "../assets/logo.png";

const Products = () => {
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

  const missNMomsProducts = [
    {
      id: 1,
      name: "Ultra XXXL",
      description: "Maximum protection for heavy flow days",
      features: ["Extra long", "Super absorbent", "Wing protection", "Cotton feel"],
      price: "₹299",
      originalPrice: "₹399",
      discount: "25% OFF",
      image: "🩸",
      buyLink: "#contact"
    },
    {
      id: 2,
      name: "Maxi XXXL", 
      description: "Premium comfort for overnight protection",
      features: ["Overnight protection", "Soft cotton", "Wings included", "Breathable"],
      price: "₹249",
      originalPrice: "₹349",
      discount: "29% OFF",
      image: "🌙",
      buyLink: "#contact"
    },
    {
      id: 3,
      name: "Maxi XXL",
      description: "Perfect balance of comfort and protection",
      features: ["Medium flow", "Comfortable fit", "Wing protection", "All-day comfort"],
      price: "₹199",
      originalPrice: "₹299",
      discount: "33% OFF", 
      image: "⭐",
      buyLink: "#contact"
    },
    {
      id: 4,
      name: "Maxi L",
      description: "Light flow protection with comfort",
      features: ["Light flow", "Comfortable", "Wings included", "Daily use"],
      price: "₹149",
      originalPrice: "₹249",
      discount: "40% OFF",
      image: "🌸",
      buyLink: "#contact"
    }
  ];

  const confortimeProducts = [
    {
      id: 5,
      name: "Ultra XXXL",
      description: "Maximum absorption for heavy flow",
      features: ["Extra long", "Super absorbent", "Wing protection", "Soft feel"],
      price: "₹279",
      originalPrice: "₹379",
      discount: "26% OFF",
      image: "💎",
      buyLink: "#contact"
    },
    {
      id: 6,
      name: "Maxi XXXL",
      description: "Overnight protection with comfort",
      features: ["Overnight use", "Cotton comfort", "Wings included", "Breathable"],
      price: "₹229",
      originalPrice: "₹329",
      discount: "30% OFF",
      image: "🌙",
      buyLink: "#contact"
    },
    {
      id: 7,
      name: "Maxi XXL", 
      description: "Medium flow protection",
      features: ["Medium flow", "Comfortable fit", "Wing protection", "All-day use"],
      price: "₹179",
      originalPrice: "₹279",
      discount: "36% OFF",
      image: "✨",
      buyLink: "#contact"
    },
    {
      id: 8,
      name: "Maxi L",
      description: "Light flow daily protection",
      features: ["Light flow", "Daily comfort", "Wings included", "Gentle care"],
      price: "₹129",
      originalPrice: "₹229",
      discount: "44% OFF",
      image: "🌺",
      buyLink: "#contact"
    }
  ];

  return (
    <div className="home products-page">
      {/* Hero */}
      <section className="hero" id="products-hero">
        <div className="floating-shape shape-1" aria-hidden="true" />
        <div className="floating-shape shape-2" aria-hidden="true" />
        <div className="hero-inner" data-aos="fade-up">
          <img src={logo} alt="Welltouch Hygiene" className="hero-logo" />
          <h1>Our Premium Sanitary Pad Collection</h1>
          <p>
            Discover our trusted brands <strong>Miss N Moms</strong> and <strong>Confortime</strong> - 
            designed for comfort, protection, and confidence. Available in multiple sizes for every need.
          </p>
        </div>
      </section>

      {/* Miss N Moms Brand */}
      <section className="section brand-section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Miss N Moms</h2>
            <p>
              Premium sanitary pads designed for modern women. Miss N Moms offers superior comfort, 
              maximum protection, and all-day confidence. Our products feature advanced absorption 
              technology, soft cotton feel, and wing protection for worry-free days.
            </p>
          </div>
          <div className="product-grid">
            {missNMomsProducts.map((product) => (
              <div key={product.id} className="product-card" data-aos="fade-up" data-aos-delay={product.id * 100}>
                <div className="product-badge">{product.discount}</div>
                <div className="product-image">{product.image}</div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-features">
                    {product.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="product-price">
                    <span className="current-price">{product.price}</span>
                    <span className="original-price">{product.originalPrice}</span>
                  </div>
                  <a href={product.buyLink} className="buy-button">Buy Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confortime Brand */}
      <section className="section brand-section">
        <div className="container section-card" data-aos="fade-up">
          <div className="section-head">
            <h2>Confortime</h2>
            <p>
              Gentle care meets reliable protection. Confortime sanitary pads are crafted with 
              premium materials for ultimate comfort and peace of mind. Experience soft cotton 
              feel with advanced absorption technology for confident protection throughout the day.
            </p>
          </div>
          <div className="product-grid">
            {confortimeProducts.map((product) => (
              <div key={product.id} className="product-card" data-aos="fade-up" data-aos-delay={product.id * 100}>
                <div className="product-badge">{product.discount}</div>
                <div className="product-image">{product.image}</div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-features">
                    {product.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="product-price">
                    <span className="current-price">{product.price}</span>
                    <span className="original-price">{product.originalPrice}</span>
                  </div>
                  <a href={product.buyLink} className="buy-button">Buy Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="section">
        <div className="container section-card" data-aos="fade-up">
          <div className="cta-banner">
            <h2>Looking for Bulk Orders?</h2>
            <p>Get wholesale pricing for distributors, retailers, and private label partnerships. Contact us for bulk pricing and OEM manufacturing opportunities.</p>
            <div className="cta-actions">
              <a href="#contact" className="btn ghost">Request Quote</a>
              <a href="#contact" className="btn primary">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
