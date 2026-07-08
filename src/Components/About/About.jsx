import React, { useEffect, useRef, useState } from "react";
import {
  Shield, Zap, Users, Globe, Lock, CheckCircle,
  ChevronRight, Star, Award, TrendingUp, Eye
} from "lucide-react";
import DG from "../../assets/DG.jpg";
import lottie from "lottie-web";
import aboutAnimation from "../../assets/About.json";
import Investor from "../../assets/investor.png";
import Siddharth from "../../assets/Siddharth.jpg";
import PrashantTandon from "../../assets/Prashant-Tandon .png";

/* ─── Animated Hero Illustration ─── */
const HeroVisual = () => {
  const nodesRef = useRef([]);
  const linesRef = useRef([]);
  const pulseRef = useRef([]);
  const centerRef = useRef();
  const rafRef = useRef();

  useEffect(() => {
    let start = null;

    const tick = (ts) => {
      if (!start) start = ts;
      const t = (ts - start) / 1000;

      if (centerRef.current) {
        centerRef.current.setAttribute("transform", `translate(0,${-6 * Math.sin(t * 0.8)})`);
      }

      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        const speed = 0.28 + i * 0.04;
        const r = 90 + i * 18;
        const phase = (i * Math.PI * 2) / nodesRef.current.length;
        const angle = t * speed + phase;
        const cx = 200 + r * Math.cos(angle);
        const cy = 200 + r * Math.sin(angle) * 0.55;
        node.setAttribute("cx", cx);
        node.setAttribute("cy", cy);

        if (linesRef.current[i]) {
          linesRef.current[i].setAttribute("x2", cx);
          linesRef.current[i].setAttribute("y2", cy);
        }
      });

      pulseRef.current.forEach((ring, i) => {
        if (!ring) return;
        const s = 1 + 0.05 * Math.sin(t * (1.0 - i * 0.2) + i);
        ring.setAttribute("transform", `translate(200,200) scale(${s}) translate(-200,-200)`);
        ring.style.opacity = 0.15 + 0.08 * Math.sin(t * (1.0 - i * 0.2) + i);
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const satellites = [
    { icon: "🔐", label: "Encrypt" },
    { icon: "📊", label: "Analyse" },
    { icon: "✅", label: "Verify" },
    { icon: "🤖", label: "AI" },
    { icon: "🌐", label: "Global" },
    { icon: "⚡", label: "Fast" },
  ];

  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 420, display: "block" }}>
      <defs>
        <radialGradient id="ab-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ab-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </radialGradient>
        <filter id="ab-shadow">
          <feDropShadow dx="0" dy="10" stdDeviation="18" floodColor="#2563eb" floodOpacity="0.3" />
        </filter>
        <filter id="ab-sat-shadow">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#2563eb" floodOpacity="0.2" />
        </filter>
      </defs>

      <circle cx="200" cy="200" r="190" fill="url(#ab-glow)" />

      {[130, 108, 86].map((r, i) => (
        <circle key={i} ref={el => pulseRef.current[i] = el}
          cx="200" cy="200" r={r}
          fill="none" stroke="#2563eb" strokeWidth="1.5"
          opacity="0.15" />
      ))}

      <ellipse cx="200" cy="200" rx="108" ry="60"
        fill="none" stroke="#bfdbfe" strokeWidth="1"
        strokeDasharray="5 7" opacity="0.5" />
      <ellipse cx="200" cy="200" rx="126" ry="70"
        fill="none" stroke="#bfdbfe" strokeWidth="0.8"
        strokeDasharray="4 10" opacity="0.35" />
      <ellipse cx="200" cy="200" rx="144" ry="80"
        fill="none" stroke="#bfdbfe" strokeWidth="0.7"
        strokeDasharray="3 12" opacity="0.25" />

      {satellites.map((_, i) => (
        <line key={i} ref={el => linesRef.current[i] = el}
          x1="200" y1="200" x2="200" y2="200"
          stroke="#93c5fd" strokeWidth="0.8" opacity="0.4"
          strokeDasharray="3 4" />
      ))}

      {satellites.map((s, i) => (
        <circle key={i} ref={el => nodesRef.current[i] = el}
          cx="200" cy="200" r="22"
          fill="#fff"
          filter="url(#ab-sat-shadow)"
          stroke="#dbeafe" strokeWidth="1.5" />
      ))}

      {satellites.map((s, i) => (
        <text key={`t-${i}`} x="200" y="204"
          textAnchor="middle" fontSize="13" fill="#1e40af">
          {s.icon}
        </text>
      ))}

      <g ref={centerRef}>
        <circle cx="200" cy="200" r="52"
          fill="url(#ab-center)" filter="url(#ab-shadow)" />
        <circle cx="200" cy="200" r="52"
          fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <path d="M200 175 L222 184 L222 203 Q222 221 200 230 Q178 221 178 203 L178 184 Z"
          fill="rgba(255,255,255,0.95)" />
        <polyline points="191,203 198,211 212,195"
          fill="none" stroke="#2563eb" strokeWidth="3"
          strokeLinecap="round" strokeLinejoin="round" />

        <rect x="178" y="175" width="44" height="2.5" rx="1.25"
          fill="rgba(255,255,255,0.5)">
          <animateTransform attributeName="transform" type="translate"
            values="0,0;0,50;0,0" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" repeatCount="indefinite" />
        </rect>
      </g>

      <circle r="4" fill="#60a5fa">
        <animateMotion dur="5s" repeatCount="indefinite">
          <mpath href="#track1" />
        </animateMotion>
      </circle>
      <circle r="3" fill="#93c5fd">
        <animateMotion dur="7s" repeatCount="indefinite" begin="1.5s">
          <mpath href="#track2" />
        </animateMotion>
      </circle>

      <path id="track1" d="M308,200 A108,60 0 1,0 307.9,200.1" fill="none" opacity="0" />
      <path id="track2" d="M326,200 A126,70 0 1,1 325.9,199.9" fill="none" opacity="0" />
    </svg>
  );
};

/* ─── Components ─── */

const StatCard = ({ val, label }) => (
  <div className="ab-stat-card">
    <span className="ab-stat-val">{val}</span>
    <span className="ab-stat-label">{label}</span>
  </div>
);

const WhyCard = ({ icon: Icon, title, text }) => (
  <div className="ab-why-card">
    <div className="ab-why-icon"><Icon size={20} color="#2563eb" /></div>
    <div>
      <div className="ab-why-title">{title}</div>
      <p className="ab-why-text">{text}</p>
    </div>
  </div>
);

const SecCard = ({ title }) => (
  <div className="ab-sec-card">
    <div className="ab-sec-icon"><Lock size={16} color="#2563eb" /></div>
    <span className="ab-sec-title">{title}</span>
  </div>
);

/* ─── Main ─── */
const About = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: aboutAnimation,
    });
    return () => anim.destroy();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .ab-page {
          font-family: 'DM Sans', sans-serif;
          background: #f8f9fc;
          color: #0f172a;
        }

        /* Shared section wrapper — reduced padding */
        .ab-section {
          position: relative;
          padding: 40px 24px;
          overflow: hidden;
        }

        .ab-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #d1ddf7 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.4;
          pointer-events: none;
        }

        /* FIX: space from top only for mobile + tablet */
@media (max-width: 900px) {
  .ab-section:first-of-type {
    padding-top: 90px; /* 👈 adjust if needed (80–100px) */
  }
}

        .ab-section.white { background: #fff; }
        .ab-section.white::before { opacity: 0.3; }

        .ab-inner {
          position: relative;
          max-width: 1060px;
          margin: 0 auto;
        }

        /* Label pill */
        .ab-label {
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
          margin-bottom: 10px;
        }

        /* Headings */
        .ab-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          line-height: 1.15;
          margin-bottom: 10px;
          color: #0f172a;
        }
        .highlight{color: #2563eb; }

        .ab-sub {
          font-size: 0.93rem;
          color: #64748b;
          font-weight: 300;
          line-height: 1.8;
          max-width: 520px;
        }
        .ab-sub.centre { margin: 0 auto; text-align: center; }

        /* ── HERO ── */
        .ab-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        @media (max-width: 820px) {
          .ab-hero-grid { grid-template-columns: 1fr; gap: 24px; }
          .ab-hero-right { max-width: 380px; margin: 0 auto; }
        }

        .ab-hero-badges {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 16px;
        }

        .ab-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 500;
          color: #1e40af;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 100px;
          padding: 5px 12px;
        }

        .ab-cta-row {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .ab-btn-primary {
          padding: 12px 24px;
          border-radius: 11px;
          background: #1d4ed8;
          color: #fff;
          font-size: 0.88rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(29,78,216,0.28);
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .ab-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(29,78,216,0.35); }

        .ab-btn-ghost {
          padding: 12px 24px;
          border-radius: 11px;
          background: rgba(255,255,255,0.8);
          color: #1e3a8a;
          font-size: 0.88rem;
          font-weight: 500;
          border: 1px solid #bfdbfe;
          cursor: pointer;
          transition: background 0.18s, transform 0.18s;
        }
        .ab-btn-ghost:hover { background: #fff; transform: translateY(-2px); }

        /* ── STATS ── */
        .ab-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        @media (max-width: 700px) { .ab-stats-grid { grid-template-columns: repeat(2, 1fr); } }

        .ab-stat-card {
          background: #fff;
          border: 1px solid rgba(203,213,225,0.7);
          border-radius: 16px;
          padding: 20px 16px;
          text-align: center;
          box-shadow: 0 2px 14px rgba(0,0,0,0.04);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ab-stat-card:hover { box-shadow: 0 8px 28px rgba(37,99,235,0.12); transform: translateY(-3px); }

        .ab-stat-val {
          display: block;
          font-family: 'DM Serif Display', serif;
          font-size: 2rem;
          color: #2563eb;
          line-height: 1;
          margin-bottom: 6px;
        }
        .ab-stat-label {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 300;
        }

        /* ── FOUNDER ── */
        .ab-founder-wrap {
          text-align: center;
        }
        .ab-avatar {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: #dbeafe;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
          border: 3px solid #bfdbfe;
          box-shadow: 0 4px 20px rgba(37,99,235,0.15);
          overflow: hidden;
        }
        .ab-founder-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1.3rem;
          color: #0f172a;
          margin-bottom: 4px;
        }
        .ab-founder-role { font-size: 0.85rem; color: #64748b; }
        .ab-founder-bio {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.8;
          font-weight: 300;
          max-width: 480px;
          margin: 12px auto 0;
        }

        /* ── TEAM ── */
        .ab-team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        @media (max-width: 700px) { .ab-team-grid { grid-template-columns: 1fr; } }

        .ab-team-card {
          background: #fff;
          border: 1px solid rgba(203,213,225,0.7);
          border-radius: 18px;
          padding: 20px 16px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ab-team-card:hover { box-shadow: 0 8px 28px rgba(37,99,235,0.1); transform: translateY(-3px); }

        .ab-team-avatar {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: #dbeafe;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 10px;
          border: 2px solid #bfdbfe;
          overflow: hidden;
        }
        .ab-team-name { font-size: 0.95rem; font-weight: 500; color: #0f172a; margin-bottom: 4px; }
        .ab-team-role { font-size: 0.78rem; color: #64748b; }

        /* ── MISSION ── */
        .ab-mission-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          margin-top: 20px;
        }
        @media (max-width: 800px) { .ab-mission-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .ab-mission-grid { grid-template-columns: 1fr; } }

        .ab-mission-card {
          background: #fff;
          border: 1px solid rgba(203,213,225,0.7);
          border-radius: 14px;
          padding: 16px 12px;
          text-align: center;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ab-mission-card:hover { box-shadow: 0 6px 22px rgba(37,99,235,0.1); transform: translateY(-2px); }

        .ab-mission-icon {
          width: 38px; height: 38px;
          border-radius: 11px;
          background: #eff6ff;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 10px;
        }
        .ab-mission-label { font-size: 0.8rem; font-weight: 500; color: #1e293b; }

        /* ── WHY ── */
        .ab-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 700px) { .ab-why-grid { grid-template-columns: 1fr; } }

        .ab-why-card {
          background: #fff;
          border: 1px solid rgba(203,213,225,0.7);
          border-radius: 16px;
          padding: 18px 16px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ab-why-card:hover { box-shadow: 0 6px 24px rgba(37,99,235,0.1); transform: translateY(-2px); }

        .ab-why-icon {
          width: 40px; height: 40px;
          border-radius: 11px;
          background: #eff6ff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ab-why-title { font-size: 0.9rem; font-weight: 500; color: #0f172a; margin-bottom: 5px; }
        .ab-why-text { font-size: 0.82rem; color: #64748b; line-height: 1.65; font-weight: 300; }

        /* ── SECURITY ── */
        .ab-sec-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 700px) { .ab-sec-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .ab-sec-grid { grid-template-columns: 1fr; } }

        .ab-sec-card {
          background: #fff;
          border: 1px solid rgba(203,213,225,0.7);
          border-radius: 14px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ab-sec-card:hover { box-shadow: 0 6px 22px rgba(37,99,235,0.1); transform: translateY(-2px); }

        .ab-sec-icon {
          width: 34px; height: 34px;
          border-radius: 10px;
          background: #eff6ff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ab-sec-title { font-size: 0.85rem; font-weight: 500; color: #1e293b; }

        /* Divider — exactly 15px total visual gap between sections */
        .ab-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e2e8f0 30%, #e2e8f0 70%, transparent);
          margin: 0;
        }

        /* Section header helper — tightens internal top margin */
        .ab-section-header {
          margin-bottom: 20px;
        }

        /* centre helper */
        .centre { text-align: center; }
      `}</style>

      <div className="ab-page">

        {/* ── HERO ── */}
        <section className="ab-section">
          <div className="ab-inner">
            <div className="ab-hero-grid">
              <div>
                <div className="ab-label">🏢 About Us</div>
                <h1 className="ab-heading">
                  About <span className="highlight">Timble Glance</span>
                </h1>
                <p className="ab-sub">
                  Turning data into decisions and powering the future of trust.
                  We empower businesses with intelligent AI-driven compliance
                  and risk automation solutions built for modern enterprises.
                </p>
                <p className="ab-sub" style={{ marginTop: 10 }}>
                  Our mission — transform raw data into actionable insights,
                  enabling smarter, faster, and more secure decisions at scale.
                </p>

                <div className="ab-hero-badges">
                  {["RBI Compliant", "ISO 27001", "SOC 2 Type II", "IRDAI Aligned"].map(b => (
                    <span key={b} className="ab-badge">✓ {b}</span>
                  ))}
                </div>
              </div>

              <div className="ab-hero-right">
                <div
                  ref={lottieRef}
                  style={{ width: "100%", maxWidth: 420 }}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="ab-divider" />

        {/* ── STATS ── */}
        <section className="ab-section white">
          <div className="ab-inner">
            <div className="centre ab-section-header">
              <div className="ab-label">📈 By the Numbers</div>
              <h2 className="ab-heading">Trusted at <span className="highlight">Scale</span></h2>
            </div>
            <div className="ab-stats-grid">
              <StatCard val="100+" label="Enterprise Customers" />
              <StatCard val="99.9%" label="Uptime SLA" />
              <StatCard val="3M+" label="Applications / Year" />
              <StatCard val="24×7" label="Support Available" />
            </div>
          </div>
        </section>

        <div className="ab-divider" />

        {/* ── FOUNDER ── */}
        <section className="ab-section">
          <div className="ab-inner ab-founder-wrap">
            <div className="ab-label" style={{ margin: "0 auto 10px" }}>👤 Leadership</div>
            <h2 className="ab-heading">Meet Our <span className="highlight">Founder</span></h2>
            <p className="ab-sub centre" style={{ marginBottom: 20 }}>
              Visionary leadership driving the future of AI-powered compliance.
            </p>

            <div className="ab-avatar">
              <img
                src={DG}
                alt="Dhananjay Goel"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="ab-founder-name">Dhananjay Goel</div>
            <div className="ab-founder-role">Founder & CEO</div>
            <p className="ab-founder-bio">
              Seasoned entrepreneur with deep expertise in fintech, risk intelligence
              and AI-powered compliance — building the infrastructure that modern
              financial institutions rely on.
            </p>
          </div>
        </section>

        <div className="ab-divider" />

        {/* ── TEAM ── */}
        <section className="ab-section white">
          <div className="ab-inner">
            <div className="centre ab-section-header">
              <div className="ab-label">🤝 The Team</div>
              <h2 className="ab-heading">Committed  <span className="highlight">Leadership Team</span></h2>
              <p className="ab-sub centre">
                Combining deep domain expertise and global experience to build
                the next generation of risk intelligence.
              </p>
            </div>
            <div className="ab-team-grid">
              {[
                { name: "Praveen Goel", role: "Investor", img: Investor },
                { name: "Siddharth Srivastava", role: "Board Advisor", img: Siddharth },
                { name: "Prashant Tondon", role: "Strategic Advisor", img: PrashantTandon },
              ].map((m, i) => (
                <div className="ab-team-card" key={i}>
                  <div className="ab-team-avatar">
                    <img
                      src={m.img}
                      alt={m.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="ab-team-name">{m.name}</div>
                  <div className="ab-team-role">{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ab-divider" />

        {/* ── MISSION ── */}
        <section className="ab-section">
          <div className="ab-inner">
            <div className="centre">
              <div className="ab-label">🎯 Mission</div>
              <h2 className="ab-heading">Our   <span className="highlight"> Mission</span></h2>
              <p className="ab-sub centre">
                To democratize access to enterprise-grade compliance and risk management
                tools through intelligent automation — for every financial institution.
              </p>
            </div>
            <div className="ab-mission-grid">
              {[
                { icon: <Shield size={18} color="#2563eb" />, label: "Privacy by Design" },
                { icon: <Eye size={18} color="#2563eb" />, label: "Transparent AI" },
                { icon: <Users size={18} color="#2563eb" />, label: "Customer Centric" },
                { icon: <Globe size={18} color="#2563eb" />, label: "Global Compliance" },
                { icon: <Lock size={18} color="#2563eb" />, label: "Data Security" },
              ].map((m) => (
                <div className="ab-mission-card" key={m.label}>
                  <div className="ab-mission-icon">{m.icon}</div>
                  <div className="ab-mission-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ab-divider" />

        {/* ── WHY CHOOSE ── */}
        <section className="ab-section white">
          <div className="ab-inner">
            <div className="centre ab-section-header">
              <div className="ab-label">💡 Why Us</div>
              <h2 className="ab-heading">Why Choose <span className = "highlight">TimbleGlance</span></h2>
            </div>
            <div className="ab-why-grid">
              <WhyCard icon={Shield} title="Enterprise Grade Security"
                text="Built with enterprise-grade infrastructure and security architecture that meets the highest regulatory standards." />
              <WhyCard icon={Zap} title="Lightning Fast Processing"
                text="AI-powered compliance checks completed in under a second — without compromising accuracy." />
              <WhyCard icon={Users} title="Built for Teams"
                text="Purpose-built workflows designed for compliance, risk, and onboarding teams at scale." />
              <WhyCard icon={Globe} title="Scalable Infrastructure"
                text="From startups to large enterprises, our platform scales effortlessly with your growth." />
            </div>
          </div>
        </section>

        <div className="ab-divider" />

        {/* ── SECURITY ── */}
        <section className="ab-section">
          <div className="ab-inner">
            <div className="centre ab-section-header">
              <div className="ab-label">🔒 Security</div>
              <h2 className="ab-heading">Security & <span className="highlight"> Compliance</span></h2>
              <p className="ab-sub centre">
                Our infrastructure is built to the highest global security and
                compliance standards so you never have to worry.
              </p>
            </div>
            <div className="ab-sec-grid">
              {[
                "ISO 27001 Certified",
                "Enterprise Access Control",
                "256-bit Encryption",
                "FATF Aligned",
                "Data Localization",
                "24×7 Monitoring",
              ].map(t => <SecCard key={t} title={t} />)}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;