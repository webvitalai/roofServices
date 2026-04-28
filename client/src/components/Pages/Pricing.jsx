import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  CheckCircleFill,
  ArrowRight,
  TelephoneFill,
  Whatsapp,
  StarFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const pricingPlans = [
  {
    badge: "MOST POPULAR",
    title: "Roof Repair",
    price: "£149",
    period: "Starting From",
    featured: true,
    features: [
      "Leak Detection & Fix",
      "Broken Tile Replacement",
      "Ridge Tile Repair",
      "Flashing Repairs",
      "Written Quote Included",
    ],
  },
  {
    badge: "BEST VALUE",
    title: "Full Replacement",
    price: "£3,800",
    period: "Starting From",
    featured: false,
    features: [
      "Complete New Roof",
      "Tiles / Slate Options",
      "Waste Removal Included",
      "10 Year Guarantee",
      "Free Survey & Quote",
    ],
  },
  {
    badge: "FAST RESPONSE",
    title: "Emergency Callout",
    price: "£99",
    period: "Starting From",
    featured: false,
    features: [
      "24/7 Emergency Support",
      "Storm Damage Help",
      "Temporary Waterproofing",
      "Rapid Attendance",
      "Same Day Options",
    ],
  },
];

export default function Pricing() {
  return (
    <main className="pricing-page">
      {/* HERO */}
      <section className="pricing-hero">
        <Container>
          <div className="hero-box">
            <span>Home / Pricing</span>
            <h1>Simple Honest Pricing</h1>
            <p>
              Transparent starting prices with written quotes before any work
              begins. No hidden costs.
            </p>
          </div>
        </Container>
      </section>

      {/* PLANS */}
      <section className="plans-section">
        <Container>
          <Row className="gy-4">
            {pricingPlans.map((plan, index) => (
              <Col lg={4} key={index}>
                <div
                  className={`price-card ${
                    plan.featured ? "featured-card" : ""
                  }`}
                >
                  <div className="price-badge">{plan.badge}</div>

                  <h3>{plan.title}</h3>

                  <div className="price-value">
                    {plan.price}
                    <span>{plan.period}</span>
                  </div>

                  <ul className="feature-list">
                    {plan.features.map((item, i) => (
                      <li key={i}>
                        <CheckCircleFill />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="plan-btn">
                    Get Quote <ArrowRight />
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* TRUST */}
      <section className="trust-strip">
        <Container>
          <div className="trust-wrap">
            <div className="stars">
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
            </div>

            <h2>Rated 4.9/5 By Customers</h2>

            <p>
              Professional roofing service across Manchester with guaranteed
              workmanship.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pricing-cta">
        <Container>
          <div className="cta-box">
            <h3>Need Exact Pricing?</h3>
            <p>
              Send us photos on WhatsApp or request a free written quote today.
            </p>

            <div className="cta-actions">
              <a href="tel:01618745200" className="call-btn">
                <TelephoneFill /> Call Now
              </a>

              <a
                href="https://wa.me/447700900341"
                target="_blank"
                rel="noreferrer"
                className="wa-btn"
              >
                <Whatsapp /> WhatsApp
              </a>

              <Link to="/contact" className="quote-btn">
                Free Quote <ArrowRight />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        .pricing-page{
          font-family:'Outfit',sans-serif;
          overflow:hidden;
          background:#fff;
        }

        .pricing-hero{
          padding:130px 0 90px;
          text-align:center;
          background:
          radial-gradient(circle at top left, rgba(20,184,166,.15), transparent 32%),
          radial-gradient(circle at bottom right, rgba(251,191,36,.12), transparent 28%),
          linear-gradient(135deg,#f8fffd,#ffffff,#e6fffb);
        }

        .hero-box{
          max-width:760px;
          margin:auto;
          animation:fadeUp .8s ease;
        }

        .hero-box span{
          color:#0f766e;
          font-size:13px;
          font-weight:900;
          letter-spacing:3px;
          text-transform:uppercase;
        }

        .hero-box h1{
          font-family:'Cinzel',serif;
          font-size:62px;
          font-weight:900;
          margin:16px 0;
        }

        .hero-box p{
          font-size:18px;
          color:#64748b;
          line-height:1.8;
        }

        .plans-section{
          padding:95px 0;
        }

        .price-card{
          background:#fff;
          border-radius:34px;
          padding:40px 32px;
          box-shadow:0 20px 55px rgba(0,0,0,.06);
          border:1px solid rgba(20,184,166,.08);
          transition:.4s;
          height:100%;
          position:relative;
          overflow:hidden;
        }

        .price-card:hover{
          transform:translateY(-12px);
          box-shadow:0 30px 75px rgba(20,184,166,.18);
        }

        .featured-card{
          transform:scale(1.04);
          border:2px solid #14b8a6;
        }

        .featured-card:hover{
          transform:scale(1.04) translateY(-12px);
        }

        .price-badge{
          display:inline-block;
          padding:8px 14px;
          border-radius:999px;
          background:#e6fffb;
          color:#0f766e;
          font-size:11px;
          font-weight:900;
          letter-spacing:2px;
          margin-bottom:22px;
        }

        .price-card h3{
          font-size:30px;
          font-weight:900;
          margin-bottom:18px;
        }

        .price-value{
          font-size:54px;
          font-weight:900;
          color:#0f766e;
          line-height:1;
        }

        .price-value span{
          display:block;
          font-size:14px;
          color:#64748b;
          margin-top:10px;
          font-weight:700;
        }

        .feature-list{
          list-style:none;
          padding:0;
          margin:28px 0;
        }

        .feature-list li{
          display:flex;
          align-items:center;
          gap:10px;
          padding:10px 0;
          color:#334155;
          font-weight:700;
          border-bottom:1px solid #f1f5f9;
        }

        .feature-list svg{
          color:#14b8a6;
          font-size:16px;
        }

        .plan-btn{
          width:100%;
          min-height:56px;
          border-radius:999px;
          text-decoration:none;
          background:linear-gradient(135deg,#0f766e,#14b8a6);
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          font-weight:900;
          transition:.35s;
          box-shadow:0 18px 38px rgba(20,184,166,.24);
        }

        .plan-btn:hover{
          color:#fff;
          transform:translateY(-5px);
        }

        .trust-strip{
          padding:80px 0;
          background:#e6fffb;
          text-align:center;
        }

        .stars{
          color:#fbbf24;
          font-size:24px;
          margin-bottom:18px;
        }

        .trust-wrap h2{
          font-family:'Cinzel',serif;
          font-size:42px;
          font-weight:900;
          margin-bottom:14px;
        }

        .trust-wrap p{
          color:#64748b;
          font-size:18px;
        }

        .pricing-cta{
          padding:90px 0;
          background:#07111f;
        }

        .cta-box{
          text-align:center;
          max-width:800px;
          margin:auto;
        }

        .cta-box h3{
          color:#fff;
          font-size:44px;
          font-family:'Cinzel',serif;
          font-weight:900;
        }

        .cta-box p{
          color:#d1fae5;
          font-size:18px;
          margin:16px 0 32px;
        }

        .cta-actions{
          display:flex;
          justify-content:center;
          gap:14px;
          flex-wrap:wrap;
        }

        .call-btn,.wa-btn,.quote-btn{
          min-height:56px;
          padding:0 28px;
          border-radius:999px;
          text-decoration:none;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          font-weight:900;
          transition:.35s;
        }

        .call-btn{
          background:#fff;
          color:#0f766e;
        }

        .wa-btn{
          background:#25D366;
          color:#fff;
        }

        .quote-btn{
          background:linear-gradient(135deg,#0f766e,#14b8a6);
          color:#fff;
        }

        .call-btn:hover,.wa-btn:hover,.quote-btn:hover{
          transform:translateY(-6px);
          color:#fff;
          background:#111827;
        }

        @keyframes fadeUp{
          from{opacity:0;transform:translateY(25px);}
          to{opacity:1;transform:translateY(0);}
        }

        @media(max-width:991px){
          .hero-box h1{font-size:48px;}
          .featured-card{transform:none;}
          .featured-card:hover{transform:translateY(-12px);}
        }

        @media(max-width:575px){
          .pricing-hero{padding:90px 0 65px;}
          .hero-box h1{font-size:38px;}
          .trust-wrap h2{font-size:30px;}
          .cta-box h3{font-size:32px;}
          .call-btn,.wa-btn,.quote-btn{
            width:100%;
          }
        }
      `}</style>
    </main>
  );
}