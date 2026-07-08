import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t relative overflow-hidden 
    bg-gradient-to-b from-white via-blue-50 to-blue-100">

      {/* 🔵 Soft Pattern + Blend */}
      <div className="absolute inset-0 pointer-events-none">

        {/* subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.15]
        [background-image:linear-gradient(to_right,rgba(59,130,246,0.15)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(59,130,246,0.15)_1px,transparent_1px)]
        [background-size:40px_40px]"></div>

        {/* radial soft glow */}
        <div className="absolute top-[-100px] left-1/2 w-[600px] h-[400px] 
        bg-blue-200 opacity-30 blur-3xl -translate-x-1/2 rounded-full"></div>

      </div>

<div className="relative max-w-6xl mx-auto px-6 pt-14 pb-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">

          {/* Company */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              TimbleGlance
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              Timble Technologies Private Limited <br />
              Suite No.2, 2nd Floor, Near Arjan Garh <br />
              Metro Station Pillar Number 181 <br />
              Aya Nagar, New Delhi 110047 <br />
              India
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">
              Contact Us
            </h4>

            <div className="space-y-3 text-sm text-gray-600">
              <a
                href="tel:+918373950553"
                className="flex items-center gap-2 justify-center md:justify-start hover:text-blue-600 transition"
              >
                <FiPhone />
                08373950553
              </a>

              <a
                href="mailto:contact@timbletech.com"
                className="flex items-center gap-2 justify-center md:justify-start hover:text-blue-600 transition"
              >
                <FiMail />
                contact@timbletech.com
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">
              Solutions
            </h4>

            <ul className="space-y-2 text-sm text-gray-600">

              <li>
                <Link to="/services/alternate-data" className="hover:text-blue-600 transition">
                  Alternate Data Services
                </Link>
              </li>

              <li>
                <Link to="/services/facial-recognition" className="hover:text-blue-600 transition">
                  AI Facial Recognition
                </Link>
              </li>

              <li>
                <Link to="/services/address-verification" className="hover:text-blue-600 transition">
                  Electronic Address Verification
                </Link>
              </li>

              <li>
                <Link to="/services/pan-aadhaar" className="hover:text-blue-600 transition">
                  PAN & Aadhaar Fraud Check
                </Link>
              </li>

              <li>
                <Link to="/services/bank-analyzer" className="hover:text-blue-600 transition">
                  Bank Statement Analyzer
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">
              Find us on
            </h4>

            <div className="flex gap-3 justify-center md:justify-start">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/TimbleGlance/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 bg-white/80 backdrop-blur border rounded-lg flex items-center justify-center 
                text-[#1877F2] hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 shadow-sm"
              >
                <FaFacebookF
                  size={14}
                  className="text-[#1877F2] group-hover:text-white transition-all duration-300"
                />
              </a>

              {/* X */}
              <a
                href="https://x.com/TimbleGlance"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 bg-white/80 backdrop-blur border rounded-lg flex items-center justify-center 
                text-black hover:bg-black hover:border-black transition-all duration-300 shadow-sm"
              >
                <FaXTwitter
                  size={14}
                  className="text-black group-hover:text-white transition-all duration-300"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://in.linkedin.com/company/timbleglance"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 bg-white/80 backdrop-blur border rounded-lg flex items-center justify-center 
                text-[#0A66C2] hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 shadow-sm"
              >
                <FaLinkedinIn
                  size={14}
                  className="text-[#0A66C2] group-hover:text-white transition-all duration-300"
                />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-blue-100 mt-10 pt-4 text-sm text-gray-500 text-center">
          © 2026 Timble Technologies Private Limited. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;