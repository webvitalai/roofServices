import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  TelephoneFill,
  Whatsapp,
  EnvelopeFill,
  GeoAltFill,
  ClockFill,
  ArrowRight,
  CheckCircleFill,
  X,
  ChevronDown,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  "Emergency Repair",
  "Roof Repair",
  "Full Replacement",
  "Flat Roof",
  "Chimney / Guttering",
  "Not Sure",
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [searchService, setSearchService] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [gdpr, setGdpr] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const filteredServices = services.filter((service) =>
    service.toLowerCase().includes(searchService.toLowerCase())
  );

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const removeService = (service) => {
    setSelectedServices(selectedServices.filter((item) => item !== service));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <Container>
          <div className="hero-box">
            <span>Home / Contact</span>
            <h1>Get In Touch</h1>
            <p>
              Call, WhatsApp or request a written quote online. Fast replies and
              honest pricing.
            </p>
          </div>
        </Container>
      </section>

      <section className="contact-cards-section">
        <Container>
          <Row className="gy-4">
            <Col lg={4}>
              <div className="contact-card">
                <div className="icon-box teal">
                  <TelephoneFill />
                </div>
                <h3>Call Us</h3>
                <p>Speak directly with our roofing team.</p>
                <a href="tel:01618745200" className="card-btn teal-btn">
                  0161 874 5200
                </a>
                <small>Mon–Sat 7am to 6pm</small>
              </div>
            </Col>

            <Col lg={4}>
              <div className="contact-card featured-card">
                <div className="icon-box green">
                  <Whatsapp />
                </div>
                <h3>WhatsApp Quote</h3>
                <p>Send roof photos for faster estimate.</p>
                <a
                  href="https://wa.me/447700900341"
                  target="_blank"
                  rel="noreferrer"
                  className="card-btn green-btn"
                >
                  Open WhatsApp
                </a>
                <small>Replies usually within 24 hours</small>
              </div>
            </Col>

            <Col lg={4}>
              <div className="contact-card">
                <div className="icon-box gold">
                  <EnvelopeFill />
                </div>
                <h3>Email Us</h3>
                <p>For non-urgent enquiries & documents.</p>
                <a
                  href="mailto:info@peakroofingmanchester.co.uk"
                  className="card-btn gold-btn"
                >
                  Send Email
                </a>
                <small>Response within 24 hours</small>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="quote-form-section">
        <Container>
          <div className="form-head">
            <span>FASTER RESPONSE</span>
            <h2>Request a Written Quote</h2>
            <p>
              Fill in the details below and our team will get back to you with a
              transparent quote.
            </p>
          </div>

          <Row className="gy-4 align-items-stretch">
            <Col lg={6}>
              <div className="map-wrap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75993.08981336847!2d-2.3058627507377856!3d53.47231928808202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20UK!5e0!3m2!1sen!2s!4v1777292233197!5m2!1sen!2s"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Manchester Map"
                ></iframe>
              </div>
            </Col>

            <Col lg={6}>
              <div className="quote-form-wrap">
                {submitted && (
                  <div className="success-msg">
                    <CheckCircleFill />
                    Thank you! Our team will contact you soon.
                  </div>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row className="gy-4">
                    <Col md={12}>
                      <Form.Label>What do you need help with?</Form.Label>

                      <div className="multi-select-wrap">
                        <div
                          className="multi-select-head"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                          <div className="selected-tags">
                            {selectedServices.length === 0 ? (
                              <span className="placeholder-text">
                                Select one or more services
                              </span>
                            ) : (
                              selectedServices.map((service) => (
                                <span className="selected-tag" key={service}>
                                  {service}
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      removeService(service);
                                    }}
                                  >
                                    <X />
                                  </button>
                                </span>
                              ))
                            )}
                          </div>

                          <ChevronDown
                            className={`dropdown-arrow ${
                              dropdownOpen ? "rotate" : ""
                            }`}
                          />
                        </div>

                        {dropdownOpen && (
                          <div className="multi-dropdown">
                            <input
                              type="text"
                              placeholder="Search service..."
                              value={searchService}
                              onChange={(e) => setSearchService(e.target.value)}
                              className="service-search"
                            />

                            <div className="service-list">
                              {filteredServices.length > 0 ? (
                                filteredServices.map((service) => (
                                  <button
                                    type="button"
                                    key={service}
                                    onClick={() => toggleService(service)}
                                    className={`service-list-item ${
                                      selectedServices.includes(service)
                                        ? "selected"
                                        : ""
                                    }`}
                                  >
                                    <span>{service}</span>
                                    <span className="check-box">
                                      {selectedServices.includes(service)
                                        ? "✓"
                                        : ""}
                                    </span>
                                  </button>
                                ))
                              ) : (
                                <p className="no-service">No service found</p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </Col>

                    <Col md={6}>
                      <Form.Label>Your Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g. John Doe"
                        required
                        className="custom-input"
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Label>Postcode</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g. M32 0JT"
                        required
                        className="custom-input"
                      />
                    </Col>

                    <Col md={12}>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="e.g. 07700 123456"
                        required
                        className="custom-input"
                      />
                    </Col>

                    <Col md={12}>
                      <Form.Label>
                        Briefly Describe The Issue (Optional)
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="e.g. Leak coming through the kitchen ceiling..."
                        className="custom-input textarea-input"
                      />
                    </Col>

                    <Col md={12}>
                      <div className="gdpr-box">
                        <input
                          type="checkbox"
                          id="gdpr"
                          checked={gdpr}
                          onChange={(e) => setGdpr(e.target.checked)}
                          required
                        />
                        <label htmlFor="gdpr">
                          I agree to the <strong>Privacy Policy</strong> and
                          consent to being contacted regarding my enquiry.
                        </label>
                      </div>
                    </Col>

                    <Col md={12}>
                      <Button type="submit" className="submit-btn">
                        Request My Free Quote <ArrowRight />
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="info-strip">
        <Container>
          <Row className="gy-4">
            <Col md={4}>
              <div className="info-item">
                <ClockFill />
                <div>
                  <strong>Opening Hours</strong>
                  <p>Mon-Fri 7am–6pm</p>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="info-item">
                <GeoAltFill />
                <div>
                  <strong>Location</strong>
                  <p>Manchester, United Kingdom</p>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="info-item">
                <CheckCircleFill />
                <div>
                  <strong>Trusted Since 2009</strong>
                  <p>Fully insured & guaranteed</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        .contact-page{
          font-family:'Outfit',sans-serif;
          overflow:hidden;
          background:#fff;
        }

        .contact-hero{
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

        .hero-box span,
        .form-head span{
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

        .contact-cards-section{
          padding:90px 0;
        }

        .contact-card{
          background:#fff;
          border-radius:30px;
          padding:38px;
          text-align:center;
          box-shadow:0 18px 45px rgba(0,0,0,.06);
          border:1px solid rgba(20,184,166,.08);
          transition:.4s;
          height:100%;
        }

        .contact-card:hover{
          transform:translateY(-10px);
          box-shadow:0 28px 65px rgba(20,184,166,.18);
        }

        .featured-card{
          transform:scale(1.03);
        }

        .icon-box{
          width:78px;
          height:78px;
          margin:auto auto 24px;
          border-radius:24px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:34px;
          color:#fff;
        }

        .teal{background:#0f766e;}
        .green{background:#25D366;}
        .gold{background:#f59e0b;}

        .contact-card h3{
          font-size:26px;
          font-weight:900;
          margin-bottom:12px;
        }

        .contact-card p{
          color:#64748b;
          min-height:50px;
        }

        .card-btn{
          display:block;
          padding:14px;
          border-radius:999px;
          color:#fff;
          text-decoration:none;
          font-weight:900;
          margin:22px 0 14px;
          transition:.35s;
        }

        .card-btn:hover{
          color:#fff;
          transform:translateY(-5px);
        }

        .teal-btn{background:#0f766e;}
        .green-btn{background:#25D366;}
        .gold-btn{background:#f59e0b;}

        .quote-form-section{
          padding:95px 0;
          background:
            radial-gradient(circle at top left, rgba(20,184,166,.14), transparent 30%),
            linear-gradient(135deg,#e6fffb,#f8fffd);
        }

        .form-head{
          text-align:center;
          max-width:760px;
          margin:auto auto 45px;
        }

        .form-head h2{
          font-family:'Cinzel',serif;
          font-size:48px;
          font-weight:900;
          margin:14px 0;
        }

        .form-head p{
          color:#64748b;
          font-size:18px;
        }

        .map-wrap{
          height:100%;
          min-height:760px;
          border-radius:38px;
          overflow:hidden;
          box-shadow:0 28px 80px rgba(15,118,110,.14);
          border:1px solid rgba(20,184,166,.12);
          background:#fff;
        }

        .map-wrap iframe{
          width:100%;
          height:100%;
          border:0;
          display:block;
        }

        .quote-form-wrap{
          max-width:100%;
          height:100%;
          margin:auto;
          background:rgba(255,255,255,.96);
          padding:38px;
          border-radius:38px;
          box-shadow:0 28px 80px rgba(15,118,110,.16);
          border:1px solid rgba(20,184,166,.12);
          position:relative;
          overflow:visible;
          animation:fadeUp .8s ease;
        }

        .quote-form-wrap::before{
          content:"";
          position:absolute;
          top:-80px;
          right:-80px;
          width:220px;
          height:220px;
          border-radius:50%;
          background:rgba(20,184,166,.07);
          filter:blur(10px);
          z-index:0;
        }

        .form-label{
          display:block;
          color:#07111f;
          font-size:13px;
          font-weight:900;
          letter-spacing:2px;
          text-transform:uppercase;
          margin-bottom:14px;
          position:relative;
          z-index:1;
        }

        .multi-select-wrap{
          position:relative;
          z-index:20;
        }

        .multi-select-head{
          min-height:58px;
          border-radius:18px;
          border:2px solid #e6fffb;
          background:#f8fffd;
          padding:10px 16px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          cursor:pointer;
          transition:.35s;
        }

        .multi-select-head:hover{
          border-color:#14b8a6;
          background:#fff;
          box-shadow:0 0 0 4px rgba(20,184,166,.08);
        }

        .selected-tags{
          display:flex;
          align-items:center;
          flex-wrap:wrap;
          gap:8px;
          flex:1;
        }

        .placeholder-text{
          color:#94a3b8;
          font-weight:700;
        }

        .selected-tag{
          background:linear-gradient(135deg,#0f766e,#14b8a6);
          color:#fff;
          padding:7px 9px 7px 12px;
          border-radius:999px;
          font-size:12px;
          font-weight:900;
          display:flex;
          align-items:center;
          gap:7px;
          animation:tagPop .25s ease;
        }

        .selected-tag button{
          width:18px;
          height:18px;
          border:none;
          border-radius:50%;
          background:rgba(255,255,255,.22);
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:0;
          transition:.25s;
        }

        .selected-tag button:hover{
          background:#fff;
          color:#0f766e;
        }

        .dropdown-arrow{
          color:#0f766e;
          font-size:20px;
          transition:.3s;
          flex-shrink:0;
        }

        .dropdown-arrow.rotate{
          transform:rotate(180deg);
        }

        .multi-dropdown{
          position:absolute;
          top:calc(100% + 10px);
          left:0;
          right:0;
          background:#fff;
          border:1px solid rgba(20,184,166,.16);
          border-radius:22px;
          box-shadow:0 24px 55px rgba(15,118,110,.18);
          padding:14px;
          animation:dropdownFade .25s ease;
          z-index:99;
        }

        .service-search{
          width:100%;
          height:48px;
          border-radius:15px;
          border:2px solid #e6fffb;
          background:#f8fffd;
          padding:0 15px;
          font-weight:700;
          outline:none;
          color:#07111f;
          margin-bottom:12px;
        }

        .service-search:focus{
          border-color:#0f766e;
          background:#fff;
          box-shadow:0 0 0 4px rgba(20,184,166,.08);
        }

        .service-list{
          max-height:220px;
          overflow-y:auto;
          display:flex;
          flex-direction:column;
          gap:8px;
          padding-right:4px;
        }

        .service-list-item{
          border:none;
          background:#f8fffd;
          border-radius:15px;
          padding:12px 14px;
          color:#64748b;
          font-weight:800;
          display:flex;
          align-items:center;
          justify-content:space-between;
          transition:.25s;
        }

        .service-list-item:hover{
          background:#e6fffb;
          color:#0f766e;
          transform:translateX(4px);
        }

        .service-list-item.selected{
          background:linear-gradient(135deg,rgba(15,118,110,.10),rgba(20,184,166,.14));
          color:#0f766e;
        }

        .check-box{
          width:22px;
          height:22px;
          border-radius:50%;
          border:2px solid #d1fae5;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          font-size:12px;
          font-weight:900;
        }

        .service-list-item.selected .check-box{
          background:#0f766e;
          border-color:#0f766e;
        }

        .no-service{
          margin:0;
          color:#64748b;
          font-weight:700;
          padding:12px;
          text-align:center;
        }

        .custom-input{
          min-height:58px;
          border-radius:18px !important;
          border:2px solid #e6fffb !important;
          background:#f8fffd !important;
          padding:14px 18px !important;
          font-weight:700;
          color:#07111f !important;
          transition:.35s;
          position:relative;
          z-index:1;
        }

        .custom-input::placeholder{
          color:#94a3b8;
          font-weight:600;
        }

        .custom-input:focus{
          box-shadow:0 0 0 4px rgba(20,184,166,.10) !important;
          border-color:#0f766e !important;
          background:#fff !important;
        }

        .textarea-input{
          min-height:125px !important;
          resize:none;
        }

        .gdpr-box{
          background:#f8fffd;
          border:1px solid rgba(20,184,166,.13);
          border-radius:18px;
          padding:20px;
          display:flex;
          gap:12px;
          align-items:flex-start;
          position:relative;
          z-index:1;
        }

        .gdpr-box input{
          width:18px;
          height:18px;
          margin-top:2px;
          accent-color:#0f766e;
          cursor:pointer;
        }

        .gdpr-box label{
          color:#64748b;
          font-size:13px;
          line-height:1.7;
          cursor:pointer;
        }

        .gdpr-box strong{
          color:#07111f;
        }

        .submit-btn{
          width:100%;
          min-height:62px;
          border:none !important;
          border-radius:999px !important;
          background:linear-gradient(135deg,#0f766e,#14b8a6)!important;
          font-weight:900 !important;
          font-size:16px !important;
          transition:.35s;
          box-shadow:0 18px 38px rgba(20,184,166,.24);
          position:relative;
          z-index:1;
        }

        .submit-btn:hover{
          transform:translateY(-5px);
          box-shadow:0 26px 55px rgba(20,184,166,.34);
        }

        .submit-btn svg{
          transition:.35s;
        }

        .submit-btn:hover svg{
          transform:translateX(7px);
        }

        .success-msg{
          background:#dcfce7;
          color:#166534;
          padding:14px 18px;
          border-radius:18px;
          font-weight:800;
          margin-bottom:22px;
          display:flex;
          align-items:center;
          gap:10px;
          animation:fadeUp .5s ease;
          position:relative;
          z-index:1;
        }

        .info-strip{
          background:#07111f;
          padding:45px 0;
        }

        .info-item{
          display:flex;
          gap:14px;
          color:#fff;
          align-items:flex-start;
        }

        .info-item svg{
          font-size:24px;
          color:#14b8a6;
          margin-top:4px;
        }

        .info-item strong{
          display:block;
          font-size:16px;
        }

        .info-item p{
          margin:4px 0 0;
          color:rgba(255,255,255,.65);
          font-size:14px;
        }

        @keyframes fadeUp{
          from{opacity:0;transform:translateY(25px);}
          to{opacity:1;transform:translateY(0);}
        }

        @keyframes dropdownFade{
          from{opacity:0;transform:translateY(-8px);}
          to{opacity:1;transform:translateY(0);}
        }

        @keyframes tagPop{
          from{opacity:0;transform:scale(.85);}
          to{opacity:1;transform:scale(1);}
        }

        @media(max-width:991px){
          .hero-box h1{font-size:48px;}
          .form-head h2{font-size:40px;}

          .map-wrap{
            min-height:420px;
          }
        }

        @media(max-width:575px){
          .contact-hero{padding:90px 0 65px;}
          .hero-box h1{font-size:38px;}
          .form-head h2{font-size:32px;}
          .quote-form-wrap{padding:28px 20px;border-radius:28px;}
          .map-wrap{min-height:320px;border-radius:28px;}
          .featured-card{transform:none;}
        }
      `}</style>
    </main>
  );
}