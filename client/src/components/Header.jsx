import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [expanded, setExpanded] = useState(false);

  const navItems = ["Home", "Services", "Our Work", "Contact"];

  const getPath = (item) =>
    item === "Home" ? "/" : `/${item.toLowerCase().replaceAll(" ", "-")}`;

  return (
    <header className="premium-header">
      {/* Top Mini Bar */}
      <div className="info-bar">
        <Container className="info-inner">
          <div className="info-left">
            <span className="pulse-dot"></span>
            <span>24/7 Roof Emergency Support</span>
            <strong>0161 874 5201</strong>
          </div>

          <a href="tel:01618745201" className="quick-call">
            Call Now
          </a>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={(open) => setExpanded(open)}
        className="main-nav"
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand
            as={Link}
            to="/"
            onClick={() => setExpanded(false)}
            className="brand-box"
          >
            <img src="/Images/logo.png" alt="Peak Roofing" className="brand-logo" />

            <div className="brand-text">
              <div className="brand-name">
                <span>PEAK</span> ROOFING
              </div>
              <div className="brand-location">MANCHESTER</div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" className="menu-toggle" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto nav-links">
              {navItems.map((item) => {
                const path = getPath(item);

                return (
                  <Nav.Link
                    key={item}
                    as={Link}
                    to={path}
                    onClick={() => setExpanded(false)}
                    className={`menu-link ${isActive(path) ? "active" : ""}`}
                  >
                    {item}
                  </Nav.Link>
                );
              })}
            </Nav>

            <div className="nav-right">
              <div className="phone-card">
                <span>Direct Line</span>
                <strong>0161 874 5200</strong>
              </div>

              <Button
                as={Link}
                to="/contact"
                onClick={() => setExpanded(false)}
                className="estimate-btn"
              >
                Free Estimate
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .premium-header {
          width: 100%;
          font-family: 'Outfit', sans-serif;
          background: linear-gradient(135deg, #07111f 0%, #0f2438 45%, #123c43 100%);
          padding: 14px 20px 20px;
          position: relative;
          z-index: 999;
        }

        .premium-header::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 15% 10%, rgba(20,184,166,0.28), transparent 32%),
            radial-gradient(circle at 85% 20%, rgba(245,158,11,0.14), transparent 30%);
          pointer-events: none;
        }

        .info-bar,
        .main-nav {
          max-width: 1320px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .info-bar {
          border-radius: 18px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(18px);
          margin-bottom: 12px;
        }

        .info-inner {
          min-height: 46px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #e6fffb;
        }

        .info-left {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 600;
        }

        .info-left strong {
          color: #fbbf24;
          font-weight: 800;
        }

        .pulse-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #fbbf24;
          box-shadow: 0 0 0 8px rgba(251,191,36,0.15);
          animation: pulse 1.7s infinite;
        }

        .quick-call {
          color: #07111f;
          background: linear-gradient(135deg,#fbbf24,#f59e0b);
          padding: 9px 22px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          font-size: 13px;
          transition: 0.3s ease;
        }

        .quick-call:hover {
          transform: translateY(-2px);
          color:#07111f;
        }

        .main-nav {
          border-radius: 26px;
          padding: 14px 0;
          background: rgba(255,255,255,0.94);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 22px 60px rgba(0,0,0,0.18);
          backdrop-filter: blur(14px);
        }

        .brand-box {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
        }

        /* LOGO HEIGHT FIXED */
        .brand-logo{
          height:72px;
          width:auto;
          object-fit:contain;
          display:block;
          filter:
            drop-shadow(0 0 8px rgba(20,184,166,.35))
            drop-shadow(0 0 18px rgba(20,184,166,.18));
        }

        .brand-text{
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        .brand-name {
          font-family: 'Cinzel', serif;
          font-size: 26px;
          font-weight: 900;
          letter-spacing: 1px;
          line-height: 1;
          text-transform: uppercase;
          background: linear-gradient(90deg,#0f172a,#14b8a6,#0f172a);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shineText 4s linear infinite;
        }

        .brand-name span {
          -webkit-text-fill-color:#14b8a6;
        }

        .brand-location {
          margin-top: 6px;
          font-size: 10px;
          letter-spacing: 4px;
          color: #64748b;
          font-weight: 700;
          text-transform: uppercase;
        }

        .nav-links {
          gap: 28px;
          align-items: center;
          margin-left: auto;
          margin-right: 25px;
        }

        .menu-link {
          color: #0f172a !important;
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          padding: 9px 0 !important;
          transition: 0.3s ease;
        }

        .menu-link:hover,
        .menu-link.active {
          color: #0f766e !important;
        }

        .menu-link::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 2px;
          border-radius: 20px;
          background: linear-gradient(90deg,#0f766e,#14b8a6);
          transition: 0.3s ease;
        }

        .menu-link:hover::before,
        .menu-link.active::before {
          width: 100%;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .phone-card {
          padding: 10px 18px;
          border-radius: 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          line-height: 1.1;
          text-align: right;
        }

        .phone-card span {
          display: block;
          color: #64748b;
          font-size: 10px;
          text-transform: uppercase;
          font-weight: 900;
        }

        .phone-card strong {
          color: #0f172a;
          font-size: 16px;
          font-weight: 950;
        }

        .estimate-btn {
          border: none !important;
          border-radius: 14px !important;
          padding: 13px 24px !important;
          background: linear-gradient(135deg,#0f766e,#14b8a6) !important;
          color: #fff !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: 0.3s ease;
        }

        .estimate-btn:hover {
          transform: translateY(-3px);
        }

        .menu-toggle {
          border: none !important;
          box-shadow: none !important;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(251,191,36,0.45); }
          70% { box-shadow: 0 0 0 10px rgba(251,191,36,0); }
          100% { box-shadow: 0 0 0 0 rgba(251,191,36,0); }
        }

        @keyframes shineText {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        @media (max-width: 991px) {
          .premium-header { padding: 10px; }

          .nav-links {
            gap: 10px;
            align-items: flex-start;
            padding-top: 20px;
            margin-right: 0;
          }

          .nav-right {
            margin-top: 20px;
            flex-direction: column;
            align-items: flex-start;
          }

          .estimate-btn {
            width: 100%;
          }

          .brand-logo{
            height:62px;
          }
        }

        @media (max-width: 575px) {
          .info-inner {
            flex-direction: column;
            align-items: flex-start;
            padding: 12px;
          }

          .brand-logo{
            height:54px;
          }

          .brand-name {
            font-size: 18px;
          }

          .brand-location {
            font-size: 8px;
            letter-spacing: 3px;
          }
        }
      `}</style>
    </header>
  );
}