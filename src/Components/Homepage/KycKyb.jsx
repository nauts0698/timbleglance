import { useState, useEffect } from "react";
import { User, Building2, FileSearch, ShieldAlert, Zap } from "lucide-react";

const cards = [
  {
    delay: 0,
    gradient: "linear-gradient(135deg,#6366f1,#4338ca)",
    accent: "#6366f1",
    soft: "#eef2ff",
    tag: "Individual",
    title: "Individual KYC\nVerification",
    desc: "Verify customer identity using Aadhaar, PAN, Mobile, Email, and document validation APIs with real-time response and compliance-ready data.",
    features: ["Aadhaar & PAN validation", "Mobile & email OTP verify", "Real-time compliance data"],
    pill: "Real-time response",
    stats: [{ num: "99.9%", label: "Uptime" }, { num: "<1s", label: "Response" }],
    icon: User,
  },
  {
    delay: 0.08,
    gradient: "linear-gradient(135deg,#2563eb,#1e40af)",
    accent: "#2563eb",
    soft: "#eff6ff",
    tag: "Business",
    title: "Business KYB\nVerification",
    desc: "Verify companies using GST, CIN, MSME, PAN, and corporate registry data for onboarding and risk assessment.",
    features: ["GST & CIN lookup", "MSME & registry check", "Director verification"],
    pill: "Multi-registry check",
    stats: [{ num: "50+", label: "Registries" }, { num: "ISO", label: "Certified" }],
    icon: Building2,
  },
  {
    delay: 0.16,
    gradient: "linear-gradient(135deg,#0891b2,#0e7490)",
    accent: "#0891b2",
    soft: "#ecfeff",
    tag: "Documents",
    title: "Document\nVerification APIs",
    desc: "Validate government-issued documents including Driving License, Passport, RC, Voter ID with instant verification.",
    features: ["DL & Passport check", "RC & Voter ID verify", "Forgery detection"],
    pill: "Instant results",
    stats: [{ num: "12+", label: "Doc types" }, { num: "100%", label: "Govt. Data" }],
    icon: FileSearch,
  },
  {
    delay: 0.24,
    gradient: "linear-gradient(135deg,#dc2626,#b91c1c)",
    accent: "#dc2626",
    soft: "#fef2f2",
    tag: "Risk",
    title: "Fraud & Risk\nIntelligence",
    desc: "Detect mismatches, duplicates, and fraud signals using name match, mobile verification, and cross-database validation.",
    features: ["Name fuzzy matching", "Duplicate signal detection", "Cross-DB validation"],
    pill: "Cross-DB validated",
    stats: [{ num: "98%", label: "Accuracy" }, { num: "0", label: "Blind spots" }],
    icon: ShieldAlert,
  },
];

export default function KYCSuite() {
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');

        .kyc-section {
          font-family: 'Outfit', sans-serif;
          padding: 72px 24px;
          position: relative;
          overflow: hidden;
        }

        /* Dot grid */
        .kyc-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-size: 26px 26px;
          opacity: 0.35;
          pointer-events: none;
        }

        /* Blurred blobs */
       

        .kyc-inner {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .kyc-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6366f1;
          background: #eef2ff;
          border: 1px solid #c7d2fe;
          border-radius: 100px;
          padding: 5px 16px;
          margin-bottom: 20px;
        }

        .kyc-heading {
          font-family: 'Fraunces', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: #0a0e1a;
          line-height: 1.12;
          margin: 0 0 14px 0;
        }

      .highlight {
           color: #6366f1;
        }

        .kyc-sub {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 300;
          line-height: 1.8;
          max-width: 560px;
          margin: 0 auto 52px;
        }

        .kyc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }

        @media (max-width: 1024px) {
          .kyc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .kyc-grid { grid-template-columns: 1fr; max-width: 420px; margin-inline: auto; }
        }

        .kyc-card {
          background: #fff;
          border: 1px solid rgba(203,213,225,0.65);
          border-radius: 22px;
          padding: 28px 22px 24px;
          display: flex;
          flex-direction: column;
          text-align: left;
          cursor: default;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
        }

        .kyc-card:hover {
          box-shadow: 0 20px 56px rgba(0,0,0,0.1);
          transform: translateY(-6px);
        }

        /* Top strip */
        .kyc-strip {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          border-radius: 22px 22px 0 0;
          transition: height 0.25s;
        }
        .kyc-card:hover .kyc-strip { height: 5px; }

        /* Faint watermark icon */
        .kyc-watermark {
          position: absolute;
          right: -14px;
          bottom: -14px;
          opacity: 0.045;
          transition: opacity 0.25s;
          pointer-events: none;
        }
        .kyc-card:hover .kyc-watermark { opacity: 0.08; }

        .kyc-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          flex-shrink: 0;
          transition: background 0.25s;
          position: relative;
          z-index: 1;
        }

        .kyc-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border-radius: 100px;
          padding: 3px 10px;
          margin-bottom: 12px;
          border: 1px solid transparent;
          width: fit-content;
          position: relative;
          z-index: 1;
        }

        .kyc-title {
          font-family: 'Fraunces', serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: #0a0e1a;
          line-height: 1.25;
          margin-bottom: 10px;
          white-space: pre-line;
          position: relative;
          z-index: 1;
        }

        .kyc-divider {
          height: 1px;
  background: rgba(203,213,225,0.6);
          margin-bottom: 13px;
          position: relative;
          z-index: 1;
        }

        .kyc-desc {
          font-size: 0.78rem;
          color: #64748b;
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .kyc-features {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 18px;
          position: relative;
          z-index: 1;
        }

        .kyc-feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 400;
          color: #475569;
        }

        .kyc-feature-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .kyc-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 10.5px;
          font-weight: 600;
          border-radius: 8px;
          padding: 5px 11px;
          border: 1px solid transparent;
          width: fit-content;
          position: relative;
          z-index: 1;
        }

        /* Stats row */
        .kyc-stats-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid rgba(203,213,225,0.5);
          position: relative;
          z-index: 1;
        }

        .kyc-stat-block {
          flex: 1;
          text-align: center;
        }

        .kyc-stat-num {
          font-family: 'Fraunces', serif;
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 3px;
        }

        .kyc-stat-label {
          font-size: 9px;
          font-weight: 500;
          color: #94a3b8;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .kyc-stat-sep {
          width: 1px;
          height: 28px;
          background: rgba(203,213,225,0.6);
        }

        .kyc-bottom-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #6366f1;
          background: #eef2ff;
          border: 1px solid #c7d2fe;
          border-radius: 100px;
          padding: 10px 22px;
          font-family: 'Outfit', sans-serif;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .fade-up.vis {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="kyc-section">
        {/* Blobs */}
       

        <div className="kyc-inner">

          {/* Label */}
          <div className={`fade-up ${visible ? "vis" : ""}`} style={{ transitionDelay: "0s" }}>
            <span className="kyc-label">🔐 Verification Suite</span>
          </div>

          {/* Heading */}
          <div className={`fade-up ${visible ? "vis" : ""}`} style={{ transitionDelay: "0.07s" }}>
            <h2 className="kyc-heading">
              Unified <span className="highlight">KYC</span > & <span className="highlight">KYB</span> API Suite
            </h2>
          </div>

          {/* Subheading */}
          <div className={`fade-up ${visible ? "vis" : ""}`} style={{ transitionDelay: "0.13s" }}>
            <p className="kyc-sub">
              A comprehensive suite of verification APIs for banks, fintechs, NBFCs, and enterprises -
              verify individuals and businesses instantly through one integration.
            </p>
          </div>

          {/* Cards */}
          <div className="kyc-grid">
            {cards.map((card, i) => {
              const Icon = card.icon;
              const isHov = hovered === i;

              return (
                <div
                  key={i}
                  className={`kyc-card fade-up ${visible ? "vis" : ""}`}
                  style={{
                    transitionDelay: `${0.18 + card.delay}s`,
                    borderColor: isHov ? card.accent + "44" : undefined,
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Top gradient strip */}
<div className="kyc-strip" style={{ background: card.accent }} />
                  {/* Faint watermark */}
                  <div className="kyc-watermark">
                    <Icon size={120} color={card.accent} strokeWidth={1} />
                  </div>

                  {/* Icon box */}
                  <div
                    className="kyc-icon-box"
                    style={{
                      background: isHov ? card.accent : card.soft,
                      color: isHov ? "#fff" : card.accent,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Tag */}
                  <span className="kyc-tag" style={{
                    background: card.soft,
                    color: card.accent,
                    borderColor: card.accent + "22",
                  }}>
                    {card.tag}
                  </span>

                  {/* Title */}
                  <h3 className="kyc-title">{card.title}</h3>

                  {/* Divider */}
                  <div className="kyc-divider" />

                  {/* Desc */}
                  <p className="kyc-desc">{card.desc}</p>

                  {/* Features */}
                  <div className="kyc-features">
                    {card.features.map((f, fi) => (
                      <div key={fi} className="kyc-feature-item">
                        <span className="kyc-feature-dot" style={{ background: card.accent }} />
                        {f}
                      </div>
                    ))}
                  </div>

                  {/* Pill */}
                  <span className="kyc-pill" style={{
                    background: card.soft,
                    color: card.accent,
                    borderColor: card.accent + "33",
                  }}>
                    <svg width="11" height="11" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    {card.pill}
                  </span>

                  {/* Stats row */}
                  <div className="kyc-stats-row">
                    <div className="kyc-stat-block">
                      <div className="kyc-stat-num" style={{ color: card.accent }}>{card.stats[0].num}</div>
                      <div className="kyc-stat-label">{card.stats[0].label}</div>
                    </div>
                    <div className="kyc-stat-sep" />
                    <div className="kyc-stat-block">
                      <div className="kyc-stat-num" style={{ color: card.accent }}>{card.stats[1].num}</div>
                      <div className="kyc-stat-label">{card.stats[1].label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom badge */}
          <div className={`fade-up ${visible ? "vis" : ""}`} style={{ transitionDelay: "0.55s" }}>
            <span className="kyc-bottom-badge">
              <Zap size={14} />
              100+ KYC & KYB verification APIs available through one integration
            </span>
          </div>

        </div>
      </section>
    </>
  );
}