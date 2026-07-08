import React from "react";

const css = `
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes blob { 0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%} 50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%} }
  @keyframes shimmer { 0%{opacity:0.3} 50%{opacity:1} 100%{opacity:0.3} }
  @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.5} 70%{transform:scale(1.6);opacity:0} 100%{opacity:0} }
  @keyframes orbit  { from{transform:rotate(0deg)   translateX(96px) rotate(0deg)}   to{transform:rotate(360deg)  translateX(96px) rotate(-360deg)} }
  @keyframes orbit2 { from{transform:rotate(125deg) translateX(74px) rotate(-125deg)} to{transform:rotate(485deg) translateX(74px) rotate(-485deg)} }
  @keyframes orbit3 { from{transform:rotate(248deg) translateX(86px) rotate(-248deg)} to{transform:rotate(608deg) translateX(86px) rotate(-608deg)} }
  @keyframes scanBar { 0%{transform:translateY(0);opacity:1} 45%{opacity:1} 50%{opacity:0} 52%{transform:translateY(0);opacity:1} 100%{transform:translateY(104px);opacity:1} }
  @keyframes alertPulse { 0%,100%{background:#FEF2F2} 50%{background:#FEE2E2} }
  @keyframes riskBlink { 0%,100%{opacity:1} 50%{opacity:0.4} }
  @keyframes barGrow { from{width:0} to{width:var(--w)} }

  .fc-page * { box-sizing:border-box; margin:0; padding:0; }
  .fc-page { font-family:system-ui,sans-serif; color:#1E293B; background:#fff; }

  .hero { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; padding:60px 48px; max-width:1100px; margin:0 auto; }
  .hero-left { animation:fadeInUp 0.6s ease both; }
  .badge { display:inline-flex; align-items:center; gap:6px; background:#FFF1F2; color:#9F1239; font-size:12px; font-weight:600; padding:5px 14px; border-radius:20px; margin-bottom:18px; }
  .badge-dot { width:6px; height:6px; border-radius:50%; background:#E11D48; display:inline-block; animation:shimmer 1.6s infinite; }
  .hero h1 { font-size:34px; font-weight:700; line-height:1.2; color:#1E293B; margin-bottom:14px; }
  .hero h1 span { color:#E11D48; }
  .hero-desc { font-size:15px; color:#64748B; line-height:1.7; margin-bottom:28px; max-width:440px; }
  .hero-cta { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
  .btn-primary { background:#E11D48; color:#fff; border:none; padding:12px 24px; border-radius:10px; font-size:14px; font-weight:500; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s; }
  .btn-primary:hover { background:#BE123C; transform:translateY(-1px); }
  .btn-secondary { background:transparent; color:#E11D48; border:1.5px solid #FECDD3; padding:12px 24px; border-radius:10px; font-size:14px; font-weight:500; cursor:pointer; transition:all 0.2s; }
  .btn-secondary:hover { background:#FFF1F2; }
  .trust-line { display:flex; align-items:center; gap:8px; margin-top:20px; }
  .trust-dot { width:8px; height:8px; border-radius:50%; background:#22C55E; display:inline-block; }
  .trust-text { font-size:12px; color:#64748B; }

  .hero-right { position:relative; display:flex; align-items:center; justify-content:center; height:400px; animation:fadeInUp 0.6s ease 0.15s both; }
  .visual-bg { position:absolute; width:300px; height:300px; background:linear-gradient(135deg,#FFF1F2,#FEF3C7); border-radius:50%; animation:blob 8s ease-in-out infinite; }

  .risk-widget { position:relative; z-index:3; width:200px; background:#fff; border-radius:18px; border:1.5px solid #FECDD3; padding:16px; box-shadow:0 4px 24px rgba(225,29,72,0.12); overflow:hidden; }
  .rw-header { font-size:10px; font-weight:700; color:#9F1239; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:10px; display:flex; align-items:center; gap:5px; }
  .rw-dot { width:6px; height:6px; border-radius:50%; background:#E11D48; animation:riskBlink 1.4s infinite; display:inline-block; }
  .risk-score { font-size:36px; font-weight:800; color:#E11D48; line-height:1; }
  .risk-label { font-size:10px; color:#9F1239; font-weight:600; margin-bottom:12px; }
  .risk-bars { display:flex; flex-direction:column; gap:6px; }
  .rbar-row { display:flex; align-items:center; gap:6px; }
  .rbar-name { font-size:9px; color:#64748B; width:28px; flex-shrink:0; }
  .rbar-track { flex:1; height:5px; background:#F1F5F9; border-radius:3px; overflow:hidden; }
  .rbar-fill { height:100%; border-radius:3px; }
  .rbar-val { font-size:9px; color:#475569; font-weight:600; width:20px; text-align:right; }
  .scan-overlay { position:absolute; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#E11D48,transparent); animation:scanBar 3s linear infinite; opacity:0.6; border-radius:1px; }
  .alert-row { margin-top:10px; padding:6px 8px; border-radius:8px; animation:alertPulse 2s infinite; display:flex; align-items:center; gap:6px; }
  .alert-text { font-size:9px; color:#9F1239; font-weight:600; }

  .pulse { position:absolute; z-index:2; width:200px; height:200px; border-radius:18px; background:rgba(225,29,72,0.1); animation:pulse-ring 2.2s ease-out infinite; }
  .pulse2 { animation-delay:0.9s; }

  .orbit-wrap { position:absolute; z-index:4; width:0; height:0; }
  .orb-icon { position:absolute; width:48px; height:48px; background:#fff; border-radius:14px; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 12px rgba(0,0,0,0.1); border:1px solid #F1F5F9; }
  .orb1 { animation:orbit 9s linear infinite; }
  .orb2 { animation:orbit2 7s linear infinite; }
  .orb3 { animation:orbit3 11s linear infinite; }

  .float-card { position:absolute; z-index:5; background:#fff; border-radius:12px; padding:10px 14px; border:1px solid #F1F5F9; box-shadow:0 4px 20px rgba(0,0,0,0.08); }
  .float-card.fc-top { top:16px; right:4px; animation:float 4s ease-in-out infinite; }
  .float-card.fc-bottom { bottom:32px; left:4px; animation:float 4s ease-in-out 1.5s infinite; }
  .fc-label { font-weight:500; color:#1E293B; font-size:11px; }
  .fc-value { font-size:18px; font-weight:700; color:#E11D48; margin-top:2px; }
  .fc-sub { font-size:10px; color:#64748B; display:flex; align-items:center; gap:4px; margin-top:2px; }
  .fc-red { color:#E11D48; font-weight:600; }
  .fc-green { color:#22C55E; font-weight:600; }

  .divider { height:1px; background:linear-gradient(90deg,transparent,#E2E8F0,transparent); max-width:1100px; margin:0 auto; }
  .sec-tag { font-size:12px; font-weight:600; color:#E11D48; text-transform:uppercase; letter-spacing:1px; text-align:center; margin-bottom:8px; }
  .sec-title { font-size:28px; font-weight:700; color:#1E293B; text-align:center; margin-bottom:40px; }

  .overview { background:#F8FAFC; padding:56px 48px; }
  .overview-inner { max-width:1100px; margin:0 auto; }
  .cards-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .feat-card { background:#fff; border-radius:16px; padding:28px; border:1px solid #E2E8F0; position:relative; overflow:hidden; transition:transform 0.2s,box-shadow 0.2s; }
  .feat-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,0.08); }
  .feat-card.accent { background:#E11D48; border-color:#E11D48; }
  .feat-card.accent .feat-title { color:#fff; }
  .feat-card.accent .feat-text { color:rgba(255,255,255,0.88); }
  .feat-card.accent .iw { background:rgba(255,255,255,0.2); }
  .iw { width:44px; height:44px; border-radius:12px; background:#FFF1F2; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
  .feat-title { font-size:15px; font-weight:600; color:#1E293B; margin-bottom:8px; }
  .feat-text { font-size:17px; color:#64748B; line-height:1.65; }
  .card-deco { position:absolute; right:-20px; bottom:-20px; width:80px; height:80px; border-radius:50%; background:rgba(255,255,255,0.12); }

  .benefits { padding:56px 48px; }
  .benefits-inner { max-width:1100px; margin:0 auto; }
  .bene-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
  .bene-item { text-align:center; padding:24px 12px; border-radius:14px; background:#F8FAFC; border:1px solid #E2E8F0; transition:all 0.2s; }
  .bene-item:hover { background:#FFF1F2; border-color:#FECDD3; transform:translateY(-2px); }
  .bene-icon-wrap { width:52px; height:52px; border-radius:14px; background:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 12px; border:1px solid #E2E8F0; box-shadow:0 2px 8px rgba(0,0,0,0.05); }
  .bene-label { font-size:12px; color:#475569; font-weight:500; line-height:1.4; }

  .solution { background:#F8FAFC; padding:56px 48px; }
  .solution-inner { max-width:1100px; margin:0 auto; }
  .sol-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .sol-card { background:#fff; border-radius:16px; padding:28px; border:1px solid #E2E8F0; display:flex; flex-direction:column; gap:12px; transition:all 0.2s; }
  .sol-card:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(0,0,0,0.07); border-color:#FECDD3; }
  .sol-card.featured { background:#4C0519; border-color:#4C0519; }
  .sol-card.featured .sol-title { color:#fff; }
  .sol-card.featured .sol-desc { color:rgba(255,255,255,0.72); }
  .sol-card.featured .sol-tag { background:rgba(255,255,255,0.14); color:#FDA4AF; }
  .sol-card.featured .sol-iw { background:rgba(255,255,255,0.12); }
  .sol-iw { width:48px; height:48px; border-radius:14px; background:#FFF1F2; display:flex; align-items:center; justify-content:center; }
  .sol-title { font-size:14px; font-weight:600; color:#1E293B; }
  .sol-desc { font-size:12px; color:#64748B; line-height:1.65; }
  .sol-tag { display:inline-block; background:#FFF1F2; color:#E11D48; font-size:10px; padding:3px 10px; border-radius:20px; font-weight:600; align-self:flex-start; }
  .stat-pill { display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.1); border-radius:10px; padding:10px 14px; margin-top:4px; }
  .stat-num { font-size:24px; font-weight:700; color:#fff; }
  .stat-label { font-size:11px; color:rgba(255,255,255,0.75); line-height:1.4; }

  @media (max-width:768px) {
  .hero { 
    grid-template-columns:1fr; 
    padding:100px 24px 40px; /* 👈 FIXED */
  }    .hero-right { height:340px; }
    .cards-grid,.sol-grid { grid-template-columns:1fr; }
    .bene-grid { grid-template-columns:repeat(2,1fr); }
    .overview,.benefits,.solution { padding:40px 24px; }
  }
`;

const Ico = ({ path, color = "#E11D48", size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
);

const bars = [
  { name: "PAN",  val: 82, color: "#E11D48" },
  { name: "Aadh", val: 67, color: "#F97316" },
  { name: "DL",   val: 45, color: "#EAB308" },
  { name: "Face", val: 91, color: "#E11D48" },
];

const FraudCheck = () => (
  <>
    <style>{css}</style>
    <div className="fc-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="badge"><span className="badge-dot" /> AI-Powered Fraud Detection</div>
          <h1>PAN, Aadhaar &amp;<br /><span>DL Fraud Check</span></h1>
          <p className="hero-desc">
            Customer risk profiling enables institutions to identify potential risks and
            detect suspicious activities early. Build an adaptive fraud prevention
            framework with AI-driven verification and intelligent compliance checks.
          </p>
      
          <div className="trust-line">
            <span className="trust-dot" />
            <span className="trust-text">Real-time screening · 40+ fraud signals · RBI & FIU-IND compliant</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="visual-bg" />

          {/* Risk dashboard widget */}
          <div className="risk-widget">
            <div className="scan-overlay" />
            <div className="rw-header"><span className="rw-dot" /> Live Risk Score</div>
            <div className="risk-score">74</div>
            <div className="risk-label">HIGH RISK · FLAGGED</div>
            <div className="risk-bars">
              {bars.map(({ name, val, color }) => (
                <div className="rbar-row" key={name}>
                  <span className="rbar-name">{name}</span>
                  <div className="rbar-track">
                    <div className="rbar-fill" style={{ width: `${val}%`, background: color }} />
                  </div>
                  <span className="rbar-val">{val}</span>
                </div>
              ))}
            </div>
            <div className="alert-row">
              <span style={{ fontSize: 10 }}>⚠</span>
              <span className="alert-text">Duplicate identity detected</span>
            </div>
          </div>

          <div className="pulse" />
          <div className="pulse pulse2" />

          {/* Orbiting icons */}
          <div className="orbit-wrap">
            <div className="orb-icon orb1">
              <Ico path="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </div>
            <div className="orb-icon orb2">
              <Ico path="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" color="#F97316" />
            </div>
            <div className="orb-icon orb3">
              <Ico path="M3 4h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2zM7 8h10M7 12h6M7 16h4" color="#8B5CF6" />
            </div>
          </div>

          {/* Floating cards */}
          <div className="float-card fc-top">
            <div className="fc-label">Flagged Today</div>
            <div className="fc-value">1,284</div>
            <div className="fc-sub"><span className="fc-red">⚠ 3.2%</span> fraud rate</div>
          </div>
          <div className="float-card fc-bottom">
            <div className="fc-label">Detection Rate</div>
            <div className="fc-value">99.4%</div>
            <div className="fc-sub"><span className="fc-green">✓ Compliant</span></div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* OVERVIEW */}
      <section className="overview">
        <div className="overview-inner">
          <p className="sec-tag">Why choose us</p>
          <h2 className="sec-title">PAN, Aadhaar and Driving Licence Fraud Check Overview</h2>
          <div className="cards-grid">
            <div className="feat-card">
              <div className="iw"><Ico path="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" size={20} /></div>
              <div className="feat-title">Safeguarding Integrity of Institutions</div>
              <div className="feat-text">Prevent fraudulent identities and maintain institutional credibility with real-time document cross-checks.</div>
            </div>
            <div className="feat-card accent">
              <div className="card-deco" />
              <div className="iw"><Ico path="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" color="#fff" size={20} /></div>
              <div className="feat-title">Adapting to Evolving Threat Landscape</div>
              <div className="feat-text">Stay ahead of new fraud techniques with adaptive AI models that learn and update in real time.</div>
            </div>
            <div className="feat-card">
              <div className="iw"><Ico path="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" size={20} /></div>
              <div className="feat-title">Unlocking Customer Risk Profiling</div>
              <div className="feat-text">Assess customer risk using advanced analytics, behavioural signals, and cross-database intelligence.</div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
  

      <div className="divider" />

      {/* SOLUTION */}
      <section className="solution">
        <div className="solution-inner">
          <p className="sec-tag">Solutions</p>
          <h2 className="sec-title">Fraud Check Solution Suite</h2>
          <div className="sol-grid">
            <div className="sol-card featured">
              <div className="sol-iw">
                <Ico path="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" color="#FDA4AF" size={24} />
              </div>
              <div className="sol-title">PAN & Aadhaar Fraud Detection</div>
              <div className="sol-desc">Cross-verify PAN and Aadhaar against government databases to detect duplicates, forgeries, and mismatches.</div>
              <div className="stat-pill">
                <span className="stat-num">40+</span>
                <span className="stat-label">Fraud<br />Signals</span>
              </div>
              <div className="sol-tag">Most Popular</div>
            </div>
            <div className="sol-card">
              <div className="sol-iw">
                <Ico path="M3 4h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2zM7 8h10M7 12h6M7 16h4" size={24} />
              </div>
              <div className="sol-title">Driving Licence Verification</div>
              <div className="sol-desc">Validate DL authenticity against RTO records with tamper detection and expiry status checks.</div>
              <div className="sol-tag">RTO · SARATHI Integration</div>
            </div>
            <div className="sol-card">
              <div className="sol-iw">
                <Ico path="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" size={24} />
              </div>
              <div className="sol-title">Customer Risk Profiling</div>
              <div className="sol-desc">Holistic risk scores combining identity signals, behavioural data, and watchlist screening for every customer.</div>
              <div className="sol-tag">AML · KYC · Watchlist</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </>
);

export default FraudCheck;