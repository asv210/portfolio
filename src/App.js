import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Achievements from "./Components/Achievements";
import Contactme from "./Components/Contactme";
import ProjectItem from "./Components/ProjectItem";
import Project from "./Components/Project";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/ProjectItem" element={<ProjectItem />} />
          <Route exact path="/Project" element={<Project />} />
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/Aboutme" element={<Aboutme></Aboutme>} />
          <Route exact path="/Skills" element={<Skills></Skills>} />
          <Route
            exact
            path="/Achievements"
            element={<Achievements></Achievements>}
          />
          <Route exact path="/Contactme" element={<Contactme></Contactme>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
