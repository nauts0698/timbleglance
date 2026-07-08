import React from "react";

/* ─── Inline styles ────────────────────────────────────── */
const css = `
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes blob { 0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%} 50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%} }
  @keyframes shimmer { 0%{opacity:0.3} 50%{opacity:1} 100%{opacity:0.3} }
  @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.5} 70%{transform:scale(1.5);opacity:0} 100%{transform:scale(1.5);opacity:0} }
  @keyframes scanLine { 0%{top:10%} 100%{top:90%} }
  @keyframes dotPulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:0.5} }
  @keyframes orbit  { from{transform:rotate(0deg)   translateX(95px) rotate(0deg)}   to{transform:rotate(360deg)  translateX(95px) rotate(-360deg)} }
  @keyframes orbit2 { from{transform:rotate(130deg) translateX(72px) rotate(-130deg)} to{transform:rotate(490deg) translateX(72px) rotate(-490deg)} }
  @keyframes orbit3 { from{transform:rotate(250deg) translateX(84px) rotate(-250deg)} to{transform:rotate(610deg) translateX(84px) rotate(-610deg)} }

  .fr-page * { box-sizing:border-box; margin:0; padding:0; }
  .fr-page { font-family:system-ui,sans-serif; color:#1E293B; background:#fff; }

  /* HERO */
  .hero { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; padding:60px 48px; max-width:1100px; margin:0 auto; }
  .hero-left { animation:fadeInUp 0.6s ease both; }
  .badge { display:inline-flex; align-items:center; gap:6px; background:#FFF1F2; color:#BE123C; font-size:12px; font-weight:600; padding:5px 14px; border-radius:20px; margin-bottom:18px; }
  .badge-dot { width:6px; height:6px; border-radius:50%; background:#BE123C; display:inline-block; animation:shimmer 2s infinite; }
  .hero h1 { font-size:36px; font-weight:700; line-height:1.2; color:#1E293B; margin-bottom:14px; }
  .hero h1 span { color:#3B82F6; }
  .hero-desc { font-size:15px; color:#64748B; line-height:1.7; margin-bottom:28px; max-width:440px; }
  .hero-cta { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
  .btn-primary { background:#3B82F6; color:#fff; border:none; padding:12px 24px; border-radius:10px; font-size:14px; font-weight:500; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s; }
  .btn-primary:hover { background:#6D28D9; transform:translateY(-1px); }
  .btn-secondary { background:transparent; color:#3B82F6; border:1.5px solid #DDD6FE; padding:12px 24px; border-radius:10px; font-size:14px; font-weight:500; cursor:pointer; transition:all 0.2s; }
  .btn-secondary:hover { background:#F5F3FF; }
  .trust-line { display:flex; align-items:center; gap:8px; margin-top:20px; }
  .trust-dot { width:8px; height:8px; border-radius:50%; background:#22C55E; display:inline-block; }
  .trust-text { font-size:12px; color:#64748B; }

  /* visual panel */
  .hero-right { position:relative; display:flex; align-items:center; justify-content:center; height:400px; animation:fadeInUp 0.6s ease 0.15s both; }
  .visual-bg { position:absolute; width:290px; height:290px; background:linear-gradient(135deg,#F5F3FF,#FDF2F8); border-radius:50%; animation:blob 8s ease-in-out infinite; }

  /* face scan */
  .face-frame { position:relative; z-index:3; width:120px; height:140px; }
  .face-svg { width:100%; height:100%; }
  .corner { position:absolute; width:20px; height:20px; border-color:#3B82F6; border-style:solid; }
  .corner.tl { top:0;left:0; border-width:3px 0 0 3px; border-radius:4px 0 0 0; }
  .corner.tr { top:0;right:0; border-width:3px 3px 0 0; border-radius:0 4px 0 0; }
  .corner.bl { bottom:0;left:0; border-width:0 0 3px 3px; border-radius:0 0 0 4px; }
  .corner.br { bottom:0;right:0; border-width:0 3px 3px 0; border-radius:0 0 4px 0; }
  .scan-line { position:absolute; left:4px; right:4px; height:2px; background:linear-gradient(90deg,transparent,#3B82F6,transparent); border-radius:1px; animation:scanLine 2s ease-in-out infinite alternate; opacity:0.8; }
  .dot { position:absolute; width:5px; height:5px; border-radius:50%; background:#3B82F6; animation:dotPulse 1.5s ease-in-out infinite; }

  .pulse { position:absolute; z-index:2; width:120px; height:140px; border-radius:16px; background:rgba(124,58,237,0.15); animation:pulse-ring 2.2s ease-out infinite; }
  .pulse2 { animation-delay:0.8s; }

  .orbit-wrap { position:absolute; z-index:4; width:0; height:0; }
  .orb-icon { position:absolute; width:48px; height:48px; background:#fff; border-radius:14px; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 12px rgba(0,0,0,0.1); border:1px solid #F1F5F9; }
  .orb1 { animation:orbit 9s linear infinite; }
  .orb2 { animation:orbit2 7s linear infinite; }
  .orb3 { animation:orbit3 11s linear infinite; }

  .float-card { position:absolute; z-index:5; background:#fff; border-radius:12px; padding:10px 14px; border:1px solid #F1F5F9; box-shadow:0 4px 20px rgba(0,0,0,0.08); font-size:12px; }
  .float-card.fc-top { top:18px; right:8px; animation:float 4s ease-in-out infinite; }
  .float-card.fc-bottom { bottom:36px; left:8px; animation:float 4s ease-in-out 1.5s infinite; }
  .fc-label { font-weight:500; color:#1E293B; font-size:11px; }
  .fc-value { font-size:18px; font-weight:700; color:#3B82F6; margin-top:2px; }
  .fc-sub { font-size:10px; color:#64748B; display:flex; align-items:center; gap:4px; margin-top:2px; }
  .fc-green { color:#22C55E; font-weight:600; }
  .fc-badge { display:inline-block; background:#F0FDF4; color:#16A34A; font-size:10px; padding:2px 8px; border-radius:10px; font-weight:600; }

  /* shared */
  .divider { height:1px; background:linear-gradient(90deg,transparent,#E2E8F0,transparent); max-width:1100px; margin:0 auto; }
  .sec-tag { font-size:12px; font-weight:600; color:#3B82F6; text-transform:uppercase; letter-spacing:1px; text-align:center; margin-bottom:8px; }
  .sec-title { font-size:28px; font-weight:700; color:#1E293B; text-align:center; margin-bottom:40px; }

  /* OVERVIEW */
  .overview { background:#F8FAFC; padding:56px 48px; }
  .overview-inner { max-width:1100px; margin:0 auto; }
  .cards-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .feat-card { background:#fff; border-radius:16px; padding:28px; border:1px solid #E2E8F0; position:relative; overflow:hidden; transition:transform 0.2s,box-shadow 0.2s; }
  .feat-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,0.08); }
  .feat-card.accent { background:#3B82F6; border-color:#3B82F6; }
  .feat-card.accent .feat-title { color:#fff; }
  .feat-card.accent .feat-text { color:rgba(255,255,255,0.85); }
  .feat-card.accent .iw { background:rgba(255,255,255,0.2); }
  .iw { width:44px; height:44px; border-radius:12px; background:#F5F3FF; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
  .feat-title { font-size:15px; font-weight:600; color:#1E293B; margin-bottom:8px; }
  .feat-text { font-size:17px; color:#64748B; line-height:1.65; }
  .card-deco { position:absolute; right:-20px; bottom:-20px; width:80px; height:80px; border-radius:50%; background:rgba(255,255,255,0.1); }

  /* BENEFITS */
  .benefits { padding:56px 48px; }
  .benefits-inner { max-width:1100px; margin:0 auto; }
  .bene-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:16px; }
  .bene-item { text-align:center; padding:24px 12px; border-radius:14px; background:#F8FAFC; border:1px solid #E2E8F0; transition:all 0.2s; }
  .bene-item:hover { background:#F5F3FF; border-color:#DDD6FE; transform:translateY(-2px); }
  .bene-icon-wrap { width:52px; height:52px; border-radius:14px; background:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 12px; border:1px solid #E2E8F0; box-shadow:0 2px 8px rgba(0,0,0,0.05); }
  .bene-label { font-size:12px; color:#475569; font-weight:500; line-height:1.4; }

  /* SOLUTION */
  .solution { background:#F8FAFC; padding:56px 48px; }
  .solution-inner { max-width:1100px; margin:0 auto; }
  .sol-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .sol-card { background:#fff; border-radius:16px; padding:28px; border:1px solid #E2E8F0; display:flex; flex-direction:column; gap:12px; transition:all 0.2s; }
  .sol-card:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(0,0,0,0.07); border-color:#DDD6FE; }
  .sol-card.featured { background:#1E1245; border-color:#1E1245; }
  .sol-card.featured .sol-title { color:#fff; }
  .sol-card.featured .sol-desc { color:rgba(255,255,255,0.7); }
  .sol-card.featured .sol-tag { background:rgba(255,255,255,0.15); color:#C4B5FD; }
  .sol-iw { width:48px; height:48px; border-radius:14px; background:#F5F3FF; display:flex; align-items:center; justify-content:center; }
  .sol-card.featured .sol-iw { background:rgba(255,255,255,0.12); }
  .sol-title { font-size:14px; font-weight:600; color:#1E293B; }
  .sol-desc { font-size:12px; color:#64748B; line-height:1.65; }
  .sol-tag { display:inline-block; background:#F5F3FF; color:#3B82F6; font-size:10px; padding:3px 10px; border-radius:20px; font-weight:600; align-self:flex-start; }
  .match-pill { display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.1); border-radius:10px; padding:10px 14px; margin-top:4px; }
  .match-num { font-size:24px; font-weight:700; color:#fff; }
  .match-label { font-size:11px; color:rgba(255,255,255,0.75); line-height:1.4; }

  @media (max-width:768px) {
 .hero { 
    grid-template-columns:1fr; 
    padding:100px 24px 40px; /* 👈 FIXED */
  }    .hero-right { height:320px; }
    .cards-grid,.sol-grid { grid-template-columns:1fr; }
    .bene-grid { grid-template-columns:repeat(2,1fr); }
    .overview,.benefits,.solution { padding:40px 24px; }
  }
`;

/* ─── SVG icon helper ──────────────────────────────────── */
const Ico = ({ path, color = "#3B82F6", size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
);

/* ─── Component ────────────────────────────────────────── */
const FacialRecognition = () => (
  <>
    <style>{css}</style>
    <div className="fr-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="badge">
            <span className="badge-dot" />
            AI-Powered Biometric Platform
          </div>
          <h1>
            AI Based Facial &amp;<br />
            <span>Document</span> Recognition
          </h1>
          <p className="hero-desc">
            Explore cutting-edge AI-driven facial and document recognition
            designed to elevate security and ensure regulatory compliance.
            Deliver seamless onboarding with precision and speed.
          </p>
         
          <div className="trust-line">
            <span className="trust-dot" />
            <span className="trust-text">
              99.8% accuracy · GDPR & RBI compliant · Used in 300+ enterprises
            </span>
          </div>
        </div>

        <div className="hero-right">
          <div className="visual-bg" />

          {/* Face scan frame */}
          <div className="face-frame">
            <div className="corner tl" />
            <div className="corner tr" />
            <div className="corner bl" />
            <div className="corner br" />
            <div className="scan-line" />
            <svg className="face-svg" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="60" cy="65" rx="38" ry="48" fill="#EDE9FE" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
              <circle cx="60" cy="55" r="22" fill="#DDD6FE" stroke="#3B82F6" strokeWidth="1.2" />
              <ellipse cx="52" cy="52" rx="4" ry="5" fill="#3B82F6" opacity="0.8" />
              <ellipse cx="68" cy="52" rx="4" ry="5" fill="#3B82F6" opacity="0.8" />
              <path d="M50 64 Q60 72 70 64" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M47 48 Q52 45 57 48" stroke="#6D28D9" strokeWidth="1" strokeLinecap="round" fill="none" />
              <path d="M63 48 Q68 45 73 48" stroke="#6D28D9" strokeWidth="1" strokeLinecap="round" fill="none" />
              <rect x="22" y="95" width="76" height="28" rx="8" fill="#3B82F6" opacity="0.12" />
              <text x="60" y="113" textAnchor="middle" fontSize="9" fill="#3B82F6" fontWeight="600">IDENTITY VERIFIED</text>
            </svg>
            {/* Landmark dots */}
            {[
              { top:"30%", left:"35%", delay:"0s" },
              { top:"30%", left:"65%", delay:"0.3s" },
              { top:"50%", left:"50%", delay:"0.6s" },
              { top:"62%", left:"40%", delay:"0.2s" },
              { top:"62%", left:"60%", delay:"0.5s" },
            ].map((s, i) => (
              <div key={i} className="dot" style={{ top: s.top, left: s.left, animationDelay: s.delay }} />
            ))}
          </div>

          <div className="pulse" />
          <div className="pulse pulse2" />

          {/* Orbiting icons */}
          <div className="orbit-wrap">
            <div className="orb-icon orb1">
              <Ico path="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </div>
            <div className="orb-icon orb2">
              <Ico path="M3 4h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2zM7 8h10M7 12h6" color="#0EA5E9" />
            </div>
            <div className="orb-icon orb3">
              <Ico path="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" color="#10B981" />
            </div>
          </div>

          {/* Floating cards */}
          <div className="float-card fc-top">
            <div className="fc-label">Match Score</div>
            <div className="fc-value">98.6%</div>
            <div className="fc-sub"><span className="fc-green">✓ Verified</span></div>
          </div>
          <div className="float-card fc-bottom">
            <div className="fc-label">Processing Time</div>
            <div className="fc-value">0.3s</div>
            <div className="fc-sub"><span className="fc-badge">⚡ Real-time</span></div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* OVERVIEW */}
      <section className="overview">
        <div className="overview-inner">
          <p className="sec-tag">Why choose us</p>
          <h2 className="sec-title">AI Based Facial & Document Recognition Overview</h2>
          <div className="cards-grid">
            <div className="feat-card">
              <div className="iw"><Ico path="M12 8v4l3 3M12 2a10 10 0 100 20A10 10 0 0012 2z" /></div>
              <div className="feat-title">Access Controls via Match %</div>
              <div className="feat-text">Determine access rights using similarity scores between facial features and stored identity data in real time.</div>
            </div>
            <div className="feat-card accent">
              <div className="card-deco" />
              <div className="iw"><Ico path="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z" color="#fff" /></div>
              <div className="feat-title">Identity Verification & Auth</div>
              <div className="feat-text">High accuracy AI verification reducing false positives and ensuring reliable identity validation at scale.</div>
            </div>
            <div className="feat-card">
              <div className="iw"><Ico path="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" /></div>
              <div className="feat-title">Adaptability & Scalability</div>
              <div className="feat-text">AI scales with your growing user base and evolving security requirements without compromising accuracy.</div>
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
          <h2 className="sec-title">AI Facial & Document Recognition Suite</h2>
          <div className="sol-grid">

            <div className="sol-card featured">
              <div className="sol-iw">
                <Ico path="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z" color="#C4B5FD" size={24} />
              </div>
              <div className="sol-title">Face Match & Liveness</div>
              <div className="sol-desc">Real-time facial comparison against ID documents with 3D liveness detection to prevent spoofing.</div>
              <div className="match-pill">
                <span className="match-num">99.8%</span>
                <span className="match-label">Match<br />Accuracy</span>
              </div>
              <div className="sol-tag">Most Popular</div>
            </div>

            <div className="sol-card">
              <div className="sol-iw">
                <Ico path="M3 4h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2zM7 8h10M7 12h6M7 16h4" size={24} />
              </div>
              <div className="sol-title">Document OCR</div>
              <div className="sol-desc">Automated extraction and validation of key fields from Aadhaar, PAN, passport, and driving licence.</div>
              <div className="sol-tag">Aadhaar · PAN · DL · Passport</div>
            </div>

            <div className="sol-card">
              <div className="sol-iw">
                <Ico path="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" size={24} />
              </div>
              <div className="sol-title">Fraud & Tamper Detection</div>
              <div className="sol-desc">AI-powered analysis to identify forged documents, morphed photos, and presentation attacks.</div>
              <div className="sol-tag">ISO 30107-3 Compliant</div>
            </div>

          </div>
        </div>
      </section>

    </div>
  </>
);

export default FacialRecognition;