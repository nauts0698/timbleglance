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
  @keyframes barRise { from{height:0} to{height:var(--h)} }
  @keyframes lineDrawn { from{stroke-dashoffset:300} to{stroke-dashoffset:0} }
  @keyframes countUp { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:translateY(0)} }
  @keyframes dotPop { 0%,100%{transform:scale(1)} 50%{transform:scale(1.4)} }

  .ba-page * { box-sizing:border-box; margin:0; padding:0; }
  .ba-page { font-family:system-ui,sans-serif; color:#1E293B; background:#fff; }

  .hero { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; padding:60px 48px; max-width:1100px; margin:0 auto; }
  .hero-left { animation:fadeInUp 0.6s ease both; }
  .badge { display:inline-flex; align-items:center; gap:6px; background:#EFF6FF; color:#1D4ED8; font-size:12px; font-weight:600; padding:5px 14px; border-radius:20px; margin-bottom:18px; }
  .badge-dot { width:6px; height:6px; border-radius:50%; background:#3B82F6; display:inline-block; animation:shimmer 1.8s infinite; }
  .hero h1 { font-size:36px; font-weight:700; line-height:1.2; color:#1E293B; margin-bottom:14px; }
  .hero h1 span { color:#3B82F6; }
  .hero-desc { font-size:15px; color:#64748B; line-height:1.7; margin-bottom:28px; max-width:440px; }
  .hero-cta { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
  .btn-primary { background:#3B82F6; color:#fff; border:none; padding:12px 24px; border-radius:10px; font-size:14px; font-weight:500; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s; }
  .btn-primary:hover { background:#2563EB; transform:translateY(-1px); }
  .btn-secondary { background:transparent; color:#3B82F6; border:1.5px solid #BFDBFE; padding:12px 24px; border-radius:10px; font-size:14px; font-weight:500; cursor:pointer; transition:all 0.2s; }
  .btn-secondary:hover { background:#EFF6FF; }
  .trust-line { display:flex; align-items:center; gap:8px; margin-top:20px; }
  .trust-dot { width:8px; height:8px; border-radius:50%; background:#22C55E; display:inline-block; }
  .trust-text { font-size:12px; color:#64748B; }

  .hero-right { position:relative; display:flex; align-items:center; justify-content:center; height:400px; animation:fadeInUp 0.6s ease 0.15s both; }
  .visual-bg { position:absolute; width:300px; height:300px; background:linear-gradient(135deg,#EFF6FF,#DBEAFE); border-radius:50%; animation:blob 8s ease-in-out infinite; }

  .stmt-widget { position:relative; z-index:3; width:210px; background:#fff; border-radius:18px; border:1.5px solid #BFDBFE; padding:16px; box-shadow:0 4px 24px rgba(59,130,246,0.14); }
  .sw-header { font-size:10px; font-weight:700; color:#1D4ED8; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:10px; display:flex; align-items:center; justify-content:space-between; }
  .sw-live { display:flex; align-items:center; gap:4px; }
  .sw-dot { width:5px; height:5px; border-radius:50%; background:#3B82F6; animation:shimmer 1.6s infinite; display:inline-block; }
  .credit-score { font-size:34px; font-weight:800; color:#3B82F6; line-height:1; animation:countUp 0.8s ease both; }
  .credit-label { font-size:10px; color:#1D4ED8; font-weight:600; margin-bottom:12px; }

  .mini-chart { display:flex; align-items:flex-end; gap:5px; height:56px; margin-bottom:12px; }
  .bar-col { display:flex; flex-direction:column; align-items:center; gap:3px; flex:1; }
  .bar { width:100%; border-radius:4px 4px 0 0; animation:barRise 1s ease both; }
  .bar-lbl { font-size:7px; color:#94A3B8; }

  .trend-svg { width:100%; height:36px; margin-bottom:10px; }

  .tx-rows { display:flex; flex-direction:column; gap:5px; }
  .tx-row { display:flex; align-items:center; justify-content:space-between; font-size:9px; }
  .tx-name { color:#475569; font-weight:500; }
  .tx-amt { font-weight:700; }
  .tx-cr { color:#22C55E; }
  .tx-dr { color:#EF4444; }
  .tx-badge { font-size:8px; padding:1px 6px; border-radius:6px; font-weight:600; }
  .badge-cr { background:#F0FDF4; color:#16A34A; }
  .badge-dr { background:#FFF1F2; color:#BE123C; }

  .pulse { position:absolute; z-index:2; width:210px; height:210px; border-radius:18px; background:rgba(59,130,246,0.1); animation:pulse-ring 2.2s ease-out infinite; }
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
  .fc-value { font-size:18px; font-weight:700; color:#3B82F6; margin-top:2px; }
  .fc-sub { font-size:10px; color:#64748B; display:flex; align-items:center; gap:4px; margin-top:2px; }
  .fc-blue { color:#3B82F6; font-weight:600; }
  .fc-green { color:#22C55E; font-weight:600; }
  .fc-badge { display:inline-block; background:#EFF6FF; color:#1D4ED8; font-size:10px; padding:2px 8px; border-radius:10px; font-weight:600; }

  .divider { height:1px; background:linear-gradient(90deg,transparent,#E2E8F0,transparent); max-width:1100px; margin:0 auto; }
  .sec-tag { font-size:12px; font-weight:600; color:#3B82F6; text-transform:uppercase; letter-spacing:1px; text-align:center; margin-bottom:8px; }
  .sec-title { font-size:28px; font-weight:700; color:#1E293B; text-align:center; margin-bottom:40px; }

  .overview { background:#F8FAFC; padding:56px 48px; }
  .overview-inner { max-width:1100px; margin:0 auto; }
  .cards-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .feat-card { background:#fff; border-radius:16px; padding:28px; border:1px solid #E2E8F0; position:relative; overflow:hidden; transition:transform 0.2s,box-shadow 0.2s; }
  .feat-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,0.08); }
  .feat-card.accent { background:#3B82F6; border-color:#3B82F6; }
  .feat-card.accent .feat-title { color:#fff; }
  .feat-card.accent .feat-text { color:rgba(255,255,255,0.88); }
  .feat-card.accent .iw { background:rgba(255,255,255,0.2); }
  .iw { width:44px; height:44px; border-radius:12px; background:#EFF6FF; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
  .feat-title { font-size:15px; font-weight:600; color:#1E293B; margin-bottom:8px; }
  .feat-text { font-size:17px; color:#64748B; line-height:1.65; }
  .card-deco { position:absolute; right:-20px; bottom:-20px; width:80px; height:80px; border-radius:50%; background:rgba(255,255,255,0.12); }

  .benefits { padding:56px 48px; }
  .benefits-inner { max-width:1100px; margin:0 auto; }
  .bene-row1 { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:16px; }
  .bene-row2 { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; max-width:75%; margin:0 auto; }
  .bene-item { text-align:center; padding:22px 12px; border-radius:14px; background:#F8FAFC; border:1px solid #E2E8F0; transition:all 0.2s; }
  .bene-item:hover { background:#EFF6FF; border-color:#BFDBFE; transform:translateY(-2px); }
  .bene-icon-wrap { width:50px; height:50px; border-radius:14px; background:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 10px; border:1px solid #E2E8F0; box-shadow:0 2px 8px rgba(0,0,0,0.05); }
  .bene-label { font-size:12px; color:#475569; font-weight:500; line-height:1.4; }

  .solution { background:#F8FAFC; padding:56px 48px; }
  .solution-inner { max-width:1100px; margin:0 auto; }
  .sol-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .sol-card { background:#fff; border-radius:16px; padding:28px; border:1px solid #E2E8F0; display:flex; flex-direction:column; gap:12px; transition:all 0.2s; }
  .sol-card:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(0,0,0,0.07); border-color:#BFDBFE; }
  .sol-card.featured { background:#1E3A5F; border-color:#1E3A5F; }
  .sol-card.featured .sol-title { color:#fff; }
  .sol-card.featured .sol-desc { color:rgba(255,255,255,0.72); }
  .sol-card.featured .sol-tag { background:rgba(255,255,255,0.14); color:#93C5FD; }
  .sol-card.featured .sol-iw { background:rgba(255,255,255,0.12); }
  .sol-iw { width:48px; height:48px; border-radius:14px; background:#EFF6FF; display:flex; align-items:center; justify-content:center; }
  .sol-title { font-size:14px; font-weight:600; color:#1E293B; }
  .sol-desc { font-size:12px; color:#64748B; line-height:1.65; }
  .sol-tag { display:inline-block; background:#EFF6FF; color:#3B82F6; font-size:10px; padding:3px 10px; border-radius:20px; font-weight:600; align-self:flex-start; }
  .stat-pill { display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.1); border-radius:10px; padding:10px 14px; margin-top:4px; }
  .stat-num { font-size:24px; font-weight:700; color:#fff; }
  .stat-label { font-size:11px; color:rgba(255,255,255,0.75); line-height:1.4; }

  @media (max-width:768px) {
  .hero { 
    grid-template-columns:1fr; 
    padding:100px 24px 40px; /* 👈 FIXED */
  }    .hero-right { height:360px; }
    .cards-grid,.sol-grid { grid-template-columns:1fr; }
    .bene-row1 { grid-template-columns:repeat(2,1fr); }
    .bene-row2 { max-width:100%; grid-template-columns:repeat(2,1fr); }
    .overview,.benefits,.solution { padding:40px 24px; }
  }
`;

const Ico = ({ path, color = "#3B82F6", size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
);

const bars = [
  { month:"Oct", h:32, color:"#BFDBFE" },
  { month:"Nov", h:40, color:"#93C5FD" },
  { month:"Dec", h:28, color:"#BFDBFE" },
  { month:"Jan", h:48, color:"#3B82F6" },
  { month:"Feb", h:36, color:"#60A5FA" },
  { month:"Mar", h:52, color:"#2563EB" },
];

const transactions = [
  { name:"Salary Credit", amt:"+₹85,000", cls:"tx-cr", badge:"CR", badgeCls:"badge-cr" },
  { name:"EMI Debit",     amt:"−₹12,400", cls:"tx-dr", badge:"DR", badgeCls:"badge-dr" },
  { name:"UPI Transfer",  amt:"−₹3,200",  cls:"tx-dr", badge:"DR", badgeCls:"badge-dr" },
];

const BankAnalyzer = () => (
  <>
    <style>{css}</style>
    <div className="ba-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="badge"><span className="badge-dot" /> AI-Powered Financial Intelligence</div>
          <h1>Bank Statement<br /><span>Analyzer</span></h1>
          <p className="hero-desc">
            Automate bank statement analysis with AI-powered extraction and real-time credit assessment.
            Eliminate manual document processing and enable faster decision-making with intelligent financial insights.
          </p>
       
          <div className="trust-line">
            <span className="trust-dot" />
            <span className="trust-text">200+ banks supported · RBI compliant · 3-sec turnaround</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="visual-bg" />

          {/* Statement widget */}
          <div className="stmt-widget">
            <div className="sw-header">
              <span>Statement Analysis</span>
              <span className="sw-live"><span className="sw-dot" /> Live</span>
            </div>
            <div className="credit-score">742</div>
            <div className="credit-label">CREDIT SCORE · GOOD STANDING</div>

            {/* Bar chart */}
            <div className="mini-chart">
              {bars.map(({ month, h, color }, i) => (
                <div className="bar-col" key={month}>
                  <div className="bar" style={{ height: h, background: color, "--h": `${h}px`, animationDelay: `${i * 0.1}s` }} />
                  <span className="bar-lbl">{month}</span>
                </div>
              ))}
            </div>

            {/* Sparkline */}
            <svg className="trend-svg" viewBox="0 0 178 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 28 Q20 20 40 22 Q60 24 80 14 Q100 4 120 10 Q140 16 160 6 L178 4"
                stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"
                strokeDasharray="300" style={{ animation: "lineDrawn 1.5s ease both" }} />
              <path d="M0 28 Q20 20 40 22 Q60 24 80 14 Q100 4 120 10 Q140 16 160 6 L178 4 L178 36 L0 36Z"
                fill="url(#blueGrad)" opacity="0.18" />
              <circle cx="178" cy="4" r="3" fill="#3B82F6" style={{ animation: "dotPop 1.5s ease infinite" }} />
            </svg>

            {/* Transactions */}
            <div className="tx-rows">
              {transactions.map(({ name, amt, cls, badge, badgeCls }) => (
                <div className="tx-row" key={name}>
                  <span className="tx-name">{name}</span>
                  <span className={`tx-amt ${cls}`}>{amt}</span>
                  <span className={`tx-badge ${badgeCls}`}>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pulse" />
          <div className="pulse pulse2" />

          {/* Orbiting icons */}
          <div className="orbit-wrap">
            <div className="orb-icon orb1">
              <Ico path="M12 20V10M18 20V4M6 20v-4" />
            </div>
            <div className="orb-icon orb2">
              <Ico path="M2 5h20a0 0 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V7a2 2 0 012-2zM2 10h20" color="#0EA5E9" />
            </div>
            <div className="orb-icon orb3">
              <Ico path="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" color="#6366F1" />
            </div>
          </div>

          {/* Floating cards */}
          <div className="float-card fc-top">
            <div className="fc-label">Statements Processed</div>
            <div className="fc-value">24,190</div>
            <div className="fc-sub"><span className="fc-blue">↑ 31%</span> this week</div>
          </div>
          <div className="float-card fc-bottom">
            <div className="fc-label">Avg. Turnaround</div>
            <div className="fc-value">3 sec</div>
            <div className="fc-sub"><span className="fc-badge">⚡ Instant</span></div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* OVERVIEW */}
      <section className="overview">
        <div className="overview-inner">
          <p className="sec-tag">Why choose us</p>
          <h2 className="sec-title">Bank Statement Analyzer Overview</h2>
          <div className="cards-grid">
            <div className="feat-card">
              <div className="iw"><Ico path="M12 20V10M18 20V4M6 20v-4" size={20} /></div>
              <div className="feat-title">Comprehensive Data Insights</div>
              <div className="feat-text">Analyze income stability, spending habits, EMI obligations and financial responsibility in seconds.</div>
            </div>
            <div className="feat-card accent">
              <div className="card-deco" />
              <div className="iw"><Ico path="M12 2a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7zM12 8v4l3 3" color="#fff" size={20} /></div>
              <div className="feat-title">AI/ML Powered Efficiency</div>
              <div className="feat-text">Automates extraction, fraud detection, and credit assessment across all major bank formats.</div>
            </div>
            <div className="feat-card">
              <div className="iw"><Ico path="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9zM13 2v7h7" size={20} /></div>
              <div className="feat-title">Seamless Integration</div>
              <div className="feat-text">Integrates with your existing lending, NBFC, and banking systems via REST APIs with zero downtime.</div>
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
          <h2 className="sec-title">Bank Statement Analyzer Solution Suite</h2>
          <div className="sol-grid">
            <div className="sol-card featured">
              <div className="sol-iw">
                <Ico path="M12 20V10M18 20V4M6 20v-4" color="#93C5FD" size={24} />
              </div>
              <div className="sol-title">AI Credit Assessment</div>
              <div className="sol-desc">Instant credit scores and loan eligibility analysis extracted from 6–24 months of bank statement data.</div>
              <div className="stat-pill">
                <span className="stat-num">200+</span>
                <span className="stat-label">Banks<br />Supported</span>
              </div>
              <div className="sol-tag">Most Popular</div>
            </div>
            <div className="sol-card">
              <div className="sol-iw">
                <Ico path="M2 5h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V7a2 2 0 012-2zM2 10h20" size={24} />
              </div>
              <div className="sol-title">Transaction Categorisation</div>
              <div className="sol-desc">Auto-classify debits and credits - salary, EMI, UPI, rent, investments - with AI-driven labelling at scale.</div>
              <div className="sol-tag">PDF · Excel · Net Banking</div>
            </div>
            <div className="sol-card">
              <div className="sol-iw">
                <Ico path="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" size={24} />
              </div>
              <div className="sol-title">Fraud & Anomaly Detection</div>
              <div className="sol-desc">Detect round-tripping, inflated credits, and suspicious patterns before credit decisions are made.</div>
              <div className="sol-tag">ML-Powered · Real-time</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </>
);

export default BankAnalyzer;