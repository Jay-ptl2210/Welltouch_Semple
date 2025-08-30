import React from "react";
import "./Footer.css";
import bisLogo from "../assets/bis.png";   // replace with your actual logo path
import isoLogo from "../assets/iso.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section company">
          <h2>Welltouch Hygiene Pvt. Ltd.</h2>
          <p>
            Manufacturer & Exporter of Hygiene Products <br />
            Block No 963, near Mandvi Road, <br />
            near Hariyal Patiya, Kim, Tadkeshwar, Gujarat 394110
          </p>
        </div>

        {/* Useful Links */}
        <div className="footer-section links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p><strong>MD:</strong> Hardik Patel</p>
          <p>📞 +91 88660 9931</p>
          <p>📧 welltouchhygiene@gmail.com</p>
          <p>📧 info@welltouchhygiene.com</p>
        </div>

        {/* Certificates */}
        <div className="footer-section certs">
          <h3>Certificates</h3>
          <div className="cert-logos">
            <img src={bisLogo} alt="BIS Logo" />
            <img src={isoLogo} alt="ISO Logo" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Welltouch Hygiene Pvt. Ltd. | All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
