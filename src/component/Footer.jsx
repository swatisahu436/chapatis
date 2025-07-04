import React from "react";
import { MdPhone } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footergrid">
        <div className="column">
          <h4 style={{color:"#eccf10", fontWeight:"bolder",fontFamily: 'EduSAHand',fontSize:'1.6rem'}}>GrainWise Tortilla</h4>
          <p style={{paddingTop:'3vh',fontWeight:'500'}}>
            Healthy, sustainable tortilla solutions from GrainWise.
          </p>
        </div>

        <div className="column">
          <h3>Contact Office</h3>
          <p>
          < MdLocationPin  id="footer-icon"/>  Agrain v./ Circular Food <br />Technology ApS
            Pilestræde 35B,<br /> 1. tv
            DK-1112 Copenhagen C<br />
            <span className="phone">
              < BiLogoGmail id="footer-icon"/> 
            contact@grainwise.com</span>
            <br />
            <span className="phone">
              <MdPhone id="footer-icon" />
              +45 35 34 23 89</span><br />
            (Mon-Sat 09:00 Am - 16:00 pm)
          </p>
        </div>

        <div className="column">
          <h3>Social</h3>
          <ul className="social-list">
            <li><FaLinkedin/>LinkedIn</li>
            <li>  <FaInstagram />Instagram</li>
            <li>Facebook</li>
            <li>Agrain Newsletter</li>
          </ul>
        </div>

        <div className="column">
          <h3>Shop</h3>
          <p>Our Product</p>
          
        </div>
      </div>
<div className="footer-line"></div>    </footer>
  );
};

export default Footer;
