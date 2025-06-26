import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./Home/Home";
import About from "./Pages/About";
import Inquiry from "./Pages/Inquiry";
import PlansPage from "./Pages/PlansPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
      <Analytics />
    </div>
  );
}

export default App;
