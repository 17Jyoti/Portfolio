import React from "react";

import "./index.css";
import Login from "./routes/Login";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Education from "./routes/Education";
import {Route,Routes} from "react-router-dom";


function App() {
  return (
<>
<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/project" element={<Project />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/education" element={<Education />} />
</Routes>
</>
  );
}

export default App;