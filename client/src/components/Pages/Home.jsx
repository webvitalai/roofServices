import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Clock,
  CheckCircle,
  TelephoneFill,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GeoAlt,
  Whatsapp,
  ClipboardCheck,
  Headset,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function BeforeAfterCard({ title, location, beforeImg, afterImg }) {
  const [slider, setSlider] = useState(50);

  return (
    <div className="work-card">
      <div className="before-after">
        <img src={afterImg} alt={`${title} after`} className="ba-img" />

        <div className="before-layer" style={{ width: `${slider}%` }}>
          <img src={beforeImg} alt={`${title} before`} className="ba-img" />
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={slider}
          onChange={(e) => setSlider(e.target.value)}
          className="ba-range"
        />

        <div className="ba-line" style={{ left: `${slider}%` }}>
          <div className="ba-handle">
            <ChevronLeft />
            <ChevronRight />
          </div>
        </div>

        <span className="ba-label before">BEFORE</span>
        <span className="ba-label after">AFTER</span>
      </div>

      <div className="work-content">
        <div>
          <h4>{title}</h4>
          <p>
            <GeoAlt /> {location}
          </p>
        </div>

        <Link to="/our-work" className="arrow-btn">
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6}>
              <div className="hero-badge">
                ⭐ 4.9/5 Rated · 200+ Reviews · Est. 2009
              </div>

              <h1 className="hero-title">
                Manchester’s <br />
                <span>Trusted Roofers</span>
              </h1>

              <p className="hero-text">
                Professional roof repairs, full replacements, flat roofing and
                emergency support with honest prices and guaranteed workmanship.
              </p>

              <div className="hero-points">
                <span>✓ Fully Insured</span>
                <span>✓ Written Quotes</span>
                <span>✓ 10 Year Guarantee</span>
              </div>

              <div className="hero-actions">
                <Button as={Link} to="/contact" className="main-btn">
                  Get Free Quote
                </Button>

                <a href="tel:01618745200" className="call-btn">
                  <TelephoneFill /> 0161 874 5200
                </a>
              </div>

              <a href="tel:01618745201" className="emergency-link">
                🚨 24/7 Emergency Line: 0161 874 5201
              </a>
            </Col>

            <Col lg={6}>
              <div className="hero-image-wrap">
                <video
                  src="/Videos/v1.mp4"
                  className="hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <div className="guarantee-card">
                  <ShieldCheck />
                  <div>
                    <h4>10 Year</h4>
                    <p>Guarantee</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="trust-section">
        <Container>
          <Row className="gy-4">
            <Col md={4}>
              <div className="trust-card">
                <div className="trust-icon-box">
                  <ShieldCheck className="trust-icon" />
                </div>
                <h3>Established 2009</h3>
                <p>
                  Over 15 years serving Greater Manchester with trusted roofing
                  solutions.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="trust-card">
                <div className="trust-icon-box">
                  <CheckCircle className="trust-icon" />
                </div>
                <h3>Honest Prices</h3>
                <p>
                  Clear written quotes with no hidden charges and quality
                  service.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="trust-card">
                <div className="trust-icon-box">
                  <Clock className="trust-icon" />
                </div>
                <h3>Always On Time</h3>
                <p>
                  Fast response, punctual team and high standard workmanship.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="work-section">
        <Container>
          <div className="section-head">
            <span>Our Latest Work</span>
            <h2>Real Jobs. Real Results.</h2>
          </div>

          <Row className="gy-4">
            <Col md={4}>
              <BeforeAfterCard
                title="Ridge Tile Repair"
                location="Didsbury"
                beforeImg="/Images/6.png"
                afterImg="/Images/7.png"
              />
            </Col>

            <Col md={4}>
              <BeforeAfterCard
                title="Full Roof Replacement"
                location="Chorlton"
                beforeImg="/Images/9.png"
                afterImg="/Images/10.png"
              />
            </Col>

            <Col md={4}>
              <BeforeAfterCard
                title="Flat Roof"
                location="Salford"
                beforeImg="/Images/19.png"
                afterImg="/Images/8.png"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section">
        <Container>
          <div className="cta-wrap">
            <div className="cta-head">
              <span className="cta-mini-title">FREE ESTIMATE</span>

              <h2>Ready to Sort Your Roof?</h2>

              <p>
                Call us directly, WhatsApp a photo for a quick estimate, or
                request a full written quote online.
              </p>
            </div>

            <Row className="gy-4">
              <Col md={4}>
                <a href="tel:01618745200" className="cta-card">
                  <div className="cta-icon">
                    <Headset />
                  </div>
                  <span>Call Us</span>
                  <strong>0161 874 5200</strong>
                </a>
              </Col>

              <Col md={4}>
                <a
                  href="https://wa.me/447700900341"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-card whatsapp-card"
                >
                  <div className="cta-icon whatsapp-icon">
                    <Whatsapp />
                  </div>
                  <span>WhatsApp</span>
                  <strong>Send a Photo</strong>
                </a>
              </Col>

              <Col md={4}>
                <Link to="/contact" className="cta-card">
                  <div className="cta-icon">
                    <ClipboardCheck />
                  </div>
                  <span>Free Quote</span>
                  <strong>2 Min Form</strong>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .home-page{
          font-family:'Outfit',sans-serif;
          overflow:hidden;
        }

        .hero-section{
          padding:100px 0;
          background:
          radial-gradient(circle at top left, rgba(20,184,166,.15), transparent 30%),
          linear-gradient(135deg,#f8fffd,#ffffff,#e6fffb);
        }

        .hero-badge,
        .hero-title,
        .hero-text,
        .hero-points,
        .hero-actions,
        .emergency-link{
          animation:fadeUp .9s ease forwards;
        }

        .hero-title{
          font-family:'Cinzel',serif;
          font-size:64px;
          font-weight:900;
          line-height:1.1;
          margin:20px 0;
        }

        .hero-title span{
          color:#0f766e;
        }

        .hero-text{
          font-size:19px;
          color:#64748b;
          line-height:1.8;
          max-width:560px;
        }

        .hero-badge{
          display:inline-block;
          padding:10px 18px;
          background:#fff;
          border-radius:40px;
          font-weight:800;
          color:#0f766e;
          box-shadow:0 10px 30px rgba(0,0,0,.05);
          animation:pulseBadge 2.8s infinite ease-in-out;
        }

        .hero-points{
          display:flex;
          gap:12px;
          flex-wrap:wrap;
          margin:28px 0;
        }

        .hero-points span{
          background:#fff;
          padding:10px 16px;
          border-radius:40px;
          font-size:13px;
          font-weight:800;
          transition:.35s;
          box-shadow:0 8px 18px rgba(0,0,0,.05);
        }

        .hero-points span:hover{
          background:#0f766e;
          color:#fff;
          transform:translateY(-5px) scale(1.04);
        }

        .hero-actions{
          display:flex;
          gap:15px;
          flex-wrap:wrap;
          margin-top:25px;
        }

        .main-btn{
          position:relative;
          overflow:hidden;
          background:linear-gradient(135deg,#0f766e,#14b8a6)!important;
          border:none!important;
          padding:15px 32px!important;
          border-radius:50px!important;
          font-weight:800!important;
          box-shadow:0 14px 30px rgba(20,184,166,.28);
          transition:.35s!important;
        }

        .main-btn::before{
          content:"";
          position:absolute;
          top:0;
          left:-100%;
          width:100%;
          height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.45),transparent);
          transition:.55s;
        }

        .main-btn:hover::before{
          left:100%;
        }

        .main-btn:hover{
          transform:translateY(-5px) scale(1.04);
          box-shadow:0 22px 45px rgba(20,184,166,.42);
          background:linear-gradient(135deg,#14b8a6,#0f766e)!important;
        }

        .call-btn{
          position:relative;
          overflow:hidden;
          text-decoration:none;
          border:2px solid #0f766e;
          color:#0f766e;
          padding:13px 26px;
          border-radius:50px;
          font-weight:800;
          display:flex;
          align-items:center;
          gap:8px;
          transition:.35s;
          z-index:1;
        }

        .call-btn::before{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(135deg,#0f766e,#14b8a6);
          transform:scaleX(0);
          transform-origin:left;
          transition:.4s;
          z-index:-1;
        }

        .call-btn:hover::before{
          transform:scaleX(1);
        }

        .call-btn:hover{
          color:#fff;
          transform:translateY(-5px) scale(1.04);
          box-shadow:0 18px 38px rgba(20,184,166,.25);
        }

        .call-btn svg{
          transition:.35s;
        }

        .call-btn:hover svg{
          transform:rotate(-12deg) scale(1.18);
        }

        .emergency-link{
          display:inline-block;
          margin-top:22px;
          color:#dc2626;
          font-weight:800;
          text-decoration:none;
          transition:.35s;
        }

        .emergency-link:hover{
          color:#991b1b;
          transform:translateX(8px);
        }

        .hero-image-wrap{
          position:relative;
        }

        .hero-video{
          width:100%;
          height:520px;
          object-fit:cover;
          border-radius:34px;
          border:8px solid #fff;
          box-shadow:0 30px 70px rgba(0,0,0,.15);
          animation:heroFloat 5s ease-in-out infinite;
          display:block;
        }

        .guarantee-card{
          position:absolute;
          left:-15px;
          bottom:-15px;
          background:#fff;
          padding:18px 22px;
          border-radius:22px;
          display:flex;
          gap:12px;
          align-items:center;
          box-shadow:0 20px 45px rgba(0,0,0,.12);
          animation:cardFloat 3.8s ease-in-out infinite;
        }

        .guarantee-card svg{
          font-size:34px;
          color:#0f766e;
        }

        .guarantee-card h4{
          margin:0;
          font-weight:900;
        }

        .guarantee-card p{
          margin:0;
          font-size:12px;
          color:#64748b;
          font-weight:800;
        }

        .trust-section,
        .work-section{
          padding:90px 0;
        }

        .trust-card{
          position:relative;
          overflow:hidden;
          background:#fff;
          border-radius:28px;
          padding:34px 30px;
          box-shadow:0 15px 40px rgba(0,0,0,.06);
          transition:.45s ease;
          height:100%;
        }

        .trust-card::before{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(135deg,#0f766e,#14b8a6);
          opacity:0;
          transition:.45s ease;
          z-index:0;
        }

        .trust-card > *{
          position:relative;
          z-index:1;
        }

        .trust-card:hover{
          transform:translateY(-10px) scale(.98);
          box-shadow:0 28px 65px rgba(20,184,166,.24);
        }

        .trust-card:hover::before{
          opacity:1;
        }

        .trust-icon-box{
          width:76px;
          height:76px;
          border-radius:24px;
          background:#e6fffb;
          display:flex;
          align-items:center;
          justify-content:center;
          margin-bottom:18px;
          transition:.45s ease;
        }

        .trust-icon{
          font-size:40px;
          color:#0f766e;
          transition:.45s ease;
        }

        .trust-card:hover .trust-icon-box{
          background:#fff;
          transform:scale(1.18) rotate(-6deg);
          box-shadow:0 18px 35px rgba(0,0,0,.18);
        }

        .trust-card:hover .trust-icon{
          color:#14b8a6;
          transform:scale(1.2);
        }

        .trust-card h3{
          font-weight:900;
          transition:.35s;
        }

        .trust-card p{
          color:#64748b;
          transition:.35s;
        }

        .trust-card:hover h3,
        .trust-card:hover p{
          color:#fff;
        }

        .work-section{
          background:#e6fffb;
        }

        .section-head{
          text-align:center;
          margin-bottom:45px;
        }

        .section-head span{
          color:#0f766e;
          font-weight:900;
          letter-spacing:3px;
          text-transform:uppercase;
          font-size:13px;
        }

        .section-head h2{
          font-family:'Cinzel',serif;
          font-size:48px;
          font-weight:900;
          margin-top:12px;
        }

        .work-card{
          border-radius:28px;
          transition:.4s;
          height:100%;
        }

        .work-card:hover{
          transform:translateY(-8px);
        }

        .before-after{
          position:relative;
          height:280px;
          overflow:hidden;
          border-radius:20px;
          box-shadow:0 15px 40px rgba(0,0,0,.08);
          user-select:none;
        }

        .ba-img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        .before-layer{
          position:absolute;
          inset:0;
          overflow:hidden;
          z-index:2;
        }

        .before-layer .ba-img{
          width:100%;
          min-width:100%;
          height:100%;
          object-fit:cover;
        }

        .ba-range{
          position:absolute;
          inset:0;
          z-index:6;
          width:100%;
          height:100%;
          opacity:0;
          cursor:ew-resize;
        }

        .ba-line{
          position:absolute;
          top:0;
          bottom:0;
          width:2px;
          background:#fff;
          z-index:5;
          transform:translateX(-50%);
        }

        .ba-handle{
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          width:44px;
          height:44px;
          border-radius:50%;
          background:#fff;
          color:#0f766e;
          display:flex;
          align-items:center;
          justify-content:center;
          border:2px solid #0f766e;
          box-shadow:0 6px 18px rgba(0,0,0,.22);
          font-size:17px;
        }

        .ba-label{
          position:absolute;
          bottom:16px;
          z-index:7;
          color:#fff;
          font-size:11px;
          font-weight:900;
          letter-spacing:1px;
          padding:6px 13px;
          border-radius:999px;
          box-shadow:0 8px 18px rgba(0,0,0,.18);
        }

        .ba-label.before{
          left:16px;
          background:#07111f;
        }

        .ba-label.after{
          right:16px;
          background:linear-gradient(135deg,#fbbf24,#fbbf24);
        }

        .work-content{
          padding:24px 15px 0;
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .work-content h4{
          margin:0;
          font-weight:900;
          color:#0f766e;
        }

        .work-content p{
          margin:6px 0 0;
          color:#fbbf24;
          font-weight:600;
          display:flex;
          align-items:center;
          gap:5px;
        }

        .arrow-btn{
          width:42px;
          height:42px;
          border-radius:50%;
          background:#fff;
          color:#fbbf24;
          display:flex;
          align-items:center;
          justify-content:center;
          text-decoration:none;
          box-shadow:0 10px 25px rgba(124,58,237,.15);
          transition:.35s;
        }

        .arrow-btn:hover{
          background:#0f766e;
          color:#fff;
          transform:scale(1.15) rotate(-8deg);
        }

        .cta-section{
          padding:90px 0;
          background:linear-gradient(135deg,#07111f,#0f766e);
        }

        .cta-wrap{
          background:rgba(255,255,255,.08);
          border:1px solid rgba(255,255,255,.16);
          border-radius:36px;
          padding:55px;
          box-shadow:0 30px 80px rgba(0,0,0,.25);
          backdrop-filter:blur(16px);
        }

        .cta-head{
          text-align:center;
          max-width:700px;
          margin:0 auto 42px;
        }

        .cta-mini-title{
          color:#99f6e4;
          font-weight:900;
          letter-spacing:3px;
          font-size:13px;
        }

        .cta-head h2{
          font-family:'Cinzel',serif;
          font-size:46px;
          font-weight:900;
          color:#fff;
          margin:12px 0;
        }

        .cta-head p{
          color:#d1fae5;
          font-size:18px;
          line-height:1.7;
        }

        .cta-card{
          position:relative;
          overflow:hidden;
          text-align:center;
          display:block;
          background:rgba(255,255,255,.96);
          padding:42px 24px;
          border-radius:30px;
          text-decoration:none;
          height:100%;
          box-shadow:0 25px 50px rgba(0,0,0,.16);
          transition:.4s ease;
          border:1px solid rgba(20,184,166,.08);
        }

        .cta-card::after{
          content:"";
          position:absolute;
          width:160px;
          height:160px;
          border-radius:50%;
          background:rgba(255,255,255,.18);
          right:-70px;
          top:-70px;
          transform:scale(0);
          transition:.45s;
        }

        .cta-card:hover::after{
          transform:scale(1.4);
        }

        .cta-icon{
          width:76px;
          height:76px;
          margin:0 auto 22px;
          border-radius:24px;
          background:linear-gradient(135deg,#e6fffb,#ffffff);
          color:#0f766e;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:34px;
          box-shadow:0 16px 35px rgba(20,184,166,.16);
          transition:.4s ease;
        }

        .cta-icon svg{
          font-size:36px;
        }

        .whatsapp-icon{
          color:#25D366;
        }

        .cta-card:hover{
          background:linear-gradient(135deg,#0f766e,#14b8a6);
          transform:translateY(-12px) scale(.98);
          box-shadow:0 35px 65px rgba(20,184,166,.28);
        }

        .whatsapp-card:hover{
          background:linear-gradient(135deg,#128C7E,#25D366);
        }

        .cta-card:hover .cta-icon{
          background:#ffffff;
          transform:translateY(-6px) scale(1.16) rotate(-5deg);
        }

        .cta-card:hover span,
        .cta-card:hover strong{
          color:#ffffff;
        }

        .cta-card span{
          display:block;
          color:#0f766e;
          font-size:12px;
          font-weight:900;
          letter-spacing:3px;
          text-transform:uppercase;
          margin-bottom:14px;
          transition:.35s;
          position:relative;
          z-index:1;
        }

        .cta-card strong{
          font-size:30px;
          color:#07111f;
          font-weight:900;
          transition:.35s;
          position:relative;
          z-index:1;
        }

        @keyframes heroFloat{
          0%{transform:translateY(0)}
          50%{transform:translateY(-18px)}
          100%{transform:translateY(0)}
        }

        @keyframes cardFloat{
          0%{transform:translateY(0) translateX(0)}
          50%{transform:translateY(-12px) translateX(10px) scale(1.04)}
          100%{transform:translateY(0) translateX(0)}
        }

        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes pulseBadge{
          0%,100%{transform:scale(1)}
          50%{transform:scale(1.04)}
        }

        @media(max-width:991px){
          .hero-title{font-size:48px;}
          .hero-video{height:420px;}
          .cta-wrap{padding:40px 25px;}
          .cta-head h2{font-size:38px;}
        }

        @media(max-width:575px){
          .hero-title{font-size:38px;}

          .hero-actions{
            flex-direction:column;
          }

          .main-btn,
          .call-btn{
            width:100%;
            justify-content:center;
          }

          .hero-video{height:330px;}

          .guarantee-card{
            left:10px;
            bottom:10px;
          }

          .before-after{
            height:240px;
          }

          .cta-head h2{
            font-size:32px;
          }

          .cta-card strong{
            font-size:24px;
          }
        }
      `}</style>
    </main>
  );
}