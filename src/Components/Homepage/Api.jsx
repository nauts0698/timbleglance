import React from "react";
import {
  Fingerprint,
  Landmark,
  CreditCard,
  ShieldCheck,
  FileText,
  ScanFace,
  MapPin,
  Phone,
  Car,
  Briefcase,
  Building2,
  UserCheck,
} from "lucide-react";

const apis = [
  {
    title: "Aadhaar CKYC",
    sub: "Download & verify",
    icon: Fingerprint,
    accent: "#2563eb",
    soft: "#eff6ff",
    tag: "Identity",
    stat: "Real-time",
  },
  {
    title: "Bank Account Validation",
    sub: "579+ banks supported",
    icon: Landmark,
    accent: "#059669",
    soft: "#ecfdf5",
    tag: "Financial",
    stat: "579+ Banks",
  },
  {
    title: "PAN Verification",
    sub: "Instant PAN check",
    icon: CreditCard,
    accent: "#7c3aed",
    soft: "#f5f3ff",
    tag: "Identity",
    stat: "< 1s response",
  },
  {
    title: "Fraud Detection",
    sub: "AI-powered risk scoring",
    icon: ShieldCheck,
    accent: "#dc2626",
    soft: "#fef2f2",
    tag: "Risk",
    stat: "99.4% accuracy",
  },
  {
    title: "Document OCR",
    sub: "AI-powered extraction",
    icon: FileText,
    accent: "#d97706",
    soft: "#fffbeb",
    tag: "Documents",
    stat: "Multi-format",
  },
  {
    title: "Face Match API",
    sub: "Liveness + spoof detection",
    icon: ScanFace,
    accent: "#0891b2",
    soft: "#ecfeff",
    tag: "Biometric",
    stat: "Live detection",
  },
  {
    title: "Address Verification",
    sub: "Geo-tagged validation",
    icon: MapPin,
    accent: "#9333ea",
    soft: "#fdf4ff",
    tag: "Address",
    stat: "Geo-tagged",
  },
  {
    title: "Mobile OTP Auth",
    sub: "Telecom-grade verification",
    icon: Phone,
    accent: "#0284c7",
    soft: "#f0f9ff",
    tag: "Auth",
    stat: "Telecom-grade",
  },
  {
    title: "RC & DL Verification",
    sub: "Vehicle & license check",
    icon: Car,
    accent: "#ea580c",
    soft: "#fff7ed",
    tag: "Documents",
    stat: "National DB",
  },
  {
    title: "Employment Verification",
    sub: "EPFO-based background check",
    icon: Briefcase,
    accent: "#16a34a",
    soft: "#f0fdf4",
    tag: "Background",
    stat: "EPFO linked",
  },
  {
    title: "GST Verification",
    sub: "Business identity check",
    icon: Building2,
    accent: "#b45309",
    soft: "#fefce8",
    tag: "Business",
    stat: "Real-time",
  },
  {
    title: "Video KYC",
    sub: "RBI-compliant video onboarding",
    icon: UserCheck,
    accent: "#4f46e5",
    soft: "#eef2ff",
    tag: "KYC",
    stat: "RBI compliant",
  },
];

const APICard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="api-card">
      <div className="api-card-top">
        <div className="api-icon-wrap" style={{ background: item.soft }}>
          <Icon size={22} color={item.accent} />
        </div>
        <span className="api-tag" style={{ color: item.accent, background: item.soft, borderColor: item.accent + "22" }}>
          {item.tag}
        </span>
      </div>

      <div className="api-card-body">
        <div className="api-title">{item.title}</div>
        <div className="api-sub">{item.sub}</div>
      </div>

      <div className="api-card-footer">
        <div className="api-stat-pill" style={{ background: item.soft, color: item.accent }}>
          <span className="api-stat-dot" style={{ background: item.accent }} />
          {item.stat}
        </div>
        <span className="api-arrow" style={{ color: item.accent }}>→</span>
      </div>

      {/* accent bar bottom */}
      <div className="api-bar" style={{ background: item.accent }} />
    </div>
  );
};

const APIs = () => {
  const doubled = [...apis, ...apis];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .api-section {
          font-family: 'DM Sans', sans-serif;
          background: #f8f9fc;
          padding: 30px 0;
          position: relative;
          overflow: hidden;
        }

        .api-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #d1ddf7 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.45;
          pointer-events: none;
        }

        .api-inner {
          position: relative;
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }

        .api-label {
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

        .api-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #0f172a;
          line-height: 1.15;
          margin-bottom: 12px;
        }

        .highlight  {
          color: #2563eb;
        }

        .api-subhead {
          font-size: 0.93rem;
          color: #64748b;
          font-weight: 300;
          line-height: 1.75;
          max-width: 500px;
          margin: 0 auto 52px;
        }

        /* Carousel */
        .api-carousel-wrap {
          position: relative;
          overflow: hidden;
        }

        .api-carousel-wrap::before,
        .api-carousel-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 130px;
          z-index: 2;
          pointer-events: none;
        }

        .api-carousel-wrap::before {
          left: 0;
          background: linear-gradient(to right, #f8f9fc, transparent);
        }

        .api-carousel-wrap::after {
          right: 0;
          background: linear-gradient(to left, #f8f9fc, transparent);
        }

        .api-track {
          display: flex;
          width: max-content;
          padding: 16px 0 20px;
          animation: api-scroll 38s linear infinite;
        }

        .api-track:hover {
          animation-play-state: paused;
        }

        @keyframes api-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Card */
        .api-card {
          width: 220px;
          min-height: 188px;
          margin: 0 10px;
          border-radius: 18px;
          background: #fff;
          border: 1px solid rgba(203,213,225,0.7);
          box-shadow: 0 2px 14px rgba(0,0,0,0.05);
          padding: 20px 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.22s, transform 0.22s;
          cursor: default;
        }

        .api-card:hover {
          box-shadow: 0 10px 36px rgba(0,0,0,0.11);
          transform: translateY(-5px);
        }

        .api-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .api-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .api-tag {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: 100px;
          padding: 3px 9px;
          border: 1px solid;
        }

        .api-card-body {
          flex: 1;
        }

        .api-title {
          font-size: 0.92rem;
          font-weight: 500;
          color: #0f172a;
          line-height: 1.3;
          margin-bottom: 5px;
        }

        .api-sub {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 300;
          line-height: 1.5;
        }

        .api-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .api-stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          font-weight: 500;
          border-radius: 100px;
          padding: 4px 10px;
        }

        .api-stat-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          animation: api-blink 2s ease infinite;
        }

        @keyframes api-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
.api-arrow {
  display: none;
}
        /* Bottom accent bar */
        .api-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 0 0 18px 18px;
          opacity: 0;
          transition: opacity 0.22s;
        }

        .api-card:hover .api-bar {
          opacity: 1;
        }

        /* Bottom counter */
        .api-counter {
          text-align: center;
          margin-top: 40px;
          font-size: 0.82rem;
          color: #94a3b8;
        }

        .api-counter strong {
          color: #2563eb;
          font-weight: 600;
        }
      `}</style>

      <section className="api-section">
        <div className="api-inner">
          <div className="api-label">⚡ API Suite</div>
          <h2 className="api-heading">
            Our <span className="highlight">APIs</span>
          </h2>
          <p className="api-subhead">
            36+ verification and fraud intelligence APIs for digital onboarding,
            identity verification and real-time risk assessment across financial ecosystems.
          </p>
        </div>

        {/* Carousel — full width */}
        <div className="api-carousel-wrap">
          <div className="api-track">
            {doubled.map((item, i) => (
              <APICard key={i} item={item} />
            ))}
          </div>
        </div>

        <div className="api-inner">
          <p className="api-counter">
            Showing <strong>12 of 36+</strong> available APIs - all production-ready &amp; sandbox accessible
          </p>
        </div>
      </section>
    </>
  );
};

export default APIs;