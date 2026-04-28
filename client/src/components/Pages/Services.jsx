import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Wrench,
  HouseGear,
  Layers,
  Fire,
  DropletHalf,
  ExclamationTriangle,
  TelephoneFill,
  Whatsapp,
  ArrowRight,
  CheckCircle,
  InfoCircle,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  {
    icon: <Wrench />,
    title: "Roof Repairs",
    desc: "Tiles, ridge, flashing, valleys and leak repairs.",
    price: "From £150",
    badge: "",
  },
  {
    icon: <HouseGear />,
    title: "Roof Replacement",
    desc: "Complete slate and tile roof replacement.",
    price: "From £3,800",
    badge: "10 Year Guarantee",
  },
  {
    icon: <Layers />,
    title: "Flat Roofs",
    desc: "GRP fibreglass and EPDM rubber roofing.",
    price: "From £1,500",
    badge: "25 Year GRP Guarantee",
  },
  {
    icon: <Fire />,
    title: "Chimney Services",
    desc: "Chimney repointing, repairs and removal.",
    price: "From £300",
    badge: "",
  },
  {
    icon: <DropletHalf />,
    title: "Guttering & Fascias",
    desc: "Gutter repair, replacement and cleaning.",
    price: "From £80",
    badge: "Most Requested",
  },
  {
    icon: <ExclamationTriangle />,
    title: "Emergency Repairs",
    desc: "24/7 rapid response across Greater Manchester.",
    price: "Call for pricing",
    badge: "24/7",
    emergency: true,
  },
];

export default function Services() {
  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <Container>
          <div className="services-hero-content">
            <span className="breadcrumb-text">Home / Services</span>
            <h1>Our Roofing Services</h1>
            <p>
              Professional roof repairs, replacements, flat roofing, chimney
              work and emergency roofing support across Greater Manchester.
            </p>

            <div className="hero-service-actions">
              <Link to="/contact" className="primary-service-btn">
                Get Free Quote <ArrowRight />
              </Link>

              <a href="tel:01618745201" className="emergency-service-btn">
                🚨 Emergency Call: 0161 874 5201
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid-section">
        <Container>
          <Row className="gy-4">
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index}>
                <div
                  className={`service-card ${
                    service.emergency ? "emergency-card" : ""
                  }`}
                >
                  <div className="service-icon-box">{service.icon}</div>

                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>

                  <div className="service-card-bottom">
                    <div>
                      <span>Starting From</span>
                      <strong>{service.price}</strong>
                    </div>

                    {service.badge && (
                      <small className="service-badge">{service.badge}</small>
                    )}
                  </div>

                  {service.emergency ? (
                    <a href="tel:01618745201" className="service-btn emergency">
                      Call Now <TelephoneFill />
                    </a>
                  ) : (
                    <Link to="/contact" className="service-btn">
                      Get a Quote <ArrowRight />
                    </Link>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PRICING NOTE */}
      <section className="pricing-note-section">
        <Container>
          <div className="pricing-note">
            <div className="pricing-icon">
              <InfoCircle />
            </div>

            <h2>About Our Pricing</h2>

            <p>
              Every price shown is a genuine starting guide. Your exact quote is
              confirmed after a free assessment — always in writing and always
              agreed before we start.
            </p>

            <h5>
              <CheckCircle /> We never charge more than the written quote.
            </h5>

            <Link to="/pricing" className="primary-service-btn">
              Get Your Free Quote <ArrowRight />
            </Link>
          </div>
        </Container>
      </section>

      {/* BOTTOM CTA */}
      <section className="service-bottom-cta">
        <Container>
          <div className="bottom-cta-wrap">
            <h3>Questions about a service?</h3>

            <div className="bottom-cta-actions">
              <a href="tel:01618745200" className="bottom-call-btn">
                <TelephoneFill /> 0161 874 5200
              </a>

              <a
                href="https://wa.me/447700900341"
                target="_blank"
                rel="noreferrer"
                className="bottom-whatsapp-btn"
              >
                <Whatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        .services-page{
          font-family:'Outfit',sans-serif;
          overflow:hidden;
          background:#ffffff;
        }

        .services-hero{
          padding:130px 0 90px;
          background:
          radial-gradient(circle at top left, rgba(20,184,166,.18), transparent 32%),
          radial-gradient(circle at bottom right, rgba(251,191,36,.18), transparent 30%),
          linear-gradient(135deg,#f8fffd,#ffffff,#e6fffb);
          text-align:center;
        }

        .services-hero-content{
          max-width:850px;
          margin:auto;
          animation:fadeUp .9s ease forwards;
        }

        .breadcrumb-text{
          color:#0f766e;
          font-size:13px;
          font-weight:900;
          letter-spacing:3px;
          text-transform:uppercase;
        }

        .services-hero h1{
          font-family:'Cinzel',serif;
          font-size:62px;
          font-weight:900;
          margin:18px 0;
          color:#07111f;
        }

        .services-hero p{
          color:#64748b;
          font-size:19px;
          line-height:1.8;
          max-width:720px;
          margin:auto;
        }

        .hero-service-actions{
          margin-top:34px;
          display:flex;
          justify-content:center;
          gap:16px;
          flex-wrap:wrap;
        }

        .primary-service-btn,
        .emergency-service-btn,
        .service-btn,
        .bottom-call-btn,
        .bottom-whatsapp-btn{
          position:relative;
          overflow:hidden;
          text-decoration:none;
          border-radius:50px;
          font-weight:900;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:9px;
          transition:.38s ease;
        }

        .primary-service-btn{
          background:linear-gradient(135deg,#0f766e,#14b8a6);
          color:#fff;
          padding:15px 32px;
          box-shadow:0 18px 38px rgba(20,184,166,.28);
        }

        .primary-service-btn:hover{
          color:#fff;
          transform:translateY(-6px) scale(1.04);
          box-shadow:0 28px 55px rgba(20,184,166,.42);
        }

        .primary-service-btn svg{
          transition:.35s;
        }

        .primary-service-btn:hover svg{
          transform:translateX(6px);
        }

        .emergency-service-btn{
          border:2px solid #dc2626;
          color:#dc2626;
          padding:13px 28px;
          background:#fff;
        }

        .emergency-service-btn:hover{
          background:#dc2626;
          color:#fff;
          transform:translateY(-6px) scale(1.04);
          box-shadow:0 22px 42px rgba(220,38,38,.25);
        }

        .services-grid-section{
          padding:95px 0;
          background:#fff;
        }

        .service-card{
          position:relative;
          overflow:hidden;
          height:100%;
          background:#fff;
          border:1px solid rgba(20,184,166,.12);
          border-radius:34px;
          padding:38px;
          box-shadow:0 18px 45px rgba(0,0,0,.06);
          transition:.45s ease;
          animation:cardFade .8s ease forwards;
        }

        .service-card::before{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(135deg,#0f766e,#14b8a6);
          opacity:0;
          transition:.45s ease;
          z-index:0;
        }

        .service-card::after{
          content:"";
          position:absolute;
          width:170px;
          height:170px;
          border-radius:50%;
          background:rgba(255,255,255,.16);
          right:-80px;
          top:-80px;
          transform:scale(0);
          transition:.45s ease;
          z-index:0;
        }

        .service-card:hover{
          transform:translateY(-12px) scale(.98);
          box-shadow:0 32px 75px rgba(20,184,166,.25);
        }

        .service-card:hover::before{
          opacity:1;
        }

        .service-card:hover::after{
          transform:scale(1.5);
        }

        .service-card > *{
          position:relative;
          z-index:1;
        }

        .service-icon-box{
          width:78px;
          height:78px;
          border-radius:25px;
          background:#e6fffb;
          color:#0f766e;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:38px;
          margin-bottom:26px;
          transition:.45s ease;
          box-shadow:0 15px 30px rgba(20,184,166,.12);
        }

        .service-card:hover .service-icon-box{
          background:#fff;
          color:#14b8a6;
          transform:scale(1.16) rotate(-6deg);
          box-shadow:0 22px 42px rgba(0,0,0,.18);
        }

        .service-card h3{
          font-size:23px;
          font-weight:900;
          color:#07111f;
          margin-bottom:12px;
          transition:.35s;
        }

        .service-card p{
          color:#64748b;
          font-size:16px;
          line-height:1.7;
          min-height:58px;
          transition:.35s;
        }

        .service-card:hover h3,
        .service-card:hover p{
          color:#fff;
        }

        .service-card-bottom{
          border-top:1px solid rgba(15,118,110,.12);
          padding-top:24px;
          margin-top:26px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:14px;
          transition:.35s;
        }

        .service-card:hover .service-card-bottom{
          border-color:rgba(255,255,255,.22);
        }

        .service-card-bottom span{
          display:block;
          color:#64748b;
          font-size:10px;
          font-weight:900;
          letter-spacing:2px;
          text-transform:uppercase;
          margin-bottom:6px;
          transition:.35s;
        }

        .service-card-bottom strong{
          color:#0f766e;
          font-size:25px;
          font-weight:900;
          transition:.35s;
        }

        .service-card:hover .service-card-bottom span,
        .service-card:hover .service-card-bottom strong{
          color:#fff;
        }

        .service-badge{
          background:#f8fffd;
          border:1px solid rgba(20,184,166,.16);
          color:#0f766e;
          padding:7px 11px;
          border-radius:999px;
          font-size:9px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:1px;
          white-space:nowrap;
          transition:.35s;
        }

        .service-card:hover .service-badge{
          background:#fff;
          color:#0f766e;
        }

        .service-btn{
          width:100%;
          margin-top:28px;
          padding:14px 24px;
          border:2px solid #0f766e;
          color:#0f766e;
          background:#fff;
        }

        .service-btn:hover{
          background:#07111f;
          border-color:#07111f;
          color:#fff;
          transform:translateY(-5px);
        }

        .service-btn svg{
          transition:.35s;
        }

        .service-btn:hover svg{
          transform:translateX(6px);
        }

        .emergency-card::before{
          background:linear-gradient(135deg,#991b1b,#dc2626);
        }

        .emergency-card .service-icon-box{
          background:#fee2e2;
          color:#dc2626;
        }

        .service-btn.emergency{
          background:#dc2626;
          border-color:#dc2626;
          color:#fff;
        }

        .service-btn.emergency:hover{
          background:#991b1b;
          border-color:#991b1b;
        }

        .pricing-note-section{
          padding:85px 0;
          background:#e6fffb;
        }

        .pricing-note{
          max-width:720px;
          margin:auto;
          background:#fff;
          border-radius:34px;
          padding:45px;
          text-align:center;
          box-shadow:0 22px 55px rgba(0,0,0,.08);
          animation:fadeUp .9s ease forwards;
        }

        .pricing-icon{
          width:70px;
          height:70px;
          border-radius:50%;
          background:#e6fffb;
          color:#0f766e;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:34px;
          margin:0 auto 22px;
          animation:softPulse 2.5s infinite ease-in-out;
        }

        .pricing-note h2{
          font-family:'Cinzel',serif;
          font-weight:900;
          color:#07111f;
          margin-bottom:14px;
        }

        .pricing-note p{
          color:#64748b;
          font-size:16px;
          line-height:1.8;
          margin-bottom:18px;
        }

        .pricing-note h5{
          color:#0f766e;
          font-weight:900;
          display:flex;
          justify-content:center;
          align-items:center;
          gap:8px;
          margin-bottom:30px;
        }

        .service-bottom-cta{
          background:#07111f;
          padding:38px 0;
        }

        .bottom-cta-wrap{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:24px;
          flex-wrap:wrap;
        }

        .bottom-cta-wrap h3{
          color:#fff;
          font-weight:900;
          margin:0;
        }

        .bottom-cta-actions{
          display:flex;
          gap:14px;
          flex-wrap:wrap;
        }

        .bottom-call-btn{
          background:linear-gradient(135deg,#0f766e,#14b8a6);
          color:#fff;
          padding:15px 28px;
        }

        .bottom-whatsapp-btn{
          background:#25D366;
          color:#fff;
          padding:15px 28px;
        }

        .bottom-call-btn:hover,
        .bottom-whatsapp-btn:hover{
          color:#fff;
          transform:translateY(-6px) scale(1.04);
          box-shadow:0 20px 42px rgba(0,0,0,.32);
        }

        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes cardFade{
          from{
            opacity:0;
            transform:translateY(28px) scale(.96);
          }
          to{
            opacity:1;
            transform:translateY(0) scale(1);
          }
        }

        @keyframes softPulse{
          0%,100%{
            transform:scale(1);
            box-shadow:0 0 0 0 rgba(20,184,166,.22);
          }
          50%{
            transform:scale(1.08);
            box-shadow:0 0 0 16px rgba(20,184,166,0);
          }
        }

        @media(max-width:991px){
          .services-hero h1{
            font-size:48px;
          }

          .bottom-cta-wrap{
            justify-content:center;
            text-align:center;
          }
        }

        @media(max-width:575px){
          .services-hero{
            padding:90px 0 65px;
          }

          .services-hero h1{
            font-size:38px;
          }

          .services-hero p{
            font-size:16px;
          }

          .primary-service-btn,
          .emergency-service-btn{
            width:100%;
          }

          .service-card{
            padding:30px 24px;
          }

          .service-card-bottom{
            flex-direction:column;
            align-items:flex-start;
          }

          .pricing-note{
            padding:32px 22px;
          }

          .bottom-cta-actions,
          .bottom-call-btn,
          .bottom-whatsapp-btn{
            width:100%;
          }
        }
      `}</style>
    </main>
  );
}