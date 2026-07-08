/**
 * BookDemoPage.jsx — Fully responsive (mobile + desktop)
 *
 * Install: npm install @emailjs/browser gsap
 * EmailJS template vars: {{name}}, {{email}}, {{phone}}, {{message}}, {{time}}
 */

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import Footer from "../Footer";

const EMAILJS_SERVICE_ID  = "service_2b6fqyb";
const EMAILJS_TEMPLATE_ID = "template_odtyjog";
const EMAILJS_PUBLIC_KEY  = "dAQTp0izROTKQe3hK";

const Spinner = () => (
  <svg style={{ animation: "bdSpin 0.8s linear infinite" }} width="16" height="16"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
    <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
  </svg>
);

const ArrowRight = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckCircle = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
    stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" />
  </svg>
);

const LockSVG = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
    stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const BoltIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f97316" stroke="#f97316" strokeWidth="1">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

function StatCard({ value, label }) {
  return (
    <div style={{
      flex: 1, textAlign: "center",
      background: "rgba(255,255,255,0.10)",
      border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: 12, padding: "10px 8px",
    }}>
      <div style={{ fontSize: 20, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.55)", marginTop: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
    </div>
  );
}

function EventRow({ icon, title, sub, danger }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10,
      background: danger ? "rgba(239,68,68,0.13)" : "rgba(255,255,255,0.07)",
      border: `1px solid ${danger ? "rgba(239,68,68,0.28)" : "rgba(255,255,255,0.11)"}`,
      borderRadius: 10, padding: "8px 12px",
    }}>
      <span style={{
        width: 24, height: 24, borderRadius: 7, flexShrink: 0,
        background: danger ? "rgba(239,68,68,0.22)" : "rgba(255,255,255,0.12)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 11, color: danger ? "#fca5a5" : "rgba(255,255,255,0.75)",
      }}>{icon}</span>
      <div>
        <div style={{ fontSize: 11.5, fontWeight: 700, color: danger ? "#fca5a5" : "#fff", lineHeight: 1 }}>{title}</div>
        <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.42)", marginTop: 2 }}>{sub}</div>
      </div>
    </div>
  );
}

export default function BookDemoPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle");
  const [form, setForm]     = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});

  const leftRef   = useRef(null);
  const rightRef  = useRef(null);
  const fieldsRef = useRef([]);
  const btnRef    = useRef(null);
  const dotRefs   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.55, ease: "power3.out", delay: 0.1 }
      );
      gsap.fromTo(rightRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.55, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        fieldsRef.current.filter(Boolean),
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.36, stagger: 0.07, ease: "power2.out", delay: 0.38 }
      );
      gsap.to(dotRefs.current.filter(Boolean), {
        y: -12, opacity: 0, duration: 2.2,
        stagger: { each: 0.35, repeat: -1 },
        ease: "power1.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  const fRef = (i) => (el) => { fieldsRef.current[i] = el; };
  const dRef = (i) => (el) => { dotRefs.current[i] = el; };

  const shakeRight = () =>
    gsap.fromTo(rightRef.current, { x: -7 }, { x: 0, duration: 0.45, ease: "elastic.out(1.2,0.4)" });

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^[+]?[\d\s\-().]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (!form.message.trim()) e.message = "Please describe what you need";
    return e;
  };

  const handleChange = (k) => (ev) => {
    setForm(f => ({ ...f, [k]: ev.target.value }));
    if (errors[k]) setErrors(er => ({ ...er, [k]: undefined }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); shakeRight(); return; }
    setStatus("sending");
    gsap.to(btnRef.current, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, phone: form.phone, message: form.message, time: new Date().toLocaleString("en-IN") },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      gsap.fromTo(rightRef.current, { scale: 0.97 }, { scale: 1, duration: 0.6, ease: "elastic.out(1,0.5)" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      shakeRight();
    }
  };

  const inp = (err) => ({
    width: "100%", boxSizing: "border-box",
    padding: "11px 14px", borderRadius: 10,
    border: `1.5px solid ${err ? "#f87171" : "#e2e8f0"}`,
    background: err ? "#fff5f5" : "#f8fafc",
    fontSize: 14, color: "#1e293b",
    outline: "none", fontFamily: "inherit",
    transition: "border-color 0.18s, box-shadow 0.18s",
  });

  const DOTS = ["#6366f1","#a5b4fc","#2563eb","#818cf8","#c7d2fe","#3b82f6"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes bdSpin  { to { transform: rotate(360deg); } }
        @keyframes bdPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .bd-page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: linear-gradient(135deg, #eef2ff 0%, #f4f7ff 55%, #e8efff 100%);
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* ── Navbar ── */
        .bd-nav {
          flex-shrink: 0;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(226,232,240,0.8);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .bd-nav-logo {
          display: flex; align-items: center; gap: 9px;
          cursor: pointer; flex-shrink: 0;
        }
        .bd-nav-icon {
          width: 34px; height: 34px; border-radius: 9px;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .bd-nav-links {
          display: flex; align-items: center; gap: 28px;
        }
        .bd-nav-link {
          color: #475569; font-size: 14px; font-weight: 500;
          text-decoration: none; transition: color 0.15s; white-space: nowrap;
        }
        .bd-nav-link:hover { color: #2563eb; }
        .bd-nav-cta {
          flex-shrink: 0;
          padding: 9px 18px; border-radius: 10px; border: none; cursor: pointer;
          font-size: 13px; font-weight: 700; color: #fff;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          box-shadow: 0 6px 22px rgba(37,99,235,0.35);
          display: flex; align-items: center; gap: 7px;
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: inherit; white-space: nowrap;
        }
        .bd-nav-cta:hover { transform: translateY(-1px); box-shadow: 0 8px 28px rgba(37,99,235,0.45); }

        /* ── Content area ── */
        .bd-mid {
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 36px 40px 48px;
          gap: 28px;
        }

        /* ── Left panel ── */
        .bd-left {
          width: 400px; flex-shrink: 0;
          border-radius: 20px;
          background: linear-gradient(150deg, #1e3a8a 0%, #2563eb 52%, #4f46e5 100%);
          box-shadow: 0 24px 60px -12px rgba(37,99,235,0.42);
          overflow: hidden; position: relative;
          display: flex; flex-direction: column; gap: 14px;
          padding: 26px 26px 22px;
        }

        /* ── Right panel ── */
        .bd-right {
          width: 440px; flex-shrink: 0;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 20px 56px -10px rgba(37,99,235,0.14), 0 4px 16px rgba(0,0,0,0.05);
          overflow: hidden;
          display: flex; flex-direction: column;
        }
        .bd-form-inner {
          display: flex; flex-direction: column;
          padding: 24px 30px 20px;
        }

        /* ── 2-col row ── */
        .bd-row2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 14px;
        }

        /* ── Input / button interactions ── */
        .bd-input:focus {
          border-color: #2563eb !important;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.13) !important;
          background: #fff !important;
        }
        .bd-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 14px 32px -4px rgba(37,99,235,0.52) !important;
        }
        .bd-btn:active:not(:disabled) { transform: scale(0.97); }

        /* ── Phone wrap ── */
        .bd-phone-wrap { display: flex; align-items: stretch; }
        .bd-phone-prefix {
          display: flex; align-items: center; gap: 5px;
          padding: 0 10px;
          background: #f1f5f9;
          border: 1.5px solid #e2e8f0; border-right: none;
          border-radius: 10px 0 0 10px;
          font-size: 12px; font-weight: 700; color: #475569;
          white-space: nowrap; flex-shrink: 0; user-select: none;
        }
        .bd-phone-prefix.err { border-color: #f87171; background: #fff5f5; }

        .bd-label {
          display: block; font-size: 10.5px; font-weight: 700; color: #475569;
          letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 5px;
        }
        .bd-err { font-size: 10.5px; color: #ef4444; margin-top: 3px; display: block; }

        .bd-trust {
          display: flex; align-items: center; justify-content: center;
          gap: 20px; flex-wrap: wrap;
          border-top: 1px solid #f1f5f9;
          padding-top: 12px; margin-top: 12px;
        }

        /* ════════════ TABLET ≤960px ════════════ */
        @media (max-width: 960px) {
          .bd-mid {
            flex-direction: column;
            align-items: center;
            padding: 28px 24px 48px;
            gap: 20px;
          }
          .bd-left, .bd-right { width: 100%; max-width: 600px; }
        }

        /* ════════════ MOBILE ≤640px ════════════ */
        @media (max-width: 640px) {
          /* Navbar */
          .bd-nav { padding: 0 18px; height: 56px; }
          .bd-nav-links { display: none; }
          .bd-nav-cta { padding: 8px 13px; font-size: 12px; gap: 5px; }

          /* Content */
          .bd-mid { padding: 16px 14px 36px; gap: 14px; }

          /* Left panel */
          .bd-left { width: 100%; max-width: 100%; padding: 20px 18px 18px; gap: 12px; }
          .bd-left h2 { font-size: 20px !important; }
          .bd-left p  { font-size: 11px !important; }
          .bd-events-hide { display: none !important; }

          /* Right panel */
          .bd-right { width: 100%; max-width: 100%; }
          .bd-form-inner { padding: 18px 16px 16px; }

          /* Stack name + email fields */
          .bd-row2 { grid-template-columns: 1fr; gap: 10px; }

          /* Trust badges */
          .bd-trust { gap: 12px; }
        }
      `}</style>

      <div className="bd-page">

        {/* ══════════ NAVBAR ══════════════════════════════════════════════════ */}
        <nav className="bd-nav">
          <div className="bd-nav-logo" onClick={() => navigate("/")}>
            <div className="bd-nav-icon"><BoltIcon /></div>
            <span style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>Timble AI</span>
          </div>

          <div className="bd-nav-links">
            <a href="/#product" className="bd-nav-link">Product</a>
            <a href="/#about"   className="bd-nav-link">About</a>
            <a href="/#contact" className="bd-nav-link">Contact</a>
          </div>

          <button className="bd-nav-cta" onClick={() => navigate("/book-demo")}>
            Book a Demo
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </nav>

        {/* ══════════ FORM AREA ════════════════════════════════════════════════ */}
        <div className="bd-mid">

          {/* ── LEFT brand panel ── */}
          <div ref={leftRef} className="bd-left">
            <div aria-hidden style={{ position:"absolute",bottom:-70,right:-70,width:220,height:220,borderRadius:"50%",background:"rgba(255,255,255,0.05)",pointerEvents:"none" }} />
            <div aria-hidden style={{ position:"absolute",bottom:-28,right:-28,width:120,height:120,borderRadius:"50%",background:"rgba(255,255,255,0.07)",pointerEvents:"none" }} />
            <div aria-hidden style={{ position:"absolute",top:-44,left:-44,width:160,height:160,borderRadius:"50%",background:"rgba(255,255,255,0.04)",pointerEvents:"none" }} />

            <div aria-hidden style={{ position:"absolute",top:16,right:20,display:"flex",gap:5,pointerEvents:"none" }}>
              {DOTS.map((c,i) => (
                <span key={i} ref={dRef(i)} style={{ display:"block",borderRadius:"50%",opacity:0.48,background:c,width:i%2===0?7:5,height:i%2===0?7:5 }} />
              ))}
            </div>

            <div style={{ display:"flex",alignItems:"center",gap:8 }}>
              <div style={{ width:30,height:30,borderRadius:8,background:"rgba(255,255,255,0.14)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <BoltIcon />
              </div>
              <span style={{ fontSize:13,fontWeight:800,color:"rgba(255,255,255,0.9)" }}>Timble AI</span>
              <span style={{ fontSize:9,fontWeight:800,background:"rgba(255,255,255,0.14)",color:"rgba(255,255,255,0.72)",borderRadius:5,padding:"2px 7px",letterSpacing:"0.09em",textTransform:"uppercase" }}>BFSI</span>
            </div>

            <div>
              <h2 style={{ fontSize:25,fontWeight:900,color:"#fff",lineHeight:1.2,marginBottom:8 }}>
                Detect Fraud.<br />
                <span style={{ color:"#bfdbfe" }}>Reduce Risk.</span><br />
                Stay Compliant.
              </h2>
              <p style={{ fontSize:12,color:"rgba(255,255,255,0.58)",lineHeight:1.6,maxWidth:290 }}>
                Privacy-first AI for onboarding, underwriting &amp; collections — built for India's BFSI ecosystem.
              </p>
            </div>

            <div style={{ display:"flex",gap:8 }}>
              <StatCard value="3M+" label="KYC / yr" />
              <StatCard value="99%" label="Accuracy" />
              <StatCard value="~2s" label="Turnaround" />
            </div>

            {/* Hidden on mobile */}
            <div className="bd-events-hide">
              <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8 }}>
                <span style={{ fontSize:9,fontWeight:700,color:"rgba(255,255,255,0.42)",letterSpacing:"0.12em",textTransform:"uppercase" }}>Live Events</span>
                <span style={{ display:"flex",alignItems:"center",gap:5,fontSize:10,fontWeight:700,color:"#4ade80" }}>
                  <span style={{ width:6,height:6,borderRadius:"50%",background:"#4ade80",display:"inline-block",animation:"bdPulse 1.4s infinite" }} />
                  Streaming
                </span>
              </div>
              <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
                <EventRow icon="✕" title="Risk flag raised"   sub="Score 81 · Loan application" danger />
                <EventRow icon="✓" title="Document parsed"    sub="PAN + Aadhaar · 0.4s" />
                <EventRow icon="✓" title="Consent captured"   sub="DPDP §7 · HDFC Onboarding" />
              </div>
            </div>

            <div style={{ display:"flex",gap:6,flexWrap:"wrap" }}>
              {["Glance · KYC","Shield · DPDP","Sattya · OCR"].map((t,i) => (
                <span key={t} style={{
                  fontSize:10,fontWeight:700,borderRadius:20,padding:"3px 10px",
                  border:"1px solid rgba(255,255,255,0.17)",
                  color: i===2?"#fde68a":"rgba(255,255,255,0.72)",
                  background: i===2?"rgba(251,191,36,0.10)":"rgba(255,255,255,0.07)",
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* ── RIGHT form panel ── */}
          <div ref={rightRef} className="bd-right">
            <div style={{ height:4,flexShrink:0,background:"linear-gradient(90deg,#2563eb,#6366f1,#3b82f6)" }} />

            <div className="bd-form-inner">
              {status === "success" ? (
                <div style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",gap:14,padding:"40px 0" }}>
                  <CheckCircle />
                  <h3 style={{ fontSize:20,fontWeight:800,color:"#0f172a" }}>You're booked in! 🎉</h3>
                  <p style={{ fontSize:13,color:"#64748b",lineHeight:1.6,maxWidth:280 }}>
                    Our team will reach out within <strong>1 business day</strong> to schedule your personalised Timble AI demo.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({name:"",email:"",phone:"",message:""}); setErrors({}); }}
                    style={{ marginTop:6,padding:"10px 26px",borderRadius:10,background:"#2563eb",color:"#fff",fontWeight:700,fontSize:13,border:"none",cursor:"pointer",fontFamily:"inherit" }}
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  <div ref={fRef(0)} style={{ marginBottom:18 }}>
                    <span style={{ display:"inline-flex",alignItems:"center",gap:6,fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#2563eb",marginBottom:7 }}>
                      <span style={{ width:6,height:6,borderRadius:"50%",background:"#2563eb",display:"inline-block",animation:"bdPulse 1.5s infinite" }} />
                      AI Agents for BFSI
                    </span>
                    <h2 style={{ fontSize:24,fontWeight:900,color:"#0f172a",lineHeight:1.15,marginBottom:4 }}>
                      Book a <span style={{ color:"#2563eb" }}>Demo</span>
                    </h2>
                    <p style={{ fontSize:12,color:"#64748b",lineHeight:1.5 }}>
                      See live KYC, fraud detection &amp; DPDP compliance — tailored to your institution.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate>

                    <div ref={fRef(1)} className="bd-row2">
                      <div>
                        <label className="bd-label">Full Name</label>
                        <input type="text" placeholder="Riya Sharma"
                          value={form.name} onChange={handleChange("name")}
                          className="bd-input" style={inp(!!errors.name)} />
                        {errors.name && <span className="bd-err">{errors.name}</span>}
                      </div>
                      <div>
                        <label className="bd-label">Work Email</label>
                        <input type="email" placeholder="riya@hdfc.com"
                          value={form.email} onChange={handleChange("email")}
                          className="bd-input" style={inp(!!errors.email)} />
                        {errors.email && <span className="bd-err">{errors.email}</span>}
                      </div>
                    </div>

                    <div ref={fRef(2)} style={{ marginBottom:14 }}>
                      <label className="bd-label">Phone Number</label>
                      <div className="bd-phone-wrap">
                        <div className={`bd-phone-prefix${errors.phone ? " err" : ""}`}>
                          <span style={{ fontSize:13 }}>🇮🇳</span>
                          <span>+91</span>
                        </div>
                        <input
                          type="tel" placeholder="98765 43210"
                          value={form.phone} onChange={handleChange("phone")}
                          className="bd-input"
                          style={{
                            ...inp(!!errors.phone),
                            borderRadius: "0 10px 10px 0",
                            borderLeft: errors.phone ? "1.5px solid #f87171" : "1.5px solid #e2e8f0",
                            flex: 1,
                          }}
                        />
                      </div>
                      {errors.phone && <span className="bd-err">{errors.phone}</span>}
                    </div>

                    <div ref={fRef(3)} style={{ marginBottom:14 }}>
                      <label className="bd-label">What are you looking to solve?</label>
                      <textarea
                        rows={4}
                        placeholder="We need faster KYC onboarding and better fraud detection…"
                        value={form.message} onChange={handleChange("message")}
                        className="bd-input"
                        style={{ ...inp(!!errors.message), resize:"none" }}
                      />
                      {errors.message && <span className="bd-err">{errors.message}</span>}
                    </div>

                    {status === "error" && (
                      <div style={{ fontSize:11.5,color:"#dc2626",background:"#fef2f2",border:"1px solid #fecaca",borderRadius:8,padding:"7px 12px",marginBottom:12 }}>
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <div ref={fRef(4)}>
                      <button
                        ref={btnRef} type="submit" className="bd-btn"
                        disabled={status === "sending"}
                        style={{
                          width:"100%", padding:"13px 20px", borderRadius:11,
                          background: status==="sending" ? "#93c5fd" : "linear-gradient(135deg,#2563eb,#1d4ed8)",
                          color:"#fff", fontSize:14, fontWeight:800,
                          border:"none", cursor: status==="sending"?"not-allowed":"pointer",
                          display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                          boxShadow:"0 8px 22px -4px rgba(37,99,235,0.40)",
                          transition:"transform 0.15s, box-shadow 0.15s",
                          fontFamily:"inherit", letterSpacing:"0.01em",
                        }}
                      >
                        {status === "sending"
                          ? <><Spinner /> Submitting…</>
                          : <>Submit <ArrowRight /></>}
                      </button>
                    </div>
                  </form>

                  <div ref={fRef(5)} className="bd-trust">
                    {["ISO 27001","DPDP Ready","99% Accuracy"].map(b => (
                      <span key={b} style={{ display:"flex",alignItems:"center",gap:4,fontSize:11,fontWeight:600,color:"#64748b" }}>
                        <LockSVG />{b}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

       </div>
    </>
  );
}