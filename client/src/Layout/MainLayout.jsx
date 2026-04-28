import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUp, Whatsapp } from "react-bootstrap-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447700900341"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float-btn"
      >
        <Whatsapp />
      </a>

      {/* Scroll Top Button */}
      {showTopBtn && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <ArrowUp />
        </button>
      )}

      <style>{`
        .whatsapp-float-btn{
          position:fixed;
          right:24px;
          bottom:80px;
          width:58px;
          height:58px;
          border-radius:50%;
          background:#25D366;
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:30px;
          text-decoration:none;
          box-shadow:0 18px 40px rgba(37,211,102,.35);
          z-index:9999;
          animation:whatsappPulse 2s infinite;
          transition:.35s;
        }

        .whatsapp-float-btn:hover{
          color:#fff;
          transform:translateY(-6px) scale(1.08);
          background:#1ebe5d;
        }

        .scroll-top-btn{
          position:fixed;
          right:24px;
          bottom:18px;
          width:54px;
          height:54px;
          border:none;
          border-radius:50%;
          background:linear-gradient(135deg,#0f766e,#14b8a6);
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:24px;
          box-shadow:0 18px 40px rgba(20,184,166,.35);
          z-index:9999;
          cursor:pointer;
          animation:topBtnPop .35s ease;
          transition:.35s;
        }

        .scroll-top-btn:hover{
          transform:translateY(-6px) scale(1.08);
          background:linear-gradient(135deg,#14b8a6,#0f766e);
        }

        @keyframes topBtnPop{
          from{
            opacity:0;
            transform:translateY(20px) scale(.8);
          }
          to{
            opacity:1;
            transform:translateY(0) scale(1);
          }
        }

        @keyframes whatsappPulse{
          0%,100%{
            transform:scale(1);
            box-shadow:0 18px 40px rgba(37,211,102,.35);
          }
          50%{
            transform:scale(1.08);
            box-shadow:0 22px 48px rgba(37,211,102,.48);
          }
        }

        @media(max-width:575px){
          .whatsapp-float-btn{
            width:50px;
            height:50px;
            right:18px;
            bottom:80px;
            font-size:26px;
          }

          .scroll-top-btn{
            width:48px;
            height:48px;
            right:18px;
            bottom:22px;
            font-size:21px;
          }
        }
      `}</style>
    </>
  );
}