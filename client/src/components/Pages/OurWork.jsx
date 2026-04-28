import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  GeoAlt,
  StarFill,
  ArrowRight,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    title: "Ridge Tile Repair",
    category: "Repairs",
    location: "Didsbury, Manchester",
    beforeImg: "/Images/11.png",
    afterImg: "/Images/11.png",
    review: "Called at 9am, fixed by 2pm. Exactly what they quoted.",
    customer: "David H.",
  },
  {
    title: "Full Slate Replacement",
    category: "Replacements",
    location: "Chorlton, Manchester",
    beforeImg: "/Images/9.png",
    afterImg: "/Images/10.png",
    review: "Team were here 4 days, cleaned up every evening. Brilliant.",
    customer: "Sandra B.",
  },
  {
    title: "GRP Flat Roof",
    category: "Flat Roofs",
    location: "Salford",
    beforeImg: "/Images/19.png",
    afterImg: "/Images/8.png",
    review: "Six years of leaks sorted in two days. 25 year guarantee.",
    customer: "Janet W.",
  },
  {
    title: "Chimney Repointing",
    category: "Chimneys",
    location: "Withington",
    beforeImg: "/Images/17.png",
    afterImg: "/Images/18.png",
    review: "Most professional of the three quotes I got.",
    customer: "Mohammed R.",
  },
  {
    title: "Gutter Replacement",
    category: "Guttering",
    location: "Sale",
    beforeImg: "/Images/15.png",
    afterImg: "/Images/16.png",
    review: "Quick, tidy, exactly as quoted. Booked them again.",
    customer: "Gary F.",
  },
  {
    title: "Emergency Storm Repair",
    category: "Repairs",
    location: "Gorton",
    beforeImg: "/Images/13.png",
    afterImg: "/Images/14.png",
    review: "At my door by 10am after calling at 8pm. Incredible.",
    customer: "Patricia O.",
  },
];

const categories = [
  "All",
  "Repairs",
  "Replacements",
  "Flat Roofs",
  "Chimneys",
  "Guttering",
];

function BeforeAfterSlider({ beforeImg, afterImg, title }) {
  const [slider, setSlider] = useState(50);

  return (
    <div className="before-after-slider">
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

      <div className="ba-labels">
        <span className="before-label">Before</span>
        <span className="after-label">After</span>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <StarFill key={i} />
      ))}
    </div>
  );
}

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  return (
    <main className="our-work-page">
      {/* HERO */}
      <section className="our-work-hero">
        <Container>
          <div className="hero-content">
            <span>Home / Our Work</span>
            <h1>Our Work</h1>
            <p>Real roofing jobs completed across Greater Manchester.</p>
          </div>
        </Container>
      </section>

      {/* WORK GRID */}
      <section className="portfolio-section">
        <Container>
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "active" : ""}
              >
                {category}
              </button>
            ))}
          </div>

          <Row className="gy-5">
            {filteredProjects.map((project, index) => (
              <Col lg={6} key={index}>
                <div className="work-card">
                  <BeforeAfterSlider
                    beforeImg={project.beforeImg}
                    afterImg={project.afterImg}
                    title={project.title}
                  />

                  <div className="work-body">
                    <div className="work-meta">
                      <span>{project.category}</span>
                      <p>
                        <GeoAlt /> {project.location}
                      </p>
                    </div>

                    <h3>{project.title}</h3>

                    <div className="review-box">
                      <p>"{project.review}"</p>
                    </div>

                    <div className="work-footer">
                      <div>
                        <Stars />
                        <h5>{project.customer}</h5>
                      </div>

                      <Link to="/contact" className="quote-btn">
                        Similar Quote <ArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <Container>
          <Row className="gy-4">
            <Col md={4}>
              <div className="testimonial-card">
                <Stars />
                <p>
                  "Called Peak Roofing at 8pm. At my house by 10am. Sorted by
                  lunch. Exactly as quoted."
                </p>
                <h5>David Hartley</h5>
                <span>Didsbury</span>
              </div>
            </Col>

            <Col md={4}>
              <div className="testimonial-card">
                <Stars />
                <p>
                  "The team were here 4 days. Cleaned up every evening. Result
                  is beautiful."
                </p>
                <h5>Sandra Booth</h5>
                <span>Chorlton</span>
              </div>
            </Col>

            <Col md={4}>
              <div className="testimonial-card">
                <Stars />
                <p>
                  "Three other roofers failed to fix it. Peak replaced the whole
                  flat roof."
                </p>
                <h5>Janet Williams</h5>
                <span>Sale</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="work-cta">
        <Container>
          <div className="work-cta-wrap">
            <h3>Like what you see? Get a free quote.</h3>

            <div className="cta-actions">
              <a href="tel:01618745200" className="call-work-btn">
                <TelephoneFill /> Call
              </a>

              <a
                href="https://wa.me/447700900341"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-work-btn"
              >
                <Whatsapp /> WhatsApp
              </a>

              <Link to="/contact" className="quote-work-btn">
                Get Quote <ArrowRight />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        .our-work-page{
          font-family:'Outfit',sans-serif;
          overflow:hidden;
          background:#fff;
        }

        .our-work-hero{
          padding:130px 0 90px;
          text-align:center;
          background:
            radial-gradient(circle at top left, rgba(20,184,166,.18), transparent 32%),
            radial-gradient(circle at bottom right, rgba(251,191,36,.18), transparent 30%),
            linear-gradient(135deg,#f8fffd,#ffffff,#e6fffb);
        }

        .hero-content{
          animation:fadeUp .9s ease forwards;
        }

        .hero-content span{
          color:#0f766e;
          font-size:13px;
          font-weight:900;
          letter-spacing:3px;
          text-transform:uppercase;
        }

        .hero-content h1{
          font-family:'Cinzel',serif;
          font-size:62px;
          font-weight:900;
          margin:18px 0 12px;
          color:#07111f;
        }

        .hero-content p{
          color:#64748b;
          font-size:19px;
        }

        .portfolio-section{
          padding:90px 0;
          background:#fff;
        }

        .filter-buttons{
          display:flex;
          justify-content:center;
          gap:12px;
          flex-wrap:wrap;
          margin-bottom:55px;
        }

        .filter-buttons button{
          border:1px solid rgba(20,184,166,.18);
          background:#fff;
          color:#64748b;
          padding:11px 24px;
          border-radius:999px;
          font-size:14px;
          font-weight:800;
          transition:.35s;
        }

        .filter-buttons button:hover,
        .filter-buttons button.active{
          background:linear-gradient(135deg,#0f766e,#14b8a6);
          color:#fff;
          transform:translateY(-5px);
          box-shadow:0 16px 32px rgba(20,184,166,.25);
        }

        .work-card{
          height:100%;
          background:#fff;
          border:1px solid rgba(20,184,166,.12);
          border-radius:34px;
          overflow:hidden;
          box-shadow:0 18px 45px rgba(0,0,0,.06);
          transition:.45s ease;
          animation:cardFade .8s ease forwards;
        }

        .work-card:hover{
          transform:translateY(-12px);
          box-shadow:0 34px 75px rgba(20,184,166,.22);
        }

        .before-after-slider{
          position:relative;
          height:330px;
          overflow:hidden;
          user-select:none;
          background:#e6fffb;
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
          z-index:9;
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
          z-index:6;
          transform:translateX(-50%);
        }

        .ba-handle{
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          width:48px;
          height:48px;
          border-radius:50%;
          background:#fff;
          color:#0f766e;
          display:flex;
          align-items:center;
          justify-content:center;
          border:2px solid #0f766e;
          box-shadow:0 8px 24px rgba(0,0,0,.22);
          font-size:18px;
          animation:softPulse 2.5s infinite ease-in-out;
        }

        .ba-labels{
          position:absolute;
          left:18px;
          right:18px;
          bottom:18px;
          z-index:10;
          display:flex;
          justify-content:space-between;
          pointer-events:none;
        }

        .ba-labels span{
          color:#fff;
          font-size:10px;
          font-weight:900;
          letter-spacing:2px;
          text-transform:uppercase;
          padding:7px 14px;
          border-radius:999px;
          box-shadow:0 8px 20px rgba(0,0,0,.2);
        }

        .before-label{
          background:#07111f;
        }

        .after-label{
          background:linear-gradient(135deg,#0f766e,#14b8a6);
        }

        .work-body{
          padding:34px;
        }

        .work-meta{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:15px;
          flex-wrap:wrap;
          margin-bottom:18px;
        }

        .work-meta span{
          background:#e6fffb;
          color:#0f766e;
          font-size:10px;
          font-weight:900;
          letter-spacing:2px;
          text-transform:uppercase;
          padding:8px 14px;
          border-radius:999px;
        }

        .work-meta p{
          margin:0;
          color:#64748b;
          font-size:13px;
          font-weight:800;
          display:flex;
          align-items:center;
          gap:5px;
        }

        .work-meta svg{
          color:#0f766e;
        }

        .work-body h3{
          color:#07111f;
          font-size:28px;
          font-weight:900;
          margin-bottom:22px;
        }

        .review-box{
          background:#f8fffd;
          border:1px solid rgba(20,184,166,.12);
          border-radius:24px;
          padding:22px;
          margin-bottom:26px;
          position:relative;
        }

        .review-box p{
          margin:0;
          color:#07111f;
          font-size:16px;
          line-height:1.7;
          font-style:italic;
        }

        .work-footer{
          border-top:1px solid rgba(20,184,166,.12);
          padding-top:24px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:18px;
          flex-wrap:wrap;
        }

        .stars{
          display:flex;
          gap:3px;
          color:#fbbf24;
          margin-bottom:6px;
        }

        .work-footer h5{
          margin:0;
          color:#07111f;
          font-weight:900;
          font-size:14px;
        }

        .quote-btn{
          background:linear-gradient(135deg,#0f766e,#14b8a6);
          color:#fff;
          text-decoration:none;
          padding:13px 22px;
          border-radius:999px;
          font-size:13px;
          font-weight:900;
          display:flex;
          align-items:center;
          gap:8px;
          transition:.35s;
          box-shadow:0 14px 30px rgba(20,184,166,.25);
        }

        .quote-btn:hover{
          color:#fff;
          transform:translateY(-5px) scale(1.04);
          box-shadow:0 22px 42px rgba(20,184,166,.36);
        }

        .quote-btn svg{
          transition:.35s;
        }

        .quote-btn:hover svg{
          transform:translateX(6px);
        }

        .testimonials-section{
          background:#e6fffb;
          padding:85px 0;
        }

        .testimonial-card{
          height:100%;
          background:#fff;
          border-left:4px solid #0f766e;
          border-radius:24px;
          padding:28px;
          box-shadow:0 18px 45px rgba(0,0,0,.06);
          transition:.4s;
          animation:fadeUp .9s ease forwards;
        }

        .testimonial-card:hover{
          transform:translateY(-10px);
          box-shadow:0 28px 60px rgba(20,184,166,.18);
        }

        .testimonial-card p{
          color:#07111f;
          font-size:15px;
          line-height:1.7;
          font-style:italic;
          margin:14px 0 22px;
        }

        .testimonial-card h5{
          margin:0;
          font-weight:900;
          color:#07111f;
        }

        .testimonial-card span{
          color:#64748b;
          font-size:13px;
          font-weight:700;
        }

        .work-cta{
          background:linear-gradient(135deg,#0f766e,#14b8a6);
          padding:38px 0;
        }

        .work-cta-wrap{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:24px;
          flex-wrap:wrap;
        }

        .work-cta h3{
          color:#fff;
          font-weight:900;
          margin:0;
        }

        .cta-actions{
          display:flex;
          gap:13px;
          flex-wrap:wrap;
        }

        .call-work-btn,
        .whatsapp-work-btn,
        .quote-work-btn{
          text-decoration:none;
          min-height:50px;
          padding:0 26px;
          border-radius:999px;
          font-weight:900;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          transition:.35s;
        }

        .call-work-btn,
        .quote-work-btn{
          background:#fff;
          color:#0f766e;
        }

        .whatsapp-work-btn{
          background:#25D366;
          color:#fff;
        }

        .call-work-btn:hover,
        .whatsapp-work-btn:hover,
        .quote-work-btn:hover{
          color:#fff;
          background:#07111f;
          transform:translateY(-6px) scale(1.04);
          box-shadow:0 18px 38px rgba(0,0,0,.28);
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
            transform:translateY(28px) scale(.97);
          }
          to{
            opacity:1;
            transform:translateY(0) scale(1);
          }
        }

        @keyframes softPulse{
          0%,100%{
            box-shadow:0 8px 24px rgba(0,0,0,.22), 0 0 0 0 rgba(20,184,166,.25);
          }
          50%{
            box-shadow:0 8px 24px rgba(0,0,0,.22), 0 0 0 16px rgba(20,184,166,0);
          }
        }

        @media(max-width:991px){
          .hero-content h1{
            font-size:48px;
          }

          .work-cta-wrap{
            justify-content:center;
            text-align:center;
          }
        }

        @media(max-width:575px){
          .our-work-hero{
            padding:90px 0 65px;
          }

          .hero-content h1{
            font-size:38px;
          }

          .before-after-slider{
            height:260px;
          }

          .work-body{
            padding:26px 22px;
          }

          .work-body h3{
            font-size:23px;
          }

          .quote-btn,
          .call-work-btn,
          .whatsapp-work-btn,
          .quote-work-btn{
            width:100%;
            justify-content:center;
          }

          .cta-actions{
            width:100%;
          }
        }
      `}</style>
    </main>
  );
}