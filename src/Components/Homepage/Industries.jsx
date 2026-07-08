import React, { useState } from "react";
import { Landmark, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Banking",
    desc: "End-to-end AI intelligence across the full customer lifecycle- from onboarding to collections.",
    icon: Landmark,
    accent: "#2563eb",
    soft: "#eff6ff",
    tags: ["Customer Onboarding", "Underwriting", "Identity Verification", "Fraud Prevention", "Address Verification"],
    stat: { val: "40%", label: "Faster onboarding" },
  },
  {
    title: "Insurance",
    desc: "Automated claim investigation and identity workflows that reduce fraud and accelerate decisions.",
    icon: ShieldCheck,
    accent: "#7c3aed",
    soft: "#f5f3ff",
    tags: ["Claim Investigation", "Life Insurance", "Fraud Detection", "Identity Verification", "Address Validation"],
    stat: { val: "60%", label: "Fraud reduction" },
  },
  {
    title: "NBFCs & Fintech",
    desc: "Scalable KYC and risk intelligence built for digital-first lenders and embedded finance platforms.",
    icon: TrendingUp,
    accent: "#059669",
    soft: "#ecfdf5",
    tags: ["KYC Verification", "Digital Onboarding", "Risk Mitigation", "Fraud Detection", "Credit Intelligence"],
    stat: { val: "3×", label: "Faster decisions" },
  },
];

const Industries = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .ind-section {
          font-family: 'DM Sans', sans-serif;
          background: #f8f9fc;
          padding: 50px 24px;
          position: relative;
          overflow: hidden;
        }

        .ind-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #d1ddf7 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.45;
          pointer-events: none;
        }

        .ind-inner {
          position: relative;
          max-width: 1060px;
          margin: 0 auto;
          text-align: center;
        }

        /* Header */
        .ind-label {
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
          justify-content: center;
margin-left: auto;
margin-right: auto;
        }

        .ind-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #0f172a;
          line-height: 1.15;
          margin-bottom: 12px;
        }

        .highlight{
          color: #2563eb;
        }

        .ind-subhead {
          font-size: 0.93rem;
          color: #64748b;
          font-weight: 300;
          line-height: 1.75;
 max-width: 600px;
  margin: 0 auto 40px;          margin-bottom: 52px;
        }

        /* Grid */
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        @media (max-width: 900px) {
          .ind-grid { grid-template-columns: 1fr; max-width: 480px; }
        }

        /* Card */
        .ind-card {
          background: #fff;
          border: 1px solid rgba(203,213,225,0.7);
          border-radius: 20px;
          padding: 28px 26px 24px;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: box-shadow 0.22s, transform 0.22s, border-color 0.22s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .ind-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 0 0 20px 20px;
          opacity: 0;
          transition: opacity 0.25s;
        }

        .ind-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.09);
          transform: translateY(-4px);
        }

        .ind-card:hover::after {
          opacity: 1;
        }

        .ind-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .ind-icon {
          width: 46px;
          height: 46px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.22s;
          flex-shrink: 0;
        }

        .ind-stat {
          text-align: right;
        }

        .ind-stat-val {
          display: block;
          font-family: 'DM Serif Display', serif;
          font-size: 1.5rem;
          line-height: 1;
          color: #0f172a;
        }

        .ind-stat-label {
          display: block;
          font-size: 10px;
          color: #94a3b8;
          letter-spacing: 0.03em;
          margin-top: 3px;
        }

        .ind-title {
          font-size: 1.05rem;
          font-weight: 500;
          color: #0f172a;
          margin-bottom: 8px;
          line-height: 1.25;
        }

        .ind-desc {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 20px;
          flex: 1;
        }

        /* Tags */
        .ind-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .ind-tag {
          font-size: 10.5px;
          font-weight: 400;
          border-radius: 100px;
          padding: 3px 10px;
          border: 1px solid transparent;
          letter-spacing: 0.01em;
        }

        /* CTA row */
        .ind-cta {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          margin-top: auto;
          width: fit-content;
          transition: gap 0.18s;
        }

        .ind-cta:hover { gap: 8px; }
      `}</style>

      <section className="ind-section">
        <div className="ind-inner">

          <div className="ind-label">🏦 Industries</div>
          <h2 className="ind-heading">
            Industries &<span className="highlight">Use Cases</span>
          </h2>
          <p className="ind-subhead">
            AI-powered verification and fraud intelligence built for
            regulated industries and digital financial ecosystems.
          </p>

          <div className="ind-grid">
            {industries.map((item, i) => {
              const Icon = item.icon;
              const isHov = hovered === i;

              return (
                <div
                  key={i}
                  className="ind-card"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    borderColor: isHov ? item.accent + "44" : undefined,
                  }}
                >
                  {/* Bottom accent bar */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: 3, borderRadius: "0 0 20px 20px",
                    background: item.accent,
                    opacity: isHov ? 1 : 0,
                    transition: "opacity 0.25s",
                  }} />

                  <div className="ind-card-top">
                    <div className="ind-icon"
                      style={{ background: isHov ? item.accent : item.soft }}>
                      <Icon size={20} color={isHov ? "#fff" : item.accent} />
                    </div>
                    <div className="ind-stat">
                      <span className="ind-stat-val" style={{ color: item.accent }}>
                        {item.stat.val}
                      </span>
                      <span className="ind-stat-label">{item.stat.label}</span>
                    </div>
                  </div>

                  <div className="ind-title">{item.title}</div>
                  <p className="ind-desc">{item.desc}</p>

                  <div className="ind-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="ind-tag"
                        style={{
                          background: item.soft,
                          color: item.accent,
                          borderColor: item.accent + "22",
                        }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;