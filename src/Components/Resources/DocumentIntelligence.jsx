import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

/* ── Google Fonts ── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Outfit:wght@300;400;500;600;700&display=swap');
  `}</style>
);

/* ── Design Tokens ── */
const T = {
  blue:        "#1A56DB",
  blueMid:     "#3B82F6",
  blueDark:    "#0D2E7A",
  blueDeep:    "#0A1F5C",
  blueLight:   "#EFF6FF",
  bluePale:    "#DBEAFE",
  ink:         "#0F1C2E",
  slate:       "#4A5568",
  muted:       "#718096",
  border:      "#E2E8F0",
  bg:          "#F0F5FF",
  white:       "#FFFFFF",
  green:       "#16A34A",
  greenLight:  "#DCFCE7",
  amber:       "#D97706",
  amberLight:  "#FEF3C7",
  orange:      "#EA580C",
  orangeLight: "#FFF7ED",
  teal:        "#0D9488",
  tealLight:   "#CCFBF1",
  red:         "#DC2626",
  redLight:    "#FEE2E2",
};

const css = {
  display: "'Fraunces', Georgia, serif",
  body:    "'Outfit', sans-serif",
};

/* ── Global Styles ── */
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

    /* Document illustration keyframes */
    @keyframes floatA {
      0%,100% { transform:translateY(0px); }
      50%      { transform:translateY(-7px); }
    }
    @keyframes floatB {
      0%,100% { transform:translateY(0px); }
      50%      { transform:translateY(-5px); }
    }
    @keyframes floatC {
      0%,100% { transform:translateY(0px); }
      50%      { transform:translateY(-9px); }
    }
    @keyframes scanLine {
      0%   { transform:translateY(0);    opacity:0.9; }
      50%  { transform:translateY(110px); opacity:0.3; }
      100% { transform:translateY(0);    opacity:0.9; }
    }
    @keyframes blinkCursor {
      0%,100% { opacity:1; }
      50%      { opacity:0; }
    }
    @keyframes pulseRing {
      0%   { r:8;  opacity:0.6; }
      100% { r:22; opacity:0;   }
    }
    @keyframes dash {
      to { stroke-dashoffset: -60; }
    }
    @keyframes fillBar {
      from { width: 0; }
      to   { width: 88%; }
    }
    @keyframes fillBar2 {
      from { width: 0; }
      to   { width: 62%; }
    }
    @keyframes fillBar3 {
      from { width: 0; }
      to   { width: 94%; }
    }
    @keyframes spinOrbit {
      from { transform: rotate(0deg) translateX(54px) rotate(0deg); }
      to   { transform: rotate(360deg) translateX(54px) rotate(-360deg); }
    }
    @keyframes spinOrbit2 {
      from { transform: rotate(180deg) translateX(76px) rotate(-180deg); }
      to   { transform: rotate(540deg) translateX(76px) rotate(-540deg); }
    }
    @keyframes spinOrbit3 {
      from { transform: rotate(90deg) translateX(98px) rotate(-90deg); }
      to   { transform: rotate(450deg) translateX(98px) rotate(-450deg); }
    }
    @keyframes glowPulse {
      0%,100% { opacity: 0.15; }
      50%      { opacity: 0.35; }
    }

    .fade-up  { animation:fadeUp  0.55s ease both; }
    .scale-in { animation:scaleIn 0.5s  ease both; }
    .d1{animation-delay:.05s} .d2{animation-delay:.15s}
    .d3{animation-delay:.25s} .d4{animation-delay:.35s}

    .cap-card:hover { border-color:${T.blueMid}; transform:translateY(-4px);
      box-shadow:0 12px 30px rgba(26,86,219,0.12); }
    .cap-card { transition:border-color .2s, transform .22s, box-shadow .22s; }

    .reason-card:hover { border-color:${T.blueMid}; box-shadow:0 6px 20px rgba(26,86,219,0.12); transform:translateY(-2px); }
    .reason-card { transition:border-color .2s, box-shadow .2s, transform .2s; }

    .rc-card:hover { transform:translateY(-5px); box-shadow:0 14px 36px rgba(26,86,219,0.13); }
    .rc-card       { transition:transform .25s ease, box-shadow .25s ease; }

    .social-ic:hover { background:${T.blueLight}; border-color:${T.blueMid}; color:${T.blue}; }
    .social-ic       { transition:background .2s, border-color .2s, color .2s; }

    .toc-row:hover { background:${T.blueLight}; padding-left:18px; }
    .toc-row { transition:background .15s, padding-left .15s; }

    .nl-btn:hover { background:#1240B5; }
    .nl-btn { transition:background .2s; }

    .tag-pill:hover { background:${T.blueMid}; color:#fff; }
    .tag-pill { transition:background .2s, color .2s; }

    @media(max-width:680px){
      .hero-h1          { font-size:24px !important; }
      .stat-row         { grid-template-columns:1fr 1fr !important; }
      .cap-grid         { grid-template-columns:1fr !important; }
      .reason-grid      { grid-template-columns:1fr !important; }
      .rel-grid         { grid-template-columns:1fr !important; }
      .nl-row           { flex-direction:column !important; }
      .nl-input,.nl-btn { border-radius:10px !important; width:100% !important; }
      .hero-pad         { padding:52px 20px 90px !important; }
      .wrap             { padding:0 16px !important; }
      .meta-bar         { flex-direction:column; align-items:flex-start !important; gap:10px !important; }
    }
  `}</style>
);

/* ── NEW Hero Illustration — clean, all-blue document verification UI ── */
const DocIllustration = () => (
  <svg viewBox="0 0 700 360" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width:"100%", height:"100%", display:"block" }}>
    <defs>
      {/* Blue-only gradients */}
      <linearGradient id="bgGrad" x1="0" y1="0" x2="700" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0A1F5C"/>
        <stop offset="100%" stopColor="#1A56DB"/>
      </linearGradient>
      <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.95"/>
        <stop offset="100%" stopColor="#1e40af" stopOpacity="0.9"/>
      </linearGradient>
      <linearGradient id="barBlue" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#60A5FA"/>
        <stop offset="100%" stopColor="#3B82F6"/>
      </linearGradient>
      <linearGradient id="barGreen" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#34D399"/>
        <stop offset="100%" stopColor="#10B981"/>
      </linearGradient>
      <linearGradient id="centerGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2563EB"/>
        <stop offset="100%" stopColor="#1D4ED8"/>
      </linearGradient>
      <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#60A5FA"/>
        <stop offset="100%" stopColor="#2563EB"/>
      </linearGradient>
      <filter id="softShadow">
        <feDropShadow dx="0" dy="6" stdDeviation="14" floodColor="#0a1f5c" floodOpacity="0.5"/>
      </filter>
      <filter id="cardShadow">
        <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#0a1f5c" floodOpacity="0.4"/>
      </filter>
      <filter id="glowBlue">
        <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#3B82F6" floodOpacity="0.6"/>
      </filter>
      <clipPath id="mainDocClip">
        <rect x="230" y="50" width="240" height="280" rx="16"/>
      </clipPath>
    </defs>

    {/* Background */}
    <rect width="700" height="360" fill="url(#bgGrad)"/>

    {/* Dot grid */}
    {Array.from({length:20}).map((_,row) =>
      Array.from({length:35}).map((_,col) => (
        <circle key={`${row}-${col}`}
          cx={col*20+10} cy={row*20+10} r="0.9"
          fill="#BFDBFE" opacity="0.12"/>
      ))
    )}

    {/* Ambient glow behind center */}
    <ellipse cx="350" cy="190" rx="160" ry="120"
      fill="#2563EB" opacity="0.1"
      style={{animation:"glowPulse 3s ease-in-out infinite"}}/>

    {/* ─── MAIN DOCUMENT CARD ─── */}
    <g style={{animation:"floatB 4s ease-in-out infinite"}} filter="url(#softShadow)">
      <rect x="230" y="50" width="240" height="280" rx="16"
        fill="url(#cardGrad)" stroke="rgba(147,197,253,0.3)" strokeWidth="1.5"/>

      {/* Doc header bar */}
      <rect x="230" y="50" width="240" height="44" rx="16" fill="rgba(37,99,235,0.5)"/>
      <rect x="230" y="74" width="240" height="20" fill="rgba(37,99,235,0.5)"/>

      {/* Window dots */}
      <circle cx="249" cy="72" r="4" fill="rgba(255,255,255,0.2)"/>
      <circle cx="262" cy="72" r="4" fill="rgba(255,255,255,0.2)"/>
      <circle cx="275" cy="72" r="4" fill="rgba(255,255,255,0.2)"/>

      {/* Header label */}
      <text x="350" y="77" fontFamily="Outfit,sans-serif" fontSize="9.5" fontWeight="700"
        fill="rgba(255,255,255,0.9)" textAnchor="middle" letterSpacing="1.5">DOCUMENT SCAN</text>

      {/* Document lines */}
      {[
        {y:108, w:170, op:0.55, c:"#93C5FD"},
        {y:122, w:140, op:0.4,  c:"#93C5FD"},
        {y:136, w:158, op:0.5,  c:"#93C5FD"},
        {y:150, w:130, op:0.38, c:"#93C5FD"},
        {y:170, w:170, op:0.55, c:"#93C5FD"},
        {y:184, w:148, op:0.4,  c:"#93C5FD"},
        {y:198, w:160, op:0.5,  c:"#93C5FD"},
      ].map((l,i) => (
        <rect key={i} x="252" y={l.y} width={l.w} height="7" rx="3.5"
          fill={l.c} opacity={l.op}/>
      ))}

      {/* Verified stamp area */}
      <rect x="248" y="216" width="204" height="32" rx="8" fill="rgba(16,185,129,0.12)"
        stroke="rgba(52,211,153,0.4)" strokeWidth="1"/>
      <text x="260" y="235" fontFamily="Outfit,sans-serif" fontSize="9" fontWeight="600"
        fill="#34D399">✓</text>
      <text x="275" y="235" fontFamily="Outfit,sans-serif" fontSize="9" fontWeight="600"
        fill="#6EE7B7">Document Authenticated</text>
      <text x="430" y="235" fontFamily="Outfit,sans-serif" fontSize="8" fontWeight="500"
        fill="rgba(110,231,183,0.7)" textAnchor="end">94% confidence</text>

      {/* Scan line */}
      <g clipPath="url(#mainDocClip)">
        <rect x="230" y="100" width="240" height="2" rx="1"
          fill="#60A5FA" opacity="0.8"
          style={{animation:"scanLine 2.8s ease-in-out infinite"}}/>
      </g>

      {/* Bottom progress */}
      <rect x="252" y="262" width="196" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
      <rect x="252" y="262" width="0" height="6" rx="3"
        fill="url(#barBlue)"
        style={{animation:"fillBar 2s ease 0.5s forwards"}}/>
      <text x="252" y="286" fontFamily="Outfit,sans-serif" fontSize="8"
        fill="rgba(147,197,253,0.7)">Processing fields...</text>
      <text x="448" y="286" fontFamily="Outfit,sans-serif" fontSize="8" fontWeight="600"
        fill="#60A5FA" textAnchor="end">88%</text>
    </g>

    {/* ─── LEFT PANEL — OCR Fields ─── */}
    <g style={{animation:"floatA 3.5s ease-in-out infinite 0.4s"}} filter="url(#cardShadow)">
      <rect x="20" y="80" width="188" height="196" rx="14"
        fill="rgba(14,33,97,0.95)" stroke="rgba(96,165,250,0.25)" strokeWidth="1"/>

      {/* Panel header */}
      <rect x="20" y="80" width="188" height="36" rx="14" fill="rgba(37,99,235,0.4)"/>
      <rect x="20" y="100" width="188" height="16" fill="rgba(37,99,235,0.4)"/>
      <circle cx="34" cy="98" r="5" fill="#60A5FA" opacity="0.6"/>
      <text x="46" y="102" fontFamily="Outfit,sans-serif" fontSize="9" fontWeight="700"
        fill="rgba(255,255,255,0.9)" letterSpacing="0.8">OCR EXTRACTION</text>

      {/* Fields */}
      {[
        {label:"Full Name",   val:"John A. Mitchell"},
        {label:"DOB",        val:"12 / 03 / 1988"},
        {label:"ID Number",   val:"GBR-4829301"},
        {label:"Expiry",      val:"12 / 03 / 2029"},
        {label:"Nationality", val:"British"},
      ].map(({label,val},i) => (
        <g key={label}>
          <text x="34" y={132+i*28} fontFamily="Outfit,sans-serif" fontSize="8"
            fill="rgba(147,197,253,0.6)">{label}</text>
          <text x="34" y={147+i*28} fontFamily="Outfit,sans-serif" fontSize="9.5"
            fontWeight="600" fill="rgba(255,255,255,0.92)">{val}</text>
        </g>
      ))}

      {/* Cursor blink */}
      <rect x="34" y="261" width="1.5" height="10" rx="1" fill="#60A5FA"
        style={{animation:"blinkCursor 1s ease-in-out infinite"}}/>
    </g>

    {/* ─── RIGHT PANEL — Verification Scores ─── */}
    <g style={{animation:"floatC 4.2s ease-in-out infinite 0.8s"}} filter="url(#cardShadow)">
      <rect x="492" y="60" width="192" height="230" rx="14"
        fill="rgba(14,33,97,0.95)" stroke="rgba(96,165,250,0.25)" strokeWidth="1"/>

      {/* Header */}
      <rect x="492" y="60" width="192" height="36" rx="14" fill="rgba(37,99,235,0.4)"/>
      <rect x="492" y="80" width="192" height="16" fill="rgba(37,99,235,0.4)"/>
      <circle cx="506" cy="78" r="5" fill="#60A5FA" opacity="0.6"/>
      <text x="518" y="82" fontFamily="Outfit,sans-serif" fontSize="9" fontWeight="700"
        fill="rgba(255,255,255,0.9)" letterSpacing="0.8">FRAUD SIGNALS</text>

      {/* Check rows */}
      {[
        {label:"Font Consistency",   status:"Pass",     color:"#34D399", bg:"rgba(52,211,153,0.12)"},
        {label:"Metadata Valid",     status:"Pass",     color:"#34D399", bg:"rgba(52,211,153,0.12)"},
        {label:"MRZ Checksum",       status:"Pass",     color:"#34D399", bg:"rgba(52,211,153,0.12)"},
        {label:"Tamper Detection",   status:"Low Risk", color:"#FCD34D", bg:"rgba(252,211,77,0.1)"},
        {label:"Signature Match",    status:"Pass",     color:"#34D399", bg:"rgba(52,211,153,0.12)"},
        {label:"Database Cross-ref", status:"Pass",     color:"#34D399", bg:"rgba(52,211,153,0.12)"},
      ].map(({label,status,color,bg},i) => (
        <g key={label}>
          <rect x="504" y={104+i*26} width="168" height="20" rx="5" fill={bg}/>
          <text x="514" y={118+i*26} fontFamily="Outfit,sans-serif" fontSize="8.5"
            fill="rgba(255,255,255,0.8)">{label}</text>
          <text x="666" y={118+i*26} fontFamily="Outfit,sans-serif" fontSize="8.5"
            fontWeight="700" fill={color} textAnchor="end">{status}</text>
        </g>
      ))}

      {/* Overall bar */}
      <rect x="504" y="268" width="168" height="5" rx="2.5" fill="rgba(255,255,255,0.1)"/>
      <rect x="504" y="268" width="0" height="5" rx="2.5"
        fill="url(#barGreen)"
        style={{animation:"fillBar3 2s ease 0.8s forwards"}}/>
      <text x="504" y="285" fontFamily="Outfit,sans-serif" fontSize="8"
        fill="rgba(147,197,253,0.6)">Overall trust score</text>
      <text x="672" y="285" fontFamily="Outfit,sans-serif" fontSize="8.5" fontWeight="700"
        fill="#34D399" textAnchor="end">94%</text>
    </g>

    {/* ─── BOTTOM BADGE — AI confidence ─── */}
    <g style={{animation:"floatA 3.8s ease-in-out infinite 1s"}} filter="url(#cardShadow)">
      <rect x="233" y="348" width="234" height="0" rx="10"/> {/* spacer */}
    </g>

    {/* Connector dashed lines */}
    <line x1="208" y1="170" x2="230" y2="180" stroke="rgba(96,165,250,0.35)"
      strokeWidth="1" strokeDasharray="4 4"
      style={{animation:"dash 2s linear infinite"}}/>
    <line x1="470" y1="160" x2="492" y2="150" stroke="rgba(96,165,250,0.35)"
      strokeWidth="1" strokeDasharray="4 4"
      style={{animation:"dash 2s linear infinite"}}/>

    {/* ─── ORBIT SYSTEM (top-right decorative) ─── */}
    <g transform="translate(628,72)">
      {/* Orbit rings */}
      <circle cx="0" cy="0" r="54" stroke="rgba(96,165,250,0.12)" strokeWidth="1" fill="none"/>
      <circle cx="0" cy="0" r="76" stroke="rgba(96,165,250,0.08)" strokeWidth="1" fill="none"/>
      <circle cx="0" cy="0" r="98" stroke="rgba(96,165,250,0.05)" strokeWidth="1" fill="none"
        strokeDasharray="4 6"/>

      {/* Center */}
      <circle cx="0" cy="0" r="22" fill="rgba(37,99,235,0.3)" stroke="rgba(96,165,250,0.4)" strokeWidth="1.5"/>
      <text x="0" y="5" fontFamily="Outfit,sans-serif" fontSize="12"
        textAnchor="middle" fill="white">🔐</text>

      {/* Orbiting dots */}
      <circle r="6" fill="#3B82F6" filter="url(#glowBlue)"
        style={{transformOrigin:"0 0", animation:"spinOrbit 4s linear infinite"}}/>
      <circle r="5" fill="#60A5FA"
        style={{transformOrigin:"0 0", animation:"spinOrbit2 6s linear infinite"}}/>
      <circle r="4" fill="#93C5FD"
        style={{transformOrigin:"0 0", animation:"spinOrbit3 8s linear infinite"}}/>
    </g>

    {/* Live indicator */}
    <circle cx="30" cy="34" r="5" fill="#34D399"/>
    <circle cx="30" cy="34" r="5" fill="#34D399" opacity="0.4">
      <animate attributeName="r" values="5;13;5" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="42" y="38" fontFamily="Outfit,sans-serif" fontSize="9.5" fontWeight="600"
      fill="rgba(255,255,255,0.9)">Live · Scanning</text>
  </svg>
);

/* ── Data ── */
const CAPABILITIES = [
  { icon:"🔍", color:T.blueLight,   tc:T.blue,   title:"Automated data extraction",
    desc:"OCR and NLP parse names, dates, document numbers, addresses, and expiry fields from passports, driving licences, bank statements, invoices, and contracts - in milliseconds." },
  { icon:"⚠️", color:T.redLight,    tc:T.red,    title:"Tamper & forgery detection",
    desc:"AI scans for pixel-level inconsistencies, font mismatches, metadata anomalies, copy-paste artefacts, and altered MRZ codes that are invisible to the human eye." },
  { icon:"🔗", color:T.tealLight,   tc:T.teal,   title:"Cross-database verification",
    desc:"Extracted data is validated in real time against government registries, sanctions lists, credit bureaux, and internal records to confirm document authenticity end-to-end." },
  { icon:"📋", color:T.amberLight,  tc:T.amber,  title:"Compliance classification",
    desc:"Documents are automatically classified against regulatory frameworks - KYC, AML, GDPR - and flagged if they fail jurisdiction-specific compliance thresholds." },
  { icon:"🌐", color:T.blueLight,   tc:T.blue,   title:"10,000+ document types",
    desc:"A continuously updated library of 10,000+ ID templates from 195 countries ensures accurate structure recognition regardless of format, language, or issuing authority." },
  { icon:"📊", color:T.blueLight,   tc:T.blue,   title:"Audit trail & reporting",
    desc:"Every scan generates a tamper-proof audit log with timestamp, confidence score, anomaly flags, and extracted fields - ready for regulator review or dispute resolution." },
];

const REASONS = [
  { icon:"🧑‍💻", color:T.blueLight,   tc:T.blue,   title:"Eliminates manual errors",
    desc:"Automated extraction removes human transcription mistakes - reducing rework costs and accelerating document processing throughput by up to 10×." },
  { icon:"⚖️", color:T.amberLight,  tc:T.amber,  title:"Boosts regulatory compliance",
    desc:"Built-in rule engines enforce KYC, AML, and GDPR requirements at the point of document intake - before non-compliant records ever enter your systems." },
  { icon:"🚨", color:T.redLight,    tc:T.red,    title:"Fights fraud effectively",
    desc:"Real-time AI scanning detects forgeries, synthetic documents, and doctored images that bypass traditional verification - keeping fraudsters out from the start." },
  { icon:"💰", color:T.greenLight,  tc:T.green,  title:"Cuts operational cost",
    desc:"Replacing manual document review teams with AI-powered automation delivers 60–80% cost savings per document - at scale, without sacrificing accuracy." },
];

/* ── Sub-components ── */
const Tag = ({ children }) => (
  <span className="tag-pill" style={{
    display:"inline-flex", alignItems:"center",
    background:T.blueLight, color:T.blue, fontSize:12, fontWeight:500,
    padding:"5px 13px", borderRadius:100, border:`1px solid ${T.bluePale}`,
    cursor:"default", fontFamily:css.body,
  }}>{children}</span>
);

const StatCard = ({ num, label, sub, accent=T.blue }) => (
  <div style={{ background:T.white, borderRadius:16, border:`1px solid ${T.border}`,
    padding:"24px 18px", textAlign:"center",
    boxShadow:"0 2px 12px rgba(26,86,219,0.07)",
    position:"relative", overflow:"hidden" }}>
    <div style={{ position:"absolute", top:0, left:0, right:0, height:3,
      background:`linear-gradient(90deg,${accent},${T.blueMid})` }}/>
    <div style={{ fontSize:28, fontWeight:700, color:accent,
      fontFamily:css.display, lineHeight:1 }}>{num}</div>
    <div style={{ fontSize:12, color:T.muted, marginTop:8, fontFamily:css.body }}>{label}</div>
    {sub && <div style={{ fontSize:11, color:T.green, marginTop:4, fontWeight:500,
      fontFamily:css.body }}>{sub}</div>}
  </div>
);

const CapCard = ({ icon, color, tc, title, desc }) => (
  <div className="cap-card" style={{ background:T.white, border:`1px solid ${T.border}`,
    borderRadius:18, padding:"24px 20px", display:"flex", flexDirection:"column", gap:14,
    boxShadow:"0 2px 8px rgba(0,0,0,0.04)", position:"relative", overflow:"hidden" }}>
    <div style={{ position:"absolute", top:0, left:0, right:0, height:3,
      background:`linear-gradient(90deg,${tc},${T.blueMid})`, opacity:0.6 }}/>
    <div style={{ width:48, height:48, borderRadius:13, background:color,
      display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{icon}</div>
    <div style={{ fontSize:15, fontWeight:600, color:T.ink, fontFamily:css.display }}>{title}</div>
    <div style={{ fontSize:13, color:T.slate, lineHeight:1.7, fontFamily:css.body }}>{desc}</div>
  </div>
);

const ReasonCard = ({ icon, color, tc, title, desc }) => (
  <div className="reason-card" style={{ background:T.white, border:`1px solid ${T.border}`,
    borderRadius:18, padding:"22px 20px", display:"flex", gap:18, alignItems:"flex-start",
    boxShadow:"0 2px 8px rgba(0,0,0,0.04)", position:"relative", overflow:"hidden" }}>
    <div style={{ position:"absolute", left:0, top:0, bottom:0, width:3,
      background:`linear-gradient(180deg,${tc},${T.blueMid})`, opacity:0.7, borderRadius:3 }}/>
    <div style={{ width:48, height:48, borderRadius:13, background:color, flexShrink:0,
      display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{icon}</div>
    <div>
      <div style={{ fontSize:15, fontWeight:600, color:T.ink,
        fontFamily:css.display, marginBottom:7 }}>{title}</div>
      <div style={{ fontSize:13, color:T.slate, lineHeight:1.7, fontFamily:css.body }}>{desc}</div>
    </div>
  </div>
);

const RelatedCard = ({ icon, bg1, bg2, cat, title, excerpt }) => (
  <div className="rc-card" style={{ background:T.white, border:`1px solid ${T.border}`,
    borderRadius:18, overflow:"hidden", cursor:"pointer" }}>
    <div style={{ height:148, background:`linear-gradient(135deg,${bg1},${bg2})`,
      display:"flex", alignItems:"center", justifyContent:"center", fontSize:38 }}>{icon}</div>
    <div style={{ padding:"18px 18px 20px" }}>
      <div style={{ fontSize:10, color:T.blue, fontWeight:700, letterSpacing:"0.08em",
        textTransform:"uppercase", marginBottom:7, fontFamily:css.body }}>{cat}</div>
      <div style={{ fontSize:15, fontWeight:500, color:T.ink, lineHeight:1.4,
        marginBottom:8, fontFamily:css.display }}>{title}</div>
      <div style={{ fontSize:12, color:T.muted, lineHeight:1.6,
        marginBottom:12, fontFamily:css.body }}>{excerpt}</div>
      <div style={{ fontSize:13, color:T.blue, fontWeight:500,
        display:"flex", alignItems:"center", gap:4, fontFamily:css.body }}>Read more <span>→</span></div>
    </div>
  </div>
);

/* ── Main Component ── */
const DocumentIntelligence = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ background:T.bg, fontFamily:css.body, minHeight:"100vh" }}>
      <FontLoader />
      <GlobalStyles />

      {/* ── HERO — pure deep blue ── */}
      <section className="hero-pad" style={{
        background:"linear-gradient(160deg, #05102E 0%, #0D2167 45%, #1A40B8 100%)",
        padding:"68px 24px 120px", textAlign:"center",
        position:"relative", overflow:"hidden",
      }}>
        {/* Subtle blue mesh blobs — no orange */}
        <div style={{ position:"absolute", top:-100, right:-60, width:360, height:360,
          borderRadius:"50%", background:"rgba(59,130,246,0.13)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:-80, left:-80, width:280, height:280,
          borderRadius:"50%", background:"rgba(29,78,216,0.15)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", top:"30%", left:"50%", width:500, height:500,
          borderRadius:"50%", background:"rgba(96,165,250,0.06)",
          transform:"translate(-50%,-50%)", pointerEvents:"none" }}/>

        {/* Dot grid overlay */}
        <div style={{ position:"absolute", inset:0, pointerEvents:"none",
          backgroundImage:"radial-gradient(circle, rgba(147,197,253,0.18) 1px, transparent 1px)",
          backgroundSize:"24px 24px" }}/>

        <div className="fade-up d1" style={{ display:"inline-flex", alignItems:"center", gap:8,
          background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)",
          color:"rgba(255,255,255,0.92)", fontSize:11, fontWeight:600,
          padding:"6px 16px", borderRadius:100, marginBottom:24,
          letterSpacing:"0.07em", fontFamily:css.body }}>
          📄 DOCUMENT INTELLIGENCE · AI
        </div>

        <h1 className="fade-up d2 hero-h1" style={{
          fontFamily:css.display, fontSize:"clamp(24px,4vw,46px)",
          fontWeight:600, color:"#fff", lineHeight:1.18,
          maxWidth:780, margin:"0 auto 18px", fontStyle:"italic",
        }}>
          Understanding Document Intelligence:
          <br/>
          <span style={{ fontStyle:"normal", color:"#93C5FD" }}>
            A Powerful Tool for Fraud Prevention
          </span>
        </h1>

        <div className="fade-up d3" style={{ display:"flex", alignItems:"center",
          justifyContent:"center", gap:16, color:"rgba(255,255,255,0.6)",
          fontSize:13, flexWrap:"wrap", marginBottom:36, fontFamily:css.body }}>
          <span>📅 December 18, 2024</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.3)", borderRadius:"50%" }}/>
          <span>⏱ 6 min read</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.3)", borderRadius:"50%" }}/>
          <span>👁 4.3k views</span>
        </div>
      </section>

      {/* ── HERO ILLUSTRATION CARD ── */}
      <div className="wrap" style={{ maxWidth:940, margin:"0 auto", padding:"0 24px" }}>
        <div className="scale-in" style={{
          marginTop:-72, borderRadius:24, overflow:"hidden",
          border:"2px solid rgba(147,197,253,0.3)",
          boxShadow:"0 24px 64px rgba(10,31,92,0.35)",
          background:"linear-gradient(160deg, #05102E 0%, #0D2167 55%, #1A40B8 100%)",
          height:360,
        }}>
          <DocIllustration />
        </div>
      </div>

      {/* ── META BAR ── */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>
        <div className="meta-bar" style={{ display:"flex", alignItems:"center",
          justifyContent:"space-between", flexWrap:"wrap", gap:12,
          padding:"22px 0 18px", borderBottom:`1px solid ${T.border}` }}>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {["OCR","Document AI","Fraud","Compliance","KYC"].map(t => <Tag key={t}>{t}</Tag>)}
          </div>
        
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>

        {/* TOC */}
        <div style={{ background:T.white, border:`1px solid ${T.border}`, borderRadius:18,
          padding:"22px 24px", margin:"28px 0 32px",
          boxShadow:"0 2px 12px rgba(26,86,219,0.05)" }}>
          <div style={{ fontSize:10, fontWeight:700, color:T.muted, letterSpacing:"0.1em",
            textTransform:"uppercase", marginBottom:14, fontFamily:css.body }}>Contents</div>
          {[
            ["01","What is Document Intelligence?"],
            ["02","6 capabilities that protect your business"],
            ["03","Why your business needs it now"],
            ["04","Conclusion"],
          ].map(([n,l]) => (
            <div key={n} className="toc-row" style={{ display:"flex", alignItems:"center",
              gap:14, padding:"9px 10px", borderRadius:8, cursor:"pointer", margin:"2px 0" }}>
              <span style={{ fontSize:10, color:T.blue, fontWeight:700,
                minWidth:20, fontFamily:css.body }}>{n}</span>
              <span style={{ fontSize:14, color:T.ink, fontFamily:css.body }}>{l}</span>
            </div>
          ))}
        </div>

        {/* Intro */}
        <p style={{ fontSize:17, color:T.slate, lineHeight:1.85, marginBottom:20, fontFamily:css.body }}>
          In today's digital era, document fraud has become a critical concern for businesses
          across every sector. From counterfeit contracts and altered invoices to fabricated
          passports and deepfake utility bills, fraudulent documents are growing in sophistication
          faster than manual review teams can track.
        </p>

        {/* Alert callout — blue theme */}
        <div style={{ display:"flex", gap:14, alignItems:"flex-start",
          background:T.blueLight, border:`1px solid ${T.bluePale}`,
          borderRadius:14, padding:"18px 20px", margin:"0 0 32px" }}>
          <div style={{ fontSize:22, flexShrink:0, marginTop:2 }}>📄</div>
          <div>
            <div style={{ fontSize:14, fontWeight:600, color:T.blue,
              marginBottom:4, fontFamily:css.body }}>Document fraud is accelerating</div>
            <div style={{ fontSize:13, color:T.blueDark, lineHeight:1.7, fontFamily:css.body }}>
              Global document fraud losses exceeded <strong>$20 billion in 2024</strong>.
              AI-generated fake IDs and altered financial documents now account for
              <strong> 1 in 4 fraud attempts</strong> - undetectable by the human eye alone.
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <div style={{ borderLeft:`4px solid ${T.blue}`, background:T.blueLight,
          borderRadius:"0 14px 14px 0", padding:"20px 26px", margin:"0 0 32px",
          borderTop:`1px solid ${T.bluePale}`, borderRight:`1px solid ${T.bluePale}`,
          borderBottom:`1px solid ${T.bluePale}` }}>
          <p style={{ fontSize:17, color:T.blueDark, fontStyle:"italic",
            margin:0, fontFamily:css.display, lineHeight:1.7 }}>
            "Document Intelligence doesn't just read - it understands. It cross-references,
            validates, and suspects in ways no human reviewer can sustain at scale."
          </p>
          
        </div>

        {/* Stats */}
        <div className="stat-row" style={{ display:"grid",
          gridTemplateColumns:"repeat(3,1fr)", gap:16, margin:"0 0 44px" }}>
          <StatCard num="10K+" label="Supported document types" accent={T.blue}
            sub="From 195 countries"/>
          <StatCard num="94%" label="Fraud detection accuracy" accent={T.blue}
            sub="Including AI-generated fakes"/>
          <StatCard num="80%"  label="Cost reduction vs manual review" accent={T.green}
            sub="Per document processed"/>
        </div>

        {/* What is it */}
        <h2 style={{ fontFamily:css.display, fontSize:26, fontWeight:600,
          color:T.ink, margin:"0 0 14px" }}>What is Document Intelligence?</h2>
        <p style={{ fontSize:16, color:T.slate, lineHeight:1.85,
          marginBottom:32, fontFamily:css.body }}>
          Document Intelligence is the application of AI and machine learning to automatically
          analyse, extract, validate, and classify information from physical and digital documents.
          It moves beyond simple OCR - combining natural language processing, computer vision,
          and knowledge graph matching to verify documents end-to-end with audit-grade precision.
        </p>

        {/* 6 Capabilities */}
        <h2 style={{ fontFamily:css.display, fontSize:26, fontWeight:600,
          color:T.ink, margin:"0 0 10px" }}>6 capabilities that protect your business</h2>
        <p style={{ fontSize:15, color:T.muted, marginBottom:22, fontFamily:css.body }}>
          Timble Glance's Document Intelligence engine covers the full verification pipeline.
        </p>
        <div className="cap-grid" style={{ display:"grid",
          gridTemplateColumns:"repeat(3,1fr)", gap:16, margin:"0 0 48px" }}>
          {CAPABILITIES.map(c => <CapCard key={c.title} {...c}/>)}
        </div>

        {/* Why your business needs it */}
        <h2 style={{ fontFamily:css.display, fontSize:26, fontWeight:600,
          color:T.ink, margin:"0 0 10px" }}>Why your business needs it now</h2>
        <p style={{ fontSize:15, color:T.muted, marginBottom:22, fontFamily:css.body }}>
          Manual document review is no longer viable - not for the volume, velocity, or
          sophistication of fraud today.
        </p>
        <div className="reason-grid" style={{ display:"grid",
          gridTemplateColumns:"repeat(2,1fr)", gap:16, margin:"0 0 48px" }}>
          {REASONS.map(r => <ReasonCard key={r.title} {...r}/>)}
        </div>

        {/* Conclusion */}
        <div style={{ background:"linear-gradient(135deg,#EFF6FF,#DBEAFE)",
          border:`1px solid ${T.bluePale}`, borderRadius:20,
          padding:"36px 32px", margin:"0 0 56px", textAlign:"center" }}>
          <div style={{ fontSize:32, marginBottom:14 }}>📄</div>
          <h3 style={{ fontFamily:css.display, fontSize:22, fontWeight:600,
            color:T.ink, marginBottom:12 }}>Conclusion</h3>
          <p style={{ fontSize:15, color:T.slate, lineHeight:1.85,
            maxWidth:560, margin:"0 auto", fontFamily:css.body }}>
            Document Intelligence empowers businesses to combat fraud, improve operational
            efficiency, and strengthen security across every document-heavy workflow - from
            customer onboarding to contract management, lending, and compliance reporting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentIntelligence;