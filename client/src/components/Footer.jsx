import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  EnvelopeFill,
  TelephoneFill,
} from "react-bootstrap-icons";

export default function Footer() {
  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Outfit:wght@300;400;500;600;700&display=swap');

        .modern-footer{
          background: linear-gradient(135deg,#07111f 0%,#0f2438 45%,#123c43 100%);
          padding: 75px 0 25px;
          color:#fff;
          font-family:'Outfit',sans-serif;
        }

        .footer-logo-wrap{
          text-decoration:none;
          display:inline-block;
        }

        .footer-logo{
          font-family:'Cinzel',serif;
          font-size:36px;
          font-weight:900;
          line-height:1.1;
          letter-spacing:1px;
          margin-bottom:18px;
          text-transform:uppercase;
          background: linear-gradient(90deg,#ffffff,#14b8a6,#ffffff);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:shineText 4s linear infinite;
        }

        .footer-logo span{
          -webkit-text-fill-color:#14b8a6;
        }

        .footer-logo-wrap:hover{
          transform:translateY(-2px);
          transition:0.3s;
        }

        .footer-text{
          color:rgba(255,255,255,0.74);
          font-size:15px;
          line-height:1.9;
          max-width:340px;
          font-weight:400;
        }

        .footer-heading{
          font-size:15px;
          font-weight:700;
          margin-bottom:22px;
          text-transform:uppercase;
          letter-spacing:2px;
          color:#14b8a6;
          position:relative;
        }

        .footer-heading::after{
          content:"";
          position:absolute;
          left:0;
          bottom:-8px;
          width:38px;
          height:2px;
          background:#14b8a6;
          border-radius:10px;
        }

        .footer-links{
          list-style:none;
          padding:0;
          margin:0;
        }

        .footer-links li{
          margin-bottom:14px;
          display:flex;
          align-items:center;
          gap:10px;
          color:rgba(255,255,255,0.75);
          font-size:15px;
          font-weight:500;
        }

        .footer-links a{
          color:rgba(255,255,255,0.75);
          text-decoration:none;
          transition:0.3s;
          position:relative;
        }

        .footer-links a:hover{
          color:#14b8a6;
          padding-left:6px;
        }

        .social-box{
          display:flex;
          gap:12px;
          margin-top:8px;
        }

        .social-box a{
          width:45px;
          height:45px;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          background:rgba(255,255,255,0.08);
          text-decoration:none;
          font-size:18px;
          transition:0.3s;
        }

        .social-box a:hover{
          background:#14b8a6;
          transform:translateY(-4px) scale(1.05);
          color:#fff;
        }

        .footer-bottom{
          border-top:1px solid rgba(255,255,255,0.08);
          margin-top:55px;
          padding-top:22px;
          text-align:center;
          font-size:14px;
          color:rgba(255,255,255,0.62);
          letter-spacing:0.5px;
        }

        @keyframes shineText{
          0%{background-position:0% center;}
          100%{background-position:200% center;}
        }

        @media(max-width:991px){
          .modern-footer{
            padding:55px 0 22px;
          }

          .footer-logo{
            font-size:28px;
          }

          .footer-heading{
            margin-top:10px;
          }
        }
        `}
      </style>

      <footer className="modern-footer">
        <Container>
          <Row className="gy-4 align-items-start">

            {/* Logo */}
            <Col lg={4} md={6}>
              <Link to="/" className="footer-logo-wrap">
                <div className="footer-logo">
                  <span>PEAK</span> ROOFING
                </div>
              </Link>

              <p className="footer-text">
                Premium roofing solutions with expert workmanship, rapid
                support, and dependable protection for residential &
                commercial properties.
              </p>
            </Col>

            {/* Navigation */}
            <Col lg={2} md={6}>
              <h6 className="footer-heading">Navigation</h6>

              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/our-work">Our Work</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </Col>

            {/* Contact */}
            <Col lg={3} md={6}>
              <h6 className="footer-heading">Contact</h6>

              <ul className="footer-links">
                <li><TelephoneFill /> 0161 874 5200</li>
                <li><EnvelopeFill /> info@peakroofing.co.uk</li>
              </ul>
            </Col>

            {/* Social */}
            <Col lg={3} md={6}>
              <h6 className="footer-heading">Follow Us</h6>

              <div className="social-box">
                <a href="#"><Facebook /></a>
                <a href="#"><Instagram /></a>
                <a href="#"><Linkedin /></a>
              </div>
            </Col>

          </Row>

          <div className="footer-bottom">
            © 2026 Peak Roofing Manchester — Built on Trust & Quality
          </div>
        </Container>
      </footer>
    </>
  );
}