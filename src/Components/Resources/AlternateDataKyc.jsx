import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
  `}</style>
);

const T = {
  blue:        "#1A56DB",
  blueMid:     "#3B82F6",
  blueLight:   "#EFF6FF",
  bluePale:    "#DBEAFE",
  blueDark:    "#1e3a8a",
  ink:         "#0F1C2E",
  slate:       "#4A5568",
  muted:       "#718096",
  border:      "#E2E8F0",
  bg:          "#f8f9fc",
  white:       "#FFFFFF",
  cyan:        "#0891B2",
  cyanLight:   "#CFFAFE",
  indigo:      "#4f46e5",
  indigoLight: "#eef2ff",
  purple:      "#7C3AED",
  purpleLight: "#EDE9FE",
  amber:       "#D97706",
  amberLight:  "#FEF3C7",
  rose:        "#E11D48",
  roseLight:   "#FFE4E6",
};

const css = {
  display: "'DM Serif Display', Georgia, serif",
  body:    "'DM Sans', sans-serif",
};

const GlobalStyles = () => (
  <style>{`
    @keyframes fadeUp {
      from { opacity:0; transform:translateY(22px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes scaleIn {
      from { opacity:0; transform:scale(0.95); }
      to   { opacity:1; transform:scale(1); }
    }
    @keyframes floatA {
      0%,100% { transform:translateY(0px); }
      50%      { transform:translateY(-7px); }
    }
    @keyframes flowPulse {
      0%,100% { opacity:0.3; r:3; }
      50%      { opacity:1;   r:5; }
    }
    @keyframes dash {
      to { stroke-dashoffset:-20; }
    }
    @keyframes spinRing {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }

    .fade-up  { animation:fadeUp  0.55s ease both; }
    .scale-in { animation:scaleIn 0.5s  ease both; }
    .d1{animation-delay:.05s} .d2{animation-delay:.15s}
    .d3{animation-delay:.25s} .d4{animation-delay:.35s}

    .benefit-card:hover {
      border-color:${T.blue};
      transform:translateY(-4px);
      box-shadow:0 12px 30px rgba(26,86,219,0.12);
    }
    .benefit-card { transition:border-color .2s, transform .22s, box-shadow .22s; }

    .source-chip:hover { background:${T.blue}; color:#fff; transform:scale(1.04); }
    .source-chip { transition:background .2s, color .2s, transform .15s; }

    .rc-card:hover { transform:translateY(-5px); box-shadow:0 14px 36px rgba(26,86,219,0.13); }
    .rc-card       { transition:transform .25s ease, box-shadow .25s ease; }

    .social-ic:hover { background:${T.blueLight}; border-color:${T.blueMid}; color:${T.blue}; }
    .social-ic       { transition:background .2s, border-color .2s, color .2s; }

   @media(max-width:768px){
  .hero-pad {
    padding:160px 20px 90px !important; /* 👈 FIXED */
  }
}

    .toc-row:hover { background:${T.blueLight}; padding-left:18px; }
    .toc-row { transition:background .15s, padding-left .15s; }

    .tag-pill:hover { background:${T.blue}; color:#fff; }
    .tag-pill { transition:background .2s, color .2s; }

    /* Node float animations - isolated, no layout impact */
    .node-top    { animation: floatA 3.5s ease-in-out infinite 0.0s; }
    .node-right  { animation: floatA 3.9s ease-in-out infinite 0.6s; }
    .node-br     { animation: floatA 4.1s ease-in-out infinite 0.9s; }
    .node-bl     { animation: floatA 3.7s ease-in-out infinite 1.2s; }
    .node-left   { animation: floatA 4.3s ease-in-out infinite 0.4s; }
    .node-badge  { animation: floatA 4.0s ease-in-out infinite 0.7s; }

  @media(max-width:680px){
  .hero-h1 { font-size:24px !important; }
  .stat-row { grid-template-columns:1fr 1fr !important; }
  .benefit-grid { grid-template-columns:1fr !important; }
  .source-grid { grid-template-columns:repeat(2,1fr) !important; }

  .hero-pad {
    padding:180px 20px 90px !important; /* ✅ FIXED */
  }

  .wrap { padding:0 16px !important; }
  .meta-bar {
    flex-direction:column;
    align-items:flex-start !important;
    gap:10px !important;
  }
}
  `}</style>
);

/* ── Hero SVG — Blue Theme, Fixed Layout ── */
const AltDataIllustration = () => (
  <svg viewBox="0 0 640 320" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width:"100%", height:"100%", display:"block" }}>
    <defs>
      <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.2" fill="#BFDBFE" opacity="0.6"/>
      </pattern>
      <linearGradient id="blueG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1A56DB"/>
        <stop offset="100%" stopColor="#0891B2"/>
      </linearGradient>
      <linearGradient id="blueG2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3B82F6"/>
        <stop offset="100%" stopColor="#1A56DB"/>
      </linearGradient>
      <linearGradient id="cardBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF"/>
        <stop offset="100%" stopColor="#EFF6FF"/>
      </linearGradient>
      <filter id="sh">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#1A56DB" floodOpacity="0.15"/>
      </filter>
      <filter id="shSm">
        <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#000" floodOpacity="0.07"/>
      </filter>
    </defs>

    {/* Background */}
    <rect width="640" height="320" fill="url(#dots)"/>
    <rect width="640" height="320" fill="url(#cardBg)" opacity="0.3"/>

    {/* ── Connector lines (drawn first, behind nodes) ── */}
    {/* Top to center */}
    <line x1="320" y1="72" x2="320" y2="108"
      stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 4"
      style={{ animation:"dash 1.2s linear infinite" }}/>
    {/* Right to center */}
    <line x1="468" y1="134" x2="380" y2="152"
      stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 4"
      style={{ animation:"dash 1.5s linear infinite" }}/>
    {/* Bottom-right to center */}
    <line x1="458" y1="222" x2="374" y2="185"
      stroke="#FDE68A" strokeWidth="1.5" strokeDasharray="4 4"
      style={{ animation:"dash 1.8s linear infinite" }}/>
    {/* Bottom-left to center */}
    <line x1="182" y1="222" x2="266" y2="185"
      stroke="#DDD6FE" strokeWidth="1.5" strokeDasharray="4 4"
      style={{ animation:"dash 1.3s linear infinite" }}/>
    {/* Left to center */}
    <line x1="172" y1="134" x2="260" y2="152"
      stroke="#FECACA" strokeWidth="1.5" strokeDasharray="4 4"
      style={{ animation:"dash 1.6s linear infinite" }}/>

    {/* Pulsing dots on lines */}
    {[
      [320, 88, "#3B82F6"],
      [424, 143, "#0891B2"],
      [416, 204, "#D97706"],
      [224, 204, "#7C3AED"],
      [216, 143, "#E11D48"],
    ].map(([cx, cy, fill], i) => (
      <circle key={i} cx={cx} cy={cy} r="4" fill={fill} opacity="0.85"
        style={{
          animation: `flowPulse ${1.2 + i * 0.25}s ease-in-out infinite`,
          animationDelay: `${i * 0.2}s`,
        }}/>
    ))}

    {/* ── Central Identity Node ── */}
    <circle cx="320" cy="160" r="58" fill="url(#cardBg)"
      stroke="#BFDBFE" strokeWidth="2" filter="url(#sh)"/>
    {/* Dashed outer ring */}
    <circle cx="320" cy="160" r="58" fill="none"
      stroke="#3B82F6" strokeWidth="1" strokeDasharray="5 5" opacity="0.35"
      style={{ transformOrigin:"320px 160px" }}/>
    {/* Progress ring */}
    <circle cx="320" cy="160" r="50" stroke="#DBEAFE" strokeWidth="5" fill="none"/>
    <circle cx="320" cy="160" r="50" stroke="url(#blueG2)" strokeWidth="5" fill="none"
      strokeDasharray="240 74" strokeDashoffset="62" strokeLinecap="round"/>

    {/* Person icon inside center */}
    <circle cx="320" cy="147" r="13" fill="#DBEAFE"/>
    <circle cx="320" cy="141" r="6" fill="#1A56DB"/>
    <ellipse cx="320" cy="158" rx="9" ry="5" fill="#1A56DB" opacity="0.45"/>

    {/* Labels inside center node */}
    <text x="320" y="178" fontFamily="DM Sans,sans-serif" fontSize="9"
      fontWeight="700" fill="#1A56DB" textAnchor="middle" letterSpacing="0.8">
      IDENTITY
    </text>
    <text x="320" y="190" fontFamily="DM Sans,sans-serif" fontSize="7.5"
      fill="#334155" textAnchor="middle">
      Verification Score
    </text>

    {/* ── Satellite Nodes (fixed positions, float via CSS class) ── */}

    {/* TOP — Utility Bills */}
    <g className="node-top" filter="url(#shSm)">
      <rect x="262" y="18" width="116" height="44" rx="11" fill="white"
        stroke="#BFDBFE" strokeWidth="1"/>
      <rect x="272" y="27" width="26" height="26" rx="7" fill="#DBEAFE"/>
      <text x="281" y="44" fontFamily="DM Sans,sans-serif" fontSize="15">🏠</text>
      <text x="304" y="36" fontFamily="DM Sans,sans-serif" fontSize="9"
        fontWeight="600" fill="#0F1C2E">Utility Bills</text>
      <text x="304" y="48" fontFamily="DM Sans,sans-serif" fontSize="7.5"
        fill="#1A56DB" fontWeight="500">✓ Verified</text>
    </g>

    {/* RIGHT — Digital Footprint */}
    <g className="node-right" filter="url(#shSm)">
      <rect x="472" y="112" width="126" height="44" rx="11" fill="white"
        stroke="#CFFAFE" strokeWidth="1"/>
      <rect x="482" y="121" width="26" height="26" rx="7" fill="#CFFAFE"/>
      <text x="491" y="138" fontFamily="DM Sans,sans-serif" fontSize="15">🌐</text>
      <text x="514" y="130" fontFamily="DM Sans,sans-serif" fontSize="9"
        fontWeight="600" fill="#0F1C2E">Digital Footprint</text>
      <text x="514" y="142" fontFamily="DM Sans,sans-serif" fontSize="7.5"
        fill="#0891B2" fontWeight="500">✓ Matched</text>
    </g>

    {/* BOTTOM-RIGHT — Financial Data */}
    <g className="node-br" filter="url(#shSm)">
      <rect x="464" y="208" width="118" height="44" rx="11" fill="white"
        stroke="#FDE68A" strokeWidth="1"/>
      <rect x="474" y="217" width="26" height="26" rx="7" fill="#FEF3C7"/>
      <text x="483" y="234" fontFamily="DM Sans,sans-serif" fontSize="15">💳</text>
      <text x="506" y="226" fontFamily="DM Sans,sans-serif" fontSize="9"
        fontWeight="600" fill="#0F1C2E">Financial Data</text>
      <text x="506" y="238" fontFamily="DM Sans,sans-serif" fontSize="7.5"
        fill="#D97706" fontWeight="500">✓ Analysed</text>
    </g>

    {/* BOTTOM-LEFT — Gov. Database */}
    <g className="node-bl" filter="url(#shSm)">
      <rect x="58" y="208" width="120" height="44" rx="11" fill="white"
        stroke="#DDD6FE" strokeWidth="1"/>
      <rect x="68" y="217" width="26" height="26" rx="7" fill="#EDE9FE"/>
      <text x="77" y="234" fontFamily="DM Sans,sans-serif" fontSize="15">🏛</text>
      <text x="100" y="226" fontFamily="DM Sans,sans-serif" fontSize="9"
        fontWeight="600" fill="#0F1C2E">Gov. Database</text>
      <text x="100" y="238" fontFamily="DM Sans,sans-serif" fontSize="7.5"
        fill="#7C3AED" fontWeight="500">✓ Cross-checked</text>
    </g>

    {/* LEFT — Telco Records */}
    <g className="node-left" filter="url(#shSm)">
      <rect x="42" y="112" width="116" height="44" rx="11" fill="white"
        stroke="#FECACA" strokeWidth="1"/>
      <rect x="52" y="121" width="26" height="26" rx="7" fill="#FFE4E6"/>
      <text x="61" y="138" fontFamily="DM Sans,sans-serif" fontSize="15">📱</text>
      <text x="84" y="130" fontFamily="DM Sans,sans-serif" fontSize="9"
        fontWeight="600" fill="#0F1C2E">Telco Records</text>
      <text x="84" y="142" fontFamily="DM Sans,sans-serif" fontSize="7.5"
        fill="#E11D48" fontWeight="500">✓ Validated</text>
    </g>

    {/* ── KYC Confidence Badge ── */}
    <g className="node-badge" filter="url(#shSm)">
      <rect x="420" y="268" width="162" height="38" rx="11" fill="white"
        stroke="#BFDBFE" strokeWidth="1"/>
      <circle cx="442" cy="287" r="10" fill="url(#blueG2)"/>
      <text x="438" y="291" fontFamily="DM Sans,sans-serif" fontSize="10" fill="white"
        fontWeight="700">✓</text>
      <text x="458" y="283" fontFamily="DM Sans,sans-serif" fontSize="9.5"
        fontWeight="600" fill="#0F1C2E">KYC Confidence</text>
      <text x="458" y="296" fontFamily="DM Sans,sans-serif" fontSize="8"
        fill="#1A56DB" fontWeight="600">97% — Approved</text>
    </g>

    {/* ── Live pulse indicator ── */}
    <circle cx="590" cy="36" r="6" fill="#1A56DB"/>
    <circle cx="590" cy="36" r="6" fill="#3B82F6" opacity="0.3">
      <animate attributeName="r" values="6;16;6" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="606" y="40" fontFamily="DM Sans,sans-serif" fontSize="9"
      fill="#1A56DB" fontWeight="600">Live KYC</text>
  </svg>
);

const BENEFITS = [
  {
    n:"01", icon:"⚡", color:T.cyanLight, tc:T.cyan,
    title:"Faster verification",
    headline:"From days to seconds",
    desc:"Alternate data sources — utility bills, digital footprints, telco records — allow institutions to build identity profiles without waiting for traditional document couriers or manual review queues.",
    stat:"10×", statLabel:"Faster than traditional KYC",
  },
  {
    n:"02", icon:"🛡", color:T.bluePale, tc:T.blue,
    title:"Enhanced fraud detection",
    headline:"Multiple sources, fewer blind spots",
    desc:"Cross-referencing identity signals across utility, telco, financial, and government data surfaces inconsistencies that single-source checks routinely miss — catching synthetic identities early.",
    stat:"3.4×", statLabel:"More fraud signals detected",
  },
  {
    n:"03", icon:"⚙️", color:T.indigoLight, tc:T.indigo,
    title:"Real-time decision making",
    headline:"Smarter approvals at speed",
    desc:"Access to live data streams enables dynamic credit scoring, real-time risk assessment, and instant onboarding decisions — replacing overnight batch processes with millisecond API responses.",
    stat:"<1s", statLabel:"Decision latency with live data",
  },
  {
    n:"04", icon:"😊", color:T.amberLight, tc:T.amber,
    title:"Better customer experience",
    headline:"Less friction, more conversions",
    desc:"Customers no longer need to gather and upload stacks of documents. Alternate data pre-fills identity fields automatically — reducing onboarding time and dramatically cutting abandonment rates.",
    stat:"42%", statLabel:"Reduction in onboarding drop-off",
  },
  {
    n:"05", icon:"⚖️", color:T.purpleLight, tc:T.purple,
    title:"Regulatory compliance",
    headline:"Built-in KYC & AML alignment",
    desc:"Compliant alternate data pipelines are pre-mapped to KYC and AML regulatory frameworks across jurisdictions — ensuring institutions meet obligations without building bespoke compliance stacks.",
    stat:"100%", statLabel:"Audit-ready data trails",
  },
];

const DATA_SOURCES = [
  { icon:"🏠", label:"Utility Bills",      color:T.blueLight,   tc:T.blue    },
  { icon:"🌐", label:"Digital Footprint",  color:T.cyanLight,   tc:T.cyan    },
  { icon:"💳", label:"Financial Records",  color:T.amberLight,  tc:T.amber   },
  { icon:"🏛",  label:"Gov. Databases",    color:T.purpleLight, tc:T.purple  },
  { icon:"📱", label:"Telco Records",      color:T.roseLight,   tc:T.rose    },
  { icon:"📦", label:"E-commerce History", color:T.blueLight,   tc:T.blue    },
  { icon:"🏦", label:"Open Banking",       color:T.indigoLight, tc:T.indigo  },
  { icon:"📍", label:"Location Data",      color:T.cyanLight,   tc:T.cyan    },
];

const Tag = ({ children }) => (
  <span className="tag-pill" style={{
    display:"inline-flex", alignItems:"center",
    background:T.bluePale, color:T.blue, fontSize:12, fontWeight:500,
    padding:"5px 13px", borderRadius:100, border:`1px solid ${T.blueMid}44`,
    cursor:"default", fontFamily:css.body,
  }}>{children}</span>
);

const StatCard = ({ num, label, sub, accent = T.blue }) => (
  <div style={{ background:T.white, borderRadius:14, border:`1px solid ${T.border}`,
    padding:"20px 16px", textAlign:"center",
    boxShadow:"0 2px 10px rgba(26,86,219,0.06)" }}>
    <div style={{ fontSize:26, fontWeight:600, color:accent,
      fontFamily:css.display, lineHeight:1 }}>{num}</div>
    <div style={{ fontSize:12, color:T.muted, marginTop:6, fontFamily:css.body }}>{label}</div>
    {sub && <div style={{ fontSize:11, color:T.blue, marginTop:4,
      fontWeight:500, fontFamily:css.body }}>{sub}</div>}
  </div>
);

const BenefitCard = ({ n, icon, color, tc, title, headline, desc, stat, statLabel }) => (
  <div className="benefit-card" style={{
    background:T.white, border:`1px solid ${T.border}`,
    borderRadius:18, padding:"26px 24px",
    boxShadow:"0 2px 8px rgba(0,0,0,0.04)",
    position:"relative", overflow:"hidden",
  }}>
    <div style={{ position:"absolute", top:-8, right:14, fontSize:64, fontWeight:700,
      color:T.border, lineHeight:1, fontFamily:css.display,
      userSelect:"none", pointerEvents:"none" }}>{n}</div>
    <div style={{ display:"flex", alignItems:"flex-start", gap:14, marginBottom:16 }}>
      <div style={{ width:48, height:48, borderRadius:13, background:color, flexShrink:0,
        display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{icon}</div>
      <div>
        <div style={{ fontSize:11, fontWeight:700, color:tc, letterSpacing:"0.07em",
          textTransform:"uppercase", fontFamily:css.body, marginBottom:3 }}>{n} · {title}</div>
        <div style={{ fontSize:17, fontWeight:500, color:T.ink,
          fontFamily:css.display, lineHeight:1.3 }}>{headline}</div>
      </div>
    </div>
    <p style={{ fontSize:14, color:T.slate, lineHeight:1.7,
      fontFamily:css.body, marginBottom:16 }}>{desc}</p>
    <div style={{ display:"inline-flex", alignItems:"center", gap:10,
      background:color, borderRadius:10, padding:"8px 14px" }}>
      <span style={{ fontSize:20, fontWeight:700, color:tc,
        fontFamily:css.display }}>{stat}</span>
      <span style={{ fontSize:11, color:T.slate, fontFamily:css.body }}>{statLabel}</span>
    </div>
  </div>
);

const AlternateDataKyc = () => {
  return (
    <div style={{ background:T.bg, fontFamily:css.body, minHeight:"100vh" }}>
      <FontLoader />
      <GlobalStyles />

      {/* ── HERO ── */}
      <section className="hero-pad" style={{
        background:"linear-gradient(135deg,#0c1a4e 0%,#1A56DB 55%,#0891B2 100%)",
        padding:"68px 24px 112px", textAlign:"center",
 
        position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", top:-80, right:-80, width:300, height:300,
          borderRadius:"50%", background:"rgba(59,130,246,0.18)" }}/>
        <div style={{ position:"absolute", bottom:-60, left:-60, width:220, height:220,
          borderRadius:"50%", background:"rgba(255,255,255,0.04)" }}/>
        <div style={{ position:"absolute", top:"50%", left:"60%", width:380, height:380,
          borderRadius:"50%", background:"rgba(8,145,178,0.1)",
          transform:"translate(-50%,-50%)" }}/>

        <div className="fade-up d1" style={{ display:"inline-flex", alignItems:"center", gap:8,
          background:"rgba(255,255,255,0.14)", border:"1px solid rgba(255,255,255,0.22)",
          color:"#fff", fontSize:11, fontWeight:600, padding:"6px 16px", borderRadius:100,
          marginBottom:22, letterSpacing:"0.07em" }}>
          🔐 ALTERNATE DATA · KYC 2024
        </div>

        <h1 className="fade-up d2 hero-h1" style={{
          fontFamily:css.display, fontSize:"clamp(24px,4vw,44px)",
          fontWeight:400, color:"#fff", lineHeight:1.2,
          maxWidth:740, margin:"0 auto 18px", fontStyle:"italic",
        }}>
          Top 5 Benefits of Using<br/>
          <span style={{ fontStyle:"normal", color:"#BFDBFE" }}>
            Alternate Data Services for KYC in 2024
          </span>
        </h1>

        <div className="fade-up d3" style={{ display:"flex", alignItems:"center",
          justifyContent:"center", gap:16, color:"rgba(255,255,255,0.7)",
          fontSize:13, flexWrap:"wrap", marginBottom:34 }}>
          <span>📅 September 26, 2024</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.4)", borderRadius:"50%" }}/>
          <span>⏱ 5 min read</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.4)", borderRadius:"50%" }}/>
          <span>👁 3.8k views</span>
        </div>
      </section>

      {/* ── HERO ILLUSTRATION ── */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>
        <div className="scale-in" style={{
          marginTop:-66, borderRadius:20, overflow:"hidden",
          border:`3px solid ${T.white}`,
          boxShadow:"0 20px 60px rgba(26,86,219,0.18)",
          background:"linear-gradient(135deg,#EFF6FF,#ECFEFF)",
          height:320,
        }}>
          <AltDataIllustration />
        </div>
      </div>

      {/* ── META BAR ── */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>
        <div className="meta-bar" style={{ display:"flex", alignItems:"center",
          justifyContent:"space-between", flexWrap:"wrap", gap:12,
          padding:"22px 0 18px", borderBottom:`1px solid ${T.border}` }}>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {["Alternate Data","KYC","AML","Fintech","Compliance"].map(t => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
       
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>

        {/* TOC */}
        <div style={{ background:T.white, border:`1px solid ${T.border}`, borderRadius:16,
          padding:"20px 22px", margin:"28px 0 32px",
          boxShadow:"0 2px 12px rgba(26,86,219,0.05)" }}>
          <div style={{ fontSize:10, fontWeight:700, color:T.muted, letterSpacing:"0.1em",
            textTransform:"uppercase", marginBottom:14, fontFamily:css.body }}>Contents</div>
          {[
            ["01","What are alternate data services?"],
            ["02","Alternate data sources in KYC"],
            ["03","Top 5 benefits explained"],
            ["04","Conclusion"],
          ].map(([n, l]) => (
            <div key={n} className="toc-row" style={{ display:"flex", alignItems:"center",
              gap:14, padding:"9px 10px", borderRadius:8, cursor:"pointer", margin:"2px 0" }}>
              <span style={{ fontSize:10, color:T.blue, fontWeight:700,
                minWidth:20, fontFamily:css.body }}>{n}</span>
              <span style={{ fontSize:14, color:T.ink, fontFamily:css.body }}>{l}</span>
            </div>
          ))}
        </div>

        {/* Intro */}
        <p style={{ fontSize:17, color:T.slate, lineHeight:1.8,
          marginBottom:20, fontFamily:css.body }}>
          In 2024, financial institutions face increasing pressure to meet stringent KYC
          requirements while combating evolving fraud threats — all without sacrificing the
          frictionless onboarding experience that customers now expect. Alternate data services
          offer a smarter path forward.
        </p>

        {/* Pull quote */}
        <div style={{ borderLeft:`4px solid ${T.blue}`, background:T.blueLight,
          borderRadius:"0 14px 14px 0", padding:"18px 24px", margin:"0 0 32px",
          border:`1px solid ${T.bluePale}`, borderLeft:`4px solid ${T.blue}` }}>
          <p style={{ fontSize:16, color:"#1e3a8a", fontStyle:"italic",
            margin:0, fontFamily:css.display, lineHeight:1.65 }}>
            "The most reliable identity signal isn't a passport — it's the consistent,
            long-term pattern of how a real person interacts with the world around them."
          </p>
          
        </div>

        {/* Stats */}
        <div className="stat-row" style={{ display:"grid",
          gridTemplateColumns:"repeat(3,1fr)", gap:14, margin:"0 0 40px" }}>
          <StatCard num="8+"  label="Alternate data source types" accent={T.blue}
            sub="Utility, telco, financial & more"/>
          <StatCard num="97%" label="KYC confidence with alt data" accent={T.cyan}
            sub="vs 78% with documents alone"/>
          <StatCard num="42%" label="Drop in onboarding abandonment" accent={T.indigo}
            sub="Less friction, more completions"/>
        </div>

        {/* What is alt data */}
        <h2 style={{ fontFamily:css.display, fontSize:24, fontWeight:400,
          color:T.ink, margin:"0 0 14px" }}>What are alternate data services?</h2>
        <p style={{ fontSize:16, color:T.slate, lineHeight:1.8,
          marginBottom:20, fontFamily:css.body }}>
          Alternate data refers to non-traditional identity signals — utility payments,
          mobile records, e-commerce history, open banking feeds, and digital footprints —
          that paint a richer, more reliable picture of who a customer is than a single
          ID document ever could.
        </p>

        {/* Data sources grid */}
        <h3 style={{ fontFamily:css.body, fontSize:15, fontWeight:600,
          color:T.slate, margin:"0 0 14px", letterSpacing:"0.02em" }}>
          Alternate data sources used in KYC
        </h3>
        <div className="source-grid" style={{ display:"grid",
          gridTemplateColumns:"repeat(4,1fr)", gap:10, margin:"0 0 40px" }}>
          {DATA_SOURCES.map(({ icon, label, color, tc }) => (
            <div key={label} className="source-chip" style={{
              background:color, border:`1px solid ${T.border}`, borderRadius:12,
              padding:"14px 10px", textAlign:"center", cursor:"default" }}>
              <div style={{ fontSize:22, marginBottom:6 }}>{icon}</div>
              <div style={{ fontSize:11, fontWeight:600, color:tc,
                fontFamily:css.body, lineHeight:1.3 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* 5 Benefits */}
        <h2 style={{ fontFamily:css.display, fontSize:24, fontWeight:400,
          color:T.ink, margin:"0 0 10px" }}>Top 5 benefits explained</h2>
        <p style={{ fontSize:15, color:T.muted, marginBottom:24, fontFamily:css.body }}>
          Each benefit comes with a real metric — because claims without data are just marketing.
        </p>
        <div className="benefit-grid" style={{ display:"flex",
          flexDirection:"column", gap:16, margin:"0 0 48px" }}>
          {BENEFITS.map(b => <BenefitCard key={b.n} {...b}/>)}
        </div>

        {/* Conclusion */}
        <div style={{
          background:`linear-gradient(135deg,${T.blueLight},${T.cyanLight})`,
          border:`1px solid ${T.bluePale}`, borderRadius:18,
          padding:"32px 28px", margin:"0 0 48px", textAlign:"center",
        }}>
          <div style={{ fontSize:30, marginBottom:12 }}>🔐</div>
          <h3 style={{ fontFamily:css.display, fontSize:21, fontWeight:400,
            color:T.ink, marginBottom:10 }}>Conclusion</h3>
          <p style={{ fontSize:15, color:T.slate, lineHeight:1.8,
            maxWidth:560, margin:"0 auto", fontFamily:css.body }}>
            Alternate data services are fundamentally transforming KYC verification —
            making onboarding faster, fraud detection smarter, and compliance more robust.
            For financial institutions navigating 2024's regulatory landscape, they're no
            longer optional — they're essential.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AlternateDataKyc;