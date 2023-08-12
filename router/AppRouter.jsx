import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import PublicNavbar from "../components/PublicNavbar";


import Me from "../pages/Me";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Principal from "../pages/Principal";
import Projects from "../pages/Projects";

const AppRouter = () => {

  return (
    <Router>
      <PublicNavbar />
      <div className="container pt-5">
        <Routes>
          <Route path="/" element={<Principal/>} />
          <Route path="/Me" element={<Me />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />



          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;