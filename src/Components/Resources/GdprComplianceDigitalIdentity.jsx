import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiCalendar, FiClock, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

/* ── Google Fonts ── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
  `}</style>
);

/* ── Design Tokens ── */
const T = {
  blue:      "#1A56DB",
  blueMid:   "#3B82F6",
  blueLight: "#EFF6FF",
  bluePale:  "#DBEAFE",
  sky:       "#BAE6FD",
  ink:       "#0F1C2E",
  slate:     "#4A5568",
  muted:     "#718096",
  border:    "#E2E8F0",
  bg:        "#FAFBFF",
  white:     "#FFFFFF",
  green:     "#16A34A",
  greenLight:"#DCFCE7",
  amber:     "#D97706",
  amberLight:"#FEF3C7",
};

const css = {
  display: "'DM Serif Display', Georgia, serif",
  body:    "'DM Sans', sans-serif",
};

/* ── Global Animations ── */
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
    @keyframes float {
      0%,100% { transform:translateY(0); }
      50%      { transform:translateY(-7px); }
    }
    @keyframes floatY {
      0%,100% { transform:translateY(0px); }
      50%      { transform:translateY(-10px); }
    }
    @keyframes floatY2 {
      0%,100% { transform:translateY(0px); }
      50%      { transform:translateY(-7px); }
    }
    @keyframes rotateRing {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes rotateRingRev {
      from { transform: rotate(0deg); }
      to   { transform: rotate(-360deg); }
    }
    @keyframes blink {
      0%,100% { opacity:1; }
      50%      { opacity:0.4; }
    }
    @keyframes particleFloat {
      0%   { transform: translateY(0px) translateX(0px); opacity:0.7; }
      33%  { transform: translateY(-18px) translateX(6px); opacity:1; }
      66%  { transform: translateY(-8px) translateX(-5px); opacity:0.5; }
      100% { transform: translateY(0px) translateX(0px); opacity:0.7; }
    }
    @keyframes checkDraw {
      from { stroke-dashoffset:30; }
      to   { stroke-dashoffset:0; }
    }
    @keyframes lockBounce {
      0%,100% { transform:translateY(0); }
      40%      { transform:translateY(-4px); }
      60%      { transform:translateY(-2px); }
    }
    @keyframes tagSlide {
      from { opacity:0; transform:translateX(-16px); }
      to   { opacity:1; transform:translateX(0); }
    }
    @keyframes scanLine {
      0%   { opacity:0.8; }
      100% { opacity:0; }
    }

    .fade-up  { animation: fadeUp  0.55s ease both; }
    .scale-in { animation: scaleIn 0.5s  ease both; }
    .d1{animation-delay:0.05s} .d2{animation-delay:0.15s}
    .d3{animation-delay:0.25s} .d4{animation-delay:0.35s}
    .d5{animation-delay:0.45s}

    .rc-card:hover { transform:translateY(-5px); box-shadow:0 14px 36px rgba(26,86,219,0.13); }
    .rc-card { transition: transform .25s ease, box-shadow .25s ease; }

    .toc-row:hover { background:${T.blueLight}; padding-left:18px; }
    .toc-row { transition: background .15s, padding-left .15s; }

    .social-ic:hover { background:${T.blueLight}; border-color:${T.blueMid}; color:${T.blue}; }
    .social-ic { transition: background .2s, border-color .2s, color .2s; }

    .nl-btn:hover { background:#1240B5; }
    .nl-btn { transition: background .2s; }

    .tag-pill:hover { background:${T.blueMid}; color:#fff; }
    .tag-pill { transition: background .2s, color .2s; }

    .principle-card:hover { border-color:${T.blueMid}; box-shadow:0 4px 20px rgba(26,86,219,0.1); }
    .principle-card { transition: border-color .2s, box-shadow .2s; }

    /* Hero badge dot pulse */
    .hero-badge-dot::after {
      content:'';
      position:absolute;
      inset:-3px;
      border-radius:50%;
      background:#4ADE80;
      opacity:0.3;
      animation: blink 1.6s ease-in-out infinite;
    }

    @media(max-width:680px){
      .hero-h1  { font-size:24px !important; }
      .meta-bar { flex-direction:column; align-items:flex-start !important; gap:10px !important; }
      .stat-row { grid-template-columns:1fr 1fr !important; }
      .principle-grid { grid-template-columns:1fr !important; }
      .rel-grid { grid-template-columns:1fr !important; }
      .nl-row   { flex-direction:column !important; }
      .nl-input,.nl-btn { border-radius:10px !important; width:100% !important; }
      .hero-pad { padding:48px 16px 72px !important; }
      .wrap     { padding:0 16px !important; }
    }
  `}</style>
);

/* ── Enhanced SVG Hero Illustration ── */
const GdprIllustration = () => (
  <svg
    viewBox="0 0 860 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <defs>
      {/* Shield gradient */}
      <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      {/* Shield inner glow */}
      <radialGradient id="shieldGlow" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
      </radialGradient>
      {/* Card gradient */}
      <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.13)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
      </linearGradient>
      {/* Data beam gradients */}
      <linearGradient id="beam1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
        <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="beam2" x1="1" y1="0" x2="0" y2="0">
        <stop offset="0%" stopColor="#34D399" stopOpacity="0" />
        <stop offset="50%" stopColor="#34D399" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
      </linearGradient>
      {/* Clip path for shield inner scan */}
      <clipPath id="shieldClip">
        <path d="M430 20 L480 42 L480 102 Q480 148 430 172 Q380 148 380 102 L380 42 Z" />
      </clipPath>
      <filter id="softGlow">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* ── Outer rotating dashed ring ── */}
    <g style={{ transformOrigin: "430px 96px", animation: "rotateRing 22s linear infinite" }}>
      <circle cx="430" cy="96" r="100" stroke="rgba(99,130,255,0.25)" strokeWidth="1" strokeDasharray="5 8" fill="none" />
    </g>
    {/* Inner counter-rotating ring */}
    <g style={{ transformOrigin: "430px 96px", animation: "rotateRingRev 14s linear infinite" }}>
      <circle cx="430" cy="96" r="74" stroke="rgba(96,165,250,0.3)" strokeWidth="0.75" strokeDasharray="3 5" fill="none" />
    </g>

    {/* Pulse ring */}
    <circle cx="430" cy="96" r="56" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5">
      <animate attributeName="r" values="56;90;56" dur="3.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0;1" dur="3.5s" repeatCount="indefinite" />
    </circle>

    {/* ── EU star nodes orbiting ── */}
    <g style={{ transformOrigin: "430px 96px", animation: "rotateRing 22s linear infinite" }}>
      <circle cx="430" cy="-4" r="4" fill="#FCD34D" />
      <circle cx="501" cy="26" r="3" fill="#FCD34D" opacity="0.8" />
      <circle cx="530" cy="96" r="4" fill="#FCD34D" />
      <circle cx="501" cy="166" r="3" fill="#FCD34D" opacity="0.8" />
      <circle cx="430" cy="196" r="4" fill="#FCD34D" />
      <circle cx="359" cy="166" r="3" fill="#FCD34D" opacity="0.8" />
      <circle cx="330" cy="96" r="4" fill="#FCD34D" />
      <circle cx="359" cy="26" r="3" fill="#FCD34D" opacity="0.8" />
    </g>

    {/* ── Central Shield ── */}
    <g style={{ animation: "floatY 4s ease-in-out infinite" }} filter="url(#softGlow)">
      <ellipse cx="430" cy="108" rx="50" ry="30" fill="rgba(59,130,246,0.2)" />
      <path
        d="M430 20 L480 42 L480 102 Q480 148 430 172 Q380 148 380 102 L380 42 Z"
        fill="url(#sg)"
        stroke="rgba(147,197,253,0.5)"
        strokeWidth="1.5"
      />
      <path
        d="M430 20 L480 42 L480 102 Q480 148 430 172 Q380 148 380 102 L380 42 Z"
        fill="url(#shieldGlow)"
        clipPath="url(#shieldClip)"
      />
      {/* Scan line inside shield */}
      <g clipPath="url(#shieldClip)">
        <rect x="380" y="20" width="100" height="12" fill="rgba(147,197,253,0.12)">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;0,160;0,0"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      {/* Lock body */}
      <rect x="410" y="90" width="40" height="32" rx="6" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      {/* Lock shackle */}
      <path
        d="M416 90 L416 80 Q416 66 430 66 Q444 66 444 80 L444 90"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        style={{ animation: "lockBounce 3s ease-in-out infinite" }}
      />
      {/* Keyhole */}
      <circle cx="430" cy="104" r="5" fill="rgba(255,255,255,0.9)" />
      <rect x="427.5" y="104" width="5" height="9" rx="2" fill="rgba(255,255,255,0.9)" />
    </g>

    {/* ── Data beam lines ── */}
    <line x1="175" y1="96" x2="380" y2="96" stroke="url(#beam1)" strokeWidth="1.5" />
    <line x1="480" y1="96" x2="685" y2="96" stroke="url(#beam2)" strokeWidth="1.5" />

    {/* Moving data dots — left side */}
    {[0, 0.6, 1.2].map((delay, i) => (
      <circle key={i} cx="0" cy="96" r="3" fill="#60A5FA" opacity="0.9">
        <animate attributeName="cx" values="120;378" dur="1.8s" repeatCount="indefinite" begin={`${delay}s`} />
        <animate attributeName="opacity" values="0;0.9;0" dur="1.8s" repeatCount="indefinite" begin={`${delay}s`} />
      </circle>
    ))}
    {/* Moving data dots — right side */}
    {[0.3, 1].map((delay, i) => (
      <circle key={i} cx="0" cy="96" r="3" fill="#34D399" opacity="0.9">
        <animate attributeName="cx" values="482;690" dur="1.6s" repeatCount="indefinite" begin={`${delay}s`} />
        <animate attributeName="opacity" values="0;0.9;0" dur="1.6s" repeatCount="indefinite" begin={`${delay}s`} />
      </circle>
    ))}

    {/* ── LEFT CARD — Data Source ── */}
    <g style={{ animation: "floatY2 5s ease-in-out infinite 0.8s" }}>
      <rect x="20" y="30" width="148" height="132" rx="16" fill="rgba(59,130,246,0.12)" />
      <rect x="24" y="34" width="140" height="124" rx="14" fill="url(#cg)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <rect x="24" y="34" width="140" height="36" rx="14" fill="rgba(255,255,255,0.08)" />
      <rect x="24" y="56" width="140" height="14" fill="rgba(255,255,255,0.08)" />
      {/* DB icon */}
      <ellipse cx="50" cy="48" rx="9" ry="4" fill="rgba(147,197,253,0.6)" />
      <rect x="41" y="48" width="18" height="8" fill="rgba(147,197,253,0.4)" />
      <ellipse cx="50" cy="56" rx="9" ry="4" fill="rgba(147,197,253,0.5)" />
      <text fontFamily="DM Sans,sans-serif" fontSize="9.5" fontWeight="600" fill="#93C5FD" letterSpacing="0.5" x="68" y="52">
        DATA SOURCE
      </text>
      <rect x="38" y="82" width="90" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="38" y="94" width="70" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
      <rect x="38" y="106" width="80" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="38" y="120" width="52" height="18" rx="6" fill="rgba(74,222,128,0.2)" stroke="rgba(74,222,128,0.4)" strokeWidth="0.75" />
      <text fontFamily="DM Sans,sans-serif" fontSize="8" fontWeight="600" fill="#4ADE80" x="44" y="132">
        🔒 AES-256
      </text>
      <circle cx="148" cy="38" r="3" fill="#FCD34D" opacity="0.8" style={{ animation: "particleFloat 3.2s ease-in-out infinite 0.4s" }} />
    </g>

    {/* ── RIGHT CARD — Verified ── */}
    <g style={{ animation: "floatY2 4.5s ease-in-out infinite 1.2s" }}>
      <rect x="692" y="30" width="148" height="132" rx="16" fill="rgba(52,211,153,0.12)" />
      <rect x="696" y="34" width="140" height="124" rx="14" fill="url(#cg)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <rect x="696" y="34" width="140" height="36" rx="14" fill="rgba(255,255,255,0.08)" />
      <rect x="696" y="56" width="140" height="14" fill="rgba(255,255,255,0.08)" />
      {/* Check icon */}
      <circle cx="718" cy="49" r="9" fill="rgba(52,211,153,0.3)" stroke="rgba(52,211,153,0.6)" strokeWidth="1" />
      <path
        d="M713 49 L717 53 L724 44"
        stroke="#4ADE80"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ strokeDasharray: 30, strokeDashoffset: 30, animation: "checkDraw 0.6s ease 1s both" }}
      />
      <text fontFamily="DM Sans,sans-serif" fontSize="9.5" fontWeight="600" fill="#34D399" letterSpacing="0.5" x="732" y="52">
        VERIFIED ID
      </text>
      <text fontFamily="DM Sans,sans-serif" fontSize="8" fill="rgba(255,255,255,0.5)" x="710" y="80">Identity Score</text>
      <rect x="710" y="84" width="112" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="710" y="84" width="98" height="6" rx="3" fill="#34D399" />
      <text fontFamily="DM Sans,sans-serif" fontSize="8" fill="rgba(255,255,255,0.5)" x="710" y="102">Trust Level</text>
      <rect x="710" y="106" width="112" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="710" y="106" width="85" height="6" rx="3" fill="#60A5FA" />
      <rect x="710" y="120" width="58" height="18" rx="6" fill="rgba(147,197,253,0.2)" stroke="rgba(147,197,253,0.4)" strokeWidth="0.75" />
      <text fontFamily="DM Sans,sans-serif" fontSize="8" fontWeight="600" fill="#93C5FD" x="716" y="132">✓ GDPR OK</text>
      <circle cx="696" cy="42" r="2.5" fill="#4ADE80" opacity="0.7" style={{ animation: "particleFloat 3.8s ease-in-out infinite 1s" }} />
    </g>

    {/* ── BOTTOM CARD — Consent ── */}
    <g style={{ animation: "floatY 5s ease-in-out infinite 0.4s" }}>
      <rect x="275" y="206" width="310" height="84" rx="16" fill="rgba(139,92,246,0.12)" />
      <rect x="279" y="210" width="302" height="76" rx="14" fill="url(#cg)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <rect x="293" y="224" width="36" height="36" rx="10" fill="rgba(139,92,246,0.3)" stroke="rgba(139,92,246,0.5)" strokeWidth="0.75" />
      <text fontFamily="DM Sans,sans-serif" fontSize="18" x="296" y="248">🛡️</text>
      <text fontFamily="DM Sans,sans-serif" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.9)" x="337" y="236">
        GDPR Consent Active
      </text>
      <text fontFamily="DM Sans,sans-serif" fontSize="9" fill="rgba(255,255,255,0.45)" x="337" y="249">
        User rights protected · Data minimized
      </text>
      {/* Toggle */}
      <rect x="337" y="258" width="44" height="18" rx="9" fill="#1A56DB" />
      <circle cx="372" cy="267" r="7" fill="white" />
      <text fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#4ADE80" fontWeight="600" x="391" y="271">Enabled</text>
      {/* Live ping */}
      <circle cx="552" cy="228" r="5" fill="#4ADE80" />
      <circle cx="552" cy="228" r="5" fill="#4ADE80" opacity="0.3">
        <animate attributeName="r" values="5;13;5" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <text fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#4ADE80" fontWeight="600" x="562" y="231">LIVE</text>
      {/* Particles */}
      <circle cx="560" cy="260" r="2" fill="#FCD34D" opacity="0.6" style={{ animation: "particleFloat 4.1s ease-in-out infinite 0.7s" }} />
      <circle cx="285" cy="218" r="2" fill="#60A5FA" opacity="0.5" style={{ animation: "particleFloat 3.5s ease-in-out infinite 1.5s" }} />
    </g>

    {/* Connector lines */}
    <path d="M430 172 Q430 192 430 210" stroke="rgba(147,197,253,0.35)" strokeWidth="1" strokeDasharray="3 4" fill="none" />
    <path d="M164 96 L175 96" stroke="rgba(147,197,253,0.35)" strokeWidth="1" strokeDasharray="2 3" fill="none" />
    <path d="M685 96 L696 96" stroke="rgba(52,211,153,0.35)" strokeWidth="1" strokeDasharray="2 3" fill="none" />

    {/* Ambient floating particles */}
    <circle cx="240" cy="55" r="2" fill="#FCD34D" opacity="0.5" style={{ animation: "particleFloat 4s ease-in-out infinite 0.2s" }} />
    <circle cx="620" cy="60" r="1.5" fill="#60A5FA" opacity="0.6" style={{ animation: "particleFloat 3.6s ease-in-out infinite 1.8s" }} />
    <circle cx="180" cy="155" r="2" fill="#34D399" opacity="0.4" style={{ animation: "particleFloat 5s ease-in-out infinite 0.9s" }} />
    <circle cx="670" cy="160" r="2" fill="#A78BFA" opacity="0.5" style={{ animation: "particleFloat 4.5s ease-in-out infinite 0.5s" }} />
    <circle cx="350" cy="30" r="1.5" fill="#F9A8D4" opacity="0.4" style={{ animation: "particleFloat 3.8s ease-in-out infinite 2.2s" }} />
    <circle cx="500" cy="25" r="2" fill="#FCD34D" opacity="0.5" style={{ animation: "particleFloat 4.2s ease-in-out infinite 1.1s" }} />
  </svg>
);

/* ── Sub-components ── */
const Tag = ({ children }) => (
  <span className="tag-pill" style={{
    display:"inline-flex", alignItems:"center", gap:5,
    background:T.blueLight, color:T.blue, fontSize:12, fontWeight:500,
    padding:"5px 13px", borderRadius:100, border:`1px solid ${T.bluePale}`,
    cursor:"default", fontFamily:css.body,
  }}>{children}</span>
);

const StatCard = ({ num, label, sub }) => (
  <div style={{
    background:T.white, borderRadius:14, border:`1px solid ${T.border}`,
    padding:"20px 16px", textAlign:"center",
    boxShadow:"0 2px 10px rgba(26,86,219,0.06)",
  }}>
    <div style={{ fontSize:28, fontWeight:600, color:T.blue,
      fontFamily:css.display, lineHeight:1 }}>{num}</div>
    <div style={{ fontSize:12, color:T.muted, marginTop:6, fontFamily:css.body }}>{label}</div>
    {sub && <div style={{ fontSize:11, color:T.green, marginTop:4,
      fontWeight:500, fontFamily:css.body }}>{sub}</div>}
  </div>
);

const PrincipleCard = ({ icon, title, desc, color = T.blueLight }) => (
  <div className="principle-card" style={{
    background:T.white, border:`1px solid ${T.border}`, borderRadius:14,
    padding:"22px 20px", display:"flex", flexDirection:"column", gap:10,
    boxShadow:"0 2px 6px rgba(0,0,0,0.04)",
  }}>
    <div style={{ width:42, height:42, borderRadius:10, background:color,
      display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>{icon}</div>
    <div style={{ fontSize:14, fontWeight:600, color:T.ink, fontFamily:css.body }}>{title}</div>
    <div style={{ fontSize:13, color:T.slate, lineHeight:1.65, fontFamily:css.body }}>{desc}</div>
  </div>
);

const RightCard = ({ icon, bg, title, desc }) => (
  <div style={{
    display:"flex", gap:14, alignItems:"flex-start",
    background:T.white, border:`1px solid ${T.border}`, borderRadius:14,
    padding:"18px 20px", boxShadow:"0 2px 8px rgba(0,0,0,0.04)",
  }}>
    <div style={{ width:40, height:40, borderRadius:10, background:bg, flexShrink:0,
      display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>{icon}</div>
    <div>
      <div style={{ fontSize:14, fontWeight:600, color:T.ink,
        fontFamily:css.body, marginBottom:4 }}>{title}</div>
      <div style={{ fontSize:13, color:T.slate, lineHeight:1.6, fontFamily:css.body }}>{desc}</div>
    </div>
  </div>
);

const RelatedCard = ({ icon, bg1, bg2, cat, title, excerpt }) => (
  <div className="rc-card" style={{
    background:T.white, border:`1px solid ${T.border}`, borderRadius:16,
    overflow:"hidden", cursor:"pointer",
  }}>
    <div style={{ height:150, background:`linear-gradient(135deg,${bg1},${bg2})`,
      display:"flex", alignItems:"center", justifyContent:"center", fontSize:38 }}>
      {icon}
    </div>
    <div style={{ padding:"18px 18px 20px" }}>
      <div style={{ fontSize:10, color:T.blue, fontWeight:600, letterSpacing:"0.07em",
        textTransform:"uppercase", marginBottom:7, fontFamily:css.body }}>{cat}</div>
      <div style={{ fontSize:15, fontWeight:500, color:T.ink, lineHeight:1.4,
        marginBottom:8, fontFamily:css.display }}>{title}</div>
      <div style={{ fontSize:12, color:T.muted, lineHeight:1.6,
        marginBottom:12, fontFamily:css.body }}>{excerpt}</div>
      <div style={{ fontSize:13, color:T.blue, fontWeight:500, display:"flex",
        alignItems:"center", gap:4, fontFamily:css.body }}>Read more <span>→</span></div>
    </div>
  </div>
);

/* ── Main Component ── */
const GdprComplianceDigitalIdentity = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ background:T.bg, fontFamily:css.body, minHeight:"100vh" }}>
      <FontLoader />
      <GlobalStyles />

      {/* ── HERO ── */}
      <section
        className="hero-pad"
        style={{
          background: "linear-gradient(145deg, #040E2B 0%, #0A1F5C 30%, #1A3A99 65%, #2563EB 100%)",
          padding: "68px 24px 88px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <svg
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="gridpat" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0L0 0L0 60" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridpat)" />
        </svg>

        {/* Radial glow orbs */}
        <div style={{
          position:"absolute", width:500, height:500, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
          top:-120, right:-80, pointerEvents:"none",
        }}/>
        <div style={{
          position:"absolute", width:380, height:380, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)",
          bottom:-100, left:-60, pointerEvents:"none",
        }}/>

        {/* GDPR badge with live dot */}
        <div
          className="fade-up d1"
          style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)",
            color:"#93C5FD", fontSize:11, fontWeight:600, padding:"7px 18px",
            borderRadius:100, marginBottom:24, letterSpacing:"0.1em",
          }}
        >
          <span style={{
            width:7, height:7, borderRadius:"50%", background:"#4ADE80",
            position:"relative", display:"inline-block",
          }}
            className="hero-badge-dot"
          />
          GDPR &amp; COMPLIANCE
        </div>

        <h1
          className="fade-up d2 hero-h1"
          style={{
            fontFamily:css.display,
            fontSize:"clamp(24px,4vw,40px)",
            fontWeight:400, color:"#fff", lineHeight:1.22,
            maxWidth:700, margin:"0 auto 16px", fontStyle:"italic",
          }}
        >
          The Importance of GDPR Compliance<br />
          <span style={{ fontStyle:"normal", color:"#93C5FD" }}>
            in Digital Identity Verification
          </span>
        </h1>

        <div
          className="fade-up d3"
          style={{
            display:"flex", alignItems:"center", justifyContent:"center",
            gap:14, color:"rgba(255,255,255,0.6)", fontSize:13,
            flexWrap:"wrap", marginBottom:44,
          }}
        >
          <span>📅 December 30, 2024</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.3)", borderRadius:"50%" }}/>
          <span>⏱ 6 min read</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.3)", borderRadius:"50%" }}/>
          <span>👁 3.1k views</span>
        </div>

        {/* ── Enhanced illustration ── */}
        <div
          className="fade-up d4"
          style={{ maxWidth:860, margin:"0 auto 32px", position:"relative" }}
        >
          <GdprIllustration />
        </div>

        {/* Tags row inside hero */}
        <div
          className="fade-up d5"
          style={{ display:"flex", gap:8, flexWrap:"wrap", justifyContent:"center" }}
        >
          {["🛡 GDPR","🔒 Privacy","✅ Compliance","🪪 Digital Identity"].map((t, i) => (
            <span
              key={t}
              style={{
                background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)",
                color:"rgba(255,255,255,0.75)", fontSize:12, fontWeight:500,
                padding:"6px 14px", borderRadius:100,
                animation:`tagSlide 0.4s ease ${0.5 + i * 0.1}s both`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── META BAR ── */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>
        <div
          className="meta-bar"
          style={{
            display:"flex", alignItems:"center", justifyContent:"space-between",
            flexWrap:"wrap", gap:12,
            padding:"22px 0 18px", borderBottom:`1px solid ${T.border}`,
          }}
        >
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {["GDPR","Privacy","Compliance","Identity"].map(t => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>

        {/* Table of Contents */}
        <div style={{
          background:T.white, border:`1px solid ${T.border}`, borderRadius:16,
          padding:"20px 22px", margin:"28px 0 32px",
          boxShadow:"0 2px 12px rgba(26,86,219,0.05)",
        }}>
          <div style={{ fontSize:10, fontWeight:700, color:T.muted, letterSpacing:"0.1em",
            textTransform:"uppercase", marginBottom:14, fontFamily:css.body }}>Contents</div>
          {[
            ["01","What is GDPR and why does it matter?"],
            ["02","How digital identity verification and GDPR work together"],
            ["03","Core GDPR principles in practice"],
            ["04","Transparency, consent & user rights"],
            ["05","Conclusion"],
          ].map(([n,l]) => (
            <div key={n} className="toc-row" style={{
              display:"flex", alignItems:"center", gap:14,
              padding:"9px 10px", borderRadius:8, cursor:"pointer", margin:"2px 0",
            }}>
              <span style={{ fontSize:10, color:T.blue, fontWeight:700,
                minWidth:20, fontFamily:css.body }}>{n}</span>
              <span style={{ fontSize:14, color:T.ink, fontFamily:css.body }}>{l}</span>
            </div>
          ))}
        </div>

        {/* Prose */}
        <p style={{ fontSize:17, color:T.slate, lineHeight:1.8,
          marginBottom:22, fontFamily:css.body }}>
          In today's digital age, the General Data Protection Regulation (GDPR) serves as the
          cornerstone of data privacy law, making it imperative for businesses to adhere to its
          regulations - especially when handling digital identities at scale.
        </p>

        {/* Pull quote */}
        <div style={{
          borderLeft:`4px solid ${T.blue}`, background:T.blueLight,
          borderRadius:"0 12px 12px 0", padding:"18px 24px", margin:"28px 0",
          border:`1px solid ${T.bluePale}`, borderLeft:`4px solid ${T.blue}`,
        }}>
          <p style={{ fontSize:16, color:"#1E40AF", fontStyle:"italic",
            margin:0, fontFamily:css.display, lineHeight:1.6 }}>
            "Non-compliance with GDPR can result in fines of up to €20 million - or 4% of a
            company's global annual turnover, whichever is higher."
          </p>
           
        </div>

        {/* Stats */}
        <div className="stat-row" style={{ display:"grid",
          gridTemplateColumns:"repeat(3,1fr)", gap:14, margin:"32px 0 36px" }}>
<StatCard 
  num="3s" 
  label="Avg. verification time" 
  sub="From minutes to seconds"
/>          <StatCard num="72h" label="Breach notification window" sub="Mandatory reporting"/>
          <StatCard num="94%" label="Users demand transparency" sub="2024 privacy survey"/>
        </div>

        <h2 style={{ fontFamily:css.display, fontSize:24, fontWeight:400,
          color:T.ink, margin:"36px 0 14px" }}>
          What is GDPR and why does it matter?
        </h2>
        <p style={{ fontSize:16, color:T.slate, lineHeight:1.8,
          marginBottom:20, fontFamily:css.body }}>
          GDPR is a regulatory framework that governs the processing of personal data of EU citizens,
          regardless of where the processing organization is based. Its primary objective is to
          safeguard individuals' privacy rights and ensure that businesses handle personal data with
          the highest standards of security and accountability.
        </p>

        <h2 style={{ fontFamily:css.display, fontSize:24, fontWeight:400,
          color:T.ink, margin:"36px 0 14px" }}>
          Core GDPR principles in practice
        </h2>
        <p style={{ fontSize:16, color:T.slate, lineHeight:1.8,
          marginBottom:20, fontFamily:css.body }}>
          Six foundational principles underpin every GDPR-compliant identity verification flow -
          from initial data capture through to deletion.
        </p>

        <div className="principle-grid" style={{ display:"grid",
          gridTemplateColumns:"repeat(3,1fr)", gap:14, margin:"20px 0 36px" }}>
          <PrincipleCard icon="🎯" title="Data minimization"
            desc="Collect only the data strictly necessary for the verification task - nothing more."
            color={T.blueLight}/>
          <PrincipleCard icon="🔐" title="Secure processing"
            desc="End-to-end encryption and MFA protect personal data throughout the pipeline."
            color={T.greenLight}/>
          <PrincipleCard icon="📋" title="Purpose limitation"
            desc="Data collected for identity verification cannot be repurposed for marketing or profiling."
            color={T.amberLight}/>
          <PrincipleCard icon="🗓" title="Storage limitation"
            desc="Data must be deleted or anonymized once the verification purpose is fulfilled."
            color={T.blueLight}/>
          <PrincipleCard icon="✅" title="Accuracy"
            desc="Organizations must ensure identity data stays accurate and updated on request."
            color={T.greenLight}/>
          <PrincipleCard icon="⚖️" title="Accountability"
            desc="Documented policies, DPIAs, and audit trails demonstrate compliance to regulators."
            color={T.amberLight}/>
        </div>

        <h2 style={{ fontFamily:css.display, fontSize:24, fontWeight:400,
          color:T.ink, margin:"36px 0 14px" }}>
          Transparency, consent &amp; user rights
        </h2>
        <p style={{ fontSize:16, color:T.slate, lineHeight:1.8,
          marginBottom:20, fontFamily:css.body }}>
          GDPR places the individual at the centre of data processing. Users are entitled to know
          exactly what data is collected, for what purpose, and for how long - and to withdraw
          consent at any time without penalty.
        </p>

        <div style={{ display:"flex", flexDirection:"column", gap:12, margin:"20px 0 36px" }}>
          <RightCard icon="👁" bg={T.blueLight} title="Right to access"
            desc="Users can request a full copy of their personal data held by your organization at any time."/>
          <RightCard icon="🗑" bg="#FEE2E2" title="Right to erasure"
            desc="The 'right to be forgotten' - users can demand deletion of their data, subject to legal exceptions."/>
          <RightCard icon="✏️" bg={T.greenLight} title="Right to rectification"
            desc="Inaccurate or incomplete personal data must be corrected promptly upon user request."/>
          <RightCard icon="📦" bg={T.amberLight} title="Right to data portability"
            desc="Users can receive and transfer their data in a machine-readable format to another provider."/>
        </div>

        {/* Conclusion */}
        <div style={{
          background:"linear-gradient(135deg,#EFF6FF,#E0F2FE)",
          border:`1px solid ${T.bluePale}`, borderRadius:18,
          padding:"32px 30px", margin:"8px 0 48px", textAlign:"center",
        }}>
          <div style={{ fontSize:30, marginBottom:12 }}>🛡️</div>
          <h3 style={{ fontFamily:css.display, fontSize:21, fontWeight:400,
            color:T.ink, marginBottom:10 }}>Conclusion</h3>
          <p style={{ fontSize:15, color:T.slate, lineHeight:1.8,
            maxWidth:560, margin:"0 auto", fontFamily:css.body }}>
            GDPR compliance is not merely a legal checkbox - it is the foundation of customer trust.
            By integrating privacy-by-design into identity verification workflows, organizations
            uphold individual rights while fortifying their data security posture for the long term.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GdprComplianceDigitalIdentity;