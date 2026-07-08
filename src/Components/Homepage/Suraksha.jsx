import React, { useEffect, useRef, useState } from "react";
import { Shield, Cpu, Lock, Activity } from "lucide-react";

const features = [
  {
    title: "End-to-End Encryption",
    desc: "Secure identity workflows with military-grade encrypted verification pipelines that protect every data point in transit and at rest.",
    icon: Lock,
    accent: "#2563eb",
    soft: "#eff6ff",
    stat: "256-bit AES",
  },
  {
    title: "AI Decision Engine",
    desc: "Smart fraud detection powered by adaptive AI risk scoring models trained on millions of verified identity signals.",
    icon: Cpu,
    accent: "#7c3aed",
    soft: "#f5f3ff",
    stat: "98.7% accuracy",
  },
  {
    title: "Continuous Monitoring",
    desc: "Track suspicious activities using real-time behavioral analytics that flag anomalies before they become threats.",
    icon: Activity,
    accent: "#059669",
    soft: "#ecfdf5",
    stat: "24/7 live watch",
  },
  {
    title: "Real-Time Protection",
    desc: "Instant fraud prevention across all onboarding workflows with sub-millisecond response times and zero false positives.",
    icon: Shield,
    accent: "#d97706",
    soft: "#fffbeb",
    stat: "<1ms response",
  },
];

const bars = [
  { label: "Fraud Blocked",     pct: 99, color: "#2563eb" },
  { label: "Identity Verified", pct: 97, color: "#7c3aed" },
  { label: "Anomalies Flagged", pct: 88, color: "#059669" },
];

const ticks = [
  "SOC 2 Type II Certified",
  "GDPR & DPDP Compliant",
  "ISO 27001 Audited",
];

/* ── Animated counter ── */
const useCounter = (target, duration = 1800, startDelay = 600) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf;
    const timeout = setTimeout(() => {
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const prog = Math.min((ts - start) / duration, 1);
        const ease = 1 - Math.pow(1 - prog, 3);
        setValue(Math.round(ease * target));
        if (prog < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, startDelay);
    return () => { clearTimeout(timeout); cancelAnimationFrame(raf); };
  }, [target, duration, startDelay]);
  return value;
};

/* ── Bar fill on mount ── */
const AnimatedBar = ({ pct, color }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), 700);
    return () => clearTimeout(t);
  }, [pct]);
  return (
    <div style={{
      flex: 1, height: 6, background: "#f1f5f9",
      borderRadius: 99, overflow: "hidden",
    }}>
      <div style={{
        height: "100%", borderRadius: 99,
        background: color,
        width: `${width}%`,
        transition: "width 1.1s cubic-bezier(0.22,1,0.36,1)",
      }} />
    </div>
  );
};

/* ── Centre dashboard ── */
const Dashboard = () => {
  const count = useCounter(24381);
  return (
    <div style={{
      width: "100%",
      background: "#fff",
      border: "1px solid #e2e8f0",
      borderRadius: 20,
      padding: 20,
      boxShadow: "0 4px 24px rgba(37,99,235,.08)",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: "#1e293b" }}>Protection Dashboard</span>
        <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10.5, fontWeight: 600, color: "#059669" }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%", background: "#059669",
            animation: "livePulse 2s ease infinite",
          }} />
          Live
        </span>
      </div>

      {/* Big metric */}
      <div style={{
        textAlign: "center", padding: "16px 0 14px",
        borderBottom: "1px solid #f1f5f9", marginBottom: 14,
      }}>
        <span style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "2.8rem", color: "#2563eb",
          lineHeight: 1, display: "block",
        }}>
          {count.toLocaleString()}
        </span>
        <span style={{
          fontSize: 11, color: "#94a3b8", marginTop: 4,
          display: "block", letterSpacing: "0.04em", textTransform: "uppercase",
        }}>
          Threats blocked today
        </span>
      </div>

      {/* Bars */}
      <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 14 }}>
        {bars.map((b) => (
          <div key={b.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "#475569", fontWeight: 500 }}>{b.label}</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: b.color }}>{b.pct}%</span>
            </div>
            <AnimatedBar pct={b.pct} color={b.color} />
          </div>
        ))}
      </div>

      {/* Stat pills */}
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        {[
          { val: "99.4%", lbl: "Block Rate" },
          { val: "<1ms",  lbl: "Response"   },
          { val: "24/7",  lbl: "Uptime"     },
        ].map(({ val, lbl }) => (
          <div key={lbl} style={{
            flex: 1, background: "#f8faff",
            border: "1px solid #e0eaff",
            borderRadius: 10, padding: "8px 4px", textAlign: "center",
          }}>
            <span style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.05rem", color: "#2563eb",
              display: "block", lineHeight: 1,
            }}>{val}</span>
            <span style={{
              fontSize: 9, color: "#94a3b8", display: "block",
              marginTop: 3, textTransform: "uppercase", letterSpacing: "0.04em",
            }}>{lbl}</span>
          </div>
        ))}
      </div>

      {/* Tick list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {ticks.map((t) => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "#475569" }}>
            <div style={{
              width: 16, height: 16, borderRadius: "50%",
              background: "#eff6ff", border: "1px solid #bfdbfe",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="9" height="9" viewBox="0 0 10 10">
                <polyline points="2,5 4,7.5 8,2.5" fill="none" stroke="#2563eb"
                  strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Feature card ── */
const FeatureCard = ({ item, delay }) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const Icon = item.icon;
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1px solid ${hovered ? item.accent + "55" : "rgba(203,213,225,.85)"}`,
        borderRadius: 16,
        padding: 18,
        display: "flex",
        alignItems: "flex-start",
        gap: 13,
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity .45s ease, transform .45s ease, box-shadow .22s, border-color .2s",
        boxShadow: hovered ? "0 8px 28px rgba(0,0,0,.09)" : "none",
      }}
    >
      {/* Bottom accent bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        borderRadius: "0 0 16px 16px",
        background: `linear-gradient(90deg, ${item.accent}, ${item.accent}88)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity .2s",
      }} />

      {/* Icon */}
      <div style={{
        width: 40, height: 40, borderRadius: 11,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        background: hovered ? item.accent : item.soft,
        color: hovered ? "#fff" : item.accent,
        transition: "background .2s, color .2s",
      }}>
        <Icon size={18} />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: ".9rem", color: "#1e293b", marginBottom: 5, lineHeight: 1.3,
        }}>{item.title}</div>
        <p style={{ fontSize: ".845rem", color: "#475569", lineHeight: 1.7, margin: "0 0 9px" }}>
          {item.desc}
        </p>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          fontSize: 10.5, fontWeight: 600, borderRadius: 100,
          padding: "3px 10px", border: `1px solid ${item.accent}33`,
          background: item.soft, color: item.accent,
        }}>
          ✦ {item.stat}
        </span>
      </div>
    </div>
  );
};

/* ── Main ── */
const Suraksha = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

      .sur-section {
        font-family: 'DM Sans', sans-serif;
        background: #f8f9fc;
        padding: 64px 24px 72px;
        position: relative;
        overflow: hidden;
      }
      .sur-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: radial-gradient(circle, #d1ddf7 1px, transparent 1px);
        background-size: 28px 28px;
        opacity: 0.45;
        pointer-events: none;
      }
      .sur-inner {
        position: relative;
        max-width: 1060px;
        margin: 0 auto;
      }
      .sur-header {
        text-align: center;
        margin-bottom: 52px;
      }
      .sur-label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #2563eb;
        background: #eff6ff;
        border: 1px solid #bfdbfe;
        border-radius: 100px;
        padding: 5px 14px;
        margin-bottom: 16px;
        opacity: 0;
        animation: surFadeUp 0.5s ease 0.1s forwards;
      }
      .sur-heading {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(1.8rem, 4vw, 2.75rem);
        color: #0f172a;
        line-height: 1.15;
        margin: 0 0 12px;
        opacity: 0;
        animation: surFadeUp 0.5s ease 0.18s forwards;
      }
      .hightlight { font-style: italic; color: #2563eb; }
      .sur-sub {
        font-size: 1rem;
        color: #475569;
        line-height: 1.75;
        max-width: 500px;
        margin: 0 auto;
        opacity: 0;
        animation: surFadeUp 0.5s ease 0.26s forwards;
      }
      .sur-body {
        display: grid;
        grid-template-columns: 1fr 272px 1fr;
        gap: 26px;
        align-items: center;
      }
      @media (max-width: 860px) {
        .sur-body { grid-template-columns: 1fr; max-width: 460px; margin: 0 auto; }
        .sur-mid { order: -1; }
      }
      .sur-col { display: flex; flex-direction: column; gap: 13px; }
      .sur-mid {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        opacity: 0;
        animation: surFadeUp 0.5s ease 0.22s forwards;
      }
      @keyframes surFadeUp {
        from { opacity: 0; transform: translateY(18px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes livePulse {
        0%   { box-shadow: 0 0 0 0 rgba(5,150,105,0.5); }
        60%  { box-shadow: 0 0 0 6px rgba(5,150,105,0); }
        100% { box-shadow: 0 0 0 0 rgba(5,150,105,0); }
      }
    `}</style>

    <section className="sur-section">
      <div className="sur-inner">

        <div className="sur-header">
          <div className="sur-label">🛡️ Kavach Suite</div>
          <h2 className="sur-heading">
            Introducing <span className="highlight">Timble Suraksha Kavach</span>
          </h2>
          <p className="sur-sub">
            Advanced fraud prevention infrastructure to protect digital onboarding,
            identity verification and financial workflows with AI-powered intelligence.
          </p>
        </div>

        <div className="sur-body">
          <div className="sur-col">
            {features.slice(0, 2).map((item, i) => (
              <FeatureCard key={item.title} item={item} delay={420 + i * 100} />
            ))}
          </div>

          <div className="sur-mid">
            <Dashboard />
          </div>

          <div className="sur-col">
            {features.slice(2, 4).map((item, i) => (
              <FeatureCard key={item.title} item={item} delay={420 + i * 100} />
            ))}
          </div>
        </div>

      </div>
    </section>
  </>
);

export default Suraksha;