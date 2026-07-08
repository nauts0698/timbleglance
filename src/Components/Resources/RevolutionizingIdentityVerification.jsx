import React, { useState, useEffect, useRef } from "react";

/* ─── Google Fonts ─────────────────────────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
  `}</style>
);

/* ─── Design Tokens ─────────────────────────────────────────────────────────── */
const T = {
  blue:     "#1A56DB",
  blueMid:  "#3B82F6",
  blueLight:"#EFF6FF",
  bluePale: "#DBEAFE",
  sky:      "#BAE6FD",
  ink:      "#0F1C2E",
  slate:    "#4A5568",
  muted:    "#718096",
  border:   "#E2E8F0",
  borderMd: "#CBD5E0",
  bg:       "#FAFBFF",
  white:    "#FFFFFF",
  accent:   "#F59E0B",
};

const css = {
  fontDisplay: "'DM Serif Display', Georgia, serif",
  fontBody:    "'DM Sans', sans-serif",
};

/* ─── Keyframe injection ─────────────────────────────────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.94); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes shimmer {
      0%   { background-position: -400px 0; }
      100% { background-position: 400px 0; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-8px); }
    }
    .fade-up   { animation: fadeUp  0.6s ease both; }
    .scale-in  { animation: scaleIn 0.5s ease both; }
    .d1 { animation-delay: 0.05s; }
    .d2 { animation-delay: 0.15s; }
    .d3 { animation-delay: 0.25s; }
    .d4 { animation-delay: 0.35s; }
    .d5 { animation-delay: 0.45s; }

    .rc:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(26,86,219,0.12); }
    .rc { transition: transform 0.25s ease, box-shadow 0.25s ease; }

    .pill-btn:hover { background: ${T.blue}; color: #fff; }
    .pill-btn { transition: background 0.2s, color 0.2s; }

    .share-icon:hover { background: ${T.blueLight}; border-color: ${T.blueMid}; }
    .share-icon { transition: background 0.2s, border-color 0.2s; }

    .toc-row:hover { background: ${T.blueLight}; }
    .toc-row { transition: background 0.15s; }

    .nl-btn:hover { background: #1240B5; }
    .nl-btn { transition: background 0.2s; }

    .tag-pill:hover { background: ${T.blueMid}; color: #fff; }
    .tag-pill { transition: background 0.2s, color 0.2s; }

    @media (max-width: 700px) {
      .hero-h1  { font-size: 28px !important; }
      .stat-row { grid-template-columns: 1fr 1fr !important; }
      .feat-grid{ grid-template-columns: 1fr !important; }
      .rel-grid { grid-template-columns: 1fr !important; }
      .nl-row   { flex-direction: column !important; }
      .nl-input { border-radius: 10px !important; }
      .nl-btn   { border-radius: 10px !important; width: 100% !important; }
      .hero-pad { padding: 56px 20px 90px !important; }
      .wrap-pad { padding: 0 16px !important; }
    }
  `}</style>
);

/* ─── SVG Illustrations ──────────────────────────────────────────────────────── */
const HeroIllustration = () => (
  <svg viewBox="0 0 560 320" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%", display: "block" }}>
    {/* Background subtle grid */}
    <defs>
      <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C7D7F7" strokeWidth="0.5"/>
      </pattern>
      <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF"/>
        <stop offset="100%" stopColor="#EFF6FF"/>
      </linearGradient>
      <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1A56DB"/>
        <stop offset="100%" stopColor="#3B82F6"/>
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#1A56DB" floodOpacity="0.12"/>
      </filter>
    </defs>
    <rect width="560" height="320" fill="url(#grid)"/>

    {/* Main ID Card */}
    <rect x="150" y="50" width="260" height="170" rx="16" fill="url(#cardGrad)"
      stroke="#DBEAFE" strokeWidth="1.5" filter="url(#shadow)"/>
    {/* Blue accent top strip */}
    <rect x="150" y="50" width="260" height="42" rx="16" fill="url(#blueGrad)"/>
    <rect x="150" y="74" width="260" height="18" fill="url(#blueGrad)"/>
    {/* Card title */}
    <text x="175" y="76" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="600"
      fill="#fff" letterSpacing="1.5">IDENTITY CARD</text>
    {/* Chip */}
    <rect x="175" y="105" width="38" height="28" rx="4" fill="#FCD34D" opacity="0.9"/>
    <line x1="183" y1="105" x2="183" y2="133" stroke="#D97706" strokeWidth="0.8"/>
    <line x1="191" y1="105" x2="191" y2="133" stroke="#D97706" strokeWidth="0.8"/>
    <line x1="199" y1="105" x2="199" y2="133" stroke="#D97706" strokeWidth="0.8"/>
    <line x1="175" y1="116" x2="213" y2="116" stroke="#D97706" strokeWidth="0.8"/>
    <line x1="175" y1="122" x2="213" y2="122" stroke="#D97706" strokeWidth="0.8"/>
    {/* Face circle */}
    <circle cx="370" cy="120" r="32" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5"/>
    <circle cx="370" cy="112" r="12" fill="#93C5FD"/>
    <ellipse cx="370" cy="146" rx="18" ry="10" fill="#93C5FD" opacity="0.6"/>
    {/* Text lines */}
    <rect x="230" y="108" width="100" height="8" rx="4" fill="#BFDBFE"/>
    <rect x="230" y="124" width="70" height="6" rx="3" fill="#DBEAFE"/>
    <rect x="230" y="138" width="85" height="6" rx="3" fill="#DBEAFE"/>
    {/* Barcode */}
    {[0,4,8,12,16,20,24,28,32,36,40,44].map((x, i) => (
      <rect key={i} x={175 + x} y="160" width={i % 3 === 0 ? 2 : 3} height="28" rx="0.5" fill="#93C5FD"/>
    ))}

    {/* Floating verification badge — right */}
    <g style={{ animation: "float 3s ease-in-out infinite" }}>
      <rect x="430" y="80" width="110" height="52" rx="12" fill="#fff"
        stroke="#DBEAFE" strokeWidth="1" filter="url(#shadow)"/>
      <circle cx="455" cy="106" r="14" fill="#DCFCE7"/>
      <text x="452" y="111" fontSize="14" fill="#16A34A">✓</text>
      <rect x="474" y="97" width="52" height="7" rx="3" fill="#BBF7D0"/>
      <rect x="474" y="109" width="36" height="5" rx="2.5" fill="#DCFCE7"/>
    </g>

    {/* Floating scan badge — left */}
    <g style={{ animation: "float 3.5s ease-in-out infinite 0.5s" }}>
      <rect x="20" y="90" width="110" height="52" rx="12" fill="#fff"
        stroke="#DBEAFE" strokeWidth="1" filter="url(#shadow)"/>
      <circle cx="45" cy="116" r="14" fill="#EFF6FF"/>
      <text x="38" y="121" fontSize="14">👁️</text>
      <rect x="64" y="107" width="52" height="7" rx="3" fill="#BFDBFE"/>
      <rect x="64" y="119" width="36" height="5" rx="2.5" fill="#DBEAFE"/>
    </g>

    {/* Bottom floating security chip */}
    <g style={{ animation: "float 4s ease-in-out infinite 1s" }}>
      <rect x="185" y="248" width="190" height="48" rx="12" fill="#fff"
        stroke="#DBEAFE" strokeWidth="1" filter="url(#shadow)"/>
      <rect x="200" y="261" width="24" height="20" rx="4" fill="url(#blueGrad)"/>
      <rect x="232" y="263" width="80" height="7" rx="3" fill="#BFDBFE"/>
      <rect x="232" y="276" width="52" height="5" rx="2.5" fill="#DBEAFE"/>
      {/* Status dot */}
      <circle cx="348" cy="272" r="5" fill="#4ADE80"/>
      <circle cx="348" cy="272" r="5" fill="#4ADE80" opacity="0.4">
        <animate attributeName="r" values="5;9;5" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.4;0;0.4" dur="1.5s" repeatCount="indefinite"/>
      </circle>
    </g>

    {/* Connection lines */}
    <line x1="130" y1="116" x2="150" y2="120" stroke="#BFDBFE" strokeWidth="1" strokeDasharray="3 3"/>
    <line x1="410" y1="106" x2="430" y2="106" stroke="#BFDBFE" strokeWidth="1" strokeDasharray="3 3"/>
    <line x1="280" y1="220" x2="280" y2="248" stroke="#BFDBFE" strokeWidth="1" strokeDasharray="3 3"/>
  </svg>
);

/* ─── Sub-components ──────────────────────────────────────────────────────────── */

const Tag = ({ children }) => (
  <span className="tag-pill" style={{
    display: "inline-flex", alignItems: "center", gap: 5,
    background: T.blueLight, color: T.blue, fontSize: 12, fontWeight: 500,
    padding: "6px 14px", borderRadius: 100, border: `1px solid ${T.bluePale}`,
    cursor: "default", fontFamily: css.fontBody,
  }}>{children}</span>
);

const StatCard = ({ num, label, sub }) => (
  <div style={{
    background: T.white, borderRadius: 14, border: `1px solid ${T.border}`,
    padding: "20px 16px", textAlign: "center",
    boxShadow: "0 2px 12px rgba(26,86,219,0.06)",
  }}>
    <div style={{ fontSize: 30, fontWeight: 600, color: T.blue, fontFamily: css.fontDisplay, lineHeight: 1 }}>{num}</div>
    <div style={{ fontSize: 13, color: T.muted, marginTop: 6, fontFamily: css.fontBody }}>{label}</div>
    {sub && <div style={{ fontSize: 11, color: T.blue, marginTop: 4, fontWeight: 500, fontFamily: css.fontBody }}>{sub}</div>}
  </div>
);

const FeatureCard = ({ icon, title, desc, color = T.blueLight, iconColor = T.blue }) => (
  <div style={{
    background: T.white, border: `1px solid ${T.border}`, borderRadius: 14,
    padding: "20px 18px", display: "flex", flexDirection: "column", gap: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  }}>
    <div style={{
      width: 40, height: 40, borderRadius: 10, background: color,
      display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
    }}>{icon}</div>
    <div style={{ fontSize: 14, fontWeight: 600, color: T.ink, fontFamily: css.fontBody }}>{title}</div>
    <div style={{ fontSize: 13, color: T.muted, lineHeight: 1.6, fontFamily: css.fontBody }}>{desc}</div>
  </div>
);

const RelatedCard = ({ color1, color2, icon, cat, title }) => (
  <div className="rc" style={{
    background: T.white, border: `1px solid ${T.border}`, borderRadius: 16,
    overflow: "hidden", cursor: "pointer",
  }}>
    <div style={{
      height: 148, background: `linear-gradient(135deg, ${color1}, ${color2})`,
      display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36,
    }}>{icon}</div>
    <div style={{ padding: "16px 18px" }}>
      <div style={{ fontSize: 11, color: T.blue, fontWeight: 600, letterSpacing: "0.06em",
        textTransform: "uppercase", marginBottom: 6, fontFamily: css.fontBody }}>{cat}</div>
      <div style={{ fontSize: 15, fontWeight: 500, color: T.ink, lineHeight: 1.45,
        marginBottom: 12, fontFamily: css.fontDisplay }}>{title}</div>
      <div style={{ fontSize: 13, color: T.blue, display: "flex", alignItems: "center",
        gap: 4, fontFamily: css.fontBody, fontWeight: 500 }}>Read more <span>→</span></div>
    </div>
  </div>
);

/* ─── Main Component ──────────────────────────────────────────────────────────── */
const RevolutionizingIdentityVerification = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.includes("@")) { setSubscribed(true); }
  };

  return (
    <div style={{ background: T.bg, fontFamily: css.fontBody, minHeight: "100vh" }}>
      <FontLoader />
      <GlobalStyles />

      {/* ── HERO ── */}
      <section className="hero-pad" style={{
        background: `linear-gradient(135deg, #0F2D6B 0%, #1A56DB 55%, #3B82F6 100%)`,
        padding: "72px 24px 110px", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{ position:"absolute", top:-60, right:-60, width:260, height:260,
          borderRadius:"50%", background:"rgba(255,255,255,0.04)" }}/>
        <div style={{ position:"absolute", bottom:-40, left:-40, width:180, height:180,
          borderRadius:"50%", background:"rgba(255,255,255,0.05)" }}/>

        <div className="fade-up d1" style={{ display:"inline-flex", alignItems:"center", gap:8,
          background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.25)",
          color:"#fff", fontSize:12, fontWeight:500, padding:"6px 16px", borderRadius:100,
          marginBottom:20, letterSpacing:"0.05em" }}>
          ⚡ ARTIFICIAL INTELLIGENCE
        </div>

        <h1 className="fade-up d2 hero-h1" style={{
          fontFamily: css.fontDisplay, fontSize: "clamp(28px,4.5vw,46px)",
          fontWeight: 400, color: "#fff", lineHeight: 1.2,
          maxWidth: 700, margin: "0 auto 16px", fontStyle: "italic",
        }}>
          How AI is Revolutionizing<br />
          <span style={{ fontStyle: "normal", fontWeight: 400, color: "#93C5FD" }}>
            Identity Verification
          </span>
        </h1>

        <div className="fade-up d3" style={{ display:"flex", alignItems:"center",
          justifyContent:"center", gap:16, color:"rgba(255,255,255,0.7)", fontSize:13,
          flexWrap:"wrap", marginBottom:36 }}>
          <span style={{ display:"flex", alignItems:"center", gap:5 }}>📅 January 21, 2024</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.4)", borderRadius:"50%" }}/>
          <span>⏱ 5 min read</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.4)", borderRadius:"50%" }}/>
          <span>👁 2.4k views</span>
        </div>

        
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="wrap-pad" style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>
        <div className="scale-in" style={{
          marginTop:-64, borderRadius:20, overflow:"hidden",
          border: `3px solid ${T.white}`,
          boxShadow:"0 20px 60px rgba(26,86,219,0.15)",
          background:`linear-gradient(135deg, ${T.blueLight} 0%, ${T.sky} 100%)`,
          height:300,
        }}>
          <HeroIllustration />
        </div>
      </div>

     

      {/* ── MAIN CONTENT ── */}
      <div className="wrap-pad" style={{ maxWidth:880, margin:"0 auto", padding:"0 24px" }}>

        {/* Table of Contents */}
        <div style={{ background:T.white, border:`1px solid ${T.border}`, borderRadius:16,
          padding:"20px 24px", margin:"28px 0 32px",
          boxShadow:"0 2px 12px rgba(26,86,219,0.06)" }}>
          <div style={{ fontSize:11, fontWeight:600, color:T.muted, letterSpacing:"0.08em",
            textTransform:"uppercase", marginBottom:14, fontFamily:css.fontBody }}>
            In this article
          </div>
          {[
            ["01", "The role of AI in modern identity verification"],
            ["02", "Key technologies driving the shift"],
            ["03", "Industries leading adoption"],
            ["04", "Business impact & conclusion"],
          ].map(([num, label]) => (
            <div key={num} className="toc-row" style={{
              display:"flex", alignItems:"center", gap:14, padding:"10px 10px",
              borderRadius:8, cursor:"pointer", margin:"2px 0",
            }}>
              <span style={{ fontSize:11, color:T.blue, fontWeight:600,
                minWidth:22, fontFamily:css.fontBody }}>{num}</span>
              <span style={{ fontSize:14, color:T.ink, fontFamily:css.fontBody }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Body prose */}
        <div style={{ lineHeight:1.8 }}>
          <p style={{ fontSize:17, color:T.slate, marginBottom:20, fontFamily:css.fontBody }}>
            In today's fast-paced digital world, verifying an individual's identity is no longer a
            simple task. Traditional methods such as manual document checks are rapidly becoming
            obsolete - replaced by smarter, faster, AI-driven systems that operate at unprecedented scale.
          </p>

          {/* Pull quote */}
          <div style={{ borderLeft:`4px solid ${T.blue}`, background:T.blueLight,
            borderRadius:"0 12px 12px 0", padding:"18px 22px", margin:"28px 0",
            boxShadow:`inset 0 0 0 1px ${T.bluePale}` }}>
            <p style={{ fontSize:16, color:"#1E40AF", fontStyle:"italic", margin:0,
              fontFamily:css.fontDisplay }}>
              "By 2026, over 70% of enterprises are expected to adopt AI-powered identity
              verification - up from just 30% in 2022."
            </p>
          </div>

          <h2 style={{ fontFamily:css.fontDisplay, fontSize:24, fontWeight:400,
            color:T.ink, margin:"36px 0 14px" }}>
            The role of AI in modern identity verification
          </h2>
          <p style={{ fontSize:16, color:T.slate, marginBottom:20, fontFamily:css.fontBody }}>
            One of the most significant advancements in AI technology is its ability to automate and
            enhance various aspects of identity verification. From parsing documents in milliseconds
            to detecting subtle biometric inconsistencies, AI has fundamentally changed what's possible.
          </p>

          {/* Stats */}
          <div className="stat-row" style={{
            display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, margin:"28px 0 36px" }}>
            <StatCard num="99.7%" label="Accuracy rate" sub="Industry leading"/>
            <StatCard num="3s" label="Avg. verification time" sub="Down from 3 days"/>
            <StatCard num="60%" label="Cost reduction" sub="Per verification"/>
          </div>

          <h2 style={{ fontFamily:css.fontDisplay, fontSize:24, fontWeight:400,
            color:T.ink, margin:"36px 0 14px" }}>
            Key technologies driving the shift
          </h2>
          <p style={{ fontSize:16, color:T.slate, marginBottom:20, fontFamily:css.fontBody }}>
            Three core AI capabilities underpin modern identity verification platforms - each solving
            a distinct challenge that legacy systems simply cannot address at scale.
          </p>

          <div className="feat-grid" style={{
            display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, margin:"20px 0 36px" }}>
            <FeatureCard icon="📄" title="OCR document verification"
              desc="Extracts and validates data from passports, licenses, and IDs with near-perfect precision." />
            <FeatureCard icon="👤" title="Biometric face matching"
              desc="Deep neural networks compare selfies to document photos, preventing sophisticated spoofing attempts." />
            <FeatureCard icon="📊" title="Behavioral analytics"
              desc="Detects fraud signals from typing patterns, device behavior, and real-time session analysis." />
          </div>

          <h2 style={{ fontFamily:css.fontDisplay, fontSize:24, fontWeight:400,
            color:T.ink, margin:"36px 0 14px" }}>
            Industries leading adoption
          </h2>
          <p style={{ fontSize:16, color:T.slate, marginBottom:16, fontFamily:css.fontBody }}>
            Across sectors, organizations are replacing legacy verification workflows with AI-first
            pipelines - reducing user drop-off while strengthening compliance postures.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, margin:"16px 0 32px" }}>
            {["🏥 Healthcare","💳 Fintech","📱 Telecom","🛒 E-commerce","🏛 Government","🏘 Real Estate"].map(t => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <h2 style={{ fontFamily:css.fontDisplay, fontSize:24, fontWeight:400,
            color:T.ink, margin:"36px 0 14px" }}>
            Business impact & benefits
          </h2>
          <div className="feat-grid" style={{
            display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, margin:"20px 0 32px" }}>
            <FeatureCard icon="🛡" title="Enhanced security"
              desc="Catches sophisticated fraud attempts that manual review teams would routinely miss." />
            <FeatureCard icon="⚡" title="Faster onboarding"
              desc="Cuts customer verification from days to seconds, dramatically lifting conversion rates." />
            <FeatureCard icon="✅" title="Regulatory compliance"
              desc="Built-in KYC/AML-aligned audit logs keep businesses on the right side of regulation." />
          </div>

          {/* Conclusion box */}
          <div style={{ background:`linear-gradient(135deg, #EFF6FF, #E0F2FE)`,
            border:`1px solid ${T.bluePale}`, borderRadius:16, padding:"28px 28px",
            margin:"8px 0 40px", textAlign:"center" }}>
            <div style={{ fontSize:28, marginBottom:12 }}>🔐</div>
            <h3 style={{ fontFamily:css.fontDisplay, fontSize:20, fontWeight:400,
              color:T.ink, marginBottom:10 }}>Conclusion</h3>
            <p style={{ fontSize:15, color:T.slate, lineHeight:1.75, maxWidth:540,
              margin:"0 auto", fontFamily:css.fontBody }}>
              AI identity verification is no longer a competitive advantage - it's table stakes.
              Organizations that embrace it gain speed, security, and scalability; those that don't
              risk falling behind in both user experience and regulatory readiness.
            </p>
          </div>
        </div>
      </div>

   
 

    </div>
  );
};

export default RevolutionizingIdentityVerification;