import React from "react";

import axisBank from "../../assets/clients/axisbank.jpg";
import bajajAllianz from "../../assets/clients/bajaj_allianz.jpg";
import bankOfBaroda from "../../assets/clients/bob.jpg";
import chola from "../../assets/clients/chola.jpg";
import crif from "../../assets/clients/crif.jpg";
import dmiFinance from "../../assets/clients/dnifinance.jpg";
import godrej from "../../assets/clients/godrej.jpg";
import hdfcBank from "../../assets/clients/hdfc.jpg";
import idfcFirstBank from "../../assets/clients/idfc.jpg";
import indiaFirstLife from "../../assets/clients/indiafirst.jpg";

const logos = [
  { name: "Axis Bank",       img: axisBank },
  { name: "Bajaj Allianz",   img: bajajAllianz },
  { name: "Bank of Baroda",  img: bankOfBaroda },
  { name: "Chola",           img: chola },
  { name: "CRIF",            img: crif },
  { name: "DMI Finance",     img: dmiFinance },
  { name: "Godrej",          img: godrej },
  { name: "HDFC Bank",       img: hdfcBank },
  { name: "IDFC FIRST Bank", img: idfcFirstBank },
  { name: "IndiaFirst Life", img: indiaFirstLife },
];

const ClientCard = ({ logo }) => (
  <div
    style={{
      width: 220,
      height: 110,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 16,
      background: "#fff",
      border: "1px solid rgba(203,213,225,0.7)",
      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "box-shadow 0.2s, transform 0.2s",
      padding: "0 20px",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.1)";
      e.currentTarget.style.transform = "translateY(-3px)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    <img
      src={logo.img}
      alt={logo.name}
style={{ maxWidth: "100%", maxHeight: 64, objectFit: "contain" }}    />
  </div>
);

const Clients = () => {
  const doubled = [...logos, ...logos];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .cli-section {
          font-family: 'DM Sans', sans-serif;
          background: #f8f9fc;
          padding: 30px 0;
          position: relative;
          overflow: hidden;
        }

        .cli-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #d1ddf7 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.45;
          pointer-events: none;
        }

        .cli-inner {
          position: relative;
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Centred header ── */
        .cli-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .cli-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2563eb;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 100px;
          padding: 4px 12px;
          margin-bottom: 18px;
        }

        .cli-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #0f172a;
          line-height: 1.15;
          margin-bottom: 12px;
        }

        .highlight{
          color: #2563eb;
        }

        .cli-subhead {
          font-size: 0.93rem;
          color: #64748b;
          font-weight: 300;
          line-height: 1.75;
          max-width: 500px;
          margin: 0 auto 40px;
        }

        /* ── Stats row — centred ── */
        .cli-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 52px;
        }

        .cli-stat-val {
          font-family: 'DM Serif Display', serif;
          font-size: 1.8rem;
          color: #0f172a;
          line-height: 1;
          display: block;
          text-align: center;
        }

        .cli-stat-label {
          font-size: 0.78rem;
          color: #94a3b8;
          margin-top: 4px;
          display: block;
          letter-spacing: 0.02em;
          text-align: center;
        }

        .cli-stat-divider {
          width: 1px;
          background: #e2e8f0;
          align-self: stretch;
        }

        /* ── Carousel ── */
        .cli-carousel-wrap {
          position: relative;
          overflow: hidden;
        }

        .cli-carousel-wrap::before,
        .cli-carousel-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .cli-carousel-wrap::before {
          left: 0;
          background: linear-gradient(to right, #f8f9fc, transparent);
        }

        .cli-carousel-wrap::after {
          right: 0;
          background: linear-gradient(to left, #f8f9fc, transparent);
        }

        .cli-track {
          display: flex;
          width: max-content;
          animation: cli-scroll 32s linear infinite;
          padding: 12px 0;
        }

        .cli-track:hover {
          animation-play-state: paused;
        }

        @keyframes cli-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ── Bottom trust bar ── */
        .cli-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e2e8f0 30%, #e2e8f0 70%, transparent);
          margin: 40px 0 0;
        }

        .cli-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 22px;
          font-size: 0.8rem;
          color: #94a3b8;
          flex-wrap: wrap;
        }

        .cli-trust-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #cbd5e1;
          flex-shrink: 0;
        }
      `}</style>

      <section className="cli-section">
        <div className="cli-inner">

          {/* Centred header */}
          <div className="cli-header">
            <div className="cli-label">🤝 Trusted By</div>
            <h2 className="cli-heading">Our <span className="highlight">Clients</span></h2>
            <p className="cli-subhead">
              Trusted by leading banks, NBFCs, fintech platforms and enterprises -
              enabling secure onboarding, fraud detection and risk intelligence at scale.
            </p>
          </div>

          {/* Stats — centred */}
          <div className="cli-stats">
            {[
              { val: "50+",   label: "Enterprise Clients" },
              { val: "10M+",  label: "Verifications / Month" },
              { val: "99.4%", label: "Accuracy Rate" },
              { val: "5+",    label: "Years of Trust" },
            ].map((s, i, arr) => (
              <React.Fragment key={i}>
                <div>
                  <span className="cli-stat-val">{s.val}</span>
                  <span className="cli-stat-label">{s.label}</span>
                </div>
                {i < arr.length - 1 && <div className="cli-stat-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Full-width carousel */}
        <div className="cli-carousel-wrap">
          <div className="cli-track">
            {doubled.map((logo, i) => (
              <ClientCard key={i} logo={logo} />
            ))}
          </div>
        </div>

        <div className="cli-inner">
          <div className="cli-divider" />
          <div className="cli-trust">
            <span className="cli-trust-dot" />
            <span>RBI & IRDAI Compliant Workflows</span>
            <span className="cli-trust-dot" />
            <span>ISO 27001 Certified</span>
            <span className="cli-trust-dot" />
            <span>SOC 2 Type II</span>
            <span className="cli-trust-dot" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;