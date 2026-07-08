import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/Scrolltop"; // 👈 ADD THIS

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BookDemoPage from "./Components/BookDemo/BookDemo";
import Home from "./Components/pages/Home";
import About from "./Components/About/About";
import Resources from "./Components/Resources/Resources";
import Contact from "./Components/Contact/Contact";

import AlternateDataServices from "./Components/Services/AlternateDate";
import FaceRecognition from "./Components/Services/FaceRecognition";
import AddressVerification from "./Components/Services/AddressVerification";
import PanAdharCheck from "./Components/Services/PanAdharCheck";
import BankStatementAnaly from "./Components/Services/BankStatementAnaly";

/* BLOG PAGES */
import RevolutionizingIdentityVerification from "./Components/Resources/RevolutionizingIdentityVerification";
import GdprComplianceDigitalIdentity from "./Components/Resources/GdprComplianceDigitalIdentity";
import PreventIdentityFraud2025 from "./Components/Resources/PreventIdentityFraud2025";
import GdprComplianceIdentity from "./Components/Resources/GdprComplianceIdentity";
import FaceMatchTechnology from "./Components/Resources/FaceMatchTechnology";
import DocumentIntelligence from "./Components/Resources/DocumentIntelligence";
import AlternateDataKyc from "./Components/Resources/AlternateDataKyc";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 THIS IS THE FIX */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />

        {/* SERVICES */}
        <Route path="/services/alternate-data" element={<AlternateDataServices />} />
        <Route path="/services/facial-recognition" element={<FaceRecognition />} />
        <Route path="/services/address-verification" element={<AddressVerification />} />
        <Route path="/services/pan-aadhaar" element={<PanAdharCheck />} />
        <Route path="/services/bank-analyzer" element={<BankStatementAnaly />} />
          <Route path="/book-demo" element={<BookDemoPage />} />


        {/* BLOG ROUTES */}
        <Route path="/resources/revolutionizing-identity-verification" element={<RevolutionizingIdentityVerification />} />
        <Route path="/resources/gdpr-compliance-digital-identity" element={<GdprComplianceDigitalIdentity />} />
        <Route path="/resources/prevent-identity-fraud-2025" element={<PreventIdentityFraud2025 />} />
        <Route path="/resources/kyc-best-practices-lending-industry" element={<GdprComplianceIdentity />} />
        <Route path="/resources/face-match-technology" element={<FaceMatchTechnology />} />
        <Route path="/resources/document-intelligence" element={<DocumentIntelligence />} />
        <Route path="/resources/alternate-data-kyc" element={<AlternateDataKyc />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;