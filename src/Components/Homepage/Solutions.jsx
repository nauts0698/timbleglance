import React, { useState } from "react";
import { Database, ScanFace, MapPin, ShieldCheck, FileSearch } from "lucide-react";

const solutions = [
  {
    title: "Alternate Data Intelligence",
    desc: "Leverage alternative data sources to improve onboarding decisions, reduce fraud risk and accelerate approvals. Connect multiple APIs and generate real-time behavioral insights.",
    icon: Database,
    accent: "#2563eb",
    soft: "#eff6ff",
    tag: "Data Layer",
    stat: "3× faster decisions",
  },
  {
    title: "AI Facial & Document Recognition",
    desc: "Automate identity verification using AI facial matching and document OCR. Detect spoofing, validate IDs and onboard users securely in real-time.",
    icon: ScanFace,
   accent: "#2563eb",
    soft: "#eff6ff",
    tag: "Biometrics",
    stat: "99.4% accuracy",
  },
  {
    title: "Electronic Address Verification",
    desc: "Digitally verify physical addresses using geo-tagging, metadata capture and smart validation workflows.",
    icon: MapPin,
    accent: "#2563eb",
    soft: "#eff6ff",
    tag: "Geo Intelligence",
    stat: "Real-time validation",
  },
  {
    title: "PAN & Identity Fraud Detection",
    desc: "Detect identity fraud using PAN, Aadhaar and license validation. Cross verify identity signals across databases instantly.",
    icon: ShieldCheck,
    accent: "#2563eb",
    soft: "#eff6ff",
    tag: "Fraud Shield",
    stat: "60% fraud reduction",
  },
  {
    title: "Bank Statement Intelligence",
    desc: "Analyze financial statements using AI. Extract income insights and automate underwriting decisions at scale.",
    icon: FileSearch,
 accent: "#2563eb",
    soft: "#eff6ff",
    tag: "FinIntel",
    stat: "Instant underwriting",
  },
];

const Solutions = () => {
  const [active, setActive] = useState(0);
  const sol = solutions[active];
  const Icon = sol.icon;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .sol-section {
          font-family: 'DM Sans', sans-serif;
          background: #f8f9fc;
          padding: 96px 24px;
          position: relative;
          overflow: hidden;
        }

        .sol-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #d1ddf7 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.45;
        }

        .sol-inner {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        /* Header */
        .sol-label {
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
          margin-bottom: 20px;
        }

        .sol-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 4vw, 2.75rem);
          color: #0f172a;
          line-height: 1.15;
          margin-bottom: 10px;
        }

       .highlight {
  color: #2563eb;
  font-style: normal; /* just to be safe */
}
        .sol-subhead {
          font-size: 0.95rem;
          color: #64748b;
          font-weight: 300;
 max-width: 600px;
  margin: 0 auto 52px;   /* center it */          line-height: 1.7;
          margin-bottom: 52px;
          justify-content: center;
margin-left: auto;
margin-right: auto;
        }

        /* Layout */
        .sol-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .sol-grid { grid-template-columns: 1fr; }
          .sol-right { order: -1; }
        }

        /* Left: tab list */
        .sol-tabs {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sol-tab {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 16px;
          border-radius: 12px;
          cursor: pointer;
          border: 1px solid transparent;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
          background: transparent;
        }

        .sol-tab:hover {
          background: rgba(255,255,255,0.7);
        }

        .sol-tab.active {
          background: #fff;
          border-color: rgba(203,213,225,0.8);
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }

        .sol-tab-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }

      .sol-tab-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  justify-content: center;
}

.sol-tab-name {
  font-size: 1.08rem;
  font-weight: 600;
  color: #0f172a;
  line-height: 1.3;
}

.sol-tab-tag {
  font-size: 0.88rem;
  font-weight: 500;
  color: #64748b;
  letter-spacing: 0;
  line-height: 1.2;
}

        .sol-tab-arrow {
          margin-left: auto;
          color: #cbd5e1;
          font-size: 14px;
          transition: color 0.2s, transform 0.2s;
        }

        .sol-tab.active .sol-tab-arrow {
          color: #2563eb;
          transform: translateX(2px);
        }

        /* Right: detail card */
        .sol-right {
          position: sticky;
          top: 24px;
        }

        .sol-card {
          background: #fff;
          border: 1px solid rgba(203,213,225,0.7);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(0,0,0,0.07);
        }

        .sol-card-top {
          padding: 32px 32px 24px;
          border-bottom: 1px solid #f1f5f9;
        }

        .sol-card-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 100px;
          padding: 3px 10px;
          margin-bottom: 16px;
        }

        .sol-card-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
            margin: 0 auto 18px;   /* 🔥 THIS centers it */

        }

        .sol-card-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.45rem;
          color: #0f172a;
          line-height: 1.25;
          margin-bottom: 12px;
        }

        .sol-card-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.75;
          font-weight: 300;
        }

       .sol-card-bottom {
  padding: 24px 32px;
  background: #fafbff;
  display: flex; 
    min-height: 90px;

  justify-content: center;   /* center content */
  align-items: center;
}

        .sol-stat {
  display: flex;
  flex-direction: column;
  align-items: center;   /* center text */
  text-align: center;
}

        .sol-stat-val {
          font-size: 1.1rem;
          font-weight: 500;
          color: #0f172a;
        }

        .sol-stat-label {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .sol-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 18px;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 500;
          color: #fff;
          border: none;
          cursor: pointer;
          transition: opacity 0.18s, transform 0.18s;
        }

        .sol-cta:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        /* Animate card on switch */
        .sol-card {
          animation: cardIn 0.28s ease both;
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="sol-section">
        <div className="sol-inner">

          {/* Header */}
          <div className="sol-label">
            <span>⚡</span> Verification Suite
          </div>
          <h2 className="sol-heading">
            Intelligent Verification<br /><span className="highlight">Solutions</span>
          </h2>
          <p className="sol-subhead">
            AI-powered infrastructure to reduce fraud, accelerate onboarding
            and sharpen risk intelligence across every touchpoint.
          </p>

          <div className="sol-grid">

            {/* Left Tabs */}
            <div className="sol-tabs">
              {solutions.map((item, i) => {
                const TabIcon = item.icon;
                const isActive = active === i;
                return (
                  <div
                    key={i}
                    className={`sol-tab ${isActive ? "active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <div
                      className="sol-tab-icon"
                      style={{
                        background: isActive ? item.accent : item.soft,
                        color: isActive ? "#fff" : item.accent,
                      }}
                    >
                      <TabIcon size={17} />
                    </div>
                    <div className="sol-tab-text">
                      <span className="sol-tab-name">{item.title}</span>
                      <span className="sol-tab-tag">{item.tag}</span>
                    </div>
                    <span className="sol-tab-arrow">›</span>
                  </div>
                );
              })}
            </div>

            {/* Right Card */}
          <div className="sol-right">
  <div className="sol-card" key={active}>
    
    {/* TOP */}
    <div className="sol-card-top">
      <div
        className="sol-card-tag"
        style={{ background: sol.soft, color: sol.accent }}
      >
        {sol.tag}
      </div>

      <div
        className="sol-card-icon-wrap"
        style={{ background: sol.accent }}
      >
        <Icon size={24} color="#fff" />
      </div>

      <div className="sol-card-title">{sol.title}</div>
      <p className="sol-card-desc">{sol.desc}</p>
    </div>

    {/* BOTTOM (FIXED) */}
    <div className="sol-card-bottom">
      <div className="sol-stat">
        <span className="sol-stat-val">{sol.stat}</span>
        <span className="sol-stat-label">Key Outcome</span>
      </div>
    </div>

  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;