import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

/* ── Google Fonts ── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
  `}</style>
);

/* ── Design Tokens ── */
const T = {
  blue:        "#1A56DB",
  blueMid:     "#3B82F6",
  blueLight:   "#EFF6FF",
  bluePale:    "#DBEAFE",
  sky:         "#BAE6FD",
  ink:         "#0F1C2E",
  slate:       "#4A5568",
  muted:       "#718096",
  border:      "#E2E8F0",
  bg:          "#FAFBFF",
  white:       "#FFFFFF",
  green:       "#16A34A",
  greenLight:  "#DCFCE7",
  amber:       "#D97706",
  amberLight:  "#FEF3C7",
  violet:      "#6D28D9",
  violetLight: "#EDE9FE",
  rose:        "#E11D48",
  roseLight:   "#FFE4E6",
};

const css = {
  display: "'DM Serif Display', Georgia, serif",
  body:    "'DM Sans', sans-serif",
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
    @keyframes float {
      0%,100% { transform:translateY(0); }
      50%      { transform:translateY(-8px); }
    }
    @keyframes scanV {
      0%   { transform:translateY(0px);   opacity:0.85; }
      50%  { transform:translateY(110px); opacity:0.35; }
      100% { transform:translateY(0px);   opacity:0.85; }
    }
    @keyframes dotPulse {
      0%,100% { opacity:1; transform:scale(1); }
      50%      { opacity:0.4; transform:scale(0.85); }
    }
    @keyframes spinSlow {
      from { transform:rotate(0deg); }
      to   { transform:rotate(360deg); }
    }
    .fade-up  { animation:fadeUp  0.55s ease both; }
    .scale-in { animation:scaleIn 0.5s  ease both; }
    .d1{animation-delay:.05s} .d2{animation-delay:.15s}
    .d3{animation-delay:.25s} .d4{animation-delay:.35s}

    .feature-card:hover { border-color:${T.blueMid}; transform:translateY(-4px);
      box-shadow:0 12px 30px rgba(26,86,219,0.12); }
    .feature-card { transition:border-color .2s, transform .22s, box-shadow .22s; }

    .step-card:hover { background:${T.blueLight}; }
    .step-card { transition:background .18s; }

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
      .feature-grid     { grid-template-columns:1fr !important; }
      .rel-grid         { grid-template-columns:1fr !important; }
      .nl-row           { flex-direction:column !important; }
      .nl-input,.nl-btn { border-radius:10px !important; width:100% !important; }
      .hero-pad         { padding:52px 20px 90px !important; }
      .wrap             { padding:0 16px !important; }
      .meta-bar         { flex-direction:column; align-items:flex-start !important; gap:10px !important; }
    }
  `}</style>
);

/* ── Hero SVG — Face Match Illustration ── */
const FaceMatchIllustration = () => (
  <svg viewBox="0 0 560 300" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width:"100%", height:"100%", display:"block" }}>
    <defs>
      <pattern id="dotsFM" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.2" fill="#BFDBFE" opacity="0.5"/>
      </pattern>
      <linearGradient id="blueGFM" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1A56DB"/>
        <stop offset="100%" stopColor="#6D28D9"/>
      </linearGradient>
      <linearGradient id="greenGFM" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#22C55E"/>
        <stop offset="100%" stopColor="#16A34A"/>
      </linearGradient>
      <linearGradient id="cardGFM" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF"/>
        <stop offset="100%" stopColor="#EFF6FF"/>
      </linearGradient>
      <filter id="shFM">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#1A56DB" floodOpacity="0.15"/>
      </filter>
      <filter id="shFMsm">
        <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#000" floodOpacity="0.08"/>
      </filter>
      <clipPath id="faceClip">
        <rect x="188" y="50" width="184" height="190" rx="16"/>
      </clipPath>
    </defs>

    <rect width="560" height="300" fill="url(#dotsFM)"/>

    {/* ── Central face-scan frame ── */}
    <rect x="188" y="50" width="184" height="190" rx="16"
      fill="url(#cardGFM)" stroke="#DBEAFE" strokeWidth="1.5" filter="url(#shFM)"/>

    {/* Gradient top bar */}
    <rect x="188" y="50" width="184" height="38" rx="16" fill="url(#blueGFM)"/>
    <rect x="188" y="72" width="184" height="16" fill="url(#blueGFM)"/>
    <text x="280" y="73" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="600"
      fill="white" textAnchor="middle" letterSpacing="1">FACE MATCH AI</text>
    <circle cx="204" cy="69" r="4" fill="rgba(255,255,255,0.3)"/>
    <circle cx="216" cy="69" r="4" fill="rgba(255,255,255,0.3)"/>
    <circle cx="228" cy="69" r="4" fill="rgba(255,255,255,0.3)"/>

    {/* Face circle */}
    <circle cx="280" cy="148" r="52" fill="#EFF6FF" stroke="#DBEAFE" strokeWidth="1.5"/>
    {/* Face silhouette */}
    <ellipse cx="280" cy="138" rx="20" ry="24" fill="#93C5FD"/>
    <ellipse cx="280" cy="172" rx="32" ry="16" fill="#93C5FD" opacity="0.5"/>
    {/* Eyes */}
    <circle cx="268" cy="132" r="4" fill="#1A56DB"/>
    <circle cx="292" cy="132" r="4" fill="#1A56DB"/>
    <circle cx="269.5" cy="130.5" r="1.5" fill="white"/>
    <circle cx="293.5" cy="130.5" r="1.5" fill="white"/>
    {/* Nose */}
    <path d="M278 140 Q280 145 282 140" stroke="#60A5FA" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* Mouth */}
    <path d="M272 150 Q280 156 288 150" stroke="#60A5FA" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

    {/* Facial landmark dots */}
    {[
      [262,118],[298,118],[280,118],
      [268,132],[292,132],
      [272,150],[288,150],[280,156],
      [258,138],[302,138],
      [265,162],[295,162],[280,165],
    ].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="2" fill="#3B82F6" opacity="0.7"
        style={{ animation:`dotPulse ${1.5 + (i%3)*0.3}s ease-in-out infinite`,
          animationDelay:`${i*0.1}s` }}/>
    ))}

    {/* Landmark connection lines */}
    <polyline points="262,118 268,132 272,150 265,162 258,138 262,118"
      stroke="#BFDBFE" strokeWidth="0.8" fill="none" opacity="0.6"/>
    <polyline points="298,118 292,132 288,150 295,162 302,138 298,118"
      stroke="#BFDBFE" strokeWidth="0.8" fill="none" opacity="0.6"/>
    <line x1="262" y1="118" x2="298" y2="118" stroke="#BFDBFE" strokeWidth="0.8" opacity="0.5"/>
    <line x1="265" y1="162" x2="295" y2="162" stroke="#BFDBFE" strokeWidth="0.8" opacity="0.5"/>

    {/* Scan corners */}
    {[
      [210,90,12,0],[210,90,0,12],
      [350,90,-12,0],[350,90,0,12],
      [210,222,12,0],[210,222,0,-12],
      [350,222,-12,0],[350,222,0,-12],
    ].map(([x,y,dx,dy],i) => (
      <line key={i} x1={x} y1={y} x2={x+dx} y2={y+dy}
        stroke="#1A56DB" strokeWidth="2.5" strokeLinecap="round"/>
    ))}

    {/* Animated horizontal scan line */}
    <g clipPath="url(#faceClip)">
      <rect x="188" y="88" width="184" height="2.5" rx="1.5"
        fill="url(#blueGFM)" opacity="0.7"
        style={{ animation:"scanV 2.6s ease-in-out infinite" }}/>
    </g>

    {/* Spinning orbit ring */}
    <circle cx="280" cy="148" r="64" stroke="#DBEAFE" strokeWidth="1"
      strokeDasharray="5 6" opacity="0.6"
      style={{ transformOrigin:"280px 148px", animation:"spinSlow 20s linear infinite" }}/>

    {/* ── Left float — Confidence score ── */}
    <g style={{ animation:"float 3.4s ease-in-out infinite 0.2s" }} filter="url(#shFMsm)">
      <rect x="18" y="78" width="146" height="88" rx="14" fill="white"
        stroke="#DBEAFE" strokeWidth="1"/>
      <text x="30" y="98" fontFamily="DM Sans,sans-serif" fontSize="9" fontWeight="600"
        fill="#718096" letterSpacing="0.6">MATCH CONFIDENCE</text>
      {/* Big percent */}
      <text x="80" y="148" fontFamily="DM Serif Display,serif" fontSize="36" fontWeight="400"
        fill="#1A56DB" textAnchor="middle">99%</text>
      <text x="80" y="162" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#16A34A"
        textAnchor="middle" fontWeight="600">✓ Identity Confirmed</text>
    </g>

    {/* ── Right float — Feature points ── */}
    <g style={{ animation:"float 3.9s ease-in-out infinite 0.7s" }} filter="url(#shFMsm)">
      <rect x="396" y="64" width="148" height="108" rx="14" fill="white"
        stroke="#DBEAFE" strokeWidth="1"/>
      <text x="408" y="84" fontFamily="DM Sans,sans-serif" fontSize="9" fontWeight="600"
        fill="#718096" letterSpacing="0.6">FACIAL FEATURES</text>
      {[
        ["Eye distance","98%","#DCFCE7","#16A34A"],
        ["Jawline curve","97%","#DCFCE7","#16A34A"],
        ["Nose bridge","99%","#DCFCE7","#16A34A"],
        ["Contour map","96%","#EDE9FE","#6D28D9"],
      ].map(([label,val,bg,tc],i) => (
        <g key={label}>
          <rect x="408" y={92+i*22} width="124" height="16" rx="4" fill={bg}/>
          <text x="415" y={104+i*22} fontFamily="DM Sans,sans-serif" fontSize="8.5"
            fill="#0F1C2E">{label}</text>
          <text x="524" y={104+i*22} fontFamily="DM Sans,sans-serif" fontSize="8.5"
            fontWeight="700" fill={tc} textAnchor="middle">{val}</text>
        </g>
      ))}
    </g>

    {/* ── Bottom float — liveness check ── */}
    <g style={{ animation:"float 4.1s ease-in-out infinite 0.5s" }} filter="url(#shFMsm)">
      <rect x="172" y="258" width="216" height="36" rx="11" fill="white"
        stroke="#DBEAFE" strokeWidth="1"/>
      <circle cx="192" cy="276" r="10" fill="url(#greenGFM)"/>
      <text x="188.5" y="280.5" fontFamily="DM Sans,sans-serif" fontSize="11" fill="white">✓</text>
      <text x="209" y="272" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="600"
        fill="#0F1C2E">Liveness Detection Passed</text>
      <text x="209" y="284" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#718096">
        Anti-spoofing · 3D depth check
      </text>
    </g>

    {/* Connectors */}
    <line x1="164" y1="130" x2="188" y2="140" stroke="#BFDBFE" strokeWidth="1" strokeDasharray="3 3"/>
    <line x1="372" y1="128" x2="396" y2="118" stroke="#BFDBFE" strokeWidth="1" strokeDasharray="3 3"/>
    <line x1="280" y1="240" x2="280" y2="258" stroke="#BFDBFE" strokeWidth="1" strokeDasharray="3 3"/>

    {/* Live badge */}
    <circle cx="510" cy="36" r="6" fill="#22C55E"/>
    <circle cx="510" cy="36" r="6" fill="#22C55E" opacity="0.3">
      <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="524" y="40" fontFamily="DM Sans,sans-serif" fontSize="9"
      fill="#16A34A" fontWeight="600">Live Scan</text>
  </svg>
);

/* ── Data ── */
const HOW_STEPS = [
  { n:"01", icon:"📷", color:T.blueLight,   tc:T.blue,
    title:"Image capture",
    desc:"A high-resolution selfie or live camera feed is captured, ensuring the subject is present and the image is sharp enough for analysis." },
  { n:"02", icon:"🗺", color:T.violetLight, tc:T.violet,
    title:"Facial landmark mapping",
    desc:"The AI engine plots 128+ unique facial landmarks — eye corners, jawline contours, nose bridge, and lip geometry — to build a 3D facial map." },
  { n:"03", icon:"🔢", color:T.amberLight,  tc:T.amber,
    title:"Digital signature generation",
    desc:"Landmark coordinates are converted into a compact numerical facial signature — a mathematical fingerprint unique to every individual face." },
  { n:"04", icon:"⚖️", color:T.greenLight,  tc:T.green,
    title:"Signature comparison",
    desc:"The generated signature is compared against a reference (ID document photo or database record) using cosine similarity with a confidence threshold of 95%+." },
  { n:"05", icon:"🛡", color:T.blueLight,   tc:T.blue,
    title:"Liveness & anti-spoofing check",
    desc:"3D depth analysis and randomised motion prompts confirm the subject is physically present — blocking photo, video, and mask-based spoofing attempts." },
  { n:"06", icon:"✅", color:T.greenLight,  tc:T.green,
    title:"Verdict & audit trail",
    desc:"A pass/fail verdict is returned in under 3 seconds, along with a confidence score and a tamper-proof audit log for compliance and dispute resolution." },
];

const BENEFITS = [
  { icon:"🚫", color:T.roseLight,    tc:T.rose,   title:"Fraud prevention",
    desc:"Blocks synthetic identity attacks, deepfake videos, and impersonation attempts at the point of verification." },
  { icon:"⚡", color:T.amberLight,   tc:T.amber,  title:"Instant verification",
    desc:"Sub-3-second match results replace multi-day manual document reviews — transforming onboarding conversion rates." },
  { icon:"🎯", color:T.blueLight,    tc:T.blue,   title:"99.7% accuracy",
    desc:"Deep neural networks trained on billions of face pairs deliver industry-leading precision across ethnicities and lighting conditions." },
  { icon:"🌐", color:T.violetLight,  tc:T.violet, title:"Works globally",
    desc:"Supports 10,000+ ID document types from 195 countries — extracting and matching faces from passports, driving licences, and national IDs." },
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
  <div style={{ background:T.white, borderRadius:14, border:`1px solid ${T.border}`,
    padding:"20px 16px", textAlign:"center", boxShadow:"0 2px 10px rgba(26,86,219,0.06)" }}>
    <div style={{ fontSize:26, fontWeight:600, color:accent, fontFamily:css.display, lineHeight:1 }}>{num}</div>
    <div style={{ fontSize:12, color:T.muted, marginTop:6, fontFamily:css.body }}>{label}</div>
    {sub && <div style={{ fontSize:11, color:T.green, marginTop:4, fontWeight:500, fontFamily:css.body }}>{sub}</div>}
  </div>
);

const StepCard = ({ n, icon, color, tc, title, desc }) => (
  <div className="step-card" style={{ display:"flex", gap:16, alignItems:"flex-start",
    background:T.white, border:`1px solid ${T.border}`, borderRadius:16,
    padding:"20px 20px", boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, flexShrink:0 }}>
      <div style={{ width:46, height:46, borderRadius:12, background:color,
        display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>{icon}</div>
      <div style={{ fontSize:10, fontWeight:700, color:tc, fontFamily:css.body,
        letterSpacing:"0.06em" }}>{n}</div>
    </div>
    <div>
      <div style={{ fontSize:15, fontWeight:600, color:T.ink,
        fontFamily:css.body, marginBottom:6, lineHeight:1.3 }}>{title}</div>
      <div style={{ fontSize:13, color:T.slate, lineHeight:1.65, fontFamily:css.body }}>{desc}</div>
    </div>
  </div>
);

const BenefitCard = ({ icon, color, tc, title, desc }) => (
  <div className="feature-card" style={{ background:T.white, border:`1px solid ${T.border}`,
    borderRadius:16, padding:"22px 20px", display:"flex", flexDirection:"column", gap:12,
    boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
    <div style={{ width:46, height:46, borderRadius:12, background:color,
      display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{icon}</div>
    <div style={{ fontSize:15, fontWeight:600, color:T.ink, fontFamily:css.body }}>{title}</div>
    <div style={{ fontSize:13, color:T.slate, lineHeight:1.65, fontFamily:css.body }}>{desc}</div>
  </div>
);

const RelatedCard = ({ icon, bg1, bg2, cat, title, excerpt }) => (
  <div className="rc-card" style={{ background:T.white, border:`1px solid ${T.border}`,
    borderRadius:16, overflow:"hidden", cursor:"pointer" }}>
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
const FaceMatchTechnology = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ background:T.bg, fontFamily:css.body, minHeight:"100vh" }}>
      <FontLoader />
      <GlobalStyles />

      {/* ── HERO ── */}
      <section className="hero-pad" style={{
        background:"linear-gradient(135deg,#0A1F5C 0%,#1A56DB 45%,#6D28D9 100%)",
        padding:"68px 24px 112px", textAlign:"center",
        position:"relative", overflow:"hidden",
      }}>
        {/* Decorative orbs */}
        <div style={{ position:"absolute", top:-80, right:-80, width:300, height:300,
          borderRadius:"50%", background:"rgba(109,40,217,0.15)" }}/>
        <div style={{ position:"absolute", bottom:-60, left:-60, width:220, height:220,
          borderRadius:"50%", background:"rgba(255,255,255,0.04)" }}/>
        <div style={{ position:"absolute", top:"50%", left:"50%", width:500, height:500,
          borderRadius:"50%", background:"rgba(59,130,246,0.06)",
          transform:"translate(-50%,-50%)" }}/>

        <div className="fade-up d1" style={{ display:"inline-flex", alignItems:"center", gap:8,
          background:"rgba(255,255,255,0.14)", border:"1px solid rgba(255,255,255,0.22)",
          color:"#fff", fontSize:11, fontWeight:600, padding:"6px 16px", borderRadius:100,
          marginBottom:22, letterSpacing:"0.07em" }}>
          🧬 BIOMETRICS · AI IDENTITY
        </div>

        <h1 className="fade-up d2 hero-h1" style={{
          fontFamily:css.display, fontSize:"clamp(24px,4vw,44px)",
          fontWeight:400, color:"#fff", lineHeight:1.2,
          maxWidth:760, margin:"0 auto 18px", fontStyle:"italic",
        }}>
          How Timble Glance's Face Match Technology Works:<br/>
          <span style={{ fontStyle:"normal", color:"#C4B5FD" }}>
            The Power of AI in Identity Verification
          </span>
        </h1>

        <div className="fade-up d3" style={{ display:"flex", alignItems:"center",
          justifyContent:"center", gap:16, color:"rgba(255,255,255,0.7)",
          fontSize:13, flexWrap:"wrap", marginBottom:34 }}>
          <span>📅 December 19, 2024</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.4)", borderRadius:"50%" }}/>
          <span>⏱ 5 min read</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.4)", borderRadius:"50%" }}/>
          <span>👁 6.1k views</span>
        </div>

        
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>
        <div className="scale-in" style={{
          marginTop:-66, borderRadius:20, overflow:"hidden",
          border:`3px solid ${T.white}`,
          boxShadow:"0 20px 60px rgba(109,40,217,0.18)",
          background:"linear-gradient(135deg,#EFF6FF,#EDE9FE)",
          height:300,
        }}>
          <FaceMatchIllustration />
        </div>
      </div>

      {/* ── META BAR ── */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>
        <div className="meta-bar" style={{ display:"flex", alignItems:"center",
          justifyContent:"space-between", flexWrap:"wrap", gap:12,
          padding:"22px 0 18px", borderBottom:`1px solid ${T.border}` }}>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {["Biometrics","Face Match","AI","Identity","Security"].map(t => <Tag key={t}>{t}</Tag>)}
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
            ["01","What is Face Match technology?"],
            ["02","How Timble Glance's AI works - step by step"],
            ["03","Key benefits for businesses"],
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
        <p style={{ fontSize:17, color:T.slate, lineHeight:1.8, marginBottom:20, fontFamily:css.body }}>
          In today's digital world, ensuring users are who they claim to be is crucial. Timble
          Glance's Face Match technology leverages the power of artificial intelligence to
          streamline identity verification - delivering results in under 3 seconds with
          industry-leading accuracy.
        </p>

        {/* Pull quote — violet theme */}
        <div style={{ borderLeft:`4px solid ${T.violet}`, background:T.violetLight,
          borderRadius:"0 14px 14px 0", padding:"18px 24px", margin:"0 0 32px",
          borderTop:`1px solid #DDD6FE`, borderRight:`1px solid #DDD6FE`,
          borderBottom:`1px solid #DDD6FE` }}>
          <p style={{ fontSize:16, color:"#4C1D95", fontStyle:"italic",
            margin:0, fontFamily:css.display, lineHeight:1.65 }}>
            "A face is a mathematical map. Our AI doesn't see a person - it sees 128 data points,
            a digital fingerprint that cannot be forged, replicated, or borrowed."
          </p>
        
        </div>

        {/* Stats */}
        <div className="stat-row" style={{ display:"grid",
          gridTemplateColumns:"repeat(3,1fr)", gap:14, margin:"0 0 40px" }}>
          <StatCard num="99.7%" label="Face match accuracy" accent={T.violet} sub="Across all ethnicities"/>
          <StatCard num="<3s"   label="End-to-end verification time" accent={T.blue} sub="Including liveness check"/>
          <StatCard num="128+"  label="Facial landmarks analysed" accent={T.green} sub="Per face scan"/>
        </div>

        {/* What is section */}
        <h2 style={{ fontFamily:css.display, fontSize:24, fontWeight:400, color:T.ink, margin:"0 0 14px" }}>
          What is Face Match technology?
        </h2>
        <p style={{ fontSize:16, color:T.slate, lineHeight:1.8, marginBottom:20, fontFamily:css.body }}>
          Face Match technology uses AI-driven algorithms to compare facial images in real time.
          By analysing unique facial features - eye distance, jawline curve, nose bridge geometry,
          and contour mapping - it confirms a user's identity instantly and with a confidence
          score that human reviewers cannot match for speed or consistency.
        </p>

        {/* How it works — 6 steps */}
        <h2 style={{ fontFamily:css.display, fontSize:24, fontWeight:400, color:T.ink, margin:"32px 0 10px" }}>
          How Timble Glance's AI works - step by step
        </h2>
        <p style={{ fontSize:15, color:T.muted, marginBottom:22, fontFamily:css.body }}>
          From image capture to verified verdict, here's exactly what happens inside the pipeline.
        </p>
        <div style={{ display:"flex", flexDirection:"column", gap:12, margin:"0 0 44px" }}>
          {HOW_STEPS.map(s => <StepCard key={s.n} {...s}/>)}
        </div>

        {/* Benefits grid */}
        <h2 style={{ fontFamily:css.display, fontSize:24, fontWeight:400, color:T.ink, margin:"0 0 10px" }}>
          Key benefits for businesses
        </h2>
        <p style={{ fontSize:15, color:T.muted, marginBottom:22, fontFamily:css.body }}>
          Face Match delivers measurable impact across fraud prevention, onboarding, and compliance.
        </p>
        <div className="feature-grid" style={{ display:"grid",
          gridTemplateColumns:"repeat(2,1fr)", gap:14, margin:"0 0 44px" }}>
          {BENEFITS.map(b => <BenefitCard key={b.title} {...b}/>)}
        </div>

        {/* Conclusion */}
        <div style={{ background:"linear-gradient(135deg,#EFF6FF,#EDE9FE)",
          border:`1px solid ${T.bluePale}`, borderRadius:18,
          padding:"32px 28px", margin:"0 0 48px", textAlign:"center" }}>
          <div style={{ fontSize:30, marginBottom:12 }}>🧬</div>
          <h3 style={{ fontFamily:css.display, fontSize:21, fontWeight:400,
            color:T.ink, marginBottom:10 }}>Conclusion</h3>
          <p style={{ fontSize:15, color:T.slate, lineHeight:1.8,
            maxWidth:560, margin:"0 auto", fontFamily:css.body }}>
            Face Match technology is transforming digital identity verification with speed, accuracy,
            and reliability - helping businesses secure transactions, reduce fraud, and deliver the
            seamless onboarding experience that modern customers demand.
          </p>
        </div>
      </div>

    

  
  

    </div>
  );
};

export default FaceMatchTechnology;