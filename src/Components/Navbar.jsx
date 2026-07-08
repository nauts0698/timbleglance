import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/timbleai-logo.png";

const SERVICES = [
  {
    title: "Alternate Data Services",
    desc: "AI-powered alternative data intelligence",
    href: "/services/alternate-data",
    icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>),
    color: "#2563eb", bg: "rgba(37,99,235,0.09)",
  },
  {
    title: "Facial Recognition",
    desc: "Face match & liveness detection",
    href: "/services/facial-recognition",
    icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/><circle cx="12" cy="12" r="2"/></svg>),
    color: "#7c3aed", bg: "rgba(124,58,237,0.09)",
  },
  {
    title: "Address Verification",
    desc: "Electronic residence verification",
    href: "/services/address-verification",
    icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>),
    color: "#059669", bg: "rgba(5,150,105,0.09)",
  },
  {
    title: "PAN & Aadhaar Check",
    desc: "Fraud detection & identity validation",
    href: "/services/pan-aadhaar",
    icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>),
    color: "#d97706", bg: "rgba(217,119,6,0.09)",
  },
  {
    title: "Bank Statement Analyzer",
    desc: "AI income & risk analysis",
    href: "/services/bank-analyzer",
    icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
    color: "#0891b2", bg: "rgba(8,145,178,0.09)",
  },

];

const NAV_LINKS = [
  { label: "About Us",   href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact",   href: "/contact" },
];

const NAV_H = 64;

const Navbar = () => {
  const navRef          = useRef(null);
  const dropdownRef     = useRef(null);
  const dropdownWrapRef = useRef(null);

  const [scrolled,       setScrolled]       = useState(false);
  const [services,       setServices]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [mobileSvc,      setMobileSvc]      = useState(false);
  const [activeLink,     setActiveLink]     = useState(null);
  const location = useLocation();

  useLayoutEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -70, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, ease: "power4.out" }
    );
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (dropdownWrapRef.current && !dropdownWrapRef.current.contains(e.target))
        setServices(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  useEffect(() => {
    const match = NAV_LINKS.find(l => location.pathname.startsWith(l.href));
    setActiveLink(match ? match.label : null);
  }, [location.pathname]);

  useEffect(() => {
    if (!dropdownRef.current || !services) return;
    gsap.fromTo(dropdownRef.current,
      { opacity: 0, y: -8, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.22, ease: "power3.out" }
    );
  }, [services]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Syne:wght@700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        a { text-decoration: none !important; color: inherit; }

        /* ── page offset so content doesn't hide under navbar ── */
        .nav-page-offset { padding-top: ${NAV_H + 20}px; }

        .tnav { position: fixed; top: 0; left: 0; right: 0; z-index: 999; }

        .tnav-wrap {
          background: rgba(255,255,255,0.93);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
border-bottom: none;          transition: box-shadow 0.3s ease, background 0.3s ease;
          position: relative; overflow: visible;
        }
        .tnav.scrolled .tnav-wrap {
          background: rgba(255,255,255,0.98);
          box-shadow: 0 2px 18px rgba(0,0,0,0.07);
        }

        .tnav-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 28px;
          height: ${NAV_H}px;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
        }

        .tnav-logo { display: flex; align-items: center; flex-shrink: 0; }
.tnav-logo img {
  height: 30px; /* bigger logo */
  width: auto;
  display: block;
  opacity: 1;
  filter: contrast(1.3) brightness(0.9);
}

.tnav-logo:hover img {
  opacity: 1;
}        .tnav-logo:hover img { opacity: 0.72; }

        .tnav-links {
          display: flex; align-items: center; gap: 0;
          position: absolute; left: 50%; transform: translateX(-50%);
        }

        .tnav-svc-btn {
          display: flex; align-items: center; gap: 4px; padding: 7px 13px; border-radius: 8px;
          font-family: 'DM Sans', sans-serif; font-size: 13.5px; font-weight: 500;
          color: #4b5563; background: transparent; border: none; cursor: pointer;
          transition: color 0.16s, background 0.16s; white-space: nowrap;
        }
        .tnav-svc-btn:hover, .tnav-svc-btn.open { color: #111827; background: #f3f4f6; }
        .tnav-chev { transition: transform 0.2s ease; opacity: 0.45; }
        .tnav-svc-btn.open .tnav-chev { transform: rotate(180deg); opacity: 0.8; }

        .tnav-lnk {
          padding: 7px 13px; border-radius: 8px;
          font-family: 'DM Sans', sans-serif; font-size: 13.5px; font-weight: 500;
          color: #4b5563; display: block; white-space: nowrap;
          transition: color 0.16s, background 0.16s;
        }
        .tnav-lnk:hover { color: #111827; background: #f3f4f6; }
        .tnav-lnk.active { color: #2563eb; background: rgba(37,99,235,0.07); font-weight: 600; }

        .tnav-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

        /* Book Demo — primary CTA */
        .tnav-demo {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 18px; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-size: 13.5px; font-weight: 700; color: #fff;
          background: linear-gradient(135deg, #2563eb 0%, #4338ca 100%);
          border: none; cursor: pointer; white-space: nowrap; text-decoration: none !important;
          box-shadow: 0 3px 14px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.13);
          transition: transform 0.16s ease, box-shadow 0.16s ease; position: relative; overflow: hidden;
        }
        .tnav-demo::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 55%);
          border-radius: inherit; pointer-events: none;
        }
        .tnav-demo:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(37,99,235,0.42); }
        .tnav-demo:active { transform: none; }

        /* Login — ghost */
        .tnav-login {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 7px 15px; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-size: 13.5px; font-weight: 600; color: #374151;
          background: transparent; border: 1px solid #e2e8f0;
          transition: all 0.16s ease; white-space: nowrap; text-decoration: none !important;
        }
        .tnav-login:hover { background: #f9fafb; border-color: #d1d5db; color: #111827; }

        /* ── DROPDOWN ── */
        .tnav-drop {
          position: absolute; 
         top: 100%;
 /* optional small visual spacing */ left: 50%; transform: translateX(-50%);
          width: 630px; background: #fff;
          border-radius: 18px; border: 1px solid #e5eaf2;
          box-shadow: 0 20px 52px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.05);
          overflow: hidden; z-index: 1000;
        }
        .drop-hdr {
          padding: 13px 20px 11px; border-bottom: 1px solid #f1f5f9;
          display: flex; align-items: center; justify-content: space-between;
        }
        .drop-hdr-lbl {
          font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; color: #9ca3af;
        }
        .drop-hdr-pill {
          font-size: 10px; font-weight: 600; color: #2563eb;
          background: rgba(37,99,235,0.07); border: 1px solid rgba(37,99,235,0.14);
          padding: 2px 8px; border-radius: 999px;
        }
        .drop-grid { display: grid; grid-template-columns: 1fr 1fr; padding: 8px; }
        .svc-item {
          display: flex; align-items: flex-start; gap: 11px;
          padding: 12px 12px; border-radius: 12px; cursor: pointer;
          transition: background 0.16s ease, transform 0.16s ease;
          text-decoration: none !important; color: inherit;
        }
        .svc-item:hover { transform: translateY(-1px); }
        .svc-icon {
          width: 35px; height: 35px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: transform 0.16s ease;
        }
        .svc-item:hover .svc-icon { transform: scale(1.07); }
        .svc-name {
          font-size: 13px; font-weight: 600; color: #111827;
          letter-spacing: -0.01em; margin-bottom: 2px; font-family: 'DM Sans', sans-serif;
        }
        .svc-desc { font-size: 11px; color: #9ca3af; line-height: 1.4; font-family: 'DM Sans', sans-serif; }
        .svc-arr {
          width: 17px; height: 17px; border-radius: 50%; background: rgba(0,0,0,0.04);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; opacity: 0; transform: translateX(-4px);
          transition: all 0.16s ease; align-self: center; margin-left: auto;
        }
        .svc-item:hover .svc-arr { opacity: 1; transform: translateX(0); }
        .drop-ftr {
          padding: 10px 18px; border-top: 1px solid #f1f5f9; background: #fafbff;
        }
        .drop-ftr-txt { font-size: 11px; color: #9ca3af; font-family: 'DM Sans', sans-serif; }

        /* shimmer */
        .tnav-shimmer {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px; pointer-events: none;
          background: linear-gradient(90deg, transparent 0%, transparent 15%, rgba(37,99,235,0.35) 35%, #3b82f6 50%, rgba(37,99,235,0.35) 65%, transparent 85%, transparent 100%);
          animation: nshim 4s ease-in-out infinite;
        }
        @keyframes nshim { 0%,100%{opacity:0.25} 50%{opacity:0.85} }

        /* hamburger */
        .tnav-ham {
          display: none; flex-direction: column; align-items: center; justify-content: center; gap: 5px;
          width: 40px; height: 40px; border: 1px solid #e5e7eb; background: #fff;
          border-radius: 10px; cursor: pointer; transition: all 0.2s ease; flex-shrink: 0;
        }
        .tnav-ham:hover { background: #f9fafb; }
        .tnav-ham span {
          display: block; width: 17px; height: 1.5px; background: #4b5563; border-radius: 2px;
          transition: transform 0.27s ease, opacity 0.27s ease, width 0.27s ease; transform-origin: center;
        }
        .tnav-ham.open { border-color: rgba(37,99,235,0.28); background: rgba(37,99,235,0.05); }
        .tnav-ham.open span { background: #2563eb; }
        .tnav-ham.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .tnav-ham.open span:nth-child(2) { opacity: 0; width: 0; }
        .tnav-ham.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* mobile */
        .tnav-mob {
          display: none; flex-direction: column; gap: 2px;
          max-height: 0; overflow: hidden; opacity: 0;
          transition: max-height 0.36s cubic-bezier(0.22,1,0.36,1), padding 0.26s ease, opacity 0.26s ease;
          border-top: 1px solid transparent;
        }
        .tnav-mob.open { max-height: 640px; padding: 8px 14px 16px; opacity: 1; border-top-color: #f1f5f9; }

        .mob-lnk {
          display: block; padding: 10px 12px; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
          color: #374151; text-decoration: none !important; transition: background 0.16s, color 0.16s;
        }
        .mob-lnk:hover { background: #f3f4f6; color: #111827; }
        .mob-lnk.active { background: rgba(37,99,235,0.07); color: #2563eb; font-weight: 600; }

        .mob-svc-tog {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 12px; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
          color: #374151; cursor: pointer; background: transparent; border: none; width: 100%;
          transition: background 0.16s, color 0.16s;
        }
        .mob-svc-tog:hover { background: #f3f4f6; }
        .mob-svc-tog.open { background: rgba(37,99,235,0.06); color: #2563eb; font-weight: 600; }
        .mob-svc-arr { transition: transform 0.2s ease; }
        .mob-svc-tog.open .mob-svc-arr { transform: rotate(180deg); }

        .mob-svc-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 5px;
          padding: 6px 2px 4px; max-height: 0; overflow: hidden;
          transition: max-height 0.3s ease;
        }
          .tnav-logo-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 800; /* 👈 more bold */
  color: #111827;
}
        .mob-svc-grid.open { max-height: 280px; }
        .mob-svc-itm {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 10px; border-radius: 10px;
          background: #f9fafb; border: 1px solid #f1f5f9;
          text-decoration: none !important; transition: all 0.16s ease;
        }
        .mob-svc-itm:hover { background: #f1f5f9; border-color: #e5e7eb; }
        .mob-svc-ico {
          width: 26px; height: 26px; border-radius: 7px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .mob-svc-lbl { font-size: 10.5px; font-weight: 600; color: #374151; font-family: 'DM Sans', sans-serif; line-height: 1.3; }

        .mob-div { height: 1px; background: #f1f5f9; margin: 5px 0; }

        .mob-demo {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          padding: 12px; border-radius: 12px;
          background: linear-gradient(135deg, #2563eb, #4338ca); color: #fff;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
          border: none; cursor: pointer; box-shadow: 0 4px 14px rgba(37,99,235,0.28);
          text-decoration: none !important;
        }
        .mob-login {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          padding: 10px; border-radius: 12px; margin-top: 4px;
          background: #f3f4f6; color: #374151;
          font-family: 'DM Sans', sans-serif; font-size: 13.5px; font-weight: 600;
          border: 1px solid #e5e7eb; text-decoration: none !important;
          transition: background 0.16s;
        }
        .mob-login:hover { background: #e9eaec; }

        @media (max-width: 900px) { .tnav-links { display: none; } }
        @media (max-width: 768px) {
          .tnav-right { display: none; }
          .tnav-ham { display: flex; }
          .tnav-mob { display: flex; }
        }
      `}</style>

      <nav className={`tnav ${scrolled ? "scrolled" : ""}`} ref={navRef}>
        <div className="tnav-wrap">
          <div className="tnav-inner">

            {/* Logo */}
      <Link to="/" className="tnav-logo">
  <img src={logo} alt="TimbleGlance" />
  <span className="tnav-logo-text">Timble Glance</span>
</Link>

            {/* Center */}
            <div className="tnav-links">
<div
  style={{ position: "relative" }}
  ref={dropdownWrapRef}
  onMouseEnter={() => setServices(true)}
  onMouseLeave={() => setServices(false)}
>                <button
                  className={`tnav-svc-btn ${services ? "open" : ""}`}
                   
                  onClick={() => setServices(v => !v)}
                >
                  Services
                  <svg className="tnav-chev" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>

                {services && (
                  <div
                    className="tnav-drop"
                    ref={dropdownRef}
                    onMouseEnter={() => setServices(true)}
                    onMouseLeave={() => setServices(false)}
                  >
                  
                    <div className="drop-grid">
                      {SERVICES.map((s, i) => {
                        const Tag = s.external ? "a" : Link;
                        const lp  = s.external ? { href: s.href, target: "_blank", rel: "noopener noreferrer" } : { to: s.href };
                        return (
                          <Tag key={i} {...lp} className="svc-item"
                            onClick={() => setServices(false)}
                            onMouseEnter={e => { e.currentTarget.style.background = s.bg; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                          >
                            <div className="svc-icon" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
                            <div>
                              <div className="svc-name">{s.title}</div>
                              <div className="svc-desc">{s.desc}</div>
                            </div>
                            <div className="svc-arr">
                              <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="#6b7280" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </Tag>
                        );
                      })}
                    </div>
                    <div className="drop-ftr">
                      <span className="drop-ftr-txt">Trusted by 100+ Indian banks & NBFCs</span>
                    </div>
                  </div>
                )}
              </div>

              {NAV_LINKS.map(({ label, href }) => (
                <Link key={label} to={href} className={`tnav-lnk ${activeLink === label ? "active" : ""}`}>
                  {label}
                </Link>
              ))}
            </div>

            {/* Right */}
            <div className="tnav-right">
              <Link to="/book-demo" className="tnav-demo">
  Book a Demo
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</Link>
              <a
                href="https://www.timbleglance.com/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="tnav-login"
              >
                Login
              </a>
            </div>

            {/* Hamburger */}
            <button className={`tnav-ham ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
              <span /><span /><span />
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`tnav-mob ${menuOpen ? "open" : ""}`}>
            <button className={`mob-svc-tog ${mobileSvc ? "open" : ""}`} onClick={() => setMobileSvc(v => !v)}>
              Services
              <svg className="mob-svc-arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            <div className={`mob-svc-grid ${mobileSvc ? "open" : ""}`}>
              {SERVICES.map((s, i) => {
                const Tag = s.external ? "a" : Link;
                const lp  = s.external ? { href: s.href, target: "_blank", rel: "noopener noreferrer" } : { to: s.href };
                return (
                  <Tag key={i} {...lp} className="mob-svc-itm" onClick={() => setMenuOpen(false)}>
                    <div className="mob-svc-ico" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
                    <span className="mob-svc-lbl">{s.title}</span>
                  </Tag>
                );
              })}
            </div>

            {NAV_LINKS.map(({ label, href }) => (
              <Link key={label} to={href} className={`mob-lnk ${activeLink === label ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}

            <div className="mob-div" />

          <Link to="/book-demo" className="tnav-demo">
  Book a Demo
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</Link>

            <a
              href="https://www.timbleglance.com/login/"
              target="_blank" rel="noopener noreferrer"
              className="mob-login"
              onClick={() => setMenuOpen(false)}
            >
              Login to Dashboard
            </a>
          </div>

          <div className="tnav-shimmer" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
