import React from "react";
import { MdLocationPin, MdPhone } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";

const Contact= () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us Now</h1>
        <p>We'd love to hear from you!</p>
      </header>

      <section className="contact-details">
        <div className="contact-card">
          <h3>Contact Office</h3>
          <p>
            <MdLocationPin className="icon" />
            Agrain v./ Circular Food <br />
            Technology ApS<br />
            Pilestræde 35B, 1. tv<br />
            DK-1112 Copenhagen C
          </p>
          <p>
            <span className="phone">
              <BiLogoGmail className="icon" />
              <a href="mailto:contact@grainwise.com">contact@grainwise.com</a>
            </span>
            <br />
            <span className="phone">
              <MdPhone className="icon" />
              <a href="tel:+4535342389">+45 35 34 23 89</a>
            </span>
            <br />
            <em>(Mon-Sat 09:00 AM - 16:00 PM)</em>
          </p>

          <h4 className="bulk-order">
            <a href="#bulk-order">Bulk Orders ➔</a>
          </h4>
        </div>
      </section>
    </div>
  );
};

export default Contact;
