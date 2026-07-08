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
  red:       "#DC2626",
  redLight:  "#FEE2E2",
  green:     "#16A34A",
  greenLight:"#DCFCE7",
  amber:     "#D97706",
  amberLight:"#FEF3C7",
  purple:    "#7C3AED",
  purpleLight:"#EDE9FE",
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
    @keyframes scanLine {
      0%   { transform:translateY(0); opacity:0.8; }
      50%  { transform:translateY(120px); opacity:0.4; }
      100% { transform:translateY(0); opacity:0.8; }
    }
    @keyframes dash {
      to { stroke-dashoffset: -20; }
    }
    .fade-up  { animation: fadeUp  0.55s ease both; }
    .scale-in { animation: scaleIn 0.5s  ease both; }
    .d1{animation-delay:.05s}.d2{animation-delay:.15s}
    .d3{animation-delay:.25s}.d4{animation-delay:.35s}

    .tip-card:hover  { border-color:${T.blueMid}; transform:translateY(-3px); box-shadow:0 10px 28px rgba(26,86,219,0.11); }
    .tip-card        { transition: border-color .2s, transform .22s, box-shadow .22s; }

    .rc-card:hover   { transform:translateY(-5px); box-shadow:0 14px 36px rgba(26,86,219,0.13); }
    .rc-card         { transition: transform .25s ease, box-shadow .25s ease; }

    .social-ic:hover { background:${T.blueLight}; border-color:${T.blueMid}; color:${T.blue}; }
    .social-ic       { transition: background .2s, border-color .2s, color .2s; }

    .toc-row:hover   { background:${T.blueLight}; padding-left:18px; }
    .toc-row         { transition: background .15s, padding-left .15s; }

    .nl-btn:hover    { background:#1240B5; }
    .nl-btn          { transition: background .2s; }

    .tag-pill:hover  { background:${T.blueMid}; color:#fff; }
    .tag-pill        { transition: background .2s, color .2s; }

    @media(max-width:680px){
      .hero-h1        { font-size:25px !important; }
      .stat-row       { grid-template-columns:1fr 1fr !important; }
      .tip-grid       { grid-template-columns:1fr !important; }
      .rel-grid       { grid-template-columns:1fr !important; }
      .nl-row         { flex-direction:column !important; }
      .nl-input,.nl-btn { border-radius:10px !important; width:100% !important; }
      .hero-pad       { padding:52px 20px 90px !important; }
      .wrap           { padding:0 16px !important; }
      .meta-bar       { flex-direction:column; align-items:flex-start !important; gap:10px !important; }
    }
  `}</style>
);

/* ── Hero SVG Illustration ── */
const FraudIllustration = () => (
  <svg viewBox="0 0 560 300" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width:"100%", height:"100%", display:"block" }}>
    <defs>
      <pattern id="grid2" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.2" fill="#BFDBFE" opacity="0.5"/>
      </pattern>
      <linearGradient id="blueG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1A56DB"/>
        <stop offset="100%" stopColor="#1E40AF"/>
      </linearGradient>
      <linearGradient id="redG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EF4444"/>
        <stop offset="100%" stopColor="#DC2626"/>
      </linearGradient>
      <linearGradient id="greenG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#22C55E"/>
        <stop offset="100%" stopColor="#16A34A"/>
      </linearGradient>
      <filter id="s1">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#1A56DB" floodOpacity="0.14"/>
      </filter>
      <filter id="s2">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.08"/>
      </filter>
      <clipPath id="scanClip">
        <rect x="168" y="54" width="224" height="160" rx="14"/>
      </clipPath>
    </defs>

    <rect width="560" height="300" fill="url(#grid2)"/>

    {/* ── Central device frame ── */}
    <rect x="168" y="54" width="224" height="160" rx="14"
      fill="white" stroke="#DBEAFE" strokeWidth="1.5" filter="url(#s1)"/>
    {/* Top bar */}
    <rect x="168" y="54" width="224" height="36" rx="14" fill="url(#blueG)"/>
    <rect x="168" y="72" width="224" height="18" fill="url(#blueG)"/>
    <circle cx="186" cy="72" r="5" fill="rgba(255,255,255,0.3)"/>
    <circle cx="200" cy="72" r="5" fill="rgba(255,255,255,0.3)"/>
    <circle cx="214" cy="72" r="5" fill="rgba(255,255,255,0.3)"/>
    <text x="248" y="76" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="600"
      fill="white" textAnchor="middle">IDENTITY SCANNER</text>

    {/* Face silhouette */}
    <circle cx="280" cy="126" r="26" fill="#DBEAFE"/>
    <circle cx="280" cy="114" r="11" fill="#93C5FD"/>
    <ellipse cx="280" cy="148" rx="17" ry="9" fill="#93C5FD" opacity="0.55"/>

    {/* Corner scan brackets */}
    {[
      [196,96,14,0],[196,96,0,14],
      [348,96,-14,0],[348,96,0,14],
      [196,194,14,0],[196,194,0,-14],
      [348,194,-14,0],[348,194,0,-14],
    ].map(([x,y,dx,dy],i) => (
      <line key={i} x1={x} y1={y} x2={x+dx} y2={y+dy}
        stroke="#1A56DB" strokeWidth="2.5" strokeLinecap="round"/>
    ))}

    {/* Animated scan line */}
    <g clipPath="url(#scanClip)">
      <rect x="168" y="90" width="224" height="3" rx="1.5"
        fill="#3B82F6" opacity="0.6"
        style={{ animation:"scanLine 2.4s ease-in-out infinite" }}/>
    </g>

    {/* ── Verified badge — right floating ── */}
    <g style={{ animation:"float 3.2s ease-in-out infinite" }} filter="url(#s2)">
      <rect x="408" y="72" width="128" height="60" rx="13" fill="white"
        stroke="#DBEAFE" strokeWidth="1"/>
      <circle cx="430" cy="102" r="16" fill="url(#greenG)"/>
      <text x="427" y="108" fontFamily="DM Sans,sans-serif" fontSize="15" fill="white">✓</text>
      <text x="452" y="96" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="600"
        fill="#0F1C2E">Verified</text>
      <text x="452" y="110" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#718096">
        Identity confirmed
      </text>
    </g>

    {/* ── Threat blocked badge — left floating ── */}
    <g style={{ animation:"float 3.8s ease-in-out infinite 0.8s" }} filter="url(#s2)">
      <rect x="24" y="72" width="124" height="60" rx="13" fill="white"
        stroke="#FEE2E2" strokeWidth="1"/>
      <circle cx="46" cy="102" r="16" fill="url(#redG)"/>
      <text x="40" y="108" fontFamily="DM Sans,sans-serif" fontSize="15" fill="white">✕</text>
      <text x="68" y="96" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="600"
        fill="#0F1C2E">Blocked</text>
      <text x="68" y="110" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#718096">
        Fraud detected
      </text>
    </g>

    {/* ── MFA card — bottom floating ── */}
    <g style={{ animation:"float 4s ease-in-out infinite 0.4s" }} filter="url(#s2)">
      <rect x="162" y="238" width="236" height="52" rx="13" fill="white"
        stroke="#DBEAFE" strokeWidth="1"/>
      <rect x="178" y="252" width="30" height="24" rx="7" fill="url(#blueG)"/>
      <text x="184" y="268" fontFamily="DM Sans,sans-serif" fontSize="14" fill="white">🔑</text>
      {/* OTP dots */}
      {[0,1,2,3,4,5].map(i => (
        <circle key={i} cx={220 + i*18} cy={264} r={i < 4 ? 6 : 5}
          fill={i < 4 ? "#1A56DB" : "#DBEAFE"} opacity={i < 4 ? 1 : 0.5}/>
      ))}
      <text x="330" y="267" fontFamily="DM Sans,sans-serif" fontSize="8.5"
        fill="#16A34A" fontWeight="600">MFA Active</text>
    </g>

    {/* Connector dashes */}
    <line x1="148" y1="102" x2="168" y2="102" stroke="#BFDBFE" strokeWidth="1" strokeDasharray="3 3"/>
    <line x1="392" y1="102" x2="408" y2="102" stroke="#BFDBFE" strokeWidth="1" strokeDasharray="3 3"/>
    <line x1="280" y1="214" x2="280" y2="238" stroke="#BFDBFE" strokeWidth="1" strokeDasharray="3 3"/>

    {/* Live alert top-right */}
    <circle cx="508" cy="40" r="6" fill="#EF4444"/>
    <circle cx="508" cy="40" r="6" fill="#EF4444" opacity="0.3">
      <animate attributeName="r" values="6;14;6" dur="1.8s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0;0.3" dur="1.8s" repeatCount="indefinite"/>
    </circle>
    <text x="522" y="44" fontFamily="DM Sans,sans-serif" fontSize="9"
      fill="#DC2626" fontWeight="600">Threats Blocked</text>
  </svg>
);

/* ── Tip data ── */
const TIPS = [
  { n:"01", icon:"🤖", color:T.blueLight,   title:"Invest in AI-driven verification",
    desc:"AI tools like Face Match and Document Intelligence detect fraud in real time with 99.7% accuracy." },
  { n:"02", icon:"🔐", color:T.purpleLight,  title:"Implement multi-factor authentication",
    desc:"Layer SMS OTP, biometrics, and device fingerprinting before granting access to sensitive systems." },
  { n:"03", icon:"🎓", color:T.amberLight,   title:"Educate your team about fraud risks",
    desc:"Regular training on phishing, social engineering, and deepfake tactics is your first line of defence." },
  { n:"04", icon:"🔄", color:T.greenLight,   title:"Regularly update security software",
    desc:"Outdated tools leave gaps. Schedule monthly patches and automated vulnerability scans." },
  { n:"05", icon:"⛓", color:T.blueLight,    title:"Use blockchain for secure transactions",
    desc:"Immutable audit trails and decentralised ledgers make transaction tampering virtually impossible." },
  { n:"06", icon:"👁", color:T.redLight,     title:"Monitor suspicious activity 24/7",
    desc:"Real-time behavioural analytics flag anomalies-unusual login times, location jumps, rapid requests." },
  { n:"07", icon:"📄", color:T.purpleLight,  title:"Employ secure document verification",
    desc:"AI-powered OCR and liveness checks authenticate passports, licences, and utility bills instantly." },
  { n:"08", icon:"🔑", color:T.amberLight,   title:"Strengthen password policies",
    desc:"Enforce 16+ character passwords, block credential re-use, and mandate passkeys where possible." },
  { n:"09", icon:"🔍", color:T.greenLight,   title:"Conduct regular security audits",
    desc:"Quarterly penetration tests and compliance reviews expose weaknesses before attackers do." },
  { n:"10", icon:"📡", color:T.blueLight,    title:"Stay informed about new fraud techniques",
    desc:"Subscribe to CISA, FATF, and dark-web monitoring feeds to anticipate evolving attack vectors." },
];

/* ── Sub-components ── */
const Tag = ({ children }) => (
  <span className="tag-pill" style={{
    display:"inline-flex", alignItems:"center", gap:5,
    background:T.blueLight, color:T.blue, fontSize:12, fontWeight:500,
    padding:"5px 13px", borderRadius:100, border:`1px solid ${T.bluePale}`,
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
    {sub && <div style={{ fontSize:11, color:T.green, marginTop:4,
      fontWeight:500, fontFamily:css.body }}>{sub}</div>}
  </div>
);

const TipCard = ({ n, icon, color, title, desc }) => (
  <div className="tip-card" style={{ background:T.white, border:`1px solid ${T.border}`,
    borderRadius:16, padding:"22px 20px", display:"flex", flexDirection:"column", gap:12,
    boxShadow:"0 2px 8px rgba(0,0,0,0.04)", position:"relative", overflow:"hidden" }}>
    {/* Big faded number background */}
    <div style={{ position:"absolute", top:-10, right:12, fontSize:64, fontWeight:700,
      color:T.border, lineHeight:1, fontFamily:css.display, userSelect:"none",
      pointerEvents:"none" }}>{n}</div>
    <div style={{ display:"flex", alignItems:"center", gap:12 }}>
      <div style={{ width:44, height:44, borderRadius:12, background:color, flexShrink:0,
        display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>{icon}</div>
      <div style={{ fontSize:11, color:T.blue, fontWeight:700, letterSpacing:"0.07em",
        textTransform:"uppercase", fontFamily:css.body }}>{n}</div>
    </div>
    <div style={{ fontSize:15, fontWeight:600, color:T.ink,
      fontFamily:css.body, lineHeight:1.35 }}>{title}</div>
    <div style={{ fontSize:13, color:T.slate, lineHeight:1.65,
      fontFamily:css.body }}>{desc}</div>
  </div>
);

const RelatedCard = ({ icon, bg1, bg2, cat, title, excerpt }) => (
  <div className="rc-card" style={{ background:T.white, border:`1px solid ${T.border}`,
    borderRadius:16, overflow:"hidden", cursor:"pointer" }}>
    <div style={{ height:150, background:`linear-gradient(135deg,${bg1},${bg2})`,
      display:"flex", alignItems:"center", justifyContent:"center", fontSize:38 }}>{icon}</div>
    <div style={{ padding:"18px 18px 20px" }}>
      <div style={{ fontSize:10, color:T.blue, fontWeight:700, letterSpacing:"0.08em",
        textTransform:"uppercase", marginBottom:7, fontFamily:css.body }}>{cat}</div>
      <div style={{ fontSize:15, fontWeight:500, color:T.ink, lineHeight:1.4,
        marginBottom:8, fontFamily:css.display }}>{title}</div>
      <div style={{ fontSize:12, color:T.muted, lineHeight:1.6,
        marginBottom:12, fontFamily:css.body }}>{excerpt}</div>
      <div style={{ fontSize:13, color:T.blue, fontWeight:500,
        display:"flex", alignItems:"center", gap:4, fontFamily:css.body }}>
        Read more <span>→</span>
      </div>
    </div>
  </div>
);

/* ── Main Component ── */
const PreventIdentityFraud2025 = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ background:T.bg, fontFamily:css.body, minHeight:"100vh" }}>
      <FontLoader />
      <GlobalStyles />

      {/* ── HERO ── */}
      <section className="hero-pad" style={{
        background:"linear-gradient(135deg,#0A1F5C 0%,#1A56DB 55%,#3B82F6 100%)",
        padding:"68px 24px 110px", textAlign:"center",
        position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", top:-80, right:-80, width:280, height:280,
          borderRadius:"50%", background:"rgba(255,255,255,0.04)" }}/>
        <div style={{ position:"absolute", bottom:-50, left:-50, width:200, height:200,
          borderRadius:"50%", background:"rgba(255,255,255,0.05)" }}/>

        <div className="fade-up d1" style={{ display:"inline-flex", alignItems:"center", gap:8,
          background:"rgba(255,255,255,0.14)", border:"1px solid rgba(255,255,255,0.22)",
          color:"#fff", fontSize:11, fontWeight:600, padding:"6px 16px", borderRadius:100,
          marginBottom:22, letterSpacing:"0.07em" }}>
          🛡 FRAUD PREVENTION · 2025
        </div>

        <h1 className="fade-up d2 hero-h1" style={{
          fontFamily:css.display, fontSize:"clamp(26px,4vw,44px)",
          fontWeight:400, color:"#fff", lineHeight:1.2,
          maxWidth:740, margin:"0 auto 18px", fontStyle:"italic",
        }}>
          Top 10 Tips for Businesses to<br/>
          <span style={{ fontStyle:"normal", color:"#93C5FD" }}>
            Prevent Identity Fraud in 2025
          </span>
        </h1>

        <div className="fade-up d3" style={{ display:"flex", alignItems:"center",
          justifyContent:"center", gap:16, color:"rgba(255,255,255,0.7)",
          fontSize:13, flexWrap:"wrap", marginBottom:34 }}>
          <span>📅 December 30, 2024</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.4)", borderRadius:"50%" }}/>
          <span>⏱ 7 min read</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.4)", borderRadius:"50%" }}/>
          <span>👁 5.2k views</span>
        </div>

      
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>
        <div className="scale-in" style={{
          marginTop:-64, borderRadius:20, overflow:"hidden",
          border:`3px solid ${T.white}`,
          boxShadow:"0 20px 60px rgba(26,86,219,0.16)",
          background:`linear-gradient(135deg,${T.blueLight},${T.sky})`,
          height:300,
        }}>
          <FraudIllustration />
        </div>
      </div>

      {/* ── META BAR ── */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>
        <div className="meta-bar" style={{ display:"flex", alignItems:"center",
          justifyContent:"space-between", flexWrap:"wrap", gap:12,
          padding:"22px 0 18px", borderBottom:`1px solid ${T.border}` }}>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {["Fraud","Security","AI","Identity","2025"].map(t => <Tag key={t}>{t}</Tag>)}
          </div>
      
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>

        {/* Intro */}
        <p style={{ fontSize:17, color:T.slate, lineHeight:1.8,
          margin:"28px 0 24px", fontFamily:css.body }}>
          As fraud tactics grow increasingly sophisticated - from AI-generated deepfakes to
          synthetic identity attacks - businesses must move beyond reactive defences. Here are
          the top 10 strategies to stay one step ahead in 2025.
        </p>

        {/* Alert callout */}
        <div style={{ display:"flex", gap:14, alignItems:"flex-start",
          background:T.redLight, border:`1px solid #FECACA`,
          borderRadius:14, padding:"18px 20px", margin:"0 0 32px" }}>
          <div style={{ fontSize:22, flexShrink:0, marginTop:2 }}>⚠️</div>
          <div>
            <div style={{ fontSize:14, fontWeight:600, color:T.red,
              marginBottom:4, fontFamily:css.body }}>2025 Fraud Landscape Alert</div>
            <div style={{ fontSize:13, color:"#7F1D1D", lineHeight:1.65,
              fontFamily:css.body }}>
              Identity fraud losses are projected to exceed <strong>$48 billion globally</strong> in
              2025. Synthetic identity fraud now accounts for 85% of all fraud losses at major
              financial institutions.
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stat-row" style={{ display:"grid",
          gridTemplateColumns:"repeat(3,1fr)", gap:14, margin:"0 0 40px" }}>
<StatCard num="60%" label="Fraud reduction" sub="With AI verification" />          <StatCard num="85%" label="Synthetic identity fraud share" accent={T.amber}/>
          <StatCard num="3.2s" label="AI detection response time" accent={T.blue}/>
        </div>

        {/* Tips heading */}
        <h2 style={{ fontFamily:css.display, fontSize:26, fontWeight:400,
          color:T.ink, margin:"0 0 6px" }}>
          The 10 essential tips
        </h2>
        <p style={{ fontSize:15, color:T.muted, marginBottom:24, fontFamily:css.body }}>
          Ranked by impact - implement them in order for the strongest security posture.
        </p>

        {/* Tips grid */}
        <div className="tip-grid" style={{ display:"grid",
          gridTemplateColumns:"repeat(2,1fr)", gap:16, margin:"0 0 48px" }}>
          {TIPS.map(tip => <TipCard key={tip.n} {...tip}/>)}
        </div>

        {/* Pull quote */}
        <div style={{ borderLeft:`4px solid ${T.red}`, background:T.redLight,
          borderRadius:"0 14px 14px 0", padding:"20px 24px", margin:"0 0 40px",
          border:`1px solid #FECACA`, borderLeftColor:T.red, borderLeftWidth:4 }}>
          <p style={{ fontSize:16, color:"#7F1D1D", fontStyle:"italic",
            margin:0, fontFamily:css.display, lineHeight:1.65 }}>
            "The fight against identity fraud is not a destination - it's a continuous process.
            Businesses that treat security as an ongoing discipline, not a one-time project,
            will win."
          </p>
   
        </div>

        {/* Conclusion */}
        <div style={{ background:"linear-gradient(135deg,#EFF6FF,#E0F2FE)",
          border:`1px solid ${T.bluePale}`, borderRadius:18,
          padding:"32px 28px", margin:"0 0 48px", textAlign:"center" }}>
          <div style={{ fontSize:30, marginBottom:12 }}>🏆</div>
          <h3 style={{ fontFamily:css.display, fontSize:21, fontWeight:400,
            color:T.ink, marginBottom:10 }}>Conclusion</h3>
          <p style={{ fontSize:15, color:T.slate, lineHeight:1.8,
            maxWidth:560, margin:"0 auto", fontFamily:css.body }}>
            The fight against identity fraud is ongoing. By implementing these 10 strategies,
            businesses can significantly reduce their exposure, protect customers, and build
            the kind of trust that drives long-term growth.
          </p>
        </div>
      </div>

  

   

    </div>
  );
};

export default PreventIdentityFraud2025;