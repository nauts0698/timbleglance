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
  blue:       "#1A56DB",
  blueMid:    "#3B82F6",
  blueLight:  "#EFF6FF",
  bluePale:   "#DBEAFE",
  sky:        "#BAE6FD",
  ink:        "#0F1C2E",
  slate:      "#4A5568",
  muted:      "#718096",
  border:     "#E2E8F0",
  bg:         "#FAFBFF",
  white:      "#FFFFFF",
  green:      "#16A34A",
  greenLight: "#DCFCE7",
  amber:      "#D97706",
  amberLight: "#FEF3C7",
  teal:       "#0D9488",
  tealLight:  "#CCFBF1",
  purple:     "#7C3AED",
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
    .fade-up  { animation:fadeUp  0.55s ease both; }
    .scale-in { animation:scaleIn 0.5s  ease both; }
    .d1{animation-delay:.05s}.d2{animation-delay:.15s}
    .d3{animation-delay:.25s}.d4{animation-delay:.35s}

    .practice-card:hover { border-color:${T.blueMid}; transform:translateY(-3px);
      box-shadow:0 10px 28px rgba(26,86,219,0.11); }
    .practice-card { transition:border-color .2s,transform .22s,box-shadow .22s; }

    .rc-card:hover { transform:translateY(-5px); box-shadow:0 14px 36px rgba(26,86,219,0.13); }
    .rc-card       { transition:transform .25s ease, box-shadow .25s ease; }

    .social-ic:hover { background:${T.blueLight}; border-color:${T.blueMid}; color:${T.blue}; }
    .social-ic       { transition:background .2s, border-color .2s, color .2s; }

    .toc-row:hover   { background:${T.blueLight}; padding-left:18px; }
    .toc-row         { transition:background .15s, padding-left .15s; }

    .nl-btn:hover    { background:#1240B5; }
    .nl-btn          { transition:background .2s; }

    .tag-pill:hover  { background:${T.blueMid}; color:#fff; }
    .tag-pill        { transition:background .2s, color .2s; }

    @media(max-width:680px){
      .hero-h1          { font-size:25px !important; }
      .stat-row         { grid-template-columns:1fr 1fr !important; }
      .practices-grid   { grid-template-columns:1fr !important; }
      .rel-grid         { grid-template-columns:1fr !important; }
      .nl-row           { flex-direction:column !important; }
      .nl-input,.nl-btn { border-radius:10px !important; width:100% !important; }
      .hero-pad         { padding:52px 20px 90px !important; }
      .wrap             { padding:0 16px !important; }
      .meta-bar         { flex-direction:column; align-items:flex-start !important; gap:10px !important; }
      .flow-wrap        { flex-direction:column !important; }
    }
  `}</style>
);

/* ── Hero SVG ── */
const KycIllustration = () => (
  <svg viewBox="0 0 560 300" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width:"100%", height:"100%", display:"block" }}>
    <defs>
      <pattern id="dots3" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.2" fill="#BFDBFE" opacity="0.5"/>
      </pattern>
      <linearGradient id="blueG3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1A56DB"/><stop offset="100%" stopColor="#1E40AF"/>
      </linearGradient>
      <linearGradient id="tealG3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0D9488"/><stop offset="100%" stopColor="#0F766E"/>
      </linearGradient>
      <linearGradient id="greenG3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#22C55E"/><stop offset="100%" stopColor="#16A34A"/>
      </linearGradient>
      <linearGradient id="cardG3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF"/><stop offset="100%" stopColor="#EFF6FF"/>
      </linearGradient>
      <filter id="sh3">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#1A56DB" floodOpacity="0.13"/>
      </filter>
      <filter id="sh3sm">
        <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#000" floodOpacity="0.08"/>
      </filter>
    </defs>
    <rect width="560" height="300" fill="url(#dots3)"/>

    {/* Central dashboard */}
    <rect x="155" y="44" width="250" height="182" rx="16" fill="url(#cardG3)"
      stroke="#DBEAFE" strokeWidth="1.5" filter="url(#sh3)"/>
    <rect x="155" y="44" width="250" height="40" rx="16" fill="url(#blueG3)"/>
    <rect x="155" y="68" width="250" height="16" fill="url(#blueG3)"/>
    <circle cx="173" cy="64" r="4" fill="rgba(255,255,255,0.28)"/>
    <circle cx="186" cy="64" r="4" fill="rgba(255,255,255,0.28)"/>
    <circle cx="199" cy="64" r="4" fill="rgba(255,255,255,0.28)"/>
    <text x="280" y="69" fontFamily="DM Sans,sans-serif" fontSize="10.5" fontWeight="600"
      fill="white" textAnchor="middle">KYC DASHBOARD</text>
    <rect x="328" y="55" width="62" height="18" rx="9" fill="#CCFBF1"/>
    <circle cx="340" cy="64" r="4" fill="#0D9488"/>
    <text x="349" y="68" fontFamily="DM Sans,sans-serif" fontSize="8.5" fontWeight="600" fill="#0D9488">Active</text>

    {/* Row 1 */}
    <circle cx="177" cy="107" r="13" fill="#CCFBF1"/>
    <circle cx="177" cy="101" r="5" fill="#5EEAD4"/>
    <ellipse cx="177" cy="119" rx="8" ry="5" fill="#5EEAD4" opacity="0.5"/>
    <rect x="198" y="99" width="70" height="7" rx="3.5" fill="#BFDBFE"/>
    <rect x="198" y="111" width="50" height="5" rx="2.5" fill="#DBEAFE"/>
    <rect x="318" y="101" width="54" height="12" rx="6" fill="#DCFCE7"/>
    <text x="345" y="110" fontFamily="DM Sans,sans-serif" fontSize="8" fontWeight="600"
      fill="#16A34A" textAnchor="middle">Verified</text>
    <line x1="165" y1="128" x2="390" y2="128" stroke="#F1F5F9" strokeWidth="1"/>

    {/* Row 2 */}
    <circle cx="177" cy="148" r="13" fill="#FEF3C7"/>
    <circle cx="177" cy="142" r="5" fill="#FCD34D"/>
    <ellipse cx="177" cy="160" rx="8" ry="5" fill="#FCD34D" opacity="0.5"/>
    <rect x="198" y="140" width="60" height="7" rx="3.5" fill="#BFDBFE"/>
    <rect x="198" y="152" width="42" height="5" rx="2.5" fill="#DBEAFE"/>
    <rect x="318" y="141" width="54" height="12" rx="6" fill="#FEF3C7"/>
    <text x="345" y="150" fontFamily="DM Sans,sans-serif" fontSize="8" fontWeight="600"
      fill="#D97706" textAnchor="middle">Pending</text>
    <line x1="165" y1="168" x2="390" y2="168" stroke="#F1F5F9" strokeWidth="1"/>

    {/* Row 3 */}
    <circle cx="177" cy="188" r="13" fill="#FEE2E2"/>
    <circle cx="177" cy="182" r="5" fill="#FCA5A5"/>
    <ellipse cx="177" cy="200" rx="8" ry="5" fill="#FCA5A5" opacity="0.5"/>
    <rect x="198" y="180" width="55" height="7" rx="3.5" fill="#BFDBFE"/>
    <rect x="198" y="192" width="38" height="5" rx="2.5" fill="#DBEAFE"/>
    <rect x="318" y="181" width="54" height="12" rx="6" fill="#FEE2E2"/>
    <text x="345" y="190" fontFamily="DM Sans,sans-serif" fontSize="8" fontWeight="600"
      fill="#DC2626" textAnchor="middle">Review</text>

    {/* Left — Risk Score float */}
    <g style={{ animation:"float 3.6s ease-in-out infinite 0.3s" }} filter="url(#sh3sm)">
      <rect x="18" y="76" width="122" height="96" rx="14" fill="white"
        stroke="#DBEAFE" strokeWidth="1"/>
      <text x="29" y="96" fontFamily="DM Sans,sans-serif" fontSize="9" fontWeight="600"
        fill="#718096" letterSpacing="0.5">RISK SCORE</text>
      <circle cx="79" cy="146" r="28" stroke="#DBEAFE" strokeWidth="5" fill="none"/>
      <circle cx="79" cy="146" r="28" stroke="url(#greenG3)" strokeWidth="5" fill="none"
        strokeDasharray="70 106" strokeDashoffset="53" strokeLinecap="round"/>
      <text x="79" y="150" fontFamily="DM Sans,sans-serif" fontSize="12" fontWeight="700"
        fill="#16A34A" textAnchor="middle">Low</text>
      <text x="79" y="162" fontFamily="DM Sans,sans-serif" fontSize="8"
        fill="#718096" textAnchor="middle">Risk</text>
    </g>

    {/* Right — AML Check float */}
    <g style={{ animation:"float 4s ease-in-out infinite 0.8s" }} filter="url(#sh3sm)">
      <rect x="420" y="60" width="124" height="104" rx="14" fill="white"
        stroke="#DBEAFE" strokeWidth="1"/>
      <text x="432" y="80" fontFamily="DM Sans,sans-serif" fontSize="9" fontWeight="600"
        fill="#718096" letterSpacing="0.5">AML CHECK</text>
      {[["PEP List","#16A34A","#DCFCE7"],["Sanctions","#16A34A","#DCFCE7"],["Watchlist","#16A34A","#DCFCE7"]].map(([label,tc,bg],i) => (
        <g key={label}>
          <rect x="432" y={90+i*24} width="102" height="18" rx="5" fill={bg}/>
          <text x="440" y={103+i*24} fontFamily="DM Sans,sans-serif" fontSize="9" fill="#0F1C2E">{label}</text>
          <text x="526" y={103+i*24} fontFamily="DM Sans,sans-serif" fontSize="10"
            fontWeight="700" fill={tc} textAnchor="middle">✓</text>
        </g>
      ))}
    </g>

    {/* Bottom — Compliance score float */}
    <g style={{ animation:"float 3.9s ease-in-out infinite 0.6s" }} filter="url(#sh3sm)">
      <rect x="173" y="248" width="214" height="44" rx="12" fill="white"
        stroke="#DBEAFE" strokeWidth="1"/>
      <rect x="189" y="260" width="28" height="20" rx="6" fill="url(#tealG3)"/>
      <text x="194" y="274" fontFamily="DM Sans,sans-serif" fontSize="13" fill="white">📋</text>
      <text x="226" y="269" fontFamily="DM Sans,sans-serif" fontSize="10"
        fontWeight="600" fill="#0F1C2E">Compliance Score</text>
      <rect x="226" y="274" width="134" height="6" rx="3" fill="#DBEAFE"/>
      <rect x="226" y="274" width="116" height="6" rx="3" fill="url(#greenG3)"/>
      <text x="368" y="280" fontFamily="DM Sans,sans-serif" fontSize="8"
        fontWeight="700" fill="#16A34A">98%</text>
    </g>

    {/* Connectors */}
    <line x1="140" y1="124" x2="155" y2="124" stroke="#BFDBFE" strokeWidth="1" strokeDasharray="3 3"/>
    <line x1="405" y1="124" x2="420" y2="124" stroke="#BFDBFE" strokeWidth="1" strokeDasharray="3 3"/>
    <line x1="280" y1="226" x2="280" y2="248" stroke="#BFDBFE" strokeWidth="1" strokeDasharray="3 3"/>

    {/* Live pulse */}
    <circle cx="510" cy="38" r="6" fill="#22C55E"/>
    <circle cx="510" cy="38" r="6" fill="#22C55E" opacity="0.3">
      <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="524" y="42" fontFamily="DM Sans,sans-serif" fontSize="9"
      fill="#16A34A" fontWeight="600">KYC Live</text>
  </svg>
);

/* ── Data ── */
const FLOW = [
  { icon:"📥", label:"Data Collection",  color:T.blueLight,   tc:T.blue },
  { icon:"🔍", label:"Risk Assessment",  color:T.amberLight,  tc:T.amber },
  { icon:"🤖", label:"AI Verification",  color:T.purpleLight, tc:T.purple },
  { icon:"✅", label:"Approval",         color:T.greenLight,  tc:T.green },
];

const PRACTICES = [
  { n:"01", icon:"📱", color:T.blueLight,
    title:"Simplify & digitise customer onboarding",
    desc:"A user-friendly digital onboarding system lets customers submit documentation online — reducing drop-off and accelerating time-to-approval significantly." },
  { n:"02", icon:"⚖️", color:T.amberLight,
    title:"Risk-based approach to KYC",
    desc:"Assign dynamic risk scores based on location, transaction history, and loan type — applying rigorous checks only where they're truly needed." },
  { n:"03", icon:"🤖", color:T.purpleLight,
    title:"Leverage AI & data analytics",
    desc:"Machine learning identifies suspicious patterns, detects anomalies, and flags real-time risks that manual review consistently misses at scale." },
  { n:"04", icon:"🔄", color:T.tealLight,
    title:"Keep KYC profiles current",
    desc:"KYC is ongoing — not a one-time event. Scheduled re-verification and automated triggers keep risk profiles accurate and fully compliant." },
  { n:"05", icon:"🎓", color:T.greenLight,
    title:"Invest in employee training",
    desc:"Staff equipped with up-to-date knowledge of regulatory changes and fraud tactics are a lender's strongest and most adaptable compliance asset." },
  { n:"06", icon:"🔗", color:T.blueLight,
    title:"Integrate with regulatory databases",
    desc:"Live API connections to PEP lists, sanction registers, and adverse media feeds ensure automatic, always-current compliance checks with zero lag." },
  { n:"07", icon:"💬", color:T.amberLight,
    title:"Build trust through transparency",
    desc:"Clear communication about what data is collected and why drives customer co-operation — and significantly reduces onboarding friction and abandonment." },
  { n:"08", icon:"📊", color:T.purpleLight,
    title:"Continuous audit & improvement",
    desc:"Quarterly process reviews and penetration tests surface compliance gaps before regulators — or fraudsters — find them first and exploit them." },
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

const PracticeCard = ({ n, icon, color, title, desc }) => (
  <div className="practice-card" style={{ background:T.white, border:`1px solid ${T.border}`,
    borderRadius:16, padding:"22px 20px", display:"flex", flexDirection:"column", gap:12,
    boxShadow:"0 2px 8px rgba(0,0,0,0.04)", position:"relative", overflow:"hidden" }}>
    <div style={{ position:"absolute", top:-8, right:10, fontSize:60, fontWeight:700,
      color:T.border, lineHeight:1, fontFamily:css.display, userSelect:"none", pointerEvents:"none" }}>{n}</div>
    <div style={{ display:"flex", alignItems:"center", gap:12 }}>
      <div style={{ width:44, height:44, borderRadius:12, background:color, flexShrink:0,
        display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>{icon}</div>
      <div style={{ fontSize:10, color:T.blue, fontWeight:700, letterSpacing:"0.07em",
        textTransform:"uppercase", fontFamily:css.body }}>{n}</div>
    </div>
    <div style={{ fontSize:15, fontWeight:600, color:T.ink, fontFamily:css.body, lineHeight:1.35 }}>{title}</div>
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
      <div style={{ fontSize:12, color:T.muted, lineHeight:1.6, marginBottom:12,
        fontFamily:css.body }}>{excerpt}</div>
      <div style={{ fontSize:13, color:T.blue, fontWeight:500,
        display:"flex", alignItems:"center", gap:4, fontFamily:css.body }}>Read more <span>→</span></div>
    </div>
  </div>
);

/* ── Main ── */
const KycBestPractices = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ background:T.bg, fontFamily:css.body, minHeight:"100vh" }}>
      <FontLoader />
      <GlobalStyles />

      {/* HERO */}
      <section className="hero-pad" style={{
        background:"linear-gradient(135deg,#0A1F5C 0%,#1A56DB 50%,#0D9488 100%)",
        padding:"68px 24px 110px", textAlign:"center", position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", top:-80, right:-80, width:280, height:280,
          borderRadius:"50%", background:"rgba(255,255,255,0.04)" }}/>
        <div style={{ position:"absolute", bottom:-50, left:-50, width:200, height:200,
          borderRadius:"50%", background:"rgba(255,255,255,0.05)" }}/>

        <div className="fade-up d1" style={{ display:"inline-flex", alignItems:"center", gap:8,
          background:"rgba(255,255,255,0.14)", border:"1px solid rgba(255,255,255,0.22)",
          color:"#fff", fontSize:11, fontWeight:600, padding:"6px 16px", borderRadius:100,
          marginBottom:22, letterSpacing:"0.07em" }}>
          🏦 KYC · LENDING INDUSTRY
        </div>

        <h1 className="fade-up d2 hero-h1" style={{
          fontFamily:css.display, fontSize:"clamp(26px,4vw,44px)",
          fontWeight:400, color:"#fff", lineHeight:1.2,
          maxWidth:720, margin:"0 auto 18px", fontStyle:"italic",
        }}>
          KYC Best Practices for<br/>
          <span style={{ fontStyle:"normal", color:"#99F6E4" }}>the Lending Industry</span>
        </h1>

        <div className="fade-up d3" style={{ display:"flex", alignItems:"center",
          justifyContent:"center", gap:16, color:"rgba(255,255,255,0.7)",
          fontSize:13, flexWrap:"wrap", marginBottom:34 }}>
          <span>📅 January 23, 2024</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.4)", borderRadius:"50%" }}/>
          <span>⏱ 6 min read</span>
          <span style={{ width:3, height:3, background:"rgba(255,255,255,0.4)", borderRadius:"50%" }}/>
          <span>👁 4.8k views</span>
        </div>

       
      </section>

      {/* HERO IMAGE */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>
      <div className="scale-in" style={{
          marginTop:-64, borderRadius:20, overflow:"hidden",
          border:`3px solid ${T.white}`,
          boxShadow:"0 20px 60px rgba(26,86,219,0.16)",
          background:`linear-gradient(135deg,${T.blueLight},#CCFBF1)`,
          height:300,
        }}>
          <KycIllustration />
        </div>
      </div>

      {/* META BAR */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>
        <div className="meta-bar" style={{ display:"flex", alignItems:"center",
          justifyContent:"space-between", flexWrap:"wrap", gap:12,
          padding:"22px 0 18px", borderBottom:`1px solid ${T.border}` }}>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {["KYC","Lending","Compliance","AML","Fintech"].map(t => <Tag key={t}>{t}</Tag>)}
          </div>
       
        </div>
      </div>

      {/* BODY */}
      <div className="wrap" style={{ maxWidth:900, margin:"0 auto", padding:"0 24px" }}>

        {/* TOC */}
        <div style={{ background:T.white, border:`1px solid ${T.border}`, borderRadius:16,
          padding:"20px 22px", margin:"28px 0 32px", boxShadow:"0 2px 12px rgba(26,86,219,0.05)" }}>
          <div style={{ fontSize:10, fontWeight:700, color:T.muted, letterSpacing:"0.1em",
            textTransform:"uppercase", marginBottom:14, fontFamily:css.body }}>Contents</div>
          {[
            ["01","What is KYC and why it matters in lending"],
            ["02","The KYC verification flow"],
            ["03","8 best practices for lenders"],
            ["04","Conclusion"],
          ].map(([n,l]) => (
            <div key={n} className="toc-row" style={{ display:"flex", alignItems:"center",
              gap:14, padding:"9px 10px", borderRadius:8, cursor:"pointer", margin:"2px 0" }}>
              <span style={{ fontSize:10, color:T.blue, fontWeight:700, minWidth:20, fontFamily:css.body }}>{n}</span>
              <span style={{ fontSize:14, color:T.ink, fontFamily:css.body }}>{l}</span>
            </div>
          ))}
        </div>

        {/* Intro */}
        <p style={{ fontSize:17, color:T.slate, lineHeight:1.8, marginBottom:18, fontFamily:css.body }}>
          The lending industry is rapidly transforming in the digital age, with financial institutions
          seeking ways to streamline processes, reduce risk, and enhance customer experiences. Know
          Your Customer (KYC) best practices are critical in this transformation — enabling lenders
          to verify identity, assess suitability, and stay ahead of an ever-evolving regulatory landscape.
        </p>
        <p style={{ fontSize:16, color:T.slate, lineHeight:1.8, marginBottom:28, fontFamily:css.body }}>
          KYC is a set of procedures and policies that mitigate financial crimes like money laundering
          and fraud. Below, we explore the eight most impactful practices for implementing KYC
          effectively in the lending industry.
        </p>

        {/* Pull quote */}
        <div style={{ borderLeft:`4px solid ${T.teal}`, background:T.tealLight,
          borderRadius:"0 14px 14px 0", padding:"18px 24px", margin:"0 0 32px",
          borderTop:`1px solid #99F6E4`, borderRight:`1px solid #99F6E4`,
          borderBottom:`1px solid #99F6E4` }}>
          <p style={{ fontSize:16, color:"#134E4A", fontStyle:"italic",
            margin:0, fontFamily:css.display, lineHeight:1.65 }}>
            "Effective KYC is not about friction — it's about building a trust architecture that
            protects both the lender and the borrower for the lifetime of the relationship."
          </p>
         
        </div>

        {/* Stats */}
        <div className="stat-row" style={{ display:"grid",
          gridTemplateColumns:"repeat(3,1fr)", gap:14, margin:"0 0 40px" }}>
<StatCard num="99%" label="KYC accuracy" sub="Reliable verification" />          <StatCard num="67%" label="Lenders now using AI for KYC" accent={T.blue}/>
          <StatCard num="40%" label="Reduction in onboarding time via e-KYC" accent={T.green}/>
        </div>

        {/* KYC flow */}
        <h2 style={{ fontFamily:css.display, fontSize:24, fontWeight:400, color:T.ink, margin:"0 0 10px" }}>
          The KYC verification flow
        </h2>
        <p style={{ fontSize:15, color:T.muted, marginBottom:22, fontFamily:css.body }}>
          A modern KYC pipeline moves customers from raw data to verified approval in four clear stages.
        </p>
        <div className="flow-wrap" style={{ display:"flex", alignItems:"center",
          gap:8, margin:"0 0 44px", flexWrap:"wrap" }}>
          {FLOW.map((step, i) => (
            <React.Fragment key={step.label}>
              <div style={{ flex:1, minWidth:100, background:T.white,
                border:`1px solid ${T.border}`, borderRadius:14, padding:"16px 12px",
                textAlign:"center", boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ width:42, height:42, borderRadius:12, background:step.color,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:20, margin:"0 auto 10px" }}>{step.icon}</div>
                <div style={{ fontSize:11, fontWeight:700, color:step.tc,
                  letterSpacing:"0.05em", fontFamily:css.body }}>{step.label}</div>
              </div>
              {i < FLOW.length - 1 && (
                <div style={{ fontSize:18, color:T.border, flexShrink:0 }}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 8 Practices */}
        <h2 style={{ fontFamily:css.display, fontSize:24, fontWeight:400, color:T.ink, margin:"0 0 8px" }}>
          8 best practices for lenders
        </h2>
        <p style={{ fontSize:15, color:T.muted, marginBottom:24, fontFamily:css.body }}>
          These practices apply whether you're a digital-first neo-lender or a traditional institution mid-transformation.
        </p>
        <div className="practices-grid" style={{ display:"grid",
          gridTemplateColumns:"repeat(2,1fr)", gap:16, margin:"0 0 48px" }}>
          {PRACTICES.map(p => <PracticeCard key={p.n} {...p}/>)}
        </div>

        {/* Conclusion */}
        <div style={{ background:"linear-gradient(135deg,#EFF6FF,#CCFBF1)",
          border:`1px solid ${T.bluePale}`, borderRadius:18,
          padding:"32px 28px", margin:"0 0 48px", textAlign:"center" }}>
          <div style={{ fontSize:30, marginBottom:12 }}>🏦</div>
          <h3 style={{ fontFamily:css.display, fontSize:21, fontWeight:400, color:T.ink, marginBottom:10 }}>
            Conclusion
          </h3>
          <p style={{ fontSize:15, color:T.slate, lineHeight:1.8, maxWidth:560,
            margin:"0 auto", fontFamily:css.body }}>
            KYC best practices are critical for the lending industry to mitigate risk, stay compliant,
            and deliver a frictionless customer experience. The lenders who invest in smart KYC
            infrastructure today will build the trust that drives long-term growth tomorrow.
          </p>
        </div>
      </div>




    </div>
  );
};

export default KycBestPractices;