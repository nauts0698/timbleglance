import React, { useEffect, useRef } from "react";
import {
  ShieldCheck,
  ClipboardCheck,
  Scale,
  BadgeCheck,
  BarChart3
} from "lucide-react";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let animId;
    let t = 0;

    const nodes = Array.from({ length: 38 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.8 + 0.8,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.005;

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99,152,255,0.55)";
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(() => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-wrap {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          min-height: 100vh;
          background: #f8f9fc;
          overflow: hidden;
          display: flex;
          padding-top: 80px;
          align-items: center;
          justify-content: center;
        }

        /* Subtle halftone dot grid */
        .hero-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #c7d7f5 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.55;
          z-index: 0;
        }

        /* Soft blue radial wash */
        .hero-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 45%, rgba(219,232,255,0.72) 0%, transparent 80%);
          z-index: 1;
        }

        .hero-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        .hero-inner {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 780px;
          padding: 0 24px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px 5px 8px;
          border-radius: 100px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(99,152,255,0.25);
          box-shadow: 0 1px 6px rgba(59,130,246,0.08);
          font-size: 12px;
          font-weight: 500;
          color: #3b5bdb;
          letter-spacing: 0.02em;
          margin-bottom: 36px;
          backdrop-filter: blur(8px);
          animation: fadeUp 0.7s ease both;
        }

        .hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.2);
          animation: pulse 2s ease infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(59,130,246,0.2); }
          50%       { box-shadow: 0 0 0 6px rgba(59,130,246,0.08); }
        }

        .hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.4rem, 6vw, 4rem);
          line-height: 1.13;
          letter-spacing: -0.02em;
          color: #0f172a;
          margin-bottom: 20px;
          animation: fadeUp 0.8s 0.1s ease both;
        }

      .hero-title .highlight {
  color: #2563eb;
  font-style: normal; /* just to be safe */
}

        .hero-sub {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #64748b;
          font-weight: 300;
          max-width: 560px;
          margin: 0 auto 38px;
          animation: fadeUp 0.8s 0.22s ease both;
        }

        .hero-actions {
            gap: 12px;
            display: flex;
  justify-content: center;
  align-items: center;

          justify-content: center;
          flex-wrap: wrap;
          animation: fadeUp 0.8s 0.34s ease both;
        }

        .btn-primary {
          padding: 13px 28px;
          border-radius: 12px;
          background: #1d4ed8;
          color: #fff;
          font-size: 0.92rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          letter-spacing: 0.01em;
          box-shadow: 0 4px 18px rgba(29,78,216,0.28), inset 0 1px 0 rgba(255,255,255,0.12);
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s;
        }

        .btn-primary:hover {
          background: #1e40af;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(29,78,216,0.35);
        }

        .btn-secondary {
          padding: 13px 28px;
          border-radius: 12px;
          background: rgba(255,255,255,0.8);
          color: #1e3a8a;
          font-size: 0.92rem;
          font-weight: 500;
          border: 1px solid rgba(99,152,255,0.3);
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: transform 0.18s ease, background 0.18s, box-shadow 0.18s;
        }

        .btn-secondary:hover {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.07);
        }

        /* Bottom card strip */
        .hero-strip {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 60px;
          animation: fadeUp 0.9s 0.5s ease both;
          padding: 0 24px;
        }

        .strip-card {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.75);
          border: 1px solid rgba(203,213,225,0.7);
          border-radius: 10px;
          padding: 9px 16px;
          backdrop-filter: blur(10px);
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          font-size: 0.82rem;
          color: #475569;
          font-weight: 400;
          white-space: nowrap;
        }

        .strip-icon {
          width: 18px;
          height: 18px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="hero-wrap">
        <canvas ref={canvasRef} className="hero-canvas" />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 10, width: "100%" }}>
          <div className="hero-inner">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              AI-Powered Risk Intelligence Platform
            </div>

           <h1 className="hero-title">
  AI Copilots for<br />
  <span className="highlight">Fraud Detection</span> &<br />
  Risk Intelligence
</h1>

            <p className="hero-sub">
              Deploy intelligent copilots across onboarding, underwriting,
              collections and verification workflows - reducing fraud and
              strengthening governance.
            </p>

            <div className="hero-actions">
              
            </div>
          </div>

          <div className="hero-strip">
          {[
  { icon: <ShieldCheck size={14} />, bg: "#eff6ff", label: "Fraud Detection" },
  { icon: <ClipboardCheck size={14} />, bg: "#f0fdf4", label: "Onboarding Checks" },
  { icon: <Scale size={14} />, bg: "#fefce8", label: "Underwriting AI" },
  { icon: <BadgeCheck size={14} />, bg: "#fdf4ff", label: "KYC Verification" },
  { icon: <BarChart3 size={14} />, bg: "#fff7ed", label: "Risk Scoring" },
].map((c) => (
              <div className="strip-card" key={c.label}>
                <span className="strip-icon" style={{ background: c.bg }}>{c.icon}</span>
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;