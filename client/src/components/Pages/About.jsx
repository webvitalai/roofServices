import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  GraphUpArrow,
  Stars,
  Gem,
  RocketTakeoffFill,
  ShieldCheck,
  LightningChargeFill,
  PeopleFill,
  BarChartLineFill,
} from "react-bootstrap-icons";

import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const videoRef = useRef(null);
  const [hasUserStarted, setHasUserStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!hasUserStarted) return;

        if (entry.isIntersecting) {
          video.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {});
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, [hasUserStarted]);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      setHasUserStarted(true);
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const whyChooseUs = [
    {
      id: 1,
      icon: <ShieldCheck size={28} />,
      title: "Trusted Execution",
      text: "We deliver reliable digital solutions with precision, consistency, and a strong commitment to quality.",
    },
    {
      id: 2,
      icon: <LightningChargeFill size={28} />,
      title: "Fast Innovation",
      text: "Our agile approach helps brands move faster, adapt quickly, and launch modern solutions without delays.",
    },
    {
      id: 3,
      icon: <PeopleFill size={28} />,
      title: "Client-Centric Approach",
      text: "Every strategy is built around your goals, audience, and long-term business growth.",
    },
    {
      id: 4,
      icon: <BarChartLineFill size={28} />,
      title: "Results Driven",
      text: "We focus on measurable growth, stronger brand visibility, and performance that truly matters.",
    },
  ];

  return (
    <div style={{ padding: "120px 0", background: "#fff" }}>
      <style>{`
        .gradient-text{
          background:linear-gradient(90deg,#7c3aed,#ec4899,#06b6d4,#7c3aed);
          background-size:300% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          font-weight:800;
          animation: gradientMove 6s linear infinite;
        }

        @keyframes gradientMove{
          0%{background-position:0% center;}
          100%{background-position:300% center;}
        }

        .glass{
          background:rgba(255,255,255,0.85);
          backdrop-filter:blur(18px);
          border:1px solid rgba(0,0,0,0.06);
          border-radius:20px;
          box-shadow:0 15px 40px rgba(0,0,0,0.08);
        }

        .stat-box{
          text-align:center;
          padding:25px;
          border-radius:18px;
          transition:0.35s ease;
        }

        .stat-box:hover{
          transform:translateY(-8px);
          box-shadow:0 20px 50px rgba(124,58,237,0.15);
        }

        .icon-wrap{
          width:60px;
          height:60px;
          margin:0 auto;
          border-radius:18px;
          display:flex;
          align-items:center;
          justify-content:center;
          background: linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4);
          color:#fff;
          box-shadow:0 12px 30px rgba(124,58,237,0.25);
          position:relative;
          overflow:hidden;
        }

        .icon-wrap::after{
          content:"";
          position:absolute;
          top:-50%;
          left:-50%;
          width:200%;
          height:200%;
          background:linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.4),
            transparent
          );
          transform:rotate(25deg);
          animation: shineIcon 3s infinite;
        }

        @keyframes shineIcon {
          0%{transform:translateX(-100%) rotate(25deg);}
          100%{transform:translateX(100%) rotate(25deg);}
        }

        .number{
          font-size:30px;
          font-weight:800;
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .mission-card,
        .vision-card{
          transition:0.4s ease;
          border-radius:22px;
        }

        .mission-card:hover,
        .vision-card:hover{
          transform:translateY(-8px);
          box-shadow:0 25px 60px rgba(124,58,237,0.15);
        }
       

        .why-choose-section{
          position:relative;
          margin:100px 0 60px;
          padding:50px 35px;
          border-radius:30px;
          overflow:hidden;
          background:
            radial-gradient(circle at top left, rgba(124,58,237,0.08), transparent 30%),
            radial-gradient(circle at bottom right, rgba(236,72,153,0.08), transparent 30%),
            linear-gradient(135deg, rgba(255,255,255,0.96), rgba(248,250,252,0.95));
          border:1px solid rgba(0,0,0,0.05);
          box-shadow:0 20px 60px rgba(0,0,0,0.06);
        }

        .why-choose-badge{
          display:inline-block;
          padding:8px 18px;
          border-radius:999px;
          font-size:12px;
          font-weight:700;
          letter-spacing:1px;
          text-transform:uppercase;
          background:linear-gradient(135deg, rgba(124,58,237,0.12), rgba(236,72,153,0.12));
          color:#7c3aed;
          margin-bottom:18px;
        }

        .why-choose-left{
          padding-right:22px;
          animation: slideLeft 0.9s ease both;
        }

        .why-choose-right{
          animation: slideRight 1s ease both;
        }

        .why-card{
          position:relative;
          display:flex;
          align-items:flex-start;
          gap:18px;
          padding:24px 22px;
          border-radius:22px;
          height:100%;
          background:rgba(255,255,255,0.82);
          backdrop-filter:blur(12px);
          border:1px solid rgba(0,0,0,0.05);
          box-shadow:0 15px 40px rgba(0,0,0,0.06);
          transition:all 0.35s ease;
          opacity:0;
          transform:translateY(40px);
          animation: slideUpCard 0.8s ease forwards;
        }

        .why-card:hover{
          transform:translateY(-8px);
          box-shadow:0 24px 55px rgba(124,58,237,0.14);
          border-color:rgba(124,58,237,0.15);
        }

        .why-card-icon{
          min-width:62px;
          width:62px;
          height:62px;
          border-radius:18px;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          background:linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4);
          box-shadow:0 12px 28px rgba(124,58,237,0.22);
          flex-shrink:0;
        }

        .why-card h5{
          font-weight:700;
          margin-bottom:10px;
          color:#111827;
        }

        .why-card p{
          margin:0;
          color:#6b7280;
          line-height:1.7;
          font-size:15px;
        }

        .why-highlight-box{
          margin-top:24px;
          padding:22px 24px;
          border-radius:22px;
          background:linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.08));
          border:1px solid rgba(124,58,237,0.08);
          box-shadow:0 15px 35px rgba(0,0,0,0.04);
        }

        .why-highlight-box h6{
          font-weight:800;
          margin-bottom:10px;
          color:#111827;
        }

        .why-highlight-box p{
          margin:0;
          color:#6b7280;
          line-height:1.8;
        }

        .video-wrap{
          position:relative;
          width:100%;
          height:420px;
          cursor:pointer;
        }

        .video-play-overlay{
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);
          width:78px;
          height:78px;
          border-radius:50%;
          background:rgba(0,0,0,0.55);
          backdrop-filter:blur(10px);
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow:0 14px 35px rgba(0,0,0,0.18);
          transition:all 0.3s ease;
          z-index:2;
        }

        .video-play-overlay:hover{
          transform:translate(-50%, -50%) scale(1.08);
          background:rgba(0,0,0,0.68);
        }

        .video-play-triangle{
          width:0;
          height:0;
          border-top:13px solid transparent;
          border-bottom:13px solid transparent;
          border-left:20px solid #fff;
          margin-left:5px;
        }

        @keyframes slideLeft{
          from{
            opacity:0;
            transform:translateX(-50px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @keyframes slideRight{
          from{
            opacity:0;
            transform:translateX(50px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @keyframes slideUpCard{
          from{
            opacity:0;
            transform:translateY(40px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @media (max-width: 991px){
          .why-choose-left{
            padding-right:0;
            margin-bottom:24px;
          }
        }

        @media (max-width: 768px){
          .why-choose-section{
            padding:30px 18px;
            margin:70px 0 40px;
          }

          .why-card{
            padding:20px 18px;
            gap:14px;
          }

          .why-card-icon{
            min-width:54px;
            width:54px;
            height:54px;
          }

          .video-wrap{
            height:340px;
          }

          .video-play-overlay{
            width:66px;
            height:66px;
          }

          .video-play-triangle{
            border-top:11px solid transparent;
            border-bottom:11px solid transparent;
            border-left:17px solid #fff;
          }
        }
          .stat-box{
  text-align:center;
  padding:25px;
  border-radius:18px;
  transition:0.35s ease;
}

.stat-box:hover{
  transform:translateY(-8px);
  box-shadow:0 20px 50px rgba(124,58,237,0.15);
}

.icon-wrap{
  width:60px;
  height:60px;
  margin:0 auto;
  border-radius:18px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4);
  color:#fff;
  box-shadow:0 12px 30px rgba(124,58,237,0.25);
  position:relative;
  overflow:hidden;
}

.icon-wrap::after{
  content:"";
  position:absolute;
  top:-50%;
  left:-50%;
  width:200%;
  height:200%;
  background:linear-gradient(
    120deg,
    transparent,
    rgba(255,255,255,0.4),
    transparent
  );
  transform:rotate(25deg);
  animation:shineIcon 3s infinite;
}

@keyframes shineIcon{
  0%{transform:translateX(-100%) rotate(25deg);}
  100%{transform:translateX(100%) rotate(25deg);}
}

.number{
  font-size:30px;
  font-weight:800;
  background:linear-gradient(90deg,#7c3aed,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.stat-box p{
  margin:0;
  color:#6b7280;
  font-weight:500;
}

.stats-section{
  padding:20px 0 60px;
  background:#fff;
}

@media(max-width:767px){
  .stats-section{
    padding:10px 0 45px;
  }

  .stat-box{
    padding:22px 16px;
  }

  .number{
    font-size:26px;
  }
}
      `}</style>

      <Container>
        {/* HERO */}
        <div className="mb-5">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h5 className="text-uppercase text-muted fw-bold">About Us</h5>

              <h1 className="fw-bold display-4">
                Pioneering the <br />
                <span className="gradient-text">AI Revolution</span>
              </h1>

              <p className="text-muted fs-5 mt-3">
                At VITAL AI, we believe that the future belongs to those who can harness
                the power of artificial intelligence.
              </p>
            </Col>

            <Col lg={6}>
              <div className="video-wrap" onClick={handleVideoClick}>
                <video
                  ref={videoRef}
                  src="/videos/ab1.mp4"
                  loop
                  playsInline
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "420px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
                {!isPlaying && (
                  <div className="video-play-overlay">
                    <div className="video-play-triangle"></div>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>

       <section className="stats-section">
  <Container>
    <Row className="g-4 text-center">
      <Col md={3} sm={6}>
        <div className="glass stat-box">
          <div className="icon-wrap mb-3">
            <GraphUpArrow size={26} />
          </div>
          <div className="number">500+</div>
          <p>Projects Completed</p>
        </div>
      </Col>

      <Col md={3} sm={6}>
        <div className="glass stat-box">
          <div className="icon-wrap mb-3">
            <Stars size={26} />
          </div>
          <div className="number">200+</div>
          <p>Happy Clients</p>
        </div>
      </Col>

      <Col md={3} sm={6}>
        <div className="glass stat-box">
          <div className="icon-wrap mb-3">
            <Gem size={26} />
          </div>
          <div className="number">15+</div>
          <p>Awards Won</p>
        </div>
      </Col>

      <Col md={3} sm={6}>
        <div className="glass stat-box">
          <div className="icon-wrap mb-3">
            <RocketTakeoffFill size={26} />
          </div>
          <div className="number">40+</div>
          <p>Team Members</p>
        </div>
      </Col>
    </Row>
  </Container>
</section>

        {/* WHY CHOOSE US */}
        <section className="why-choose-section">
          <Row className="align-items-center g-4">
            <Col lg={5}>
              <div className="why-choose-left">
                <div className="why-choose-badge">Why Choose Us</div>

                <h2 className="fw-bold display-6 mb-3">
                  The smarter partner for your{" "}
                  <span className="gradient-text">digital growth</span>
                </h2>

                <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
                  We combine strategy, creativity, and AI-powered execution to help
                  brands scale with confidence. Our focus is not just design or
                  development — it is building meaningful results for your business.
                </p>

                <div className="why-highlight-box">
                  <h6>Professional. Scalable. Future-Ready.</h6>
                  <p>
                    From branding to automation, we build modern solutions that look
                    premium, perform better, and create long-term value.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="why-choose-right">
                <Row className="g-4">
                  {whyChooseUs.map((item, index) => (
                    <Col md={6} key={item.id}>
                      <div
                        className="why-card"
                        style={{ animationDelay: `${0.15 + index * 0.12}s` }}
                      >
                        <div className="why-card-icon">{item.icon}</div>
                        <div>
                          <h5>{item.title}</h5>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </section>

        {/* MISSION + VISION */}
        <Row className="g-5 mb-5">
          <Col lg={6}>
            <Card className="glass mission-card p-4 border-0 h-100">
              <h3 className="fw-bold gradient-text">Our Mission</h3>
              <p className="text-muted fs-5 mt-3">
                To empower every organization on the planet with intelligent digital solutions
                that drive growth, efficiency, and innovation.
              </p>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="glass vision-card p-4 border-0 h-100">
              <h3 className="fw-bold gradient-text">Our Vision</h3>
              <p className="text-muted fs-5 mt-3">
                To become the world's leading AI-first digital agency transforming industries
                through machine learning and automation.
              </p>
            </Card>
          </Col>
        </Row>

       
      </Container>
    </div>
  );
};

export default About;