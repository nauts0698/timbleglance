import React, { useState, useEffect, useRef } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiMessageSquare,
  FiCheckCircle,
  FiArrowRight,
  FiMapPin,
  FiClock,
  FiShield,
  FiRefreshCw,
} from "react-icons/fi";
import lottie from "lottie-web";
import emailjs from "@emailjs/browser";
import contactAnimation from "../../assets/contact.json";

// ── Validation ────────────────────────────────────────────
const validateField = (name, value) => {
  if (name === "name" && !value.trim()) return "Full name is required";
  if (name === "phone") {
    if (!value) return "Phone number is required";
    if (!/^[0-9]{10}$/.test(value)) return "Enter a valid 10-digit number";
  }
  if (name === "email") {
    if (!value) return "Email address is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
  }
  if (name === "company" && !value.trim()) return "Company name is required";
  if (name === "message" && !value.trim()) return "Please enter your message";
  return "";
};

// ── Daily submission limit (per browser) ───────────────────
const SUBMIT_LIMIT_KEY = "contactFormSubmits";
const SUBMIT_LIMIT_PER_DAY = 2;

const getTodaySubmitCount = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(SUBMIT_LIMIT_KEY) || "{}");
    const today = new Date().toISOString().slice(0, 10);
    return stored.date === today ? stored.count : 0;
  } catch {
    return 0;
  }
};

const recordSubmit = () => {
  const today = new Date().toISOString().slice(0, 10);
  const count = getTodaySubmitCount() + 1;
  localStorage.setItem(SUBMIT_LIMIT_KEY, JSON.stringify({ date: today, count }));
  return count;
};

// ── Simple math captcha ────────────────────────────────────
const generateCaptcha = () => {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { a, b };
};

// ── Info cards shown beside form ──────────────────────────
const infoCards = [
  {
    icon: <FiMail className="w-5 h-5" />,
    label: "Email us",
    value: "contact@timbletech.com",
    link: "mailto:contact@timbletech.com",
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: <FiPhone className="w-5 h-5" />,
    label: "Call us",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
    color: "bg-green-50 text-green-700",
  },
];

// ── Main Component ────────────────────────────────────────
const Contact = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: contactAnimation,
    });
    return () => anim.destroy();
  }, []);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const [submitCount, setSubmitCount] = useState(getTodaySubmitCount);
  const limitReached = submitCount >= SUBMIT_LIMIT_PER_DAY;

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaAnswer("");
    setCaptchaError("");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === "checkbox" ? checked : value;
    if (name === "phone") newValue = value.replace(/\D/g, "").slice(0, 10);

    setForm((prev) => ({ ...prev, [name]: newValue }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, newValue),
      }));
    }
  };
console.log(form)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (getTodaySubmitCount() >= SUBMIT_LIMIT_PER_DAY) {
    setSubmitCount(SUBMIT_LIMIT_PER_DAY);
    return;
  }

  const allTouched = Object.keys(form).reduce(
    (acc, k) => ({ ...acc, [k]: true }),
    {}
  );
  setTouched(allTouched);

  const newErrors = {};
  Object.keys(form).forEach((key) => {
    if (key !== "agree") {
      const err = validateField(key, form[key]);
      if (err) newErrors[key] = err;
    }
  });

  if (!form.agree) newErrors.agree = "You must accept the privacy policy";

  setErrors(newErrors);

  const captchaCorrect = Number(captchaAnswer) === captcha.a + captcha.b;

  if (Object.keys(newErrors).length > 0 || !captchaCorrect) {
    if (!captchaCorrect) {
      setCaptchaError("Incorrect answer, try again");
      setCaptcha(generateCaptcha());
      setCaptchaAnswer("");
    }
    return;
  }

  setCaptchaError("");

  setSubmitting(true);

  try {
    await emailjs.send(
      "service_jd4k3as",        // your service ID
      "template_odtyjog",       // your template ID
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        company: form.company,
        message: form.message,
      },
      "dAQTp0izROTKQe3hK"       // your public key
    );

    setSubmitCount(recordSubmit());
    setSuccess(true);
    setForm({
      name: "",
      phone: "",
      email: "",
      company: "",
      message: "",
      agree: false,
    });
    setTouched({});
    refreshCaptcha();
  } catch (error) {
    console.error("Email error:", error);
    alert("Failed to send message. Try again.");
    refreshCaptcha();
  }

  setSubmitting(false);
};

  if (success) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-5">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
            <FiCheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Message sent!
          </h2>
          <p className="text-gray-500 mb-7 text-sm leading-relaxed">
            Thank you for reaching out. Our team will get back to you within
            1–2 business days.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ───────────── HERO ───────────── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-14 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
            Get in touch
          </span>

          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
            Let's Connect &amp;<br />
            Build Something{" "}
            <span className="text-blue-700">Secure</span>
          </h1>

          <p className="text-gray-500 text-base leading-relaxed max-w-md mb-8">
            Have questions, need a demo, or want to explore our solutions?
            Our team is here to help you move forward with confidence.
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {infoCards.map((card) => (
             <a
  key={card.label}
  href={card.link}
  className="flex items-start gap-3 bg-gray-50 rounded-xl p-3.5 hover:bg-gray-100 transition cursor-pointer"
>
  <div
    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${card.color}`}
  >
    {card.icon}
  </div>

  <div>
    <p className="text-xs text-gray-400 mb-0.5">{card.label}</p>
    <p className="text-sm font-medium text-gray-800 break-all">
      {card.value}
    </p>
  </div>
</a>
            ))}
          </div>
        </div>

        {/* Lottie */}
        <div className="w-full max-w-md ml-auto">
          <div ref={lottieRef} className="w-full h-[340px]" />
        </div>
      </section>

      {/* ───────────── FORM SECTION ───────────── */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          {/* Section header */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              Send us a message
            </h2>
            <p className="text-sm text-gray-400">
              Fill in the form below and we'll get back to you shortly.
            </p>
          </div>

          {limitReached && (
            <div className="mb-6 flex items-center gap-2.5 bg-amber-50 border border-amber-200 text-amber-800 text-sm rounded-xl px-4 py-3">
              <FiShield className="w-4 h-4 flex-shrink-0" />
              You've reached the limit of {SUBMIT_LIMIT_PER_DAY} messages per day. Please try again tomorrow.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 space-y-6">

              {/* Row 1 — Name & Phone */}
              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  icon={<FiUser />}
                  label="Full name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && errors.name}
                />
                <Field
                  icon={<FiPhone />}
                  label="Mobile number"
                  name="phone"
                  type="tel"
                  placeholder="10-digit number"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && errors.phone}
                />
              </div>

              {/* Row 2 — Email & Company */}
              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  icon={<FiMail />}
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                />
                <Field
                  icon={<FiBriefcase />}
                  label="Company name"
                  name="company"
                  type="text"
                  placeholder="Acme Inc."
                  value={form.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.company && errors.company}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Message
                </label>
                <div
                  className={`flex items-start gap-3 bg-gray-50 border rounded-xl px-4 py-3 transition-colors focus-within:border-blue-400 focus-within:bg-white ${
                    touched.message && errors.message
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200"
                  }`}
                >
                  <FiMessageSquare className="text-gray-400 mt-0.5 flex-shrink-0 w-4 h-4" />
                  <textarea
                    name="message"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                    className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 resize-none"
                  />
                </div>
                {touched.message && errors.message && (
                  <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>
                )}
              </div>

              {/* Captcha */}
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Quick check
                </label>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center gap-3 bg-gray-50 border rounded-xl px-4 py-2.5 transition-colors focus-within:border-blue-400 focus-within:bg-white ${
                      captchaError ? "border-red-300 bg-red-50" : "border-gray-200"
                    }`}
                  >
                    <FiShield className="text-gray-400 flex-shrink-0 w-4 h-4" />
                    <span className="text-sm text-gray-700 whitespace-nowrap select-none">
                      {captcha.a} + {captcha.b} =
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={captchaAnswer}
                      onChange={(e) => {
                        setCaptchaAnswer(e.target.value.replace(/\D/g, "").slice(0, 3));
                        if (captchaError) setCaptchaError("");
                      }}
                      placeholder="?"
                      className="w-14 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    title="Get a new question"
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition"
                  >
                    <FiRefreshCw className="w-4 h-4" />
                  </button>
                </div>
                {captchaError && (
                  <p className="text-red-500 text-xs mt-1.5">{captchaError}</p>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100" />

              {/* Privacy + Submit */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        name="agree"
                        checked={form.agree}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                          form.agree
                            ? "bg-blue-700 border-blue-700"
                            : "border-gray-300"
                        }`}
                      >
                        {form.agree && (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      I agree to the{" "}
                      <span className=" underline-offset-2 cursor-pointer">
                        Privacy Policy
                      </span>{" "}
                      and{" "}
                      <span className=" underline-offset-2 cursor-pointer">
                        Terms of Service
                      </span>
                    </span>
                  </label>
                  {errors.agree && (
                    <p className="text-red-500 text-xs mt-1.5 ml-6">
                      {errors.agree}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting || limitReached}
                  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-150 active:scale-95 whitespace-nowrap"
                >
                  {submitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : limitReached ? (
                    "Daily limit reached"
                  ) : (
                    <>
                      Send message
                      <FiArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </div>
          </form>
        </div>
      </section>

    </div>
  );
};

// ── Field Component ───────────────────────────────────────
const Field = ({ icon, label, error, ...props }) => (
  <div>
    <label className="block text-xs font-medium text-gray-500 mb-1.5">
      {label}
    </label>
    <div
      className={`flex items-center gap-3 bg-gray-50 border rounded-xl px-4 py-2.5 transition-colors focus-within:border-blue-400 focus-within:bg-white ${
        error ? "border-red-300 bg-red-50" : "border-gray-200"
      }`}
    >
      <span className="text-gray-400 flex-shrink-0 w-4 h-4">{icon}</span>
      <input
        {...props}
        className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1.5">{error}</p>}
  </div>
);

export default Contact;