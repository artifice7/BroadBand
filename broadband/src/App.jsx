import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import Home from "./Home/Home";
import About from "./pages/about";
import Inquiry from "./pages/Inquiry";
import PlansPage from "./pages/planspage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/plans" element={<PlansPage />} />
        </Routes>
      </Router>
      <Analytics />
    </div>
  );
}

export default App;
