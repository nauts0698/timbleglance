import React from "react";

const css = `
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes blob { 0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%} 50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%} }
  @keyframes shimmer { 0%{opacity:0.3} 50%{opacity:1} 100%{opacity:0.3} }
  @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.55} 70%{transform:scale(1.6);opacity:0} 100%{opacity:0} }
  @keyframes ping { 0%{transform:scale(1);opacity:1} 100%{transform:scale(2.2);opacity:0} }
  @keyframes orbit  { from{transform:rotate(0deg)   translateX(100px) rotate(0deg)}   to{transform:rotate(360deg)  translateX(100px) rotate(-360deg)} }
  @keyframes orbit2 { from{transform:rotate(130deg) translateX(76px)  rotate(-130deg)} to{transform:rotate(490deg) translateX(76px)  rotate(-490deg)} }
  @keyframes orbit3 { from{transform:rotate(255deg) translateX(88px)  rotate(-255deg)} to{transform:rotate(615deg) translateX(88px)  rotate(-615deg)} }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.25} }

  .erpv-page * { box-sizing:border-box; margin:0; padding:0; }
  .erpv-page { font-family:system-ui,sans-serif; color:#1E293B; background:#fff; }

  .hero { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; padding:60px 48px; max-width:1100px; margin:0 auto; }
  .hero-left { animation:fadeInUp 0.6s ease both; }
  .badge { display:inline-flex; align-items:center; gap:6px; background:#E0F2FE; color:#3B82F6; font-size:12px; font-weight:600; padding:5px 14px; border-radius:20px; margin-bottom:18px; }
  .badge-dot { width:6px; height:6px; border-radius:50%; background:#3B82F6; display:inline-block; animation:shimmer 2s infinite; }
  .hero h1 { font-size:34px; font-weight:700; line-height:1.2; color:#1E293B; margin-bottom:14px; }
  .hero h1 span { color:#3B82F6; }
  .hero-desc { font-size:15px; color:#64748B; line-height:1.7; margin-bottom:28px; max-width:440px; }
  .hero-cta { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
  .btn-primary { background:#3B82F6; color:#fff; border:none; padding:12px 24px; border-radius:10px; font-size:14px; font-weight:500; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s; }
  .btn-primary:hover { background:#059669; transform:translateY(-1px); }
  .btn-secondary { background:transparent; color:#3B82F6; border:1.5px solid #3b83f646; padding:12px 24px; border-radius:10px; font-size:14px; font-weight:500; cursor:pointer; transition:all 0.2s; }
  .btn-secondary:hover { background:#E0F2FE; }
  .trust-line { display:flex; align-items:center; gap:8px; margin-top:20px; }
  .trust-dot { width:8px; height:8px; border-radius:50%; background:#3B82F6; display:inline-block; animation:blink 2s infinite; }
  .trust-text { font-size:12px; color:#64748B; }

  .hero-right { position:relative; display:flex; align-items:center; justify-content:center; height:400px; animation:fadeInUp 0.6s ease 0.15s both; }
  .visual-bg { position:absolute; width:300px; height:300px; background:linear-gradient(135deg,#E0F2FE,#F0FDF4); border-radius:50%; animation:blob 8s ease-in-out infinite; }

  .map-widget { position:relative; z-index:3; width:220px; height:170px; background:#E0F2FE; border-radius:18px; border:1.5px solid #3B82F6; overflow:hidden; box-shadow:0 4px 24px rgba(163, 231, 255, 0.15); }
  .map-pin { position:absolute; top:42%; left:50%; transform:translate(-50%,-100%); z-index:2; }
  .pin-body { width:22px; height:28px; background:#3B82F6; border-radius:50% 50% 50% 0; transform:rotate(-45deg); display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(137, 235, 255, 0.4); }
  .pin-inner { width:8px; height:8px; background:#fff; border-radius:50%; transform:rotate(45deg); }
  .pin-shadow { width:10px; height:5px; background:rgba(0,0,0,0.15); border-radius:50%; margin:0 auto; margin-top:2px; }
  .ping-ring { position:absolute; top:calc(42% - 14px); left:calc(50% - 11px); width:22px; height:22px; border-radius:50%; background:rgba(132, 210, 255, 0.3); animation:ping 1.8s ease-out infinite; }
  .ping-ring2 { animation-delay:0.6s; }
  .coord-tag { position:absolute; bottom:12px; left:12px; background:#fff; border-radius:8px; padding:5px 10px; font-size:10px; font-weight:600; color:#065F46; border:1px solid #a7d6f3; }
  .accuracy-tag { position:absolute; top:10px; right:10px; background:#3B82F6; border-radius:6px; padding:3px 8px; font-size:9px; font-weight:700; color:#fff; }

  .pulse { position:absolute; z-index:2; width:220px; height:170px; border-radius:18px; background:rgba(16, 154, 185, 0.12); animation:pulse-ring 2.2s ease-out infinite; }
  .pulse2 { animation-delay:0.9s; }

  .orbit-wrap { position:absolute; z-index:4; width:0; height:0; }
  .orb-icon { position:absolute; width:48px; height:48px; background:#fff; border-radius:14px; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 12px rgba(0,0,0,0.1); border:1px solid #F1F5F9; }
  .orb1 { animation:orbit 9s linear infinite; }
  .orb2 { animation:orbit2 7s linear infinite; }
  .orb3 { animation:orbit3 11s linear infinite; }

  .float-card { position:absolute; z-index:5; background:#fff; border-radius:12px; padding:10px 14px; border:1px solid #b6dbff; box-shadow:0 4px 20px rgba(0,0,0,0.08); }
  .float-card.fc-top { top:16px; right:6px; animation:float 4s ease-in-out infinite; }
  .float-card.fc-bottom { bottom:32px; left:6px; animation:float 4s ease-in-out 1.5s infinite; }
  .fc-label { font-weight:500; color:#1E293B; font-size:11px; }
  .fc-value { font-size:18px; font-weight:700; color:#3B82F6; margin-top:2px; }
  .fc-sub { font-size:10px; color:#64748B; display:flex; align-items:center; gap:4px; margin-top:2px; }
  .fc-green { color:#3B82F6; font-weight:600; }
  .fc-badge { display:inline-block; background:#E0F2FE; color:#065F46; font-size:10px; padding:2px 8px; border-radius:10px; font-weight:600; }

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
  .iw { width:44px; height:44px; border-radius:12px; background:#E0F2FE; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
  .feat-title { font-size:15px; font-weight:600; color:#1E293B; margin-bottom:8px; }
  .feat-text { font-size:17px; color:#64748B; line-height:1.65; }
  .card-deco { position:absolute; right:-20px; bottom:-20px; width:80px; height:80px; border-radius:50%; background:rgba(255,255,255,0.12); }

  .benefits { padding:56px 48px; }
  .benefits-inner { max-width:1100px; margin:0 auto; }
  .bene-row1 { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:16px; }
  .bene-row2 { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; max-width:75%; margin:0 auto; }
  .bene-item { text-align:center; padding:22px 12px; border-radius:14px; background:#F8FAFC; border:1px solid #E2E8F0; transition:all 0.2s; }
  .bene-item:hover { background:#E0F2FE; border-color:#A7F3D0; transform:translateY(-2px); }
  .bene-icon-wrap { width:50px; height:50px; border-radius:14px; background:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 10px; border:1px solid #E2E8F0; box-shadow:0 2px 8px rgba(0,0,0,0.05); }
  .bene-label { font-size:12px; color:#475569; font-weight:500; line-height:1.4; }

  .solution { background:#F8FAFC; padding:56px 48px; }
  .solution-inner { max-width:1100px; margin:0 auto; }
  .sol-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .sol-card { background:#fff; border-radius:16px; padding:28px; border:1px solid #E2E8F0; display:flex; flex-direction:column; gap:12px; transition:all 0.2s; }
  .sol-card:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(0,0,0,0.07); border-color:#A7F3D0; }
.sol-card.featured {
  background:#1E3A8A; /* deep blue */
  border-color:#1E3A8A;
}  .sol-card.featured .sol-title { color:#fff; }
  .sol-card.featured .sol-desc { color:rgba(255,255,255,0.72); }
  .sol-card.featured .sol-tag { background:rgba(255,255,255,0.14); color:#6EE7B7; }
  .sol-card.featured .sol-iw { background:rgba(255,255,255,0.12); }
  .sol-iw { width:48px; height:48px; border-radius:14px; background:#E0F2FE; display:flex; align-items:center; justify-content:center; }
  .sol-title { font-size:14px; font-weight:600; color:#1E293B; }
  .sol-desc { font-size:12px; color:#64748B; line-height:1.65; }
  .sol-tag { display:inline-block; background:#E0F2FE; color:#3B82F6; font-size:10px; padding:3px 10px; border-radius:20px; font-weight:600; align-self:flex-start; }
  .stat-pill { display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.1); border-radius:10px; padding:10px 14px; margin-top:4px; }
  .stat-num { font-size:24px; font-weight:700; color:#fff; }
  .stat-label { font-size:11px; color:rgba(255,255,255,0.75); line-height:1.4; }

  @media (max-width:768px) {
    .hero { grid-template-columns:1fr; padding:110px 40px 24px; }
    .hero-right { height:320px; }
    .cards-grid,.sol-grid { grid-template-columns:1fr; }
    .bene-row1 { grid-template-columns:repeat(2,1fr); }
    .bene-row2 { max-width:100%; grid-template-columns:repeat(2,1fr); }
    .overview,.benefits,.solution { padding:40px 24px; }
  }
`;

const Ico = ({ path, color = "#3B82F6", size = 22, extra }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
    {extra}
  </svg>
);

const ERPV = () => (
  <>
    <style>{css}</style>
    <div className="erpv-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="badge"><span className="badge-dot" /> Digital Address Verification</div>
          <h1>Electronic Residence<br /><span>Physical Verification</span></h1>
          <p className="hero-desc">
            Introducing ERPV -  your hassle-free address verification solution.
            Our advanced digital platform combines image recognition and geo-tagging
            for seamless verification from the comfort of your own space.
          </p>
         
          <div className="trust-line">
            <span className="trust-dot" />
            <span className="trust-text">Pan-India coverage · 98% geo accuracy · RBI & IRDAI compliant</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="visual-bg" />

          {/* Map widget */}
          <div className="map-widget">
            <svg style={{position:"absolute",inset:0,width:"100%",height:"100%"}} viewBox="0 0 220 170" fill="none" xmlns="http://www.w3.org/2000/svg">
              {[28,56,84,112,140].map(y => (
                <line key={y} x1="0" y1={y} x2="220" y2={y} stroke="#aaf9ff" strokeWidth="0.6" strokeDasharray="4 4"/>
              ))}
              {[44,88,132,176].map(x => (
                <line key={x} x1={x} y1="0" x2={x} y2="170" stroke="#aaf9ff" strokeWidth="0.6" strokeDasharray="4 4"/>
              ))}
              <path d="M0 95 Q55 80 110 95 Q165 110 220 90" stroke="#fff" strokeWidth="4" fill="none" opacity="0.7"/>
              <path d="M110 0 Q108 60 110 95 Q112 130 110 170" stroke="#fff" strokeWidth="3" fill="none" opacity="0.5"/>
              <circle cx="110" cy="72" r="32" fill="rgba(16,185,129,0.1)" stroke="#3B82F6" strokeWidth="1" strokeDasharray="5 3"/>
            </svg>
            <div className="map-pin">
              <div className="pin-body"><div className="pin-inner" /></div>
              <div className="pin-shadow" />
            </div>
            <div className="ping-ring" />
            <div className="ping-ring ping-ring2" />
            <div className="coord-tag">28.6139° N, 77.2090° E</div>
            <div className="accuracy-tag">±3m accuracy</div>
          </div>

          <div className="pulse" />
          <div className="pulse pulse2" />

          {/* Orbiting icons */}
          <div className="orbit-wrap">
            <div className="orb-icon orb1">
              <Ico path="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"
                extra={<circle cx="12" cy="10" r="3" stroke="#3B82F6" strokeWidth="1.8"/>} />
            </div>
            <div className="orb-icon orb2">
              <Ico path="M3 3h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2zM3 9h18M9 21V9" color="#3B82F6" />
            </div>
            <div className="orb-icon orb3">
              <Ico path="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" color="#F59E0B" />
            </div>
          </div>

          {/* Floating cards */}
          <div className="float-card fc-top">
            <div className="fc-label">Verified Today</div>
            <div className="fc-value">8,320</div>
            <div className="fc-sub"><span className="fc-green">↑ 18%</span> vs yesterday</div>
          </div>
          <div className="float-card fc-bottom">
            <div className="fc-label">Avg. TAT</div>
            <div className="fc-value">4 min</div>
            <div className="fc-sub"><span className="fc-badge">⚡ Instant</span></div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* OVERVIEW */}
   <section className="overview">
  <div className="overview-inner">
    <p className="sec-tag">Why choose us</p>
    <h2 className="sec-title">
      Electronic Residence Physical Verification Overview
    </h2>

    <div className="cards-grid">
      <div className="feat-card">
        <div className="iw">
          <Ico
            path="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"
            extra={
              <circle
                cx="12"
                cy="10"
                r="3"
                stroke="#3B82F6"
                strokeWidth="1.8"
              />
            }
          />
        </div>
        <div className="feat-title">
          Address Precision with GEO Coordinates
        </div>
        <div className="feat-text">
          Verify addresses with precise geo-location mapping across urban and
          rural areas nationwide.
        </div>
      </div>

      <div className="feat-card accent">
        <div className="card-deco" />
        <div className="iw">
          <Ico
            path="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7zM9.5 9a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM3 20h18"
            color="#fff"
          />
        </div>
        <div className="feat-title">Leverages AI/ML Technology</div>
        <div className="feat-text">
          AI powered workflows for automated verification, image recognition,
          and instant reporting.
        </div>
      </div>

      <div className="feat-card">
        <div className="iw">
          <Ico path="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9zM13 2v7h7" />
        </div>
        <div className="feat-title">Seamless Integration</div>
        <div className="feat-text">
          Integrates with your existing tech stack via REST APIs with
          configurable, low-code workflows.
        </div>
      </div>
    </div>
  </div>
</section>



      <div className="divider" />

      {/* SOLUTION */}
      <section className="solution">
        <div className="solution-inner">
          <p className="sec-tag">Solutions</p>
          <h2 className="sec-title">ERPV Solution Suite</h2>
          <div className="sol-grid">
            <div className="sol-card featured">
              <div className="sol-iw">
                <Ico path="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" color="#a8f2ff" size={24}
                  extra={<circle cx="12" cy="10" r="3" stroke="#a8f2ff" strokeWidth="1.8"/>} />
              </div>
              <div className="sol-title">Geo-tagged Address Verification</div>
              <div className="sol-desc">Pinpoint residence location with GPS coordinates, captured image, and timestamp in a single workflow.</div>
              <div className="stat-pill">
                <span className="stat-num">98%</span>
                <span className="stat-label">Geo<br/>Accuracy</span>
              </div>
              <div className="sol-tag">Most Popular</div>
            </div>
            <div className="sol-card">
              <div className="sol-iw">
                <Ico path="M3 3h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2zM3 9h18M9 21V9" size={24} />
              </div>
              <div className="sol-title">Digital Field Verification</div>
              <div className="sol-desc">Agent-less verification via customer self-service app — no field visit required, fully paperless.</div>
              <div className="sol-tag">Self-Service · Paperless</div>
            </div>
            <div className="sol-card">
              <div className="sol-iw">
                <Ico path="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" size={24} />
              </div>
              <div className="sol-title">AI Image Recognition</div>
              <div className="sol-desc">Automated analysis of property photos to validate address markers, name plates, and surroundings.</div>
              <div className="sol-tag">ML-Powered · Instant</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </>
);

export default ERPV;