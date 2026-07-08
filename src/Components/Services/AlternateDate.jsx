import React from "react";

/* ─── SVG icon helpers ─────────────────────────────────── */
const Icon = ({ d, size = 20, color = "#3B82F6", strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);

/* ─── Inline styles ────────────────────────────────────── */
const css = `
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.6} 70%{transform:scale(1.4);opacity:0} 100%{transform:scale(1.4);opacity:0} }
  @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes blob { 0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%} 50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%} }
  @keyframes orbit  { from{transform:rotate(0deg)   translateX(90px) rotate(0deg)}   to{transform:rotate(360deg)  translateX(90px) rotate(-360deg)} }
  @keyframes orbit2 { from{transform:rotate(120deg) translateX(70px) rotate(-120deg)} to{transform:rotate(480deg) translateX(70px) rotate(-480deg)} }
  @keyframes orbit3 { from{transform:rotate(240deg) translateX(80px) rotate(-240deg)} to{transform:rotate(600deg) translateX(80px) rotate(-600deg)} }
  @keyframes shimmer { 0%{opacity:0.3} 50%{opacity:1} 100%{opacity:0.3} }

  .alt-page * { box-sizing:border-box; margin:0; padding:0; }
  .alt-page { font-family:system-ui,sans-serif; color:#1E293B; background:#fff; }

  /* hero */
  .hero { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; padding:60px 48px; max-width:1100px; margin:0 auto; }
  .hero-left { animation:fadeInUp 0.6s ease both; }
  .badge { display:inline-flex; align-items:center; gap:6px; background:#EEF2FF; color:#4338CA; font-size:12px; font-weight:500; padding:5px 12px; border-radius:20px; margin-bottom:16px; }
  .badge-dot { width:6px; height:6px; border-radius:50%; background:#4338CA; animation:shimmer 2s infinite; display:inline-block; }
  .hero h1 { font-size:38px; font-weight:700; line-height:1.2; color:#1E293B; margin-bottom:14px; }
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

  /* visual panel */
  .hero-right { position:relative; display:flex; align-items:center; justify-content:center; height:380px; animation:fadeInUp 0.6s ease 0.15s both; }
  .visual-bg { position:absolute; width:280px; height:280px; background:linear-gradient(135deg,#EFF6FF,#F0FDF4); border-radius:50%; animation:blob 8s ease-in-out infinite; }
  .center-icon { position:relative; z-index:3; width:88px; height:88px; background:#3B82F6; border-radius:24px; display:flex; align-items:center; justify-content:center; box-shadow:0 8px 32px rgba(59,130,246,0.3); }
  .pulse { position:absolute; z-index:2; width:88px; height:88px; border-radius:24px; background:rgba(59,130,246,0.2); animation:pulse-ring 2s ease-out infinite; }
  .pulse2 { animation-delay:0.7s; }
  .orbit-wrap { position:absolute; z-index:4; width:0; height:0; }
  .orb-icon { position:absolute; width:48px; height:48px; background:#fff; border-radius:14px; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 12px rgba(0,0,0,0.1); border:1px solid #F1F5F9; }
  .orb1 { animation:orbit 8s linear infinite; }
  .orb2 { animation:orbit2 6s linear infinite; }
  .orb3 { animation:orbit3 10s linear infinite; }
  .float-card { position:absolute; z-index:5; background:#fff; border-radius:12px; padding:10px 14px; border:1px solid #F1F5F9; box-shadow:0 4px 20px rgba(0,0,0,0.08); font-size:12px; }
  .float-card.fc-top { top:20px; right:10px; animation:float 4s ease-in-out infinite; }
  .float-card.fc-bottom { bottom:40px; left:10px; animation:float 4s ease-in-out 1.5s infinite; }
  .fc-label { font-weight:500; color:#1E293B; font-size:11px; }
  .fc-value { font-size:18px; font-weight:700; color:#3B82F6; margin-top:2px; }
  .fc-sub { font-size:10px; color:#64748B; display:flex; align-items:center; gap:4px; margin-top:2px; }
  .fc-green { color:#22C55E; }
  .fc-badge { display:inline-block; background:#F0FDF4; color:#16A34A; font-size:10px; padding:2px 8px; border-radius:10px; font-weight:500; }

  /* shared section styles */
  .sec-tag { font-size:12px; font-weight:600; color:#3B82F6; text-transform:uppercase; letter-spacing:1px; text-align:center; margin-bottom:8px; }
  .sec-title { font-size:28px; font-weight:700; color:#1E293B; text-align:center; margin-bottom:40px; }
  .divider { height:1px; background:linear-gradient(90deg,transparent,#E2E8F0,transparent); max-width:1100px; margin:0 auto; }

  /* overview */
  .overview { background:#F8FAFC; padding:56px 48px; }
  .overview-inner { max-width:1100px; margin:0 auto; }
  .cards-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .feat-card { background:#fff; border-radius:16px; padding:28px; border:1px solid #E2E8F0; position:relative; overflow:hidden; transition:transform 0.2s,box-shadow 0.2s; }
  .feat-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,0.08); }
  .feat-card.accent { background:#3B82F6; border-color:#3B82F6; }
  .feat-card.accent .feat-title { color:#fff; }
  .feat-card.accent .feat-text { color:rgba(255,255,255,0.85); }
  .feat-card.accent .iw { background:rgba(255,255,255,0.2); }
  .iw { width:44px; height:44px; border-radius:12px; background:#EFF6FF; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
  .feat-title { font-size:15px; font-weight:600; color:#1E293B; margin-bottom:8px; }
  .feat-text { font-size:17px; color:#64748B; line-height:1.65; }
  .card-deco { position:absolute; right:-20px; bottom:-20px; width:80px; height:80px; border-radius:50%; background:rgba(255,255,255,0.1); }

  /* benefits */
  .benefits { padding:56px 48px; }
  .benefits-inner { max-width:1100px; margin:0 auto; }
  .bene-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:16px; }
  .bene-item { text-align:center; padding:24px 12px; border-radius:14px; background:#F8FAFC; border:1px solid #E2E8F0; transition:all 0.2s; }
  .bene-item:hover { background:#EFF6FF; border-color:#BFDBFE; transform:translateY(-2px); }
  .bene-icon-wrap { width:52px; height:52px; border-radius:14px; background:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 12px; border:1px solid #E2E8F0; box-shadow:0 2px 8px rgba(0,0,0,0.05); }
  .bene-label { font-size:12px; color:#475569; font-weight:500; line-height:1.4; }

  /* solution */
  .solution { background:#F8FAFC; padding:56px 48px; }
  .solution-inner { max-width:1100px; margin:0 auto; }
  .sol-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .sol-card { background:#fff; border-radius:16px; padding:28px; border:1px solid #E2E8F0; display:flex; flex-direction:column; gap:12px; transition:all 0.2s; }
  .sol-card:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(0,0,0,0.07); border-color:#BFDBFE; }
  .sol-card.featured { background:#1E3A5F; border-color:#1E3A5F; }
  .sol-card.featured .sol-title { color:#fff; }
  .sol-card.featured .sol-desc { color:rgba(255,255,255,0.7); }
  .sol-card.featured .sol-tag { background:rgba(255,255,255,0.15); color:#93C5FD; }
  .sol-iw { width:48px; height:48px; border-radius:14px; background:#EFF6FF; display:flex; align-items:center; justify-content:center; }
  .sol-card.featured .sol-iw { background:rgba(255,255,255,0.15); }
  .sol-title { font-size:14px; font-weight:600; color:#1E293B; }
  .sol-desc { font-size:12px; color:#64748B; line-height:1.65; }
  .sol-tag { display:inline-block; background:#EFF6FF; color:#3B82F6; font-size:10px; padding:3px 10px; border-radius:20px; font-weight:600; align-self:flex-start; }
  .params-pill { display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.1); border-radius:10px; padding:10px 14px; margin-top:4px; }
  .params-num { font-size:24px; font-weight:700; color:#fff; }
  .params-label { font-size:11px; color:rgba(255,255,255,0.75); line-height:1.4; }

  @media (max-width:768px) {
  .hero {
    grid-template-columns:1fr;
    padding:80px 24px 40px; /* 👈 FIXED */
  }    .hero-right { height:300px; }
    .cards-grid,.sol-grid { grid-template-columns:1fr; }
    .bene-grid { grid-template-columns:repeat(2,1fr); }
    .overview,.benefits,.solution { padding:40px 24px; }
  }
`;

/* ─── Component ────────────────────────────────────────── */
const AlternateData = () => (
  <>
    <style>{css}</style>
    <div className="alt-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="badge">
            <span className="badge-dot" />
            AI-Powered Identity Platform
          </div>
          <h1>
            Alternate <span>Data</span>
            <br />Services
          </h1>
          <p className="hero-desc">
            Elevate onboarding with digital and video KYC powered by AI & ML.
            Enable instant verification, faster approvals, and secure identity
            validation for seamless customer activation.
          </p>
         
          <div className="trust-line">
            <span className="trust-dot" />
            <span className="trust-text">
              Trusted by 500+ financial institutions · ISO 27001 certified
            </span>
          </div>
        </div>

        <div className="hero-right">
          <div className="visual-bg" />
          <div className="pulse" />
          <div className="pulse pulse2" />
          <div className="center-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1C8.5 1 5.5 3.5 5.5 7v1.5C4 8.5 3 9.5 3 11v8c0 1.5 1 2.5 2.5 2.5h13c1.5 0 2.5-1 2.5-2.5v-8c0-1.5-1-2.5-2.5-2.5V7c0-3.5-3-6-6.5-6zm0 2c2.5 0 4.5 1.8 4.5 4v1.5H7.5V7c0-2.2 2-4 4.5-4zm0 9a2 2 0 110 4 2 2 0 010-4z" />
            </svg>
          </div>

          {/* Orbiting icons */}
          <div className="orbit-wrap">
            <div className="orb-icon orb1">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" /><circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div className="orb-icon orb2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4" /><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
              </svg>
            </div>
            <div className="orb-icon orb3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h6" />
              </svg>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="float-card fc-top">
            <div className="fc-label">Verified Today</div>
            <div className="fc-value">12,847</div>
            <div className="fc-sub">
              <span className="fc-green">↑ 24%</span> vs yesterday
            </div>
          </div>
          <div className="float-card fc-bottom">
            <div className="fc-label">Accuracy Rate</div>
            <div className="fc-value">99.8%</div>
            <div className="fc-sub">
              <span className="fc-badge">✓ Compliant</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* OVERVIEW */}
      <section className="overview">
        <div className="overview-inner">
          <p className="sec-tag">Why choose us</p>
          <h2 className="sec-title">Alternate Data Services Overview</h2>
          <div className="cards-grid">
            <div className="feat-card">
              <div className="iw">
                <Icon d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </div>
              <div className="feat-title">Instant Fraud Detection</div>
              <div className="feat-text">
                Mitigate identity risks using AI-powered KYC verification with
                real-time threat analysis.
              </div>
            </div>
            <div className="feat-card accent">
              <div className="card-deco" />
              <div className="iw">
                <Icon
                  d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                  color="#fff"
                />
              </div>
              <div className="feat-title">Bulk Verification</div>
              <div className="feat-text">
                Verify large volumes of customers and identities instantly with
                enterprise-grade throughput.
              </div>
            </div>
            <div className="feat-card">
              <div className="iw">
                <Icon d="M3 11h18M7 11V7a5 5 0 0110 0v4" />
              </div>
              <div className="feat-title">Data Protection</div>
              <div className="feat-text">
                Secure verification with regulatory compliant architecture and
                higher accuracy outcomes.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
    
      <div className="divider" />

      {/* SOLUTION SUITE */}
      <section className="solution">
        <div className="solution-inner">
          <p className="sec-tag">Solutions</p>
          <h2 className="sec-title">Alternate Data Services Solution Suite</h2>
          <div className="sol-grid">
            {/* Featured card */}
            <div className="sol-card featured">
              <div className="sol-iw">
                <Icon
                  d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3M9 21h10a2 2 0 002-2V11a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2z"
                  color="#93C5FD"
                />
              </div>
              <div className="sol-title">Vehicle RC Verification</div>
              <div className="sol-desc">
                Vehicle Registration Certificate with comprehensive data
                extraction and validation.
              </div>
              <div className="params-pill">
                <span className="params-num">47</span>
                <span className="params-label">
                  Verified
                  <br />
                  Parameters
                </span>
              </div>
              <div className="sol-tag">Most Popular</div>
            </div>

            <div className="sol-card">
              <div className="sol-iw">
                <Icon d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z" />
              </div>
              <div className="sol-title">Digital KYC</div>
              <div className="sol-desc">
                End-to-end digital identity verification with document OCR and
                face match.
              </div>
              <div className="sol-tag">Aadhaar · PAN · Passport</div>
            </div>

            <div className="sol-card">
              <div className="sol-iw">
                <Icon d="M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4a2 2 0 012-2z" />
              </div>
              <div className="sol-title">Video KYC</div>
              <div className="sol-desc">
                Live video-based KYC with AI liveness detection and
                agent-assisted verification flow.
              </div>
              <div className="sol-tag">RBI Compliant</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default AlternateData;