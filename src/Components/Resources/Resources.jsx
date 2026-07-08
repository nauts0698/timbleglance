import React from "react";
import { Link } from "react-router-dom";

// ── Images ──────────────────────────────────────────────
import img1 from "../../assets/img.png";
import img2 from "../../assets/gdpr.png";
import img3 from "../../assets/fraud.png";
import img4 from "../../assets/gdpr.png";
import img5 from "../../assets/face.png";
import img6 from "../../assets/DI.png";
import img7 from "../../assets/kyc.png";

// ── Data ─────────────────────────────────────────────────
const stats = [
  { label: "Articles", value: "24+", sub: "Published" },
  { label: "Topics", value: "6", sub: "Categories" },
  { label: "Updated", value: "2025", sub: "Current" },
];

const blogs = [
  {
    slug: "revolutionizing-identity-verification",
    title: "How AI is Revolutionizing Identity Verification in the Digital Age",
    date: "Jan 21, 2026",
      catColor: "text-blue-700 bg-blue-100",
    image: img1,
  },
  {
    slug: "gdpr-compliance-digital-identity",
    title: "The Importance of GDPR Compliance in Digital Identity Verification",
    date: "Dec 30, 2025",
     catColor: "text-green-700 bg-green-100",
    image: img2,
  },
  {
    slug: "prevent-identity-fraud-2025",
    title: "Top 10 Tips for Businesses to Prevent Identity Fraud in 2025",
    date: "Dec 30, 2025",
     catColor: "text-amber-700 bg-amber-100",
    image: img3,
  },
  {
    slug: "kyc-best-practices-lending-industry",
    title: "KYC Best Practices for the Lending Industry",
    date: "Jan 23, 2026",
     catColor: "text-pink-700 bg-pink-100",
    image: img4,
  },
  {
    slug: "face-match-technology",
    title: "How Face Match Technology Works: The Power of AI in Identity Verification",
    date: "Dec 19, 2025",
     catColor: "text-blue-700 bg-blue-100",
    image: img5,
  },
  {
    slug: "document-intelligence",
    title: "Understanding Document Intelligence: A Powerful Tool for Fraud Detection",
    date: "Dec 18, 2025",
     catColor: "text-amber-700 bg-amber-100",
    image: img6,
  },
  {
    slug: "alternate-data-kyc",
    title: "Top 5 Benefits of Using Alternate Data Services for KYC in 2024",
    date: "Sep 24, 2025",
     catColor: "text-pink-700 bg-pink-100",
    image: img7,
  },
];

const featuredStrips = [
  {
    title: "AI in Identity Verification",
    sub: "Most read this month",
    tag: "Trending",
    tagColor: "bg-green-100 text-green-700",
    iconBg: "bg-blue-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#185FA5" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "KYC & GDPR Compliance",
    sub: "Industry guides",
    tag: "New",
    tagColor: "bg-blue-100 text-blue-700",
    iconBg: "bg-pink-50",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#993556" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const categories = ["All", "AI", "Compliance", "Fraud", "KYC"];

// ── Component ─────────────────────────────────────────────
const Resources = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.cat === activeCategory);

  return (
    <div className="bg-white min-h-screen">

      {/* ───────────── HERO ───────────── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-14 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
            Knowledge Hub
          </span>

         <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
  Resources, Guides &amp;<br />
  <span className="text-blue-700">Industry Insights</span>
</h1>

          <p className="text-gray-500 text-base leading-relaxed max-w-md mb-8">
            Expert insights, industry trends, and practical guides on fraud
            prevention, identity verification, and data intelligence.
          </p>

          
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-1">{s.label}</p>
                <p className="text-xl font-semibold text-gray-900">{s.value}</p>
                <p className="text-xs text-emerald-600 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
          {featuredStrips.map((f) => (
            <div key={f.title} className="bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-3">
              <div className={`w-9 h-9 rounded-lg ${f.iconBg} flex items-center justify-center flex-shrink-0`}>
                {f.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{f.title}</p>
                <p className="text-xs text-gray-400">{f.sub}</p>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${f.tagColor}`}>
                {f.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── FILTER BAR ───────────── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mb-8">
        <div className="flex items-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all duration-150 ${
                activeCategory === cat
                  ? "bg-blue-700 text-white border-blue-700"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
          <div className="hidden sm:block flex-1 h-px bg-gray-100 ml-2" />
          <span className="text-xs text-gray-400 whitespace-nowrap">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* ───────────── BLOG GRID ───────────── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-sm">
            No articles in this category yet.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((blog, index) => (
              <Link
                key={blog.slug}
                to={`/resources/${blog.slug}`}
className="bg-white border border-gray-100 rounded-2xl overflow-hidden 
flex flex-col"              >
                {/* ── Image ── */}
<div className="relative overflow-hidden h-52 bg-gray-100 flex-shrink-0">                   <img
                    src={blog.image}
                    alt={blog.title}
className="w-full h-full object-contain object-top"                  />
                  {/* Dark gradient overlay at bottom for text legibility */}

                  {/* Category badge floated on image */}
                  <span
                    className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${blog.catColor}`}
                  >
                    {blog.cat}
                  </span>

                  {/* Read time badge floated on image */}
                  <span className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full bg-black/30 text-white backdrop-blur-sm">
                    {blog.readTime}
                  </span>
                </div>

                {/* ── Body ── */}
                <div className="p-5 flex flex-col">
                  {/* Date */}
                  <p className="text-xs text-gray-400 mb-2">{blog.date}</p>

                  {/* Title */}
<h3 className="text-sm font-semibold text-gray-900 leading-snug mb-4 break-words ">                  </h3>

                  {/* Footer */} 
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                    <span className="text-sm font-medium text-blue-700 flex items-center gap-1">
                      Read more
                      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                        →
                      </span>
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#185FA5" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-400">Timble Glance</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

    

    </div>
  );
};

export default Resources;