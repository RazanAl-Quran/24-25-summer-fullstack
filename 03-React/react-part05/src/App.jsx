import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Profile from "./Components/Profile";
import NotFound from "./Components/NotFound";
import UserForm from "./Components/UserForm";

function App() {

  return (
    <>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>🔀 React Router Demo</h1>
      </div>
      <Router>
        {/* Navigation Links */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
          <Link to="/profile/Razan" style={{ margin: "0 10px" }}>My Profile</Link>
          <Link to="/form" style={{ margin: "0 10px" }}>Form</Link>

        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="*" element={<NotFound />} /> 404 Route
        </Routes>
      </Router>


      <p>footer</p>
    </>
  )
}

export default App
